# blocks

CBRE Building Blocks design system repository

## Getting started

### Using Blocks

If you just want to use Blocks, you can copy the blocks.css file along with the fonts/ and svgs/ folders.

### Developing Blocks

If you want to view the Blocks docs or develop Blocks, you'll want to download [Jekyll](https://jekyllrb.com/).

For those that also work on Build or Plans, you may need to update RVM and your Ruby version (this is currently using Ruby 2.4.2).

Once you've updated Ruby (and are using the new version), run

```
gem install jekyll bundler
```

You'll also need [Gulp](https://gulpjs.com/) 

```
npm install gulp
```

You can then run the documentation site with

```
gulp server
```