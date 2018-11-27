# sc2profile-twitch-extension-frontend
[![Greenkeeper badge](https://badges.greenkeeper.io/lukemnet/sc2profile-twitch-extension-frontend.svg)](https://greenkeeper.io/)
[![Travis Build Status](https://travis-ci.org/lukemnet/sc2profile-twitch-extension-frontend.svg?branch=master)](https://travis-ci.org/lukemnet/sc2profile-twitch-extension-frontend)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/a2glv7bbciua61g6?svg=true)](https://ci.appveyor.com/project/lukemnet/sc2profile-twitch-extension-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/244da6a68a36011146cb/maintainability)](https://codeclimate.com/github/lukemnet/sc2profile-twitch-extension-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/244da6a68a36011146cb/test_coverage)](https://codeclimate.com/github/lukemnet/sc2profile-twitch-extension-api/test_coverage)

This is an official repository of [StarCraft II Profile Twitch Extension](https://sc2pte.lukem.net/).

For current status see [the kanban board of the project](https://github.com/orgs/lukemsc/projects/1).

## Setup

Install and configure [sc2profile-twitch-extension-api](https://github.com/lukemnet/sc2profile-twitch-extension-api) first.

To run a local server you need Node.js, preferably LTS version. Once installed, run the following commands:

```
$ git clone https://github.com/lukemsc/sc2profile-twitch-extension-frontend.git
$ cd sc2profile-twitch-extension-frontend
$ cp .env.sample .env
```

Fill the `.env` file with the following information:

* `REACT_APP_SC2PTE_API_URL` - extension API URL (default is `http://localhost:3000`)
* `REACT_APP_UPDATE_INTERVAL` - how often the extension will poll for stat updates (in miliseconds) - for testing purposes it is reasonable to keep this value low (e.g. `5000` for 5 seconds)

You can now complete the setup process and run the project locally:

```
$ npm install
$ HTTPS=true npm start
```

The project hasn't been set up to work with [Twitch Developer Rig](https://github.com/twitchdev/developer-rig) yet.

## Build

Create `.env.production` file with environment variables to be used in production environment.

To create a ZIP package suitable for deployment on Twitch.tv follow the steps below:

```
$ npm run build
$ cd build/
$ zip -r build.zip ./*
```

Upload the zipped package via [Extension Dashboard on Twitch Developers Site](https://dev.twitch.tv/dashboard/extensions).

## Contact

See [the project homepage](https://sc2pte.lukem.net/) for contact information.

## License

Code is available under MIT license. See [LICENSE](https://raw.githubusercontent.com/lukemsc/sc2profile-twitch-extension-frontend/master/LICENSE) for more information.

Graphic assets included in the repository are not subject to the license above.
