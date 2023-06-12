---
slug: testcontainers-during-development
title: Using Testcontainers during development
authors: sonallux
tags: [testcontainers, spring-boot]
---

[Testcontainers](https://testcontainers.com) is a great technology for setting up a test environment using container technology. With the latest Spring Boot 3.1 release it is also possible to use Testcontainers during development, for example when you run your application locally. In this post I will show you how to set this up.

<!--truncate-->

## Adding dependencies

First you need to add these depenencies to your Spring Boot 3.1 application to integrate Testcontainers with Spring Boot.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-testcontainers</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
</dependency>
```

Depending on your use case you also need to install the corresponding dependency for the [Testcontainers modules](https://testcontainers.com/modules) you want to use. In my case I am using a PostgreSQL Database:

```xml
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <scope>test</scope>
</dependency>
```

## Configuring the containers

Next we need to configure the containers that we want to start during our tests and during development. For this we create a `ContainersConfiguration` class under `src/test/java/<your-package-name>` and annotated it with `@TestConfiguration(proxyBeanMethods = false)`. Then we can either register a bean for each container or use the `@ImportTestcontainers` annotation.

When using the first option add normal bean definition to the `ContainersConfiguration` class:

```java
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.containers.PostgreSQLContainer;

@TestConfiguration(proxyBeanMethods = false)
public class ContainersConfiguration {

    @Bean
    @ServiceConnection
    public PostgreSQLContainer<?> postgreSQLContainer() {
        return new PostgreSQLContainer<>("postgres:12.15-alpine");
    }
}
```

For the second option you define your containers with a `@Container` annotated variables inside a class or interface, like you would do it for a normal Testcontainers test using JUnit:

```java
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.context.ImportTestcontainers;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;

@TestConfiguration(proxyBeanMethods = false)
@ImportTestcontainers(ContainersConfiguration.Containers.class)
public class ContainersConfiguration {
    public interface Containers {
        @Container
        @ServiceConnection
        PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:12.15-alpine");
    }
}
```

In both cases Spring Boot will detect the container definition and manage their lifecycle. The containers will be started and stopped automatically. Also note the `@ServiceConnection` annotation which tells Spring Boot to automatically configure the connection to this container. In my case a `DataSource` with a connection to the PostgreSQL database running in the container will be configured automatically. Have a look at [the documentation](https://docs.spring.io/spring-boot/docs/3.1.0/reference/html/features.html#features.testing.testcontainers.service-connections) for a list of supported service connections.

Which option you prefer is up to you as both lead to the same end result. I am currently using the second.

## Running tests

With the configuration in please we can start to use the containers in tests. To enable the testcontainers intergration for a specific test class just add the `@Import(ContainersConfiguration.class)` annotation to the class and the container configuration will be picked up by spring boot. In my setup it is by design that by default Testcontaners are not started for tests, because they do have an performance impact on test execution time. I decided it is best to explicitly enable it by adding the `@Import(ContainersConfiguration)` to the test, which need a PostgreSQL Database.

## Testcontainers at development time

Finally it is time to also use the configured containers during development time. For this you must launch your application with the `test` classpath, so the dependencies are available. To create a launchable version using the test classpath create an `DevApplication` class in your `src/test/java/<package-name>` directory. The real Application can be launched using the `SpringApplication.from(...)` method and the Testcontainers configuration can be added to the `DevApplication` using the `.with()` method.

```java
import org.springframework.boot.SpringApplication;

public class DevApplication {
    public static void main(String[] args) {
        SpringApplication.from(MyApplication::main).with(ContainersConfiguration.class).run(args);
    }
}
```

Now just execute the `main` method of the `DevApplication` to start you app and the containers. You can also use the Maven goal `spring-boot:test-run` or Gradle task `bootTestRun` to do this from the command line.

You can find more information about the Testcontainers integration with Spring Boot in the [official reference documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.testcontainers).
