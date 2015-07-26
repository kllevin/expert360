# Expert360
Technical Test for Expert360

To run this project you will need:
- [Node](http://nodejs.org/)
- [Node-Sass](https://npmjs.org/package/node-sass)
- [Grunt-cli](http://gruntjs.com/)

### Grunt Tasks

- `grunt svg` optimises svgs and create svg-defs
- `grunt build` prepare files for production and output to dist folder

### With more time
- the fonts should be loaded in a more performant way and in a way that prevents FOUT e.g. <https://github.com/bramstein/fontfaceobserver/>.
- improve plus and minus icons, should be thinner line icon, current ones are too heavy for the design.
- optimise SVG grunt tasks. `svgmin` may not be needed as `svgstore` has many optimisation options available to it. `svgstore` should also be set up to automatically pull the latest `svg-def` into the top of the designated `div`.

### TODO
- GH Pages?
- grunt to optimise images
- Visually hidden text on the profile completion %.
- Add comments in the HTML for back end devs e.g. `<!-- BACKEND: append is-active class to active links -->`.
- Make sure the logo isn't using the current `src`, ideally it'll be an SVG but probably can't as you don't have a vector version.
- Reduce the width class output by reducing these settings: <https://github.com/chris-pearce/scally/blob/master/core/mixins/_generate-percentage-classes-at-breakpoints.scss#L58-L66>.
- Make sure the Banner component isn't using <https://expert360.com/images/companyProducts/home/hero_home.jpg?34ae2a2e> for it's background image.