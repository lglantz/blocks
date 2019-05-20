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

To build the `blocks-docs` (or documentation) package, navigate to the module in `/packages` and run:

```
gatsby develop
```
If this is your first time trying to build the site, you might also have to run `npm install` before `gatsby develop` to be sure you have GatsbyJS.

Note: if you update the `blocks-base` or `blocks-react` packages and want those local changes reflected locally - you'll need to rerun `gatsby develop` to pick them up.

You can navigate to the documentation site at http://localhost:8000.
