---
hide:
 - navigation
tags:
 - css
 - website
 - html
 - responsive
 - vscode
 - github
---

## This week

* stop destinations from being hidden under the menubar
* provide button to go back to the top (since this is a long scrolling page)
* discuss media query strategies
* discuss multimedia options
* links from and to home page


## To do for the play:
* The play navigation needs attention to work on all devices
* Bring the files together in the docs folder
* Make a hyperlink from the **home page to the play**
* In the play, create a link **back to the home page**
* In the play, create a ‘**back to top**’ button
* Add **multimedia**
* Make the site **live on GitHub**

> [!hint] 
>  Fixed navigation hides the destination when clicking an item in the navigation.  We can - sort out with  *scroll-padding-top* on the `html` element. Here is what to do:

```css
html {
scroll-padding-top: 45px;
}
```

* You can increase the value for the mobile version but:

Not good that clicking the links does not hide the menu - can only be sorted with javascript

[How to do Javascript](How%20to%20do%20Javascript.md)

* sort this out with simple javascript in the **head** tag of the play HTML 

```javascript
    <script>
      function hidemenu() {
        document.getElementById("toggle").checked = false;
      }
    </script>
```

Give the `ul` an `id` like this:

```html
<ul id=“menu” onclick=“hidemenu()”>
```

Also add the following ~important~ switch to the toggle hamburger

```css
 #toggle:checked ~ #menu {
    display: block !important;
  }
```

[There is a CodePen that explains the responsive menu with a 'Hamburger' icon.](https://codepen.io/pageboy/pen/MWboVVV)

## For the home page

* Collect together the files in the **docs** folder - this is from the downloaded repository from GitHub
* open the **docs** folder in vscode
* add a hyperlink to the play file

```html
<p class=“readplay”><a href=“play4web.html”>Read the play</a></p>
```

* ditto on the cover image

- - - -
### More on the play

* add a **back to top** with position fixed and > id on body

```html
<p class="takemeup"><a href="#top">&#x25B2;</a></p>

<!--   see the id on the body for your own link  -->
```


* add a **home** link to go back to the home page of the site
Put this as a `li` at the top of the navigation `ul`. Give it a class name of ‘home’ and then style this with auto right margin.

Here is what this should look like:

```html
 <li class="home"><a href="index.html">Home</a></li>
```

To make sure that this _Home_ is centred on the drop down version of the menu add the following line for the `nav ul` :

```css
nav ul {
clear: right;
}
```

### Mobile device issues:

make sure that the head tag includes the following to overcome any issues:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```

### Suggested

To add an audio clip

```html
<audio controls src=“/media/act1scene1_clip01.mp3”></audio>
```

See this helper document that explores adding multimedia to your web page:

[Add Multimedia to Your web site](../../../Web%20Sites%20with%20GitHub/Add%20Multimedia%20to%20Your%20web%20site.md)
- - - -
## Making the site live
It is very important that you build your site from the home page  `index.html`  and the play and put these _inside_ the `docs` folder. The live site comes just from the `docs` folder at your GitHub repository

### Method 1 with vscode push to GitHub repository

* You must be working with the cloned version of the **docs** folder
* You must be signed in to your Github account
* You will see a number against the source control icon
* Add a commit message and hit the tick
* This should send the files up  although you may need to accept a few messages and GitHub credentials

> [!info] 
> We did try to get this working (and it should work!)

### Method 2 by uploading to GitHub directly

* Sign in to your GitHub account
* Navigate to the **docs* folder
* Use Add file in the root for the `index.html`

![Site files are in the docs folder](../../../media/Screenshot_2022-02-22_at_12.24.54.png)

* Move into the css folder and Add file in there
* Alternatively you can replace the **docs** folder altogether as long as this is working locally