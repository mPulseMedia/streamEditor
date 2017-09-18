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
<script src="https://themoment.tv/cust/au/themoment.js"></script>
```

The library in this **/cust/au/** location is specific to AU, and supports the Ooyala player on both both AU currently live site as well as the Beta site.

------------------------------------------------
<a name="how_it_works"></a>
## How It Works

Once the page and the library are loaded, the library locates this pre-defined player object.
> window[‘e7917642de4a4f1eae0a331375e03784’]

The library then adds a new element **ovrGen_layer** beneith the pre-defined element **oo-player-container**.

The library determines the unique identifer of the currently loaded video, as extracted from **data-embed-code**, for exmaple:
> data-embed-code="ptOTNuNzE6h-RpzQi1SLyfjFzuPcnqvu"

NOTE: If any of these objects or elements changes, please inform StreamEditor. Also, on AU's currently live site, the pre-defined player object and parent to our newly added element, respectivly, are:
> window["video-ooyala-player"]

> rau-player

The library then interacts with the Ooyala player using:

* play()
* pause()
* seek(seconds)
* setVolume(volume)
* getPlayheadTime()
* getDuration()
* getEmbedCode()
* ...


------------------------------------------------
<a name="tech_notes"></a>
## Technical Notes

When the end-user clicks a chapter, the library adds couple parameters to the URL, for exmaple:

> https://alpha.beta.au.autodesk.com/themes/custom/forgecms_subtheme_auonline/styleguide/?playlist=19725&moment=206440

If the library detect these parameters in the URL, it will load and play the corresponding set of chapters. With this, end-users are able to link to share a link to a specific chapter.

Also:
* Clicking a chapter to start the player (as opposed to simply move the playhead of an already playing video).
* Clicking a chapter that moves the playhead backward is currently broken.
* Switching video within the same page is intentionally not yet integrated, so we can ensure that we are coordinated.
* Some output is still being printed to console.


------------------------------------------------
<a name="ux_notes"></a>
## UX Notes

* End-users may employ an 'easter egg' to enable chapter edit mode. Simply tap **Control-Key**. This may be disabled when site is live.
* The overlay position & visibility are not correct.
* We have not yet extracted thumbnails for each Chapter, but use the video's single thumbnail.
* No markser appear on the player's timeline.
* Chapter have a start and end time; they are not just the start-time.
* If end-users move the playhead dragging the player's timeline or clicking within the transcript, the chapter that contains it is not made active.

