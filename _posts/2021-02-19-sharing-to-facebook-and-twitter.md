---
layout: post
title: Sharing to Facebook and Twitter
date: 2020-12-30T17:03:50.198Z
header_feature_image: /uploads/typewriter.jpeg
flickr_album: flickr
tags:
  - web sites
  - code
---
Very often we want to share a web page to our social media locations such as Twitter and Facebook. How do we do this properly to get a good looking post in those platforms?

![A recent blog post was shared on Twitter](/images/twittershared.jpg)

With a Jekyll site (that’s what this is) we can use the [^1]*liquid* logic to populate the correct metadata in the page, so that anyone who shares that page will be able to make a compelling  post in their Facebook timeline or for a Twitter tweet.

## The adopted standards for *FaceBook*

The basic metadata that needs to be added to each web page uses `OpenGraph` to provide the various components that will then populate a Facebook post correctly. You can read all about *Open Graph* on this web site: [https://ogp.me](https://ogp.me/ "The Open Graph protocol")

Open Graph is essentially a set of metadata tags that `Facebook` will recognise and be able to use the data to display the link in the timeline.

## *Twitter* has it’s Own

If you want your page referrals in `Twitter`to look good too you have some further options.

## Adding the Code with Liquid

Here we see the code that I am using to get the correct tags in both Facebook and Twitter.

{%- raw -%}

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:image" content="{{site.url}}{{site.image}}">
{%- if page.blurb != null -%}
<meta property="og:description" content="{{page.blurb}}">
{%- endif -%}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{{site.url}}{{page.url}}">
<meta name="twitter:site" content="@{{site.twitter_username}}">
<meta name="twitter:title" content="{{page.title}}">
{%- if page.blurb != null -%}
<meta name="twitter:description" content="{{page.blurb}}">
{%- else -%}
<meta name="twitter:description" content="{{site.description}}">
{%- endif -%}
<meta name="twitter:image" content="{{site.url}}{{site.image}}">
<meta name="twitter:creator" content="@{{site.twitter_username}}">
<meta name="twitter:image:alt" content="Book in the hands of a monk">
```

{%- endraw -%}

## Stand out with a fine picture

![A recent blog post was shared on Facebook](/images/facebookpost.jpg)

You will see from the code block above that both `OpenGraph` and `TwitterCard` expect an image to display.  In this case we use an image that has a path set out in the `YAML` config. In other words you need to commit to an image for your site. There are other options. You can give each page or blog post on your site an image; in this case the code snippet above might go something like:

{%- raw -%}

```html
{%- if page.image != null -%}
<meta property="og:image" content="{{site.url}}{{page.image}}">
{%- else -%}
<meta property="og:image" content="{{site.url}}{{site.image}}">
{%- endif -%}
```

{%- endraw -%}

## A good description is going to help

Facebook and Twitter want some honest info to display. The question is; do you want info about the web site or about the individual page or post being shared.

Here is snippet for the `TwitterCard` that will get that right:

{%- raw -%}

```html
{%- if page.blurb != null -%}
<meta name="twitter:description" content="{{page.blurb}}">
{%- else -%}
<meta name="twitter:description" content="{{page.excerpt | strip_html}}">
{%- endif -%}
```

{%- endraw -%}

The `excerpt` in the code above simply takes the first paragraph of your post. The description will be truncated to 2 lines. **Note**: do not include links in this description otherwise the meta tag will be broken (you could strip the HTML from this with the `strip_html` code).

## Validation

You should check that you have the correct meta tags working on your page by using the validation tools for the different platforms.

For Twitter go here: <https://cards-dev.twitter.com/validator>

For Facebook go here: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug)

You will need to be signed in to the respective accounts to work with these tools.

[^1]: Liquid is the coding language used by GitHub pages and Jekyll. The language is developed by `Shopify` and can be explored here: https://shopify.github.io/liquid/basics/introduction/

Banner Photo by [Sticker Mule](https://unsplash.com/@stickermule?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/social-sharing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)