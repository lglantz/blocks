# blocks

CBRE Building Blocks design system repository

## Getting started

### Using Blocks

If you just want to use Blocks, you can copy the blocks.css file along with the fonts/ and svgs/ folders.

Blocks can be included in your project as a subrepo by running
```
git clone https://github.com/floored/blocks /path/to/blocks
```
in the base folder of your project. So, for example, for DataVis, we included Blocks by running:
```
git clone https://github.com/floored/blocks /lib/blocks
```

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
