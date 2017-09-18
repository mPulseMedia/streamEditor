<a name="top"></a>
[< README](/README.md#top)

# AU Installation

The following describes how to add theMoment library (powered by StreamEditor.tv) to AU's Beta site.

<img src="https://s3-us-west-2.amazonaws.com/themoment/autodesk.png" width="75%" height="75%" />

------------------------------------------------
<a name="library_install"></a>
## Install Library

Add the following script to the **footer** of the AU page containing the Ooyala video player.

```
<script type='text/javascript' src='https://themoment.tv/cust/au/themoment.js'></script>
```
The library in this /cust/au/ location is specific to AU, and supports the Ooyala player on both both the Beta and AU's currently live site.

------------------------------------------------
<a name="how_it_works"></a>
## How It Works

Once the page and the library are loaded, the The library locates the pre-defined player object.

```
window[‘e7917642de4a4f1eae0a331375e03784’]
```

The library then adds this new element to the page:

```
<div class="overGen_layer"></div>
```
The parent of this new element is the following pre-defined element:

```
<div class=“oo-player-container”></div>
```

Note: On AU's currently live site, the pre-defined player object and parent of this new element, respectivly, are:

```
window["video-ooyala-player"]
<div class="rau-player"></div>
```

MORE!
