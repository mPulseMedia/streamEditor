<a name="top"></a>
[< README](/README.md#top)

# Objects, Methods & Nametags

The following are key objects, along with links to their related methods and nametags, as appear throughout the API and site code.

About Nametags -- Nametags appear throughout the code as strings within comments that begin with '__', and also include javascript method names.  Nametags allow for linking and searching for specific points in the code, regardless of code syntax. The naming convention follows a class_subclass_subclass_attribute structure, which yields a grouping of related objects within search results.

The following is an index of nametags through the API and site projects: [http://themoment.tv/nametag.php](http://themoment.tv/nametag.php). The left column contains unique words that make up nametags, and may be used to filter nametags listed on the right column.

------------------------------------------------
<a name="moment_object"></a>
## Moments

Methods and nametags:

- Used with Library
 - [mMerch](http://themoment.tv/nametag.php#mMerch) - display moment merchandise item (also uses [cMerch](http://themoment.tv/nametag.php#cMerch))
 - [mData](http://themoment.tv/nametag.php#mData) - manage server data
- Used by theMoment.tv site only:
 - [mEdit](http://themoment.tv/nametag.php#mEdit) - create and edit moment
 - [mPlay](http://themoment.tv/nametag.php#mPlay) - page to play individual moment
 - [mList](http://themoment.tv/nametag.php#mList) - display list of moments associated with a video

------------------------------------------------
<a name="playlist_object"></a>
## Playlist

Methods and nametags:

- Used with Library
 - [pMerch](http://themoment.tv/nametag.php#pMerch) - display playlist merchandise item (also uses [cMerch](http://themoment.tv/nametag.php#cMerch))
 - [pData](http://themoment.tv/nametag.php#pData) - manage server data
 - [pNext](http://themoment.tv/nametag.php#pNext) - display playlist atop a VOD
 - [pUnified](http://themoment.tv/nametag.php#pUnified) - display drawer to create or play playlist atop VOD or live stream
- Used by theMoment.tv site only:
 - [pEdit](http://themoment.tv/nametag.php#pEdit) - both page and pMerch-component to create and edit playlist
 - [pPlay](http://themoment.tv/nametag.php#mPlay) - page to play individual playlist
 - [pPromo](http://themoment.tv/nametag.php#pPromo) - display recent popular playlists on top of feed page

------------------------------------------------
<a name="user_object"></a>
## Users

Methods and nametags:

- Used with API and Library
 - [User](http://themoment.tv/nametag.php#User) - user-related methods
- Used by theMoment.tv site only:
 - [Profile](http://themoment.tv/nametag.php#Profile) - page to display user Profile

------------------------------------------------
<a name="asset_object"></a>
## Assets

Assets refer to the underlying VOD asset of videos and live streams.

Methods and nametags:

- Used with API and Library
 - [Asset](http://themoment.tv/nametag.php#asset) - video-related Methods

------------------------------------------------
<a name="site_object"></a>
## Site

Methods and nametags:

- site environment
 - [app](http://themoment.tv/nametag.php#app) - manage app environment
 - [site](http://themoment.tv/nametag.php#site) - manage single-page web site
 - [dom](http://themoment.tv/nametag.php#dom) - manage html dom
 - [display](http://themoment.tv/nametag.php#display) - methods to manage grouped html objects
 - [browser](http://themoment.tv/nametag.php#browser) - manage browser-specific calls
 - [caches](http://themoment.tv/nametag.php#caches) - manage API and client caches

- web pages and components
 - [feed](http://themoment.tv/nametag.php#feed) - display feed page
 - [row](http://themoment.tv/nametag.php#row) - display individual row on feed page and elsewhere
 - [carousel](http://themoment.tv/nametag.php#carousel) - manage carousel within rows and elsewhere
 - [drawer](http://themoment.tv/nametag.php#drawer) - display drawer overlay atop video
 - [instruct](http://themoment.tv/nametag.php#instruct) - display inserted instructions

- partner video services
 - [twitch](http://themoment.tv/nametag.php#twitch) - methods specific to twitch
 - [youtube](http://themoment.tv/nametag.php#youtube) - methods specific to youtube
 - [partner](http://themoment.tv/nametag.php#partner) - abstracted partner connected to calls for each real partner
 - [player](http://themoment.tv/nametag.php#player) - abstracted video player connected to calls for partner-specific players

- support objects
 - [pattern](http://themoment.tv/nametag.php#pattern) - repeated code patterns
 - [search](http://themoment.tv/nametag.php#media) - manage search of moments and playlists
 - [game](http://themoment.tv/nametag.php#game) - manage game data
 - [event](http://themoment.tv/nametag.php#event) - store user events and connect to analytics
