<a name="top"></a>
[< README](/README.md#top)

# AU Installation

The following describes how to add theMoment library to AU's in-development site.

<img src="https://s3-us-west-2.amazonaws.com/themoment/autodesk.png" width="75%" height="75%" />

------------------------------------------------
<a name="library_install"></a>
## Install Library

Add the following script to the footer of the AU page containing the Ooyala video player.

```
<script type='text/javascript' src='https://themoment.tv/cust/au/themoment.js'></script>
```

This library is specific to AU.

------------------------------------------------
<a name="how_it_works"></a>
## How It Works

The Library does not need to be initialized. Once the page and the library are loaded, the The library identifies the pre-defined player object in order to interact with the player.

```
window[‘e7917642de4a4f1eae0a331375e03784’]
```

The this existing page element

```
<div class=“oo-player-container”></div>
```

...the Library attaches the following new element:

```
<div class="overGen_layer"></div>
```

This contains the overlay that appears atop the Ooyala player.
