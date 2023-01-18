---
layout: post
title: "Page size in InDesign for eBook?"
date: 2017-03-24 15:48
published: true
categories: [InDesign, ePub, CSS]
---
We're creating a **reflowable** eBook in InDesign. We're not planning a print book at all - just straight to an eBook; what size page should we choose when we use Adobe InDesign?

## Why should you care?

When we create an eBook (reflowable) users get to change the font size. This is how it is in all eReader devices although the range of sizes varies considerably.

Let's use the iPad with Apple's iOS as an example. Let's have a look at iBooks (the standard app on the iPad for viewing eBooks).

## iBooks

On any MAC with iBooks, a reflowable eBook provides the user with a font size 'adjuster' symbolised as a small and large capital `A`. You can see the image alongside here.

[![The appearance controller for iBooks on the MAC](/uploads/ibooksfontsize.png)](/uploads/ibooksfontsize.png)

The range of choices is extreme: There are 11 steps from when the little `A` is greyed out to when the large `A` is greyed out. As you see from the nest image here, the large size is - well, kind of ridiculous.

[![The largest text size with iBooks](/uploads/ibooksenlargedtext.png)](/uploads/ibooksenlargedtext.png)

## The target size for the body text font?

Whatever you think you want, you may not get it! The problem is that the reader may have adjusted the font size when they read another book before yours, so you don't know what they will see at first.

When you create a reflowable ePub from InDesign, the relationship between the InDesign page and what you see in the ePub (I'm using Apple's iBooks here) is non existent; that is, the page size in InDesign is not relevant. What is relevant is the font size. Let me explain further by showing some simple sample pages.

## Point size to CSS em

Let's focus on the body text. By that I mean the main paragraphs; not the headings or list items or captions. Just the paragraphs.

You must have a point size for this text. InDesign expects you to have a value for the point size. The default point size is `12pts`. This is how you should find it if you use the `[Basic Paragraph]` style.

When you export to the ePub Reflowable format, the CSS that controls the font size will be:

```css
p.basic-paragraph {
  font-size:1em;
}
```
In other words the default font size for the HTML element `p`.

## What about the page size then?

If you accept that the reflowable ePub will not necessarily look _exactly_ like the InDesign page, then you can make the page size whatever you want, but –— maybe we really want to see the InDesign page layout so that it _almost nearly_ reflects the view that will be seen in the eBook.

To establish this, we need to conduct some experiments.

### Starting a New InDesign document (beware of the `Intent` trap)

You might be tempted, when creating a new InDesign document to select `Intent` and choose `Mobile`, and then choose `iPad`. Depending on which you choose, you might get a page size of 1024x768 pixels. If you have a body text font size of `12pts`, then your text will appear very small, when working with InDesign. See the image to the left.

[![This portrait page is 768 wide x 1024 tall](/uploads/ipadsize12pts.png)](/uploads/ipadsize12pts.png)

Let's try something else; if we imagine that the _spread_ needs to be 1024 pixels together then the page should be 768 pixels tall and 512 pixels wide.

[![View in InDesign of 12pt text on 512x768 page](/uploads/pagesize768512.png)](/uploads/pagesize768512.png)

Now we see what the 12pt text looks like in InDesign. Not bad. Good measure with a manageable page size.

How near is this to the eventual view in the eBook. We need to export as reflowable and then look at this in Apple's iBooks, but with the text size set one size larger than the smallest.

[![Here we compare the eBook with what we see in InDesign.](/uploads/pagesize768512_epub2.png)](/uploads/pagesize768512_epub2.png)

We can continue to try other options until the best choice is found; let's just see a different size in InDesign. This time we choose for Web Intent and choose the `640 x 480` size.

We have InDesign show us the page at `actual size` and we compare this to iBooks (actual size) but enlarge the text up one notch.

[![InDesign actual size and iBooks with text up one notch](/uploads/640480_iBook_2ndstep.png)](/uploads/640480_iBook_2ndstep.png)

## Conclusions

The reflowable eBook should have the default size for for body text (that means 1em or 12pts), so that users can increase the text size if they prefer. In fact, Apple recommends that the there is **no** text size set for the body text, so that it automatically defers to the default size. InDesign does not give us this option, so setting at 12pts is the best choice.

> Note: You can, of course post-edit the ePub and remove the font-size CSS from the style rules for your body text.

After much experimenting then, we find that in a situation where we are creating a reflowable ePub from InDesign _without wanting the print version first_ then the best page size choice is **480 pixels wide and 640 pixels high after selecting the intent for web**.
