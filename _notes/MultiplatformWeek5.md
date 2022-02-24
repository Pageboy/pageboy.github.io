# Week 5
## To do for the play:

* Fixed navigation hides the destination - sort out with  *scroll-padding-top*
```css
html {
scroll-padding-top: 45px;
}
```

* increase the value for the mobile version but:

Not good that clicking the links does not hide the menu - can only be sorted with javascript

[[How to do Javascript]]

* sort this out with simple javascript in the head tag of the play HTML 


```javascript
    <script>
      function hidemenu() {
        document.getElementById("toggle").checked = false;
      }
    </script>
```

Give the ul an ID and then:

`<ul id=“menu” onclick=“hidemenu()”>`


## For the home page

* Collect together the files in the **docs** folder - this is from the downloaded repository from GitHub
* open the **docs** folder in vscode
* add a hyperlink to the play file

```html
<p class=“readplay”><a href=“play4web.html”>Read the play</a></p>
```

* ditto on the cover image

- - - -
## Back to the play

* add a **back to top** with position fixed and > id on body

```html
<div class=“backtotop”>
<a title=“go back to the top of the page” href=“#play4web">&#x25B2;</a>
</div>

see the id on the body
```


* add a **home** link to go back to the home page of the site
Put this as a `li` at the top of the navigation `ul`. Give it a class name of ‘home’ and then style this with auto right margin.

### Optional

* Add an audio clip

```html
<audio controls src=“/media/act1scene1_clip01.mp3”></audio>
```

- - - -
## Making the site live
### Method 1 with vscode push to GitHub repository

* You must be working with the cloned version of the **docs** folder
* You must be signed in to your Github account
* You will see a number against the source control icon
* Add a commit message and hit the tick
* This should send the files up  although you may need to accept a few messages and GitHub credentials

### Method 2 by uploading to GitHub directly

* Sign in to your GitHub account
* Navigate to the **docs* folder
* Use Add file in the root for the `index.html`

![](Week5/Screenshot%202022-02-22%20at%2012.24.54.png)


* Move into the css folder and Add file in there
* Alternatively you can replace the **docs** folder altogether as long as this is working locally


#multiplatform