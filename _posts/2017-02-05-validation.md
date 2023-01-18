---
layout: post
title: "Validation"
date: '2017-02-05 15:39'
categories:
  - HTML
---
Everything needs to be perfect for it to work in the digital domain. Or does it? Can our screens forgive our little markup errors?

## Checking for Errors. We have to do it so often!

If you create web sites, apps or eBooks then you are sure to have a few mark-up errors. So how can we check for errors?

### HTML

In the world _wild_ web there are several flavours of HTML markup in use, and in a previous post we talked of HTML5 and XHTML. At one time it was possible to be able to choose your favourite from HTML3, HTM4 and even transitional versions.

But what does it mean to have different versions? To a certain extent this is really a chronological thing. As you would expect, as time goes by, things improve and new versions make the experience of rendering HTML into a web page gets better. But it wasn't always so straightforward because web browsers have often interpreted the HTML tags and stylesheets (CSS) in different ways. Oftentimes a web developer would start off by making the markup valid (according to the rules) but then the web browser would deliver the unexpected and hacks would need to be applied.[^1]

## Forgiveness is a ~~dangerous~~ beautiful thing

The latest iteration of HTML is known as `HTML5` although, in fact some have suggested that we don't need versions anymore. We're beyond that now. It's just HTML. Anyway, HTML5 doesn't really replace earlier versions, it just builds on them. With HTML5 you get the ability to use some special tags that had previously been needed and were made to work in a 'roundabout' way:

Previously:

```html
<div class="navigation">
... some menu items
</div>
```

Now we can just use:

```html
<nav>
... some menu items
</nav>
```

But also, HTML5 is very forgiving, because you can leave tags unclosed and the browser is supposed to take a jolly good guess at what is supposed to be.

## Doctypes

In a pre-HTML5 world, web pages needed a _doctype_ at the head of the markup, so that if you really wanted to deliver to a particular HTML version, the browser _was supposed to_ read that first to interpret correctly. Maybe it did, maybe it didn't (I won't go into **quirks** mode).

Still, doctypes are significant if you need to validate the markup (stay with me here, because we **do** need to validate for the ePub).

Let's have a look at some doctype declarations:

Here is a transitional one:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
Here is a strict one:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

And here is HTML5, pure and simple, no references to data held on the web:

```html
<!doctype html>
```

## How can we validate?

### HTML
You can validate your web page by [going to this web site][d2ef4529]{:target="_blank"} and putting in the a link to the file.

  [d2ef4529]: https://validator.w3.org/nu/ "The online validator"

There are several options, but be aware that the validation process needs to know what HTML version you are using, and it gets this from the DOCTYPE.

All being well you should see something like this:

[![We succesfully validated this XHTML file](/uploads/validation1.png)](/uploads/validation1.png)

To validate the CSS [go to the Jigsaw validator here][69928c16]{:target="_blank"}.

  [69928c16]: https://jigsaw.w3.org/css-validator/ "Validate the CSS"

The sample page that I have produced has validated but we need to aware of a few things:

First the web page must be named with .xhtml. This will inform the validator that we are using XHTML rather than just plain HTML.

### Why XHTML then?

It turns out that ePUB3 (the eBook format that we are targeting) uses the XHTML markup standard, so we want to do the same from the beginning of our learning about these things. HTML5 is just too _loose_ for out requirements.

## ePub

The ePub standard for delivering eBooks is a wrapped-up package of files, consisting (mostly) of HTML and CSS, although, actually the HTML is a particular flavour; `XHTML5`. This means that it must conform to a very strict set of rules.

We can also validate the ePub by using an [online service at the IDPF web site][4a53fecc]{:target="_blank"}

  [4a53fecc]: http://validator.idpf.org "Validate the ePub"

However this is limited to 10MB and this is a serious limitation, so you may need to [download a copy of ePubCheck][898daf9e]{:target="_blank"} (a java application) and run this locally through the terminal.

  [898daf9e]: https://github.com/IDPF/epubcheck/releases "Grab the latest version"

With the Mac Terminal application open locate the ePubcheck file that you just downloaded and:

```terminal
$ cd /Applications/Utilities/ebook_tools/epubcheck-4.0.2
$ java -jar pubcheck-4.0.2 <path to the ePub file>
```
You should see something like this:

```terminal
$ Validating using EPUB version 3.0.1 rules.
$ No errors or warnings detected.
$ epubcheck completed
```
All sorts of code will need validating and by [going to CodeBeautify][8f71ebe7]{:target="_blank"} you are bound to find exactly what you need.

  [8f71ebe7]: http://codebeautify.org "This is very useful indeed"




[^1]: Chris Colyer's Website is the [goto place][7faa4e4f]{:target="_blank"} for browser hacks:

  [7faa4e4f]: https://css-tricks.com/snippets/css/browser-specific-hacks/ "Off to the web"
