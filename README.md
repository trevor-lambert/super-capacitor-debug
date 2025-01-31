# Project Setup

## Requirements

1. Install the Portals CLI: [Portals CLI Installation Guide](https://ionic.io/docs/portals/cli/overview)

2. Create a `.env` file at the root of the project and add your `PORTALS_KEY`: [Setting up Portals Key](https://ionic.io/docs/portals/getting-started)

## Installation Steps

```sh
npm i
npm run build
npx cap add ios
npx cap add android
npx cap sync
portals poc
portals sync
