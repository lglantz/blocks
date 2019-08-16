# blocks

CBRE Blocks design system repository

## Getting started

### Using Blocks

If you just want to use Blocks styles, you can copy the `blocks-base/dist/blocks.css` file along with the fonts/ and svgs/ folders.

To include Blocks as a node module, add the following to your `package.json`, ending in whichever [version tag](https://github.com/floored/blocks/tags) you want:
```
"blocks-base": "https://github.com/floored/blocks-base@X.X.X"
```
or
```
"blocks-react": "https://github.com/floored/blocks-react@X.X.X"
```

If you are using React components, you can access them by pointing to the react-index, ex:
```
const Checkbox = require('blocks-react').Input.Checkbox;
```

### Developing Blocks

Changes made to the `blocks-base` or `blocks-react` directories need to be rebuilt (via `gulp build` to update the generated files in their respective `dist/` directories).

You can set up a git pre-commit hook to remind you of this by running
```
ln -s -f ../../hooks/pre-commit .git/hooks/pre-commit
```

Install lerna (the tool we use to manage multiple packages):
```
npm install -g lerna
```

Use lerna to install package dependencies and interdependencies:
```
lerna bootstrap
```

To build the `blocks-base` or `blocks-react` packages, run:
```
npm run build:base
```
or
```
npm run build:react
```
from the root directory.

To build the `blocks-docs` (or documentation) package for development, run:

```
npm run dev:docs
```
from the root directory.

If this is your first time trying to build the site, you might also have to run `npm install` from within the `blocks-docs` directory.

Note: if you update the `blocks-base` or `blocks-react` packages and want those local changes reflected locally, you'll need to rerun `npm run dev:docs` to pick them up.

You can navigate to the documentation site at http://localhost:8080.

To serve the documentation site for production, run:
```
npm run serve:docs
```
from the root directory.

### Configuration to use React Hooks

As of React 16.8.x, React community introduced hooks which enable state management in functional components. Functional component has many benefits compared to its class counterpart; if you are curious, you can read about the motivation behind hooks [here](https://reactjs.org/docs/hooks-intro.html#motivation). To keep Blocks up to date with the industry trend, we will gradually replace class components in Blocks with functional components using hooks where applicable.

If this is your first time cloning or pulling after the introduction of hooks, when you `npm run dev:docs` and try to open dev page, it will complain about duplicate instance of React. This is due to the fact that `blocks-react` and `blocks-docs` ech having its own instance of React; when `blocks-docs` references `blocks-react`, it results in two instances of React in a single project. To resolve this, you can `npm i npm-link-shared -g`, then in root `blocks/` directory run the following command.
```
npm-link-shared ./packages/blocks-docs/node_modules/ ./packages/blocks-react/node_modules/ . react
```
This will remove the duplicate instance of React. And hopefully your dev page runs now!
