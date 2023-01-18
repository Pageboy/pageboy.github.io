---
layout: post
title: "Using Flickr to Generate an Image Gallery"
date: "2018-05-27 13:00"
published: true
categories: [Flickr, jQuery]
---
We should all be very grateful that Flickr exists. This is one of the most popular (free if you want) hosting services that is also very sophisticated in the way that it delivers, and categorises images. But there is more; Flickr has an **API** that enables you yo pull your hosted pictures down to your own web site. I am doing this here (see the rolling banner on the home page and the galleries).

## What got me started

I have a book in my shelf. It is quite old now. It's called *Flickr Hacks* 2006, O'Reilly Publishers, New York.

[![Flickr Hacks - Bausch and Bumgardner](/uploads/Screenshot 2018-01-14 19.30.52.png)](/uploads/Screenshot 2018-01-14 19.30.52.png)

This book is an unusual O'Reilly book, in that it does not have an engraving of an animal but rather the slide projector. As you can see, it's an unbranded Kodak Carousel.

## Flickr

Flickr has been around for a long time and was launched in 2004[^1]. It was taken over by Yahoo and is now owned by them. There are millions of users and there are certainly more than 6 billion public photos.

Enough of the history. The important thing to note is that it is possible to *interogate* flickr's publicly available photo streams and deliver to your own web site.

## Hacking the API

The _Flickr Hacks_ book is all about mashing-up the content from Flickr. We are very fortunate that the Flickr organisation have made available an API (Application Programming Interface), whereby the photos can be accessed and pushed onto a web page.

This API was available in 2006 and the book does explore various ways to use images directly from the site, and at the time, I didn't really exploit the potential; preferring to [host photos on my own web site][fe9df4dd].

  [fe9df4dd]: http://www.pagetoscreen.net/lens/category/76 "Take a look at some over on pagetoscreen.net"

## jQuery + FlexBox CSS

So, now with jQuery at our finger tips we can build a gallery of images using the Flickr API and styling with CSS flexBox.

I am now going to point you to the gallery I have built on this site, but before you invoke the link and move away from this page, please note the rolling slide show of images on this home page (I mean the opening page of this site), because those images come from my Flickr account.

[^1]: [Wikipedia][92be4fb2] will give you a brief history.

  [92be4fb2]: https://en.wikipedia.org/wiki/Flickr "Have a look at Wikipedia and make a donation while you're there."

## The workflow

  In your Flickr account set up an album and add some photos to that album. You should put caption information in there if possible.

[![Adding image to Flickr and editing title and description](/uploads/addingimagetoflickrealbum.png)](/uploads/addingimagetoflickrealbum.png)

### The APP Garden

When you are logged in to Flickr you need to find this page:
https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos

In the fields on the left you need to out in your details. You should find the photoset_id and the user_id on the right.

You need to get the output in JSON format.

Now comes the complicated part; you need to get from the very generous Phil Cohen his jquery plugin called `fancy-photoset`. You can download the code [from his site here][15f2a032].

  [15f2a032]: http://phlippers.net/fancy-photoset/ "a jquery plugin"

You will need to make modifications to the jquery function to pull from the Flickr API those elements that you need. In my case, I wanted the title and description and the large version of the image to use in the popup version of the image. You need to get the appropriate JSON output from Flickr.

[![Flickr APP Garden page](/uploads/flickreAPI2JSON.png)](/uploads/flickreAPI2JSON.png)

The section of the jquery Flickr function will look like this:

`jsonUrl = "https://api.flickr.com/services/rest/?" + "method=flickr.photosets.getPhotos&" + ("api_key=" + options.apiKey + "&") + ("photoset_id=" + options.photosetId + "&") + ("user_id=" + options.flickrId + "&") + "extras=description,url_sq,url_t,url_s,url_m,url_o&" + "format=json&jsoncallback=?";`

### The Styling of the Gallery

The gallery is styled with flex CSS. The gallery block is a list with each image as a list item.  The essential CSS for this looks like this:

```css
#gallery ul {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}
#gallery li {
  list-style-type: none;
  padding: 8px;
  margin-right:6px;
  margin-bottom: 6px;
  border:1px solid silver;
  vertical-align: top;
  /* flex-basis: 200px; */
  -webkit-box-flex: 1;
      -ms-flex: auto;
          flex: auto;
  width: 200px;
}
```
