<a name="top"></a>
[< README](/README.md#top)

# Playlists

Playlists, or 'remixes' as presented to users, are a series of moments/highlights across one or more live streams/videos.

|       | Endpoint | Description |
| ----- | -------- | ----------- |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png) |  [https://api.theMoment.tv/v1/playlists](#playlist_create_endpoint) | Create a new playlist |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png) |  [https://api.theMoment.tv/v1/playlists/{id}](#playlist_update_endpoint) | Update a playlist |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) |  [https://api.theMoment.tv/v1/playlists/{id}](#playlist_get_endpoint) | Get a playlist object |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) |  [https://api.theMoment.tv/v1/playlists/{partner}/asset/{id}](#playlist_partner_asset_endpoint) | Get playlists associated with a video |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) |  [https://api.theMoment.tv/v1/playlists/{partner}/channel/{id}](#playlist_partner_channel_endpoint) | Get playlists associated with a channel |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png) |  [https://api.theMoment.tv/v1/playlists/{id}/moment_position_set](#playlist_moment_position_set_endpoint) | Sets the position of a moment within a playlist |

------------------------------------------------
<a name="playlist_create_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png)
## https://api.theMoment.tv/v1/playlists

Create a new playlist.

#### Nametag
[playlist_create_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_create_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| title | required | string | Title of the playlist |
| status_public | required | number | Status of the playlist. 1 means public whereas 0 means unlisted |
| mode | required | string | Mode of the playlist. Allowed values are handpick, autoadd and sticky_stream
| moment_ids | required | string | Comma separated list of moment ids |
| auid | required | string | Identifier of the client |

#### Example Request

The following example creates a public playlist with 2 moments.

```bash
curl --data "\
title=Awesome moments&\
status_public=1&\
mode=handpick&\
moment_ids=21217,21216&\
auid=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m" https://api.themoment.tv/v1/playlists
```

#### Example Response

```json
{
    "id": "2728",
    "title": "Awesome moments",
    "thumb": "",
    "moment_count": 2,
    "duration": "40",
    "publisher_id": "80144",
    "status_public": "1",
    "status_blocked": "0",
    "status_deleted": "0",
    "copy_playlist_id": "0",
    "count_played": "0",
    "count_played_dup": "0",
    "count_shared": "0",
    "epoch_added": "1468067533",
    "mode": "handpick",
    "terms": "",
    "status_changed": "0",
    "playlist_type": "0",
    "channel_ids": "508,546",
    "game_ids": "2",
    "asset_ids": "1994,1993",
    "sticky_asset_id": "0",
    "moments": "21217,21216",
    "user": {
        "id": "80144",
        "display_name": "anonymous",
        "image": "",
        "personalize": "",
        "followers": 0
    }
}
```

------------------------------------------------
<a name="playlist_update_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png)
## https://api.theMoment.tv/v1/playlists/{id}

Update a playlist.

#### Nametag
[playlist_update_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_update_endpoint)

#### Parameters

The parameters are same as the Playlist [Create Endpoint](#playlist_create_endpoint)

#### Example Request

```bash
curl --data "\
title=More awesome moments&\
status_public=1&\
mode=handpick&\
moment_ids=21218,21217,21216&\
auid=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m" https://api.themoment.tv/v1/playlists/2728
```

#### Example Response

```json
{
    "id": "2728",
    "title": "More awesome moments",
    "thumb": "",
    "moment_count": 2,
    "duration": "40",
    "publisher_id": "80144",
    "status_public": "1",
    "status_blocked": "0",
    "status_deleted": "0",
    "copy_playlist_id": "0",
    "count_played": "0",
    "count_played_dup": "0",
    "count_shared": "0",
    "epoch_added": "1468067533",
    "mode": "handpick",
    "terms": "",
    "status_changed": "0",
    "playlist_type": "0",
    "channel_ids": "508,546",
    "game_ids": "2",
    "asset_ids": "1994,1993",
    "sticky_asset_id": "0",
    "moments": "21218,21217,21216",
    "user": {
        "id": "80144",
        "display_name": "anonymous",
        "image": "",
        "personalize": "",
        "followers": 0
    }
}
```

------------------------------------------------
<a name="playlist_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/playlists/{id}

Get a playlist object.

#### Nametag
[playlist_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_get_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| limit | optional | number | Fetch number of moment objects as part of the playlist. If omitted, only comma separated list ids of the moment objects is responded |
| offset | optional | number | Allows to fetch moment objects starting from a particular offset. Default is 0 |

#### Example Request

```bash
curl -X GET https://api.themoment.tv/v1/playlists/2728?limit=10
```

#### Example Response

```json
{
    "id": "2728",
    "title": "More awesome moments",
    "thumb": "",
    "moment_count": 2,
    "duration": "40",
    "publisher_id": "80144",
    "status_public": "1",
    "status_blocked": "0",
    "status_deleted": "0",
    "copy_playlist_id": "0",
    "count_played": "0",
    "count_played_dup": "0",
    "count_shared": "0",
    "epoch_added": "1468067533",
    "mode": "handpick",
    "terms": "",
    "status_changed": "0",
    "playlist_type": "0",
    "channel_ids": "508,546",
    "game_ids": "2",
    "asset_ids": "1994,1993",
    "sticky_asset_id": "0",
    "moments": [
        {
            "id": "21217",
            "asset_id": "1994",
            "publisher_id": "80144",
            "timestamp": "146806615",
            "tag": "LOL Rampage",
            "time_start": "11549",
            "time_end": "11569",
            "status_deleted": "0",
            "epoch_added": "1468067049",
            "count_played": "0",
            "count_played_dup": "0",
            "asset": {
                "id": "1994",
                "epoch_added": "1468067049",
                "source": "3",
                "resource_id": "v77076652",
                "thumb": "https://static-cdn.jtvnw.net/previews-ttv/live_user_eulcs2-320x180.jpg",
                "duration": "11245.00",
                "status": "recording",
                "status_deleted": "0",
                "recorded_at": "1468054573",
                "title": "EU LCS Summer - Week 6 Day 2: Fnatic vs. Unicorns Of Love (EULCS2)",
                "channel_id": "508",
                "game_id": "2",
                "publisher": "EULCS2",
                "publisher_original_id": "eulcs2",
                "url": "https://secure.twitch.tv/eulcs2/v/77076652",
                "storyboard_spec": "0",
                "channel": {
                    "channel_id": "508",
                    "partner": "3",
                    "channel_name_original": "eulcs2",
                    "channel_name": "EULCS2"
                },
                "game": {
                    "game_id": "2",
                    "partner": "3",
                    "game_name_original": "League of Legends"
                }
            },
            "user": {
                "id": "80144",
                "display_name": "anonymous",
                "image": "",
                "personalize": "",
                "followers": 0
            }
        },
        {
            "id": "21216",
            "asset_id": "1993",
            "publisher_id": "80144",
            "timestamp": "1467663214",
            "tag": "test live link 2",
            "time_start": "8494",
            "time_end": "8514",
            "status_deleted": "0",
            "epoch_added": "1467663214",
            "count_played": "0",
            "count_played_dup": "2",
            "asset": {
                "id": "1993",
                "epoch_added": "1467661997",
                "source": "3",
                "resource_id": "v76208228",
                "thumb": "https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-320x180.jpg",
                "duration": "7157.00",
                "status": "recording",
                "status_deleted": "0",
                "recorded_at": "1467654685",
                "title": "YoDa - Aprendendo Como Jogar Lida das Lendas com os comentaristas do meu chat.",
                "channel_id": "546",
                "game_id": "2",
                "publisher": "YoDa",
                "publisher_original_id": "yoda",
                "url": "https://www.twitch.tv/yoda/v/76208228",
                "storyboard_spec": "0",
                "channel": {
                    "channel_id": "546",
                    "partner": "3",
                    "channel_name_original": "yoda",
                    "channel_name": "YoDa"
                },
                "game": {
                    "game_id": "2",
                    "partner": "3",
                    "game_name_original": "League of Legends"
                }
            },
            "user": {
                "id": "80144",
                "display_name": "anonymous",
                "image": "",
                "personalize": "",
                "followers": 0
            }
        }
    ],
    "user": {
        "id": "80144",
        "display_name": "anonymous",
        "image": "",
        "personalize": "",
        "followers": 0
    }
}
```

------------------------------------------------
<a name="playlist_partner_asset_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/playlists/{partner}/asset/{id}

Get playlists associated with a video. Partner can be twitch, youtube, facebook, vimeo etc and id is the video ID.

#### Nametag

[playlist_partner_asset_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_partner_asset_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| limit | optional | number | Number of playlists to be fetched. Default is 10 |
| offset | optional | number | Allow to fetch playlists starting from a particular index. Default is 0 |
| sort_by | optional | string | Sort by either time or popularity. Default value is time. Order is always descending |

#### Example Request

The following example gets the 2th most popular playlist for a twitch video (e.g. v66318170)

```bash
curl -X GET https://api.themoment.tv/v1/playlists/twitch/asset/v66318170?limit=1&offset=1&sort_by=popularity
```

#### Example Response

```json
{
    "_total": 9,
    "_offset": "1",
    "_limit": "1",
    "_playlists": [
        {
            "id": "2250",
            "title": "[MSI 2016 Semifinal 2] CLG vs FW - Game 1",
            "thumb": "",
            "moment_count": "6",
            "duration": "132",
            "publisher_id": "1799",
            "status_public": "1",
            "status_blocked": "0",
            "status_deleted": "0",
            "copy_playlist_id": "0",
            "count_played": "199",
            "count_played_dup": "225",
            "count_shared": "0",
            "epoch_added": "1463201158",
            "mode": "handpick",
            "terms": "",
            "status_changed": "0",
            "playlist_type": "0",
            "channel_ids": "27",
            "game_ids": "2",
            "asset_ids": "1756",
            "sticky_asset_id": "0",
            "moments": "17393,17394,17395,17397,17398,17399",
            "user_id": "1799",
            "user_display_name": "Angel “Txileno” Olórtegui",
            "user_image": "https://lh5.googleusercontent.com/-v5CrSoB23jE/AAAAAAAAAAI/AAAAAAAAAFo/JSaoy5roaDg/photo.jpg?sz=50",
            "user_personalize": "",
            "first_moment": {
                "id": "17393",
                "asset_id": "1756",
                "publisher_id": "1799",
                "tag": "banspicks",
                "time_start": "5439",
                "timestamp": "1463205644",
                "time_end": "5449",
                "time_percent_start": "0.00",
                "time_percent_end": "0.00",
                "status_public": "1",
                "status_blocked": "0",
                "status_deleted": "0",
                "count_played": "202",
                "count_played_dup": "269",
                "count_shared": "0",
                "search_string": "banspicks",
                "copy_moment_id": "0",
                "goto_moment_id": "0",
                "epoch_added": "1463205645",
                "asset": {
                    "id": "1756",
                    "epoch_added": "1463200772",
                    "source": "3",
                    "resource_id": "v66318170",
                    "thumb": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-320x180.jpg",
                    "duration": "660.00",
                    "status": "recording",
                    "status_deleted": "0",
                    "recorded_at": "1463200099",
                    "title": "2016 Mid-Season Invitational: Semifinals Day 2",
                    "channel_id": "27",
                    "game_id": "2",
                    "publisher": "Riot Games",
                    "publisher_original_id": "riotgames",
                    "url": "https://www.twitch.tv/riotgames/v/66318170",
                    "storyboard_spec": "0",
                    "channel": {
                        "channel_id": "27",
                        "partner": "3",
                        "channel_name_original": "riotgames",
                        "channel_name": "Riot Games"
                    },
                    "game": {
                        "game_id": "2",
                        "partner": "3",
                        "game_name_original": "League of Legends"
                    }
                },
                "user": {
                    "id": "1799",
                    "display_name": "Angel “Txileno” Olórtegui",
                    "image": "https://lh5.googleusercontent.com/-v5CrSoB23jE/AAAAAAAAAAI/AAAAAAAAAFo/JSaoy5roaDg/photo.jpg?sz=50",
                    "personalize": "",
                    "followers": 10
                }
            },
            "user": {
                "id": "1799",
                "display_name": "Angel “Txileno” Olórtegui",
                "image": "https://lh5.googleusercontent.com/-v5CrSoB23jE/AAAAAAAAAAI/AAAAAAAAAFo/JSaoy5roaDg/photo.jpg?sz=50",
                "personalize": ""
            }
        }
    ]
}
```


------------------------------------------------
<a name="playlist_partner_channel_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/playlists/{partner}/channel/{id}

Get playlists associated with a channel. Partner can be twitch, youtube, facebook, vimeo etc and id is the channel name.

#### Nametag

[playlist_partner_channel_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_partner_channel_endpoint)

#### Parameters

The parameters are same as the Playlist [Partner Asset Endpoint](#playlist_partner_asset_endpoint)

#### Example Request

The following example gets the most popular playlist for a twitch channel (e.g. riotgames)

```bash
curl -X GET https://api.themoment.tv/v1/playlists/twitch/channel/riotgames?limit=1&offset=0&sort_by=popularity
```

#### Example Response

```json
{
    "_total": 412,
    "_offset": 0,
    "_limit": "1",
    "_playlists": [
        {
            "id": "1878",
            "title": "LCK week 12 TOP PLAYS !!",
            "thumb": "",
            "moment_count": "22",
            "duration": "475",
            "publisher_id": "5199",
            "status_public": "1",
            "status_blocked": "0",
            "status_deleted": "0",
            "copy_playlist_id": "0",
            "count_played": "1716",
            "count_played_dup": "2194",
            "count_shared": "0",
            "epoch_added": "1459721928",
            "mode": "handpick",
            "terms": "",
            "status_changed": "0",
            "playlist_type": "0",
            "channel_ids": "27",
            "game_ids": "2",
            "asset_ids": "1553,1562,1569,1596",
            "sticky_asset_id": "0",
            "moments": "13639,13640,13641,13642,13643,13644,13645,13646,13647,13648,13649,13650,13651,13652,13789,13790,13791,13792,13793,13794,13795,13796",
            "user_id": "5199",
            "user_display_name": "isaac basabe",
            "user_image": "https://lh6.googleusercontent.com/-8jtBDWcg9N0/AAAAAAAAAAI/AAAAAAAAADk/J3Jvt9ASg2k/photo.jpg?sz=50",
            "user_personalize": "",
            "first_moment": {
                "id": "13639",
                "asset_id": "1553",
                "publisher_id": "5199",
                "tag": "ROX Pray, Sniper Jhin !!",
                "time_start": "5558",
                "timestamp": "1459723478",
                "time_end": "5568",
                "time_percent_start": "0.00",
                "time_percent_end": "0.00",
                "status_public": "1",
                "status_blocked": "0",
                "status_deleted": "0",
                "count_played": "1703",
                "count_played_dup": "2384",
                "count_shared": "0",
                "search_string": "ROX Pray, Sniper Jhin !!",
                "copy_moment_id": "0",
                "goto_moment_id": "0",
                "epoch_added": "1459723479",
                "asset": {
                    "id": "1553",
                    "epoch_added": "1459340717",
                    "source": "3",
                    "resource_id": "v57542923",
                    "thumb": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-320x180.jpg",
                    "duration": "15474.00",
                    "status": "recording",
                    "status_deleted": "0",
                    "recorded_at": "1459323921",
                    "title": "LCK Spring - Week 12 Day 1",
                    "channel_id": "27",
                    "game_id": "2",
                    "publisher": "Riot Games",
                    "publisher_original_id": "riotgames",
                    "url": "https://www.twitch.tv/riotgames/v/57542923",
                    "storyboard_spec": "0",
                    "channel": {
                        "channel_id": "27",
                        "partner": "3",
                        "channel_name_original": "riotgames",
                        "channel_name": "Riot Games"
                    },
                    "game": {
                        "game_id": "2",
                        "partner": "3",
                        "game_name_original": "League of Legends"
                    }
                },
                "user": {
                    "id": "5199",
                    "display_name": "isaac basabe",
                    "image": "https://lh6.googleusercontent.com/-8jtBDWcg9N0/AAAAAAAAAAI/AAAAAAAAADk/J3Jvt9ASg2k/photo.jpg?sz=50",
                    "personalize": "",
                    "followers": 2
                }
            },
            "user": {
                "id": "5199",
                "display_name": "isaac basabe",
                "image": "https://lh6.googleusercontent.com/-8jtBDWcg9N0/AAAAAAAAAAI/AAAAAAAAADk/J3Jvt9ASg2k/photo.jpg?sz=50",
                "personalize": ""
            }
        }
    ]
}
```

------------------------------------------------
<a name="playlist_moment_position_set_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png)
## https://api.theMoment.tv/v1/playlists/{id}/moment_position_set

Sets the position of a moment within a playlist.

#### Nametag

[playlist_moment_position_set_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_moment_position_set_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| position | required | number | position within the playlist |
| moment_id | required | number | id of the moment object |

#### Example Request

The following examples sets moment 21218 as the first moment of playlist 2728. Warning: this call neither checks duplicity nor ownership. In fact this is a deprecated endpoint that is awaiting removal and this functionality is covered by the Playlist (Update Endpoint)[#playlist_update_endpoint].

```bash
curl --data "\
position=0&\
moment_id=21218" https://api.themoment.tv/v1/playlists/2728/moment_position_set
```

#### Example Response

```json
{
    "status": "success"
}
```
