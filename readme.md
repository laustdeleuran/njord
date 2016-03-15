# Njord (Njörðr)

_Njörðr_ is a collection of SCSS helpers and mixins I use in the majority of my projects. It's provided as-is and is available on [GitHub](https://github.com/laustdeleuran/njord) and [npm](https://www.npmjs.com/package/ljd-njord). I usually use (a selection of) these in combination with [Bourbon.io](http://bourbon.io/). Your mileage may vary. 



## Documentation

The [documentation](https://laustdeleuran.github.io/njord) is generated using [SassDoc](http://sassdoc.com/). It's [then deployed](https://github.com/X1011/git-directory-deploy) to Github pages.



## Contents

Every module (file) of the framework can be used on it's own, and should be self-contained and portable.



### Helpers

The most broadly named module encompasses a wide range of - well, erm - helpers. Everything from small functions and silent classes to large mixins. 



### Media queries

This is my preferred implementation of a media query mixin, taken from an older version of [inuitcss](http://inuitcss.com/). It supports both mobile and desktop first, and uses device name abstractions (`tabletV`, `mobileH` etc.), to make coding easy. I get that screen size isn't the same as device type, but I feel that it provides a good metaphor.



### Typography

A bunch of typography related mixins to support vertical rythm, originally ported from [Compass](http://compass-style.org/) when I started to use [LibSass](http://libsass.org/). In combination with [Bourbon's modular scale](http://bourbon.io/docs/#modular-scale) it's pretty neat.



### Grid

I dislike CSS grid systems, as they mostly encourage implementation through classes in your markup, which in turn leads to confusion about when a module looks like what (breaking the seperation of concerns across your codebase). Secondly, I find a lot of them way too opinionated. So, for the odd event that I really need a grid system, I tend to roll my own. This is it.



## Contact, attribution & contribution

All code here is either created by me or shamelessly stolen from other great libraries. I've tried to attribute authors whenever relevant. Contribute by simply forking your own repository and commit away. 

I will review pull requests as quickly as I can.

If anything leaves a bad taste in your mouth, contact info can be found at [ljd.dk](http://ljd.dk).



## License

_Njörðr_ is licensed under [WTFPL](http://www.wtfpl.net/).



## Name

_Njörðr_ is a God from old [Norse mythology](https://en.wikipedia.org/wiki/Nj%C3%B6r%C3%B0r). It's also the old form of the name of my nephew, who's currently the sweetest boy alive. 