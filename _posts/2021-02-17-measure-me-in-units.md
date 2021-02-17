---
layout: post
title: Measure me in Units
date: 2021-02-13T19:20:00.000Z
header_feature_image: /uploads/patricia-serna-zpz9vqqdnba-unsplash.jpg
caption: Photo by patricia serna on Unsplash
flickr_album: flickr
tags:
  - teaching
  - HTML
  - code
  - typography
  - web sites
---
What units of measure can we use in our CSS to provide such things as font size, margins, padding and widths. There are many, including px, em, rem, vh, vw and even %. What does it all mean and how should we use these units?

## The structure of an \`HTML\` page; the hierarchy of the elements.

We should just remind ourselves about this, because some of these important units are relative – relative to the settings on their parent element.

![Here we see the structure of the web page](/uploads/htmldom.png "Web page structure")

We have `<html>` as the root element with `<body>`as the main content. Within this we will have a number of block level elements such as headings, paragraphs, sections, navs and articles.

### OK, now what about the units. Let's talk font size.

By default the root element (HTML) will already have the font size set to 16pixels; meaning that a paragraph of text will display a 16pixel height even before you begin to add CSS styles. All elements such as headings and lists will be proportionally based on this number. So, when the default is 16px the following will be true:

```
h1 is   32px   (2em)
h2 is   24px (1.5em)
h3 is 20.8px (1.3em)
h4 is   16px   (1em)
h5 is 12.8px (0.8em)
h6 is 11.2px (0.7em)
p is 16px (1em)
```

To make use of this value without using pixels we can use the **rem** unit. This is the `root em`. By default as I say this will be 16px. So if we change the font-size on the root (HTML) element, this will change everything.

### Use rem wherever possible

If we use the rem unit, we can conveniently change the size of everything in one place (the HTML element) in the CSS. Also, if we avoid using pixels for units, we respect any changes that the user adjusts in their browser.

Here is an example of CSS that uses the rem unit. This CSS is heavily commented for the explanation.

```css
/* this css file makes use of the REM unit rather than pixels */

/* by default the HTML root element will have a 16px value set on which all dimensions are set. This can be used in the child element (body) by reference to the EM unit. So a margin on the body of 1em will be the equivilent to 16px. However, we can change the value of EM in the HTML root element */

html {
  font-size: 10px; /* this would normally be 16px */
}

body {
  margin:2rem; /* this would be 20px */
  /* 2em would work as well but that is becasue body only has one level above */
}

p {
  /* with nothing here the font-size will be 10px */
  font-size: 1.5rem; /* so here we say 1.5 X the root value of em */
}

h1 {
  font-size: 2.5rem;
}
```