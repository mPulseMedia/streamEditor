<a name="top"></a>
[< README](/README.md#top)

# AU Installation

The following describes how to add theMoment javascript library to AU's Beta site.

<img src="https://s3-us-west-2.amazonaws.com/themoment/autodesk.png" width="75%" height="75%" />

------------------------------------------------
<a name="library_install"></a>
## Install Library

To install theMoment library, simply add the following script to the **footer** of AU pages containing the Ooyala video player v4.

```
<script src="https://themoment.tv/cust/au/themoment.js"></script>
```

This version of the library, located within **.../cust/au/**, is specific to AU, and will support the Ooyala player on both AU's currently live site as well as AU's Beta site.

------------------------------------------------
<a name="how_it_works"></a>
## How It Works

Once the page and the library are loaded, theMoment locates the following player object `window[‘e7917642de4a4f1eae0a331375e03784’]`.

It then adds the new element `<div class='ovrgen_layer">../</div>` as a sibling of the `<div class='oo-player-container'>..</div>`. All other elements within theMoment overlay appear as a child of ovrgen_layer.

On AU's currently live site, theMoment locates the  player object `window["video-ooyala-player"]` and ovrGen_layer is added as a sibling of `<div class='rau-player'>..</div>`.

TheMoment extracts the unique identifier of the currently loaded video from `data-embed-code`, for example:

> data-embed-code="ptOTNuNzE6h-RpzQi1SLyfjFzuPcnqvu"

NOTE: If any of these object or element names change, please inform StreamEditor. 

------------------------------------------------
<a name="tech_notes"></a>
## Technical Notes

When the end-user clicks a chapter, theMoment adds two parameters to the end of the URL, for example:

> .../?playlist=19725&moment=206440

If the page is rendered with these parameters in the URL, theMoment will load and play the corresponding set of chapters. In this way, end-users are able to share a link that links to a specific chapter within a chapter set.

TheMoment interacts with the player using these Ooyala v4 native methods:

* play()
* pause()
* seek()
* setVolume()
* getPlayheadTime()
* getDuration()
* getEmbedCode()

We have intentionally not yet integrated the ability to switch to a different video within the same page, so we can ensure that we are coordinated.

Know issues include:
* Clicking a chapter to start the player (as opposed to simply move the playhead of an already playing video).
* Clicking a chapter that moves the playhead backward is currently broken.
* Some output is still being printed to console.


------------------------------------------------
<a name="ux_notes"></a>
## UX Notes

* End-users may employ an 'easter egg' to enable chapter edit mode. Simply tap **Control-Key**. This may be disabled when the site deployed.
* The overlay position & visibility are not correct.
* We have not yet extracted thumbnails for each Chapter, but use the video's single thumbnail.
* No diamond-shaped marker appears on the player's timeline.
* Chapters have a start and end time; they are not just the start-time.
* If end-users move the playhead dragging the player's timeline or clicking within the transcript, the chapter that contains it is not made active.

