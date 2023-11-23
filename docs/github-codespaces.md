---
tags: [development,ide]
---

# GitHub Codespaces

With GitHub Codespaces you can run your development environment fully managed in the cloud.

## Development Containers (dev containers)

[Development Containers](https://containers.dev/) is an open specification for enriching containers with development specific content and settings. It is used by GitHub Codespaces to define the development environment. By default dev containes are configured by a `.devcontainer.json` file in a `.devcontainer` folder. An Example `.devcontainer.json` file:

```json
{
  "name": "Node.js",
  "image": "mcr.microsoft.com/devcontainers/base:debian",
  
  "features": {
    "ghcr.io/devcontainers/features/node:1": {"version": "18"}
  },
  
  "forwardPorts": [3000], 
  "postCreateCommand": "npm install"
}
```

Important properties:
- `name`: display name
- `image` optional: The base image to build the dev container from. If omitted a default image will be used. Github Codesapces uses the [universal](https://github.com/devcontainers/images/tree/main/src/universal) image. All available images can be found in the [devcontainers/images](https://github.com/devcontainers/images/tree/main/src) repo.
- `features`: dev containers can be enhanced with features, like tools, runtimes, or libraries. All available features can be browsed on the [containers.dev/features](https://containers.dev/features) or in the [devcontainers/features](https://github.com/devcontainers/features/tree/main/src) repo
- `forwardPorts`: make a list of ports inside the container available locally
- `postCreateCommand`: run commands after the container is created

Other Ressources:
- Templates can be found on [containers.dev/templates](https://containers.dev/templates) or in the [devcontainers/templates](https://github.com/devcontainers/templates/tree/main/src) repo.
- [GitHub Docs: Introduction to dev containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
- [GitHub Docs: Add a dev container configuration to your repository](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)
- [GitHub Docs: Adding features to a devcontainer.json file](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file)

## GitHub Codespaces with JetBrains IDEs

As announced in [this blog post](https://github.blog/changelog/2022-11-09-github-codespaces-with-jetbrains-ides-public-beta/) GitHub now supports the use of GitHub Codespaces with JetBrains IDEs via the [JetBrains Gateway](https://www.jetbrains.com/remote-development/gateway/).

Setup instructions (mainly taken from the [Github Docs](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)):

- Install [JetBrains Gateway](https://www.jetbrains.com/remote-development/gateway/)
- Start JetBrains Gateway and select `GitHub Codespaces`
- Follow the instructions to authenticate with your GitHub account
- Select the Codespace you want to open and choose your prefered JetBrains IDE
- Click `Connect` which will download and install the IDE Backend into the remote machine. This will only happen at the first launch.
- Your IDE will open with everything setup

The codespace you connect to must be running an SSH server. The default container image includes an SSH server, which is started automatically. If your codespaces are not created from the default image, you can install and start an SSH server by adding the following to the `features` object in your `devcontainer.json` file:

```json
{
  "features": {
    "ghcr.io/devcontainers/features/sshd:1": {}
  }
}
```


