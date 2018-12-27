# Rentz

The card game of Rentz takes time and lots of point tracking. This application can be used to create and track a game that all players can access via a device connected to the internet. The goal is to design a website that works on mobile first, but also supports desktop.

## Wireframes

[Wireframes are in Google Docs](https://docs.google.com/presentation/d/1p5Q9uCdmO3uhFi9ViRR8v3_9vaQhYn9rbkuAIvk5KyU). Request permissions and one of the contributors will give you the level of permission they see fit.

## Terminology

**Lounge:** Create or join a game

**Game:** Play an ongoing game

## Local Development

### Local Tools

Developers must have [NodeJS](https://nodejs.org/en/download/) installed. NPM is used for launching the development environment.

A `launch.json` config is provided for [VSCode](https://code.visualstudio.com/download) that will attach to the NodeJS server. The server, when `npm run dev` is used, will restart on changes and the debugger will re-attach when the server is available.

Docker is required for spinning up a local EventStore instance.

### Running the App

A `docker-compose.yml` file is available in the project root to spin it up with the correct settings. To start the database, run the following commands in the root directory:

```
docker-compose up
```

From the `src` directory, run

```
npm i
npm run dev
```

The client will be available at `http://localhost:3000`. The server will be available at `http://localhost:3100`. The client uses the Webpack development server to proxy requests to `http://localhost:3000` to `http://localhost:3100`.

## Environment Variables

### SESSION_SECRET

Default value: 'changeit'

Configures the secret used to encrypt ExpressJS sessions.
