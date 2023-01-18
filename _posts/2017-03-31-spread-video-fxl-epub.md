---
layout: post
title: "Video across a 2 page spread (updated)"
date: "2018-10-14 19:31"
published: true
categories: [InDesign, ePub, HTML]
---
There is an issue when video in a fixed layout ePub spans across 2 pages. This situation arises when you have 2 page spreads and you are converting to landscape. What happens is the video only really plays one half, even though, at first the video appears to be available full width. **Updated with a javascript solution**

>Read-on for an explanation of the problem, but then you will find a better solution at the end using javascript.

## There are really 2 videos (one on each half)

[![In iBooks, the video is split](/uploads/videoover2_broke.png)](/uploads/videoover2_broke.png)

When you export to the fixed-layout ePub from InDesign – and you choose the `Convert Spread to Landscape` option. The process takes the pair of pages and creates one XHTML file (in the ePub package) with a viewport dimension based on the overall width of 2 pages. But, it also creates a 2 divisions with a width obtained from the width of the page. Inside these `<div>`s, it puts a copy of the video; there are 2 videos on the ePub page.

## Can we fix?

Yes, but only by editing the XHTML inside the ePub package!

Before we go ahead and show those changes you are advised to keep the spread where the video sits very simple; remove page numbers and headers and any empty text boxes that are sitting around on those pages.

> Note: When you edit the XHTML inside the ePub package you will lose the ability to _round-trip_ to InDesign, so leave these changes to the last in your workflow.

## Why do we need to edit the XHTML?

Blame Adobe! When the ePub is exported to fixed-layout specifying `Convert Spread to Landscape` a single XHTML document is created for the pair of pages, however, a `<div>` for each page is created with _inline styling_ but **no** id or class name. [^1].

## Here are the steps then.

- The spread where you have the video needs to be simplified; that is, get rid of page numbers, headers and even empty text frames. The reason for this, is that you will be editing the XHTML, and you want to keep this simple!
- You will need to unpack the ePub after you have exported.
- You now need to find the XHTML file that contains the video.
- You now need to make 2 changes to this file.

Look at this line:

```html
<meta name="viewport" content="width=792,height=594" />
```

Take a note of the width (yours may be different to mine). Now **change** the width on the first `<div>`, because this will have a width that is half of the width above; You see that this is an inline CSS - this is why we cannot change in our own CSS.

[![This shows the HTML where the video is displayed across 2 pages](/uploads/editHTML2videos.png)](/uploads/editHTML2videos.png)

Here is mine:

```html
<div style="position:absolute;
overflow:hidden;
left:0px;
top:0px;
-webkit-transform:translate(0.00px,0.00px);
-ms-transform:translate(0.00px,0.00px);
transform:translate(0.00px,0.00px);
width:396.00px;
height:594.00px;">
```

The width should be changed from `396.00px` to `792px`

The next change is to hide the second `<div>`. Find the second block that also has a width set to half the overall viewport width and add (within the inline style):

`display:none;`

## Autoplaying the Video

InDesign does provide a tick box on the media panel to play on page load. This effectively gets the video going straight away. In this situation there is a danger that using the above method to display the video fully across the spread may result in the video playing twice, and with sound this may result in an unpleasant echo.

[![The play on page load tick box](/uploads/autoplayvideo.png)](/uploads/autoplayvideo.png)

### How to solve this?

By simply adding `display:none;` we have hidden the second copy of the video, but it will still play if told to do so with 'autoplay'.

We could remove the 'autoplay' in the HTML for the video.

```html
<video id="_idVideo000" poster="image/80.png" autoplay="autoplay">
  <source src="video/msnd01.mp4" type="video/mp4" />
</video>
```
However, this is not enough, because InDesign has used javascript to start the video [^2] and you will need to disable for second video by removing this:

```javascript
data-mediaOnPageLoadActions="onMediaStart(selfContainerID,0.00,0);"
```

I suppose you might just as well delete all of the last <div> or use HTML comment tags to remove.

> Note: Any of these changes will be reversed if you re-export from InDesign, so you should only do this at the end of your workflow or copy this code somewhere and paste back in at the end.

## The Javascript resolution

When exporting from InDesign, add the following script

```javascript
// run this once the page has loaded
window.onload = function(){
  // find out if there is more than one video over the spread
 videos = document.getElementsByTagName("video").length;
 if (videos > 1) {
   var css = document.createElement("style");
   css.type = "text/css";
   // hide the second main div of the body
   // make the width of the first main div the same as the viewport
   css.innerHTML = "body > div:nth-child(2) {display:none;} body > div:nth-child(1) {width:732px !important;}"
   // write this css to the head of the page
   document.body.appendChild(css);
 }
 };
 ```


[^1]: It may be possible to use javascript to change the markup on the page dynamically and thereby allowing us to change this even if we have made further edits in InDesign. Let me know if you find a way. **Done**


[^2]: The reason that there is javascript to autoplay the video rather than just using 'autoplay' is that Apple iOS devices do not support the HTML5 video autostart attribute.
