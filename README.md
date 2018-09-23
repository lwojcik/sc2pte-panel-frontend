# sc2profile-twitch-extension-frontend
[![Greenkeeper badge](https://badges.greenkeeper.io/lukemsc/sc2profile-twitch-extension-frontend.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/lukemsc/sc2profile-twitch-extension-frontend.svg?branch=master)](https://travis-ci.org/lukemsc/sc2profile-twitch-extension-frontend)
[![Build status](https://ci.appveyor.com/api/projects/status/a2glv7bbciua61g6?svg=true)](https://ci.appveyor.com/project/lwojcik/sc2profile-twitch-extension-frontend)

This is an official repository of [StarCraft II Profile Twitch Extension](https://sc2pte.lukem.net/).

## Setup

To run a local server you need Node.js, preferably LTS version.

```
$ git clone https://github.com/lukemsc/sc2profile-twitch-extension-frontend.git`
$ cd sc2profile-twitch-extension-frontend
$ npm install
$ HTTPS=true npm start
```

## Build

To create a ZIP package suitable to be deployed on Twitch.tv follow the steps below:

```
$ npm run build
$ cd build/
$ zip -r ./* build.zip
```

Upload the zipped package via [Extension Dashboard on Twitch Developers Site](https://dev.twitch.tv/dashboard/extensions).

## License

Code is available under MIT license. See [LICENSE](https://raw.githubusercontent.com/lukemsc/sc2profile-twitch-extension-frontend/master/LICENSE) for more information.

Graphic assets included in the repository are not subject to the license above.
