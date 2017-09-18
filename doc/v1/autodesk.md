<a name="top"></a>
[< README](/README.md#top)

# AU Installation

The following describes how to add theMoment library (powered by StreamEditor.tv) to AU's Beta site.

<img src="https://s3-us-west-2.amazonaws.com/themoment/autodesk.png" width="75%" height="75%" />

------------------------------------------------
<a name="library_install"></a>
## Install Library

To install the library, simply add the following script to the **footer** of AU pages containing the Ooyala video player v4.

```
<script src="https://themoment.tv/ext/js/themoment.js"></script>
```

The library in this **/cust/au/** location is specific to AU, and supports the Ooyala player on both both AU's Beta and currently live sites.

------------------------------------------------
<a name="how_it_works"></a>
## How It Works

Once the page and the library are loaded, the library locates this pre-defined player object.

```
window[‘e7917642de4a4f1eae0a331375e03784’]
```

The library then adds this new element to the page:

```
<div class="ovrGen_layer"></div>
```
The parent to the newly added element is the following pre-defined element:

```
<div class=“oo-player-container”></div>
```

The library determines the unique identifer of the video being played, as read from **data-embed-code**, for exmaple:

```
<div id="ooyala-video" ... data-embed-code="ptOTNuNzE6h-RpzQi1SLyfjFzuPcnqvu"> ... </div>
```

NOTE: If any of these objects or elements changes, please inform StreamEditor. Also, on AU's currently live site, the pre-defined player object and parent to our newly added element, respectivly, are:

```
window["video-ooyala-player"]
<div class="rau-player"></div>
```

The library then interacts with the Ooyala player using:

* play()
* pause()
* seek(seconds)
* setVolume(volume)
* getPlayheadTime()
* getDuration()
* getEmbedCode()
* ...

