<a name="top"></a>
[< README](/README.md#top)

# Moments

Moments are individual highlights within a live stream/video.

|         | Endpoint | Description |
| ------- |-------- | ----------- |
| [![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)](#moment_create_endpoint) | [https://api.theMoment.tv/v1/moments](#moment_create_endpoint) | Create a new moment |
| [![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)](#moment_create_live_endpoint) | [https://api.theMoment.tv/v1/moments/live](#moment_create_live_endpoint) | Create a new moment at a live event |
| [![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)](#moment_update_endpoint) | [https://api.theMoment.tv/v1/moments/{id}](#moment_update_endpoint) | Update a moment |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#moment_get_endpoint) | [https://api.theMoment.tv/v1/moments/{id}](#moment_get_endpoint) | Get a moment object |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#moment_partner_asset_endpoint) |  [https://api.theMoment.tv/v1/moments/{partner}/asset/{id}](#moment_partner_asset_endpoint) | Get moments associated with a video |
| [![DELETE](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png)](#moment_delete) |  [https://api.theMoment.tv/v1/moments/{id}](#moment_delete_endpoint) | Delete moment |

------------------------------------------------
<a name="moment_create_endpoint"></a>
[<TOP](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
## https://api.theMoment.tv/v1/moments

Create a new moment.

#### Nametag

[moment_create_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_create_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| asset_source | required | string | Source of the moment (youtube, twitch, facebook, vimeo etc.) |
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
asset_source=youtube&\
asset_resource_id=0&\
time_start=0&\
tag=tag&\
auid=0" https://api.themoment.tv/v1/moments
```

#### Example Response

```json
{
    "id":                            0,
    "asset_id":                      0,
    "publisher_id":                  0,
    "tag":                           "tag",
    "time_start":                    0,
    "timestamp":                     0,
    "time_end":                      0,
    "time_percent_start":            0,
    "time_percent_end":              0,
    "status_public":                 0,
    "status_blocked":                0,
    "status_deleted":                0,
    "count_played":                  0,
    "count_played_dup":              0,
    "count_shared":                  0,
    "search_string":                 "search_string",
    "copy_moment_id":                0,
    "goto_moment_id":                0,
    "epoch_added":                   0,
    "asset": {
        "id":                        0,
        "epoch_added":               0,
        "source":                    0,
        "resource_id":               0,
        "thumb":                     "thumb",
        "duration":                  0,
        "status":                    "status",
        "status_deleted":            0,
        "recorded_at":               0,
        "title":                     "title",
        "channel_id":                0,
        "game_id":                   0,
        "publisher":                 "publisher",
        "publisher_original_id":     "publisher_original_id",
        "url":                       "url",
        "storyboard_spec":           0,
        "channel": {
            "channel_id":            0,
            "partner":               0,
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        },
        "game": {
            "game_id":               0,
            "partner":               0,
            "game_name_original":    "game_name_original"
        }
    },
    "user": {
        "id":                        0,
        "display_name":              "display_name",
        "image":                     "image",
        "personalize":               "personalize",
        "followers":                 0
    },
    "addedTo": [{
        "id":                        0,
        "title":                     "title"
    }]
}
```

------------------------------------------------
<a name="moment_create_live_endpoint"></a>
[<TOP](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
## https://api.theMoment.tv/v1/moments/live

Create a new moment at a live event.

#### Nametag

[moment_create_live_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_create_live_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| api_key | required | string | API Key of the request |
| event_id | required | string | Unique identifier of event |
| user_id | required | string | Partner-specific ID of the asset |
| | | | |
| tag | optional | string | Tag of the moment |
| session_id | required | string | ID of session if event runs concurrent sessions |

#### Example Request

```bash
curl --data "event_id=1000&user_id=12345&tag=Wow" --header "api_key: xyz" https://api.themoment.tv/v1/moments/live
```

#### Example Response

```json
{
    "event_id":                             1000,
    "user_id":                              12345,
    "tag":                                  "Wow",
    "moment_id":                            3242
}
```

------------------------------------------------
<a name="moment_update_endpoint"></a>
[<TOP](#top)

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
tag=tag&\
time_start=0&\
time_end=0&\
method=edit&\
auid=0" https://api.themoment.tv/v1/moments/0
```

#### Example Response

```json
{
    "id":                            0,
    "asset_id":                      0,
    "publisher_id":                  0,
    "tag":                           "tag",
    "time_start":                    0,
    "timestamp":                     0,
    "time_end":                      0,
    "time_percent_start":            0,
    "time_percent_end":              0,
    "status_public":                 0,
    "status_blocked":                0,
    "status_deleted":                0,
    "count_played":                  0,
    "count_played_dup":              0,
    "count_shared":                  0,
    "search_string":                 "search_string",
    "copy_moment_id":                0,
    "goto_moment_id":                0,
    "epoch_added":                   0,
    "asset": {
        "id":                        0,
        "epoch_added":               0,
        "source":                    0,
        "resource_id":               0,
        "thumb":                     "thumb",
        "duration":                  0,
        "status":                    "status",
        "status_deleted":            0,
        "recorded_at":               0,
        "title":                     "title",
        "channel_id":                0,
        "game_id":                   0,
        "publisher":                 "publisher",
        "publisher_original_id":     "publisher_original_id",
        "url":                       "url",
        "storyboard_spec":           0,
        "channel": {
            "channel_id":            0,
            "partner":               0,
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        },
        "game": {
            "game_id":               0,
            "partner":               0,
            "game_name_original":    "game_name_original"
        }
    },
    "user": {
        "id":                        0,
        "display_name":              "display_name",
        "image":                     "image",
        "personalize":               "personalize",
        "followers":                 0
    },
    "addedTo": [{
        "id":                        0,
        "title":                     "title"
    }]
}
```
------------------------------------------------
<a name="moment_get_endpoint"></a>
[<TOP](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/moments/{id}

Get object data about an individual moment as identified by its id.

#### Nametag

[moment_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_get_endpoint)


#### Example Request

```bash
curl -X GET https://api.themoment.tv/v1/moments/0
```

#### Example Response
```json
{
    "id":                            0,
    "asset_id":                      0,
    "publisher_id":                  0,
    "timestamp":                     0,
    "tag":                           "tag",
    "time_start":                    0,
    "time_end":                      0,
    "status_deleted":                0,
    "epoch_added":                   0,
    "count_played":                  0,
    "count_played_dup":              0,
    "asset": {
        "id":                        0,
        "epoch_added":               0,
        "source":                    0,
        "resource_id":               0,
        "thumb":                     "thumb",
        "duration":                  0,
        "status":                    "status",
        "status_deleted":            0,
        "recorded_at":               0,
        "title":                     "title",
        "channel_id":                0,
        "game_id":                   0,
        "publisher":                 "publisher",
        "publisher_original_id":     "publisher_original_id",
        "url":                       "url",
        "storyboard_spec":           0,
        "channel": {
            "channel_id":            0,
            "partner":               0,
            "channel_name_original": "channel_name_original",
            "channel_name":          "channel_name"
        }
    },
    "user": {
        "id":                        0,
        "display_name":              "display_name",
        "image":                     "image",
        "personalize":               "personalize",
        "followers":                 0
    }
}
```

------------------------------------------------

<a name="moment_partner_asset_endpoint"></a>
[<TOP](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/moments/{partner}/asset/{id}

Get moments associated with a video. Partner can be Youtube, Twitch, Vimeo etc. and id is the video ID.

#### Nametag
[moment_partner_asset_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_partner_asset_endpoint)

#### Example Request

The following example gets all moments associated with the Youtube video 0

```bash
curl -X GET https://api.themoment.tv/v1/moments/youtube/asset/0
```

#### Example Response

```json
[
    {
        "id":                            0,
        "asset_id":                      0,
        "publisher_id":                  0,
        "timestamp":                     0,
        "tag":                           "tag",
        "time_start":                    0,
        "time_end":                      0,
        "status_deleted":                0,
        "epoch_added":                   0,
        "count_played":                  0,
        "count_played_dup":              0,
        "asset":                         {
            "id":                        0,
            "epoch_added":               0,
            "source":                    0,
            "resource_id":               0,
            "thumb":                     "thumb",
            "duration":                  0,
            "status":                    "status",
            "status_deleted":            0,
            "recorded_at":               0,
            "title":                     "title",
            "channel_id":                0,
            "game_id":                   0,
            "publisher":                 "publisher",
            "publisher_original_id":     "publisher_original_id",
            "url":                       "url",
            "storyboard_spec":           0,
            "channel":                   {
                "channel_id":            0,
                "partner":               0,
                "channel_name_original": "channel_name_original",
                "channel_name":          "channel_name"
            },
            "game":                      {
                "game_id":               0,
                "partner":               0,
                "game_name_original":    "game_name_original"
            }
        },
        "user":                          {
            "id":                        0,
            "display_name":              "display_name",
            "image":                     "image",
            "personalize":               "",
            "followers":                 0
        }
    },
    ....
]
```



------------------------------------------------

<a name="moment_delete_endpoint"></a>
[<TOP](#top)

![DELETE](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png)
## https://api.theMoment.tv/v1/moments/{id}

Delete moment with given ID.

#### Nametag
[moment_delete_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_delete_endpoint)

#### Example Request

The following example deletes moment with given ID.

```bash
curl -X DELETE https://api.themoment.tv/v1/moments/0
```
