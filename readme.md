# Rentz

The card game of Rentz takes time and lots of point tracking. This application can be used to create and track a game that all players can access via a device connected to the internet. The goal is to design a website that works on mobile first, but also supports desktop.

## Wireframes

[Wireframes are in Google Docs](https://docs.google.com/presentation/d/1p5Q9uCdmO3uhFi9ViRR8v3_9vaQhYn9rbkuAIvk5KyU). Request permissions and one of the contributors will give you the level of permission they see fit.

## VSCode

A `launch.json` config is provided that will attach to the NodeJS server. The server, when `npm run dev` is used, will restart on changes and the debugger will re-attach when the server is available.

## Environment Variables

### SESSION_SECRET

Default value: 'changeit'

Configures the secret used to encrypt ExpressJS sessions.
