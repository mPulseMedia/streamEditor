<a name="top"></a>
[< README](/README.md#top)

# Playlists

Playlists, or 'remixes' as presented to users, are a series of moments/highlights across one or more live streams/videos.

|       | Endpoint | Description |
| ----- | -------- | ----------- |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png) |  [https://api.theMoment.tv/v1/playlists](#playlist_create_endpoint) | Create a new playlist |
| ![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png) |  [https://api.theMoment.tv/v1/playlists/{id}](#playlist_update_endpoint) | Update a playlist |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png) |  [https://api.theMoment.tv/v1/playlists/{id}](#playlist_get_endpoint) | Get a playlist object |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png) |  [https://api.theMoment.tv/v1/playlists/{partner}/asset/{id}](#playlist_partner_asset_endpoint) | Get playlists associated with a video |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png) |  [https://api.theMoment.tv/v1/playlists/{partner}/channel/{id}](#playlist_partner_channel_endpoint) | Get playlists associated with a channel |
| ![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png) |  [https://api.theMoment.tv/v1/playlists/{id}/moment_position_set](#playlist_moment_position_set_endpoint) | Sets the position of a moment within a playlist |
| ![DELETE](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png) |  [https://api.theMoment.tv/v1/playlists/{id}](#playlist_moment_delete_endpoint) | Delete playlist |

------------------------------------------------
<a name="playlist_create_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
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
title=title&\
status_public=0&\
mode=handpick&\
moment_ids=0,0&\
auid=0" https://api.themoment.tv/v1/playlists
```

#### Example Response

```json
{
    "id":               "0",
    "title":            "title",
    "thumb":            "",
    "moment_count":     0,
    "duration":         "0",
    "publisher_id":     "0",
    "status_public":    "0",
    "status_blocked":   "0",
    "status_deleted":   "0",
    "copy_playlist_id": "0",
    "count_played":     "0",
    "count_played_dup": "0",
    "count_shared":     "0",
    "epoch_added":      "0",
    "mode":             "mode",
    "terms":            "",
    "status_changed":   "0",
    "playlist_type":    "0",
    "channel_ids":      "0,0",
    "game_ids":         "0",
    "asset_ids":        "0,0",
    "sticky_asset_id":  "0",
    "moments":          "0,0",
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
<a name="playlist_update_endpoint"></a>
[<](#top)

![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)
## https://api.theMoment.tv/v1/playlists/{id}

Update a playlist.

#### Nametag
[playlist_update_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_update_endpoint)

#### Parameters

The parameters are same as the Playlist [Create Endpoint](#playlist_create_endpoint)

#### Example Request

```bash
curl --data "\
title=title&\
status_public=0&\
mode=handpick&\
moment_ids=0,0,0&\
auid=0" https://api.themoment.tv/v1/playlists/0
```

#### Example Response

```json
{
    "id":               "0",
    "title":            "title",
    "thumb":            "",
    "moment_count":     0,
    "duration":         "0",
    "publisher_id":     "0",
    "status_public":    "0",
    "status_blocked":   "0",
    "status_deleted":   "0",
    "copy_playlist_id": "0",
    "count_played":     "0",
    "count_played_dup": "0",
    "count_shared":     "0",
    "epoch_added":      "0",
    "mode":             "handpick",
    "terms":            "",
    "status_changed":   "0",
    "playlist_type":    "0",
    "channel_ids":      "0,0",
    "game_ids":         "0",
    "asset_ids":        "0,0",
    "sticky_asset_id":  "0",
    "moments":          "0,0,0",
    "user":             {
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    }
}
```

------------------------------------------------
<a name="playlist_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
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
curl -X GET https://api.themoment.tv/v1/playlists/0?limit=10
```

#### Example Response

```json
{
    "id":                                    "0",
    "title":                                 "title",
    "thumb":                                 "",
    "moment_count":                          0,
    "duration":                              "0",
    "publisher_id":                          "0",
    "status_public":                         "0",
    "status_blocked":                        "0",
    "status_deleted":                        "0",
    "copy_playlist_id":                      "0",
    "count_played":                          "0",
    "count_played_dup":                      "0",
    "count_shared":                          "0",
    "epoch_added":                           "0",
    "mode":                                  "handpick",
    "terms":                                 "",
    "status_changed":                        "0",
    "playlist_type":                         "0",
    "channel_ids":                           "0,0",
    "game_ids":                              "0",
    "asset_ids":                             "0,0",
    "sticky_asset_id":                       "0",
    "moments": [
        {
            "id":                            "0",
            "asset_id":                      "0",
            "publisher_id":                  "0",
            "timestamp":                     "0",
            "tag":                           "tag",
            "time_start":                    "0",
            "time_end":                      "0",
            "status_deleted":                "0",
            "epoch_added":                   "0",
            "count_played":                  "0",
            "count_played_dup":              "0",
            "asset": {
                "id":                        "0",
                "epoch_added":               "0",
                "source":                    "0",
                "resource_id":               "0",
                "thumb":                     "thumb",
                "duration":                  "0",
                "status":                    "recording",
                "status_deleted":            "0",
                "recorded_at":               "0",
                "title":                     "title",
                "channel_id":                "0",
                "game_id":                   "0",
                "publisher":                 "0",
                "publisher_original_id":     "0",
                "url":                       "url",
                "storyboard_spec":           "0",
                "channel": {
                    "channel_id":            "0",
                    "partner":               "0",
                    "channel_name_original": "channel_name_original",
                    "channel_name":          "channel_name"
                },
                "game": {
                    "game_id":               "0",
                    "partner":               "0",
                    "game_name_original":    "game_name_original"
                }
            },
            "user": {
                "id":                        "0",
                "display_name":              "display_name",
                "image":                     "",
                "personalize":               "",
                "followers":                 0
            }
        },
        {
            "id":                            "0",
            "asset_id":                      "0",
            "publisher_id":                  "0",
            "timestamp":                     "0",
            "tag":                           "tag",
            "time_start":                    "0",
            "time_end":                      "0",
            "status_deleted":                "0",
            "epoch_added":                   "0",
            "count_played":                  "0",
            "count_played_dup":              "0",
            "asset": {
                "id":                        "0",
                "epoch_added":               "0",
                "source":                    "0",
                "resource_id":               "0",
                "thumb":                     "thumb",
                "duration":                  "0",
                "status":                    "status",
                "status_deleted":            "0",
                "recorded_at":               "0",
                "title":                     "title",
                "channel_id":                "0",
                "game_id":                   "0",
                "publisher":                 "publisher",
                "publisher_original_id":     "publisher_original_id",
                "url":                       "url",
                "storyboard_spec":           "0",
                "channel": {
                    "channel_id":            "0",
                    "partner":               "0",
                    "channel_name_original": "channel_name_original",
                    "channel_name":          "channel_name"
                },
                "game": {
                    "game_id":               "0",
                    "partner":               "0",
                    "game_name_original":    "game_name_original"
                }
            },
            "user": {
                "id":                        "0",
                "display_name":              "display_name",
                "image":                     "",
                "personalize":               "",
                "followers":                 0
            }
        }
    ],
    "user": {
        "id":                                "0",
        "display_name":                      "display_name",
        "image":                             "",
        "personalize":                       "",
        "followers":                         0
    }
}
```

------------------------------------------------
<a name="playlist_partner_asset_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
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
curl -X GET https://api.themoment.tv/v1/playlists/youtube/asset/0?limit=1&offset=1&sort_by=popularity
```

#### Example Response

```json
{
    "_total":                                    0,
    "_offset":                                   "0",
    "_limit":                                    "0",
    "_playlists": [
        {
            "id":                                "0",
            "title":                             "title",
            "thumb":                             "",
            "moment_count":                      "0",
            "duration":                          "0",
            "publisher_id":                      "0",
            "status_public":                     "0",
            "status_blocked":                    "0",
            "status_deleted":                    "0",
            "copy_playlist_id":                  "0",
            "count_played":                      "0",
            "count_played_dup":                  "0",
            "count_shared":                      "0",
            "epoch_added":                       "0",
            "mode":                              "handpick",
            "terms":                             "",
            "status_changed":                    "0",
            "playlist_type":                     "0",
            "channel_ids":                       "0",
            "game_ids":                          "0",
            "asset_ids":                         "0",
            "sticky_asset_id":                   "0",
            "moments":                           "0,0",
            "user_id":                           "0",
            "user_display_name":                 "user_display_name",
            "user_image":                        "user_image",
            "user_personalize":                  "",
            "first_moment": {
                "id":                            "0",
                "asset_id":                      "0",
                "publisher_id":                  "0",
                "tag":                           "tag",
                "time_start":                    "0",
                "timestamp":                     "0",
                "time_end":                      "0",
                "time_percent_start":            "0",
                "time_percent_end":              "0",
                "status_public":                 "0",
                "status_blocked":                "0",
                "status_deleted":                "0",
                "count_played":                  "0",
                "count_played_dup":              "0",
                "count_shared":                  "0",
                "search_string":                 "search_string",
                "copy_moment_id":                "0",
                "goto_moment_id":                "0",
                "epoch_added":                   "0",
                "asset": {
                    "id":                        "0",
                    "epoch_added":               "0",
                    "source":                    "0",
                    "resource_id":               "0",
                    "thumb":                     "thumb",
                    "duration":                  "0",
                    "status":                    "status",
                    "status_deleted":            "0",
                    "recorded_at":               "0",
                    "title":                     "title",
                    "channel_id":                "0",
                    "game_id":                   "0",
                    "publisher":                 "publisher",
                    "publisher_original_id":     "publisher_original_id",
                    "url":                       "url",
                    "storyboard_spec":           "0",
                    "channel": {
                        "channel_id":            "0",
                        "partner":               "0",
                        "channel_name_original": "channel_name_original",
                        "channel_name":          "channel_name"
                    },
                    "game": {
                        "game_id":               "0",
                        "partner":               "0",
                        "game_name_original":    "game_name_original"
                    }
                },
                "user": {
                    "id":                        "0",
                    "display_name":              "display_name",
                    "image":                     "image",
                    "personalize":               "",
                    "followers":                 0
                }
            },
            "user":                              {
                "id":                            "0",
                "display_name":                  "display_name",
                "image":                         "image",
                "personalize":                   ""
            }
        }
    ]
}
```


------------------------------------------------
<a name="playlist_partner_channel_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/playlists/{partner}/channel/{id}

Get playlists associated with a channel. Partner can be twitch, youtube, facebook, vimeo etc and id is the channel name.

#### Nametag

[playlist_partner_channel_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_partner_channel_endpoint)

#### Parameters

The parameters are same as the Playlist [Partner Asset Endpoint](#playlist_partner_asset_endpoint)

#### Example Request

The following example gets the most popular playlist for a twitch channel (e.g. riotgames)

```bash
curl -X GET https://api.themoment.tv/v1/playlists/youtube/channel/channel_name?limit=1&offset=0&sort_by=popularity
```

#### Example Response

```json
{
    "_total":                                    0,
    "_offset":                                   0,
    "_limit":                                    "0",
    "_playlists": [
        {
            "id":                                "0",
            "title":                             "title",
            "thumb":                             "",
            "moment_count":                      "0",
            "duration":                          "0",
            "publisher_id":                      "0",
            "status_public":                     "0",
            "status_blocked":                    "0",
            "status_deleted":                    "0",
            "copy_playlist_id":                  "0",
            "count_played":                      "0",
            "count_played_dup":                  "0",
            "count_shared":                      "0",
            "epoch_added":                       "0",
            "mode":                              "handpick",
            "terms":                             "",
            "status_changed":                    "0",
            "playlist_type":                     "0",
            "channel_ids":                       "0",
            "game_ids":                          "0",
            "asset_ids":                         "0,0",
            "sticky_asset_id":                   "0",
            "moments":                           "0,0",
            "user_id":                           "0",
            "user_display_name":                 "user_display_name",
            "user_image":                        "user_image50",
            "user_personalize":                  "",
            "first_moment":                      {
                "id":                            "0",
                "asset_id":                      "0",
                "publisher_id":                  "0",
                "tag":                           "tag",
                "time_start":                    "0",
                "timestamp":                     "0",
                "time_end":                      "0",
                "time_percent_start":            "0",
                "time_percent_end":              "0",
                "status_public":                 "0",
                "status_blocked":                "0",
                "status_deleted":                "0",
                "count_played":                  "0",
                "count_played_dup":              "0",
                "count_shared":                  "0",
                "search_string":                 "search_string",
                "copy_moment_id":                "0",
                "goto_moment_id":                "0",
                "epoch_added":                   "0",
                "asset":                         {
                    "id":                        "0",
                    "epoch_added":               "0",
                    "source":                    "0",
                    "resource_id":               "0",
                    "thumb":                     "thumb",
                    "duration":                  "0",
                    "status":                    "status",
                    "status_deleted":            "0",
                    "recorded_at":               "0",
                    "title":                     "title",
                    "channel_id":                "0",
                    "game_id":                   "0",
                    "publisher":                 "publisher",
                    "publisher_original_id":     "publisher_original_id",
                    "url":                       "url",
                    "storyboard_spec":           "0",
                    "channel":                   {
                        "channel_id":            "0",
                        "partner":               "0",
                        "channel_name_original": "channel_name_original",
                        "channel_name":          "channel_name"
                    },
                    "game":                      {
                        "game_id":               "0",
                        "partner":               "0",
                        "game_name_original":    "game_name_original"
                    }
                },
                "user":                          {
                    "id":                        "0",
                    "display_name":              "display_name",
                    "image":                     "image",
                    "personalize":               "",
                    "followers":                 0
                }
            },
            "user":                              {
                "id":                            "0",
                "display_name":                  "display_name",
                "image":                         "image",
                "personalize":                   ""
            }
        }
    ]
}
```

------------------------------------------------
<a name="playlist_moment_position_set_endpoint"></a>
[<](#top)

![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)
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
moment_id=0" https://api.themoment.tv/v1/playlists/0/moment_position_set
```

#### Example Response

```json
{
    "status": "success"
}
```


------------------------------------------------
<a name="playlist_delete_endpoint"></a>
[<](#top)

![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/delete.png)
## https://api.theMoment.tv/v1/playlists/{id}

Delete playlist.

#### Nametag

[playlist_delete_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__playlist_delete_endpoint)

#### Example Request

The following example deletes playlist with given ID.

```bash
curl -X DELETE https://api.themoment.tv/v1/playlists/0
```
