# blocks

CBRE Blocks design system repository

## Getting started

### Using Blocks

If you just want to use Blocks styles, you can copy the blocks.css file along with the fonts/ and svgs/ folders.

To include Blocks as a node module, add the following to your `package.json`, ending in whichever [version tag](https://github.com/floored/blocks/tags) you want:
```
"blocks": "https://github.com/floored/blocks#vX.X.X"
```

If you are using React components, you can access them by pointing to the react-index, ex:
```
const Checkbox = require('blocks/react-index').Input.Checkbox;
```

### Developing Blocks

Install lerna (the tool we use to manage multiple packages):
```
npm install -g lerna
```

Use lerna to install package dependencies and interdependencies:
```
lerna bootstrap
```

To build the `blocks-base` or `blocks-react` packages, navigate to the module in `/packages` and run:
```
gulp build
```

To build the `blocks-docs` (or documentation) package, navigate to the module in `/packages` and follow these instructions:

You'll want to download [Jekyll](https://jekyllrb.com/).

Use ruby v2.4.4 (you might need to install this first):
```
rvm use ruby-2.4.4
```

Install [Bundler](https://bundler.io/):
```
gem install bundler
```

Install from the bundle (this will give you Jekyll):
```
bundle install
```

Run the documentation site with

```
gulp server
```

Note: if you update the `blocks-base` or `blocks-react` packages and want those local changes reflected locally - you'll need to run `gulp build` for each of those packages

You can navigate to the documentation site at http://localhost:8080.
