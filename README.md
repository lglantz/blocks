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

You can then navigate to the site at http://localhost:8080


### Tips for using in other apps
- If you are using Blocks styles via `blocks.css`, note that it expects font files to be in the same folder as the css file
