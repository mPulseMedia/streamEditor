<a name="top"></a>
[< README](/README.md#top)

# Objects, Methods & Nametags

The following are key objects, along with links to their related methods and nametags, as appear throughout the API and site code.

About Nametags -- Nametags appear throughout the code as strings within comments that begin with '__', and also include javascript method names.  Nametags allow for linking and searching for specific points in the code, regardless of code syntax. The naming convention follows a class_subclass_subclass_attribute structure, which yields a grouping of related objects within search results.

The following is an index of nametags through the API and site projects: [http://themoment.tv/nametag.php](http://themoment.tv/nametag.php). The left column contains unique words that make up nametags, and may be used to filter nametags listed on the right column.

------------------------------------------------
<a name="moment_object"></a>
## Moments

- [mMerch](http://themoment.tv/nametag.php#mMerch) - display moment merchandise item (also uses [cMerch](http://themoment.tv/nametag.php#cMerch))
- [mData](http://themoment.tv/nametag.php#mData) - manage server data
- [mEdit](http://themoment.tv/nametag.php#mEdit) - create and edit moment

------------------------------------------------
<a name="playlist_object"></a>
## Playlist

- [pMerch](http://themoment.tv/nametag.php#pMerch) - display playlist merchandise item (also uses [cMerch](http://themoment.tv/nametag.php#cMerch))
- [pData](http://themoment.tv/nametag.php#pData) - manage server data
- [share](http://themoment.tv/nametag.php#share) - sharing methods

------------------------------------------------
<a name="ovr_object"></a>
## Overlay

The following are based on [ovrGen](http://themoment.tv/nametag.php#ovrGen)
- [ovrMix](http://themoment.tv/nametag.php#ovrMix) - overlay showing contents of playlist
- [ovrDir](http://themoment.tv/nametag.php#ovrDir) - overlay showing rows of playlists
- [ovrInv](http://themoment.tv/nametag.php#ovrInv) - overlay the single most relevant playlist,oran invitation to create a new one.
- [row](http://themoment.tv/nametag.php#row) - horizontal row of scrollable items with title
- [carousel](http://themoment.tv/nametag.php#carousel) - scrollable element within each row
- [instruct](http://themoment.tv/nametag.php#instruct) - display inserted instructions

------------------------------------------------
<a name="user_object"></a>
## Users

- [User](http://themoment.tv/nametag.php#User) - user-related methods
- [Profile](http://themoment.tv/nametag.php#Profile) - page to display user Profile

------------------------------------------------
<a name="asset_object"></a>
## Assets

Assets refer to the underlying VOD asset of videos and live streams.

- [Asset](http://themoment.tv/nametag.php#asset) - VOD (videoon demand)
- [Channel](http://themoment.tv/nametag.php#channel) - Live streams

------------------------------------------------
<a name="app_object"></a>
<a name="env_object"></a>
## Application and Environment

- [app](http://themoment.tv/nametag.php#app) - manage app environment
- [page](http://themoment.tv/nametag.php#page) - the loaded web page
- [dom](http://themoment.tv/nametag.php#dom) - manage html dom
- [background](http://themoment.tv/nametag.php#background) - extension use of the background page to communicate with tabs, see [architechture](https://docs.google.com/presentation/d/1z0I-z-dU2qau-QqZyoPZgPbHE68rgtEcpwzHcQTbs1s/edit#slide=id.g24cf0a1029_0_3)
- [site](http://themoment.tv/nametag.php#site) - manage single-page web site
- [display](http://themoment.tv/nametag.php#display) - methods to manage grouped html objects
- [browser](http://themoment.tv/nametag.php#browser) - manage browser-specific calls
- [cache](http://themoment.tv/nametag.php#cache) - manage API and client caches

------------------------------------------------
<a name="player_object"></a>
<a name="host_object"></a>
## Player & Host

Player
- [player](http://themoment.tv/nametag.php#player) - abstracted video player connected to calls for partner-specific players

Host
- [twitch](http://themoment.tv/nametag.php#twitch)   - methods specific to twitch
- [youtube](http://themoment.tv/nametag.php#youtube) - methods specific to youtube
- [webex](http://themoment.tv/nametag.php#webex)     - methods specific to webex
- [vidyard](http://themoment.tv/nametag.php#vidyard) - methods specific to vidyard
- [ustream](http://themoment.tv/nametag.php#ustream) - methods specific to ustream

------------------------------------------------
<a name="backend_object"></a>
## Server

- [inst](http://themoment.tv/nametag.php#inst) - aws instances
- [config](http://themoment.tv/nametag.php#conf) - configuration scripts
- [table](http://themoment.tv/nametag.php#table) - table organization

------------------------------------------------
<a name="other_object"></a>
## other objects

- [event](http://themoment.tv/nametag.php#event) - store user events and connect to analytics
- [utl](http://themoment.tv/nametag.php#utl) - utility methods
