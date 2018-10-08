# blocks

CBRE Building Blocks design system repository

## Getting started

### Using Blocks

If you just want to use Blocks, you can copy the blocks.css file along with the fonts/ and svgs/ folders.

Blocks can be included in your project as a subrepo by running
```
git subrepo clone https://github.com/floored/blocks.git /path/to/blocks
```
in the base folder of your project. So, for example, for DataVis, we included Blocks by running:
```
git subrepo clone https://github.com/floored/blocks.git /lib/blocks
```

Note that the folder you are putting Blocks into must already exist in git.

If you want to use the included React components, they can be included by pointing to the react-index, ex:
```
const BlocksInput = require('../../../lib/blocks/react-index').Input;
const Checkbox = BlocksInput.Checkbox;
```

### Developing Blocks

If you want to view the Blocks docs or develop Blocks, you'll want to download [Jekyll](https://jekyllrb.com/).

For those that also work on Build or Plans, you may need to update RVM and your Ruby version (this is currently using Ruby 2.4.2).

Once you've updated Ruby, be sure you're using the new version:
```
rvm use ruby-2.4.2
```

Install Jekyll:
```
gem install jekyll bundler
```

You'll also need to install some node modules

```
npm install
```

You can then run the documentation site with

```
gulp server
```

You can then navigate to the site at http://localhost:8080.

### Contributing to Blocks

The Blocks documentation site runs on GitHub pages and is generated with Jekyll. In order to make this work, we have to commit some generated JavaScript files (in particular, any changes in `react/` or `docs/_javascript` should result in an update to the built `*Preview.js` files in `docs/lib`). These are really easy to forget! There is now a pre-commit hook you can set up which will remind you if you have made changes in `react/` or `docs/_javascript` and are not committing `docs/lib/*.js` files as well. To set it up, just run

```
./bin/link_hooks
```
and say `y` at the prompt!
