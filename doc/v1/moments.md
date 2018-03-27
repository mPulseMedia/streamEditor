<a name="top"></a>
[< README](/README.md#top)

# Moments

Moments are individual highlights within a live stream/video.

|         | Endpoint | Description |
| ------- |-------- | ----------- |
| [![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)](#moment_create_endpoint) | [https://api.theMoment.tv/v1/moments](#moment_create_endpoint) | Create a new moment |
| [![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)](#moment_live_endpoint) | [https://api.theMoment.tv/v1/moments/live](#moment_live_endpoint) | Create a new live tag moment|
| [![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)](#moment_update_endpoint) | [https://api.theMoment.tv/v1/moments/{id}](#moment_update_endpoint) | Update a moment |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#moment_get_endpoint) | [https://api.theMoment.tv/v1/moments/{id}](#moment_get_endpoint) | Get a moment object |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#moment_partner_asset_endpoint) |  [https://api.theMoment.tv/v1/moments/{partner}/asset/{id}](#moment_partner_asset_endpoint) | Get moments associated with a video |
| [![DELETE](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png)](#moment_delete) |  [https://api.theMoment.tv/v1/moments/{id}](#moment_delete_endpoint) | Delete moment |

------------------------------------------------
<a name="moment_create_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
## https://api.theMoment.tv/v1/moments

Create a new moment.

#### Nametag

[moment_create_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_create_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| asset_source | required | string | Source of the moment (twitch, youtube, facebook, vimeo etc.) |
| asset_resource_id | required | string | Partner specific ID of the asset |
| time_start | required | number | Starting time of the moment. For live channel it should be the UTC timestamp |
| tag | required | string | Tag of the moment |
| auid | required | string | Identifier of the client |
| | | |
| asset_publisher | optional | string | Partner specific ID of the publisher |
| asset_publisher_original_id | optional | string | Partner specific display name of the publisher|
| asset_title | optional | string | Title of the asset |
| asset_duration | optional | string | Duration of the asset |
| asset_thumb | optional | string | Thumbnail preview of the asset |
| asset_url | optional | string | URL of the asset |
| asset_statue | optional | string | Current status of the asset. Could be recording or recorded |
| asset_recorded_at | optional | time | Time asset was recorded (UTC) |
| game | optional | string | Associated game of the asset |
| timestamp | optional | number | Timestamp of the time moment is created (UTC) |

#### Example Request

```bash
curl --data "\
asset_source=twitch&\
asset_resource_id=v77076652&\
time_start=1468066157&\
tag=LOL Rampage&\
auid=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m" https://api.themoment.tv/v1/moments
```

#### Example Response

```json
{
    "id":                 "0",
    "asset_id":           "0",
    "publisher_id":       "0",
    "tag":                "tag",
    "time_start":         "0",
    "timestamp":          "0",
    "time_end":           "0",
    "time_percent_start": "0",
    "time_percent_end":   "0",
    "status_public":      "0",
    "status_blocked":     "0",
    "status_deleted":     "0",
    "count_played":       "0",
    "count_played_dup":   "0",
    "count_shared":       "0",
    "search_string":      "search_string",
    "copy_moment_id":     "0",
    "goto_moment_id":     "0",
    "epoch_added":        "0",
    "asset": {
        "id":                    "0",
        "epoch_added":           "0",
        "source":                "0",
        "resource_id":           "0",
        "thumb":                 "thumb",
        "duration":              "0",
        "status":                "status",
        "status_deleted":        "0",
        "recorded_at":           "0",
        "title":                 "title",
        "channel_id":            "0",
        "game_id":               "0",
        "publisher":             "publisher",
        "publisher_original_id": "publisher_original_id",
        "url":                   "url",
        "storyboard_spec":       "0",
        "channel":                   {
            "channel_id":            "0",
            "partner":               "0",
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        },
        "game":                      {
            "game_id":            "0",
            "partner":            "0",
            "game_name_original": "game_name_original"
        }
    },
    "user": {
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    },
    "addedTo": [{
        "id":    "0",
        "title": "title"
    }]
}
```

------------------------------------------------
<a name="moment_live_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
## https://api.theMoment.tv/v1/moments/live

Create a new live tag moment.

#### Nametag

[moment_live_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_live_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| asset_source | required | string | Source of the moment (twitch, youtube, facebook, vimeo, webex, etc.) |
| asset_resource_id | required | string | Partner specific ID of the asset |
| user_id | required | string | ID of the user |
| api_key | required | string | API Key of the request |
| tag | optional | string | Tag of the moment |


#### Example Request

```bash
curl --data "\
asset_source=twitch&\
asset_resource_id=v77076652&\
user_id=79529&\
tag=LOL Rampage&\
api_key=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m" https://api.themoment.tv/v1/moments/live
```

#### Example Response

```json
{
    "id":           "0",
    "asset_id":     "0",
    "publisher_id": "0",
    "tag":          "tag",
    "time_start":   "0",
    "timestamp":    "0",
    "time_end":     "0",
    "asset":           {
        "id":          "0",
        "resource_id": "0",
        "thumb":       "thumb",
        "duration":    "0",
        "status":      "status",
        "recorded_at": "0",
        "title":       "title",
        "url":         "url",
        "channel":                   {
            "channel_id":            "0",
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        }
    },
    "user": {
        "id":           "0",
        "display_name": "display_name",
        "image":        "",
        "followers":    0
    },
    "addedTo": [{
        "id":           "0",
        "title":        "title",
        "moment_count": 3
    }]
}
```

------------------------------------------------
<a name="moment_update_endpoint"></a>
[<](#top)

![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)
## https://api.theMoment.tv/v1/moments/{id}

Update a moment.

#### Nametag

[moment_update_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_update_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| method | required | string | Allowed values are edit and remove |
| auid | required | string | Identifier of the client |
| | | |
| time_start | optional | number | Starting time of the moment |
| time_end | optional | number | Ending time of the moment |


#### Example Request

```bash
curl --data "\
tag=LOL Rampage&\
time_start=11539&\
time_end=11569&\
method=edit&\
auid=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m" https://api.themoment.tv/v1/moments/21061
```

#### Example Response

```json
{
    "id":                 "0",
    "asset_id":           "0",
    "publisher_id":       "0",
    "tag":                "tag",
    "time_start":         "0",
    "timestamp":          "0",
    "time_end":           "0",
    "time_percent_start": "0",
    "time_percent_end":   "0",
    "status_public":      "0",
    "status_blocked":     "0",
    "status_deleted":     "0",
    "count_played":       "0",
    "count_played_dup":   "0",
    "count_shared":       "0",
    "search_string":      "search_string",
    "copy_moment_id":     "0",
    "goto_moment_id":     "0",
    "epoch_added":        "0",
    "asset": {
        "id":                    "0",
        "epoch_added":           "0",
        "source":                "0",
        "resource_id":           "0",
        "thumb":                 "thumb",
        "duration":              "0",
        "status":                "status",
        "status_deleted":        "0",
        "recorded_at":           "0",
        "title":                 "title",
        "channel_id":            "0",
        "game_id":               "0",
        "publisher":             "publisher",
        "publisher_original_id": "publisher_original_id",
        "url":                   "url",
        "storyboard_spec":       "0",
        "channel":                   {
            "channel_id":            "0",
            "partner":               "0",
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        },
        "game":                      {
            "game_id":            "0",
            "partner":            "0",
            "game_name_original": "game_name_original"
        }
    },
    "user": {
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    },
    "addedTo": [{
        "id":    "0",
        "title": "title"
    }]
}
```
------------------------------------------------
<a name="moment_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/moments/{id}

Get object data about an individual moment as identified by its id.

#### Nametag

[moment_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_get_endpoint)


#### Example Request

```bash
curl -X GET https://api.themoment.tv/v1/moments/2599
```

#### Example Response
```json
{
    "id":               "0",
    "asset_id":         "0",
    "publisher_id":     "0",
    "timestamp":        "0",
    "tag":              "tag",
    "time_start":       "0",
    "time_end":         "0",
    "status_deleted":   "0",
    "epoch_added":      "0",
    "count_played":     "0",
    "count_played_dup": "0",
    "asset": {
        "id":                    "0",
        "epoch_added":           "0",
        "source":                "0",
        "resource_id":           "0",
        "thumb":                 "thumb",
        "duration":              "0",
        "status":                "status",
        "status_deleted":        "0",
        "recorded_at":           "0",
        "title":                 "title",
        "channel_id":            "0",
        "game_id":               "0",
        "publisher":             "publisher",
        "publisher_original_id": "publisher_original_id",
        "url":                   "url",
        "storyboard_spec":       "0",
        "channel": {
            "channel_id":            "0",
            "partner":               "0",
            "channel_name_original": "riotgames",
            "channel_name":          "Riot Games"
        }
    },
    "user": {
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    }
}
```

------------------------------------------------

<a name="moment_partner_asset_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/moments/{partner}/asset/{id}

Get moments associated with a video. Partner can be twitch, youtube, facebook, vimeo etc and id is the video ID.

#### Nametag
[moment_partner_asset_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_partner_asset_endpoint)

#### Example Request

The following example gets all moments associated with the twitch video v66318170

```bash
curl -X GET https://api.themoment.tv/v1/moments/twitch/asset/v66318170
```

#### Example Response

```json
[
    {
        "id": "17391",
        "asset_id": "1756",
        "publisher_id": "1799",
        "timestamp": "1463200771",
        "tag": "test 51.30",
        "time_start": "642",
        "time_end": "662",
        "status_deleted": "0",
        "epoch_added": "1463200772",
        "count_played": "0",
        "count_played_dup": "4",
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
    ....
]
```



------------------------------------------------

<a name="moment_delete_endpoint"></a>
[<](#top)

![DELETE](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png)
## https://api.theMoment.tv/v1/moments/{id}

Delete moment with given ID.

#### Nametag
[moment_delete_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_delete_endpoint)

#### Example Request

The following example delete moment with given ID.

```bash
curl -X DELETE https://api.themoment.tv/v1/moments/123
```
