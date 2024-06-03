"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"testcontainers-during-development","metadata":{"permalink":"/blog/testcontainers-during-development","editUrl":"https://github.com/sonallux/sonallux.github.io/tree/main/blog/2023-06-13-testcontainers-during-development.md","source":"@site/blog/2023-06-13-testcontainers-during-development.md","title":"Using Testcontainers during development","description":"Testcontainers is a great technology for setting up a test environment using container technology. With the latest Spring Boot 3.1 release it is also possible to use Testcontainers during development, for example when you run your application locally. In this post I will show you how to set this up.","date":"2023-06-13T00:00:00.000Z","tags":[{"inline":true,"label":"testcontainers","permalink":"/blog/tags/testcontainers"},{"inline":true,"label":"spring-boot","permalink":"/blog/tags/spring-boot"}],"readingTime":3.055,"hasTruncateMarker":true,"authors":[{"name":"Jonas","title":"Fullstack Software Engineer","url":"https://github.com/sonallux","imageURL":"https://github.com/sonallux.png","key":"sonallux"}],"frontMatter":{"slug":"testcontainers-during-development","title":"Using Testcontainers during development","authors":"sonallux","tags":["testcontainers","spring-boot"]},"unlisted":false,"nextItem":{"title":"Oh My Posh - A prompt theme engine for any shell","permalink":"/blog/oh-my-posh"}},"content":"[Testcontainers](https://testcontainers.com) is a great technology for setting up a test environment using container technology. With the latest Spring Boot 3.1 release it is also possible to use Testcontainers during development, for example when you run your application locally. In this post I will show you how to set this up.\\n\\n\x3c!--truncate--\x3e\\n\\n## Adding dependencies\\n\\nFirst you need to add these depenencies to your Spring Boot 3.1 application to integrate Testcontainers with Spring Boot.\\n\\n```xml\\n<dependency>\\n    <groupId>org.springframework.boot</groupId>\\n    <artifactId>spring-boot-testcontainers</artifactId>\\n    <scope>test</scope>\\n</dependency>\\n<dependency>\\n    <groupId>org.testcontainers</groupId>\\n    <artifactId>junit-jupiter</artifactId>\\n    <scope>test</scope>\\n</dependency>\\n```\\n\\nDepending on your use case you also need to install the corresponding dependency for the [Testcontainers modules](https://testcontainers.com/modules) you want to use. In my case I am using a PostgreSQL Database:\\n\\n```xml\\n<dependency>\\n    <groupId>org.testcontainers</groupId>\\n    <artifactId>postgresql</artifactId>\\n    <scope>test</scope>\\n</dependency>\\n```\\n\\n## Configuring the containers\\n\\nNext we need to configure the containers that we want to start during our tests and during development. For this we create a `ContainersConfiguration` class under `src/test/java/<your-package-name>` and annotated it with `@TestConfiguration(proxyBeanMethods = false)`. Then we can either register a bean for each container or use the `@ImportTestcontainers` annotation.\\n\\nWhen using the first option add normal bean definition to the `ContainersConfiguration` class:\\n\\n```java\\nimport org.springframework.boot.test.context.TestConfiguration;\\nimport org.springframework.boot.testcontainers.service.connection.ServiceConnection;\\nimport org.springframework.context.annotation.Bean;\\nimport org.testcontainers.containers.PostgreSQLContainer;\\n\\n@TestConfiguration(proxyBeanMethods = false)\\npublic class ContainersConfiguration {\\n\\n    @Bean\\n    @ServiceConnection\\n    public PostgreSQLContainer<?> postgreSQLContainer() {\\n        return new PostgreSQLContainer<>(\\"postgres:12.15-alpine\\");\\n    }\\n}\\n```\\n\\nFor the second option you define your containers with a `@Container` annotated variables inside a class or interface, like you would do it for a normal Testcontainers test using JUnit:\\n\\n```java\\nimport org.springframework.boot.test.context.TestConfiguration;\\nimport org.springframework.boot.testcontainers.context.ImportTestcontainers;\\nimport org.springframework.boot.testcontainers.service.connection.ServiceConnection;\\nimport org.testcontainers.containers.PostgreSQLContainer;\\nimport org.testcontainers.junit.jupiter.Container;\\n\\n@TestConfiguration(proxyBeanMethods = false)\\n@ImportTestcontainers(ContainersConfiguration.Containers.class)\\npublic class ContainersConfiguration {\\n    public interface Containers {\\n        @Container\\n        @ServiceConnection\\n        PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>(\\"postgres:12.15-alpine\\");\\n    }\\n}\\n```\\n\\nIn both cases Spring Boot will detect the container definition and manage their lifecycle. The containers will be started and stopped automatically. Also note the `@ServiceConnection` annotation which tells Spring Boot to automatically configure the connection to this container. In my case a `DataSource` with a connection to the PostgreSQL database running in the container will be configured automatically. Have a look at [the documentation](https://docs.spring.io/spring-boot/docs/3.1.0/reference/html/features.html#features.testing.testcontainers.service-connections) for a list of supported service connections.\\n\\nWhich option you prefer is up to you as both lead to the same end result. I am currently using the second.\\n\\n## Running tests\\n\\nWith the configuration in please we can start to use the containers in tests. To enable the testcontainers intergration for a specific test class just add the `@Import(ContainersConfiguration.class)` annotation to the class and the container configuration will be picked up by spring boot. In my setup it is by design that by default Testcontaners are not started for tests, because they do have an performance impact on test execution time. I decided it is best to explicitly enable it by adding the `@Import(ContainersConfiguration)` to the test, which need a PostgreSQL Database.\\n\\n## Testcontainers at development time\\n\\nFinally it is time to also use the configured containers during development time. For this you must launch your application with the `test` classpath, so the dependencies are available. To create a launchable version using the test classpath create an `DevApplication` class in your `src/test/java/<package-name>` directory. The real Application can be launched using the `SpringApplication.from(...)` method and the Testcontainers configuration can be added to the `DevApplication` using the `.with()` method.\\n\\n```java\\nimport org.springframework.boot.SpringApplication;\\n\\npublic class DevApplication {\\n    public static void main(String[] args) {\\n        SpringApplication.from(MyApplication::main).with(ContainersConfiguration.class).run(args);\\n    }\\n}\\n```\\n\\nNow just execute the `main` method of the `DevApplication` to start you app and the containers. You can also use the Maven goal `spring-boot:test-run` or Gradle task `bootTestRun` to do this from the command line.\\n\\nYou can find more information about the Testcontainers integration with Spring Boot in the [official reference documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.testcontainers)."},{"id":"oh-my-posh","metadata":{"permalink":"/blog/oh-my-posh","editUrl":"https://github.com/sonallux/sonallux.github.io/tree/main/blog/2023-05-04-oh-my-posh/index.md","source":"@site/blog/2023-05-04-oh-my-posh/index.md","title":"Oh My Posh - A prompt theme engine for any shell","description":"If you are a Windows user and you use Powershell und WSL, then I can recommend Oh My Posh.","date":"2023-05-04T00:00:00.000Z","tags":[{"inline":true,"label":"oh-my-posh","permalink":"/blog/tags/oh-my-posh"},{"inline":true,"label":"shell","permalink":"/blog/tags/shell"}],"readingTime":0.81,"hasTruncateMarker":true,"authors":[{"name":"Jonas","title":"Fullstack Software Engineer","url":"https://github.com/sonallux","imageURL":"https://github.com/sonallux.png","key":"sonallux"}],"frontMatter":{"slug":"oh-my-posh","title":"Oh My Posh - A prompt theme engine for any shell","authors":"sonallux","tags":["oh-my-posh","shell"]},"unlisted":false,"prevItem":{"title":"Using Testcontainers during development","permalink":"/blog/testcontainers-during-development"},"nextItem":{"title":"Hello World","permalink":"/blog/hello-world"}},"content":"If you are a Windows user and you use Powershell und WSL, then I can recommend [Oh My Posh](https://ohmyposh.dev).\\n\\n\x3c!--truncate--\x3e\\n\\n## What is \\"Oh My Posh\\"?\\n\\n[Oh My Posh](https://ohmyposh.dev) is a prompt theme engine written in Go. It supports most of the popular shells (Bash, Powershell, zsh, Fish, ...) and works cross platform on Windows, Linux and MacOS. Think of it like oh-my-zsh, but for all shells and platforms. Define your theme once and use it on any shell and any platform.\\n\\n## Why do I use it?\\n\\nBecause I am using Powershell on Windows and Bash on Linux I hat two completely different setups before knowing about Oh My Posh. With Powershell I used [posh-git](https://github.com/dahlbyk/posh-git) and with Bash I used [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt). This setup worked, but it was tidious to maintain and update.\\n\\nAfter I found Oh My Posh my setup is much simplier. I have defined [my own custom theme](https://github.com/sonallux/oh-my-posh-theme) once and can reuse it everywhere.\\n\\n![sonallux Oh My Posh theme](./oh-my-posh-theme.png)"},{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","editUrl":"https://github.com/sonallux/sonallux.github.io/tree/main/blog/2022-12-03-hello-world.md","source":"@site/blog/2022-12-03-hello-world.md","title":"Hello World","description":"I welcome everyone on my personal blog. I am a Fullstack Software Engineer, so the posts will be mainly about Software Development and related topics.","date":"2022-12-03T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.38,"hasTruncateMarker":false,"authors":[{"name":"Jonas","title":"Fullstack Software Engineer","url":"https://github.com/sonallux","imageURL":"https://github.com/sonallux.png","key":"sonallux"}],"frontMatter":{"slug":"hello-world","title":"Hello World","authors":"sonallux","tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Oh My Posh - A prompt theme engine for any shell","permalink":"/blog/oh-my-posh"}},"content":"I welcome everyone on my personal blog. I am a Fullstack Software Engineer, so the posts will be mainly about Software Development and related topics.\\n\\nWhen there is no new blog post in the mean time, also have a look at [my Wiki](/docs/intro). It contains things that I often look up and notes about certain technologies and everything else that does not fit in a blog post. See it like a wikipedia for Fullstack Software Engineers."}]}}')}}]);