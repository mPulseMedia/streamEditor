<a name="toc"></a>
[< README](/README.md#top)

# Moments

Moments are individual highlights within a live stream/video.

| Endpoint | Description |
| -------- | ----------- |
| [POST /v1/moments](#moment_create_endpoint) | Create a new moment |
| [POST /v1/moments/:id](#moment_update_endpoint) | Update a moment |
| [GET /v1/moments/:id](#moment_get_endpoint) | Get a moment object |
| [GET /v1/moments/:partner/asset/:id](#moment_partner_asset_endpoint) | Get moments associated with a video |

------------------------------------------------
<a name="moment_create_endpoint"></a>
[<](#top)

## POST /v1/moments

Create a new moment.

#### Nametag

[moment_create_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__moment_create_endpoint)

#### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| time_start | required | number | Starting time of the moment. For live channel it should be the UTC timestamp |
| asset_source | required | string | Source of the moment (twitch, youtube, facebook, vimeo etc.) |
| asset_resource_id | required | string | Partner specific ID of the asset |
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
time_start=1468066157&\
asset_source=twitch&\
asset_resource_id=v77076652&\
asset_title=EU LCS Summer - Week 6 Day 2: Fnatic vs. Unicorns Of Love (EULCS2)&\
asset_publisher=EULCS2&\
asset_publisher_original_id=eulcs2&\
asset_duration=11245&\
asset_thumb=https://static-cdn.jtvnw.net/previews-ttv/live_user_eulcs2-320x180.jpg&\
asset_url=https://secure.twitch.tv/eulcs2/v/77076652&\
thumb_info_image=https://static-cdn.jtvnw.net/previews-ttv/live_user_eulcs2-320x180.jpg&\
asset_status=recording&\
asset_recorded_at=2016-07-09T08:56:13Z&\
game=League of Legends&\
auid=sxFBpEoXAq8MVgcFSRPOfEgvdRUPwK0m&\
tag=LOL Rampage&\
timestamp=146806615" https://api.themoment.tv/v1/moments
```

#### Example Response

```json
{
    "id": "21061",
    "asset_id": "2005",
    "publisher_id": "79529",
    "tag": "LOL Rampage!",
    "time_start": "11549",
    "timestamp": "1468066157",
    "time_end": "11569",
    "time_percent_start": "0.00",
    "time_percent_end": "0.00",
    "status_public": "1",
    "status_blocked": "0",
    "status_deleted": "0",
    "count_played": "0",
    "count_played_dup": "0",
    "count_shared": "0",
    "search_string": "LOL Rampage",
    "copy_moment_id": "0",
    "goto_moment_id": "0",
    "epoch_added": "1468066159",
    "asset": {
        "id": "2005",
        "epoch_added": "1468066159",
        "source": "3",
        "resource_id": "v77076652",
        "thumb": "https:\/\/static-cdn.jtvnw.net\/previews-ttv\/live_user_eulcs2-320x180.jpg",
        "duration": "11245.00",
        "status": "recording",
        "status_deleted": "0",
        "recorded_at": "1468054573",
        "title": "EU LCS Summer - Week 6 Day 2: Fnatic vs. Unicorns Of Love (EULCS2)",
        "channel_id": "508",
        "game_id": "2",
        "publisher": "EULCS2",
        "publisher_original_id": "eulcs2",
        "url": "https:\/\/secure.twitch.tv\/eulcs2\/v\/77076652",
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
        "id": "79529",
        "display_name": "anonymous",
        "image": "",
        "personalize": "",
        "followers": 0
    },
    "addedTo": [{
        "id": "2733",
        "title": "EULCS2: EU LCS Summer - Week 6 Day 2: Fnatic vs. Unicorns Of Love (EULCS2)"
    }]
}
```

------------------------------------------------
<a name="moment_update_endpoint"></a>
[<](#top)

## POST /v1/moments/:id

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
    "id": "21061",
    "asset_id": "2005",
    "publisher_id": "79529",
    "tag": "LOL Rampage",
    "time_start": "11539",
    "timestamp": "1468066157",
    "time_end": "11569",
    "time_percent_start": "0.00",
    "time_percent_end": "0.00",
    "status_public": "1",
    "status_blocked": "0",
    "status_deleted": "0",
    "count_played": "0",
    "count_played_dup": "1",
    "count_shared": "0",
    "search_string": "LOL Rampage!",
    "copy_moment_id": "0",
    "goto_moment_id": "0",
    "epoch_added": "1468066159",
    "asset": {
        "id": "2005",
        "epoch_added": "1468066159",
        "source": "3",
        "resource_id": "v77076652",
        "thumb": "https:\/\/static-cdn.jtvnw.net\/previews-ttv\/live_user_eulcs2-320x180.jpg",
        "duration": "11245.00",
        "status": "recording",
        "status_deleted": "0",
        "recorded_at": "1468054573",
        "title": "EU LCS Summer - Week 6 Day 2: Fnatic vs. Unicorns Of Love (EULCS2)",
        "channel_id": "508",
        "game_id": "2",
        "publisher": "EULCS2",
        "publisher_original_id": "eulcs2",
        "url": "https:\/\/secure.twitch.tv\/eulcs2\/v\/77076652",
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
        "id": "79529",
        "display_name": "anonymous",
        "image": "",
        "personalize": "",
        "followers": 0
    }
}
```
------------------------------------------------
<a name="moment_get_endpoint"></a>
[<](#top)

## GET /v1/moments/:id

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
    "id": "2599",
    "asset_id": "620",
    "publisher_id": "1804",
    "timestamp": "1445697709",
    "tag": "Game 1",
    "time_start": "6926",
    "time_end": "0",
    "status_deleted": "0",
    "epoch_added": "1445697681",
    "count_played": "8",
    "count_played_dup": "49",
    "asset": {
        "id": "620",
        "epoch_added": "1445692603",
        "source": "3",
        "resource_id": "v22190983",
        "thumb": "http://static-cdn.jtvnw.net/v1/AUTH_system/vods_e76b/riotgames_17207426176_332713946/thumb/thumb0-320x240.jpg",
        "duration": "1390.00",
        "status": "recording",
        "status_deleted": "0",
        "recorded_at": "1445690738",
        "title": "2015 World Championship - Semifinals - Day 1",
        "channel_id": "27",
        "game_id": "0",
        "publisher": "Riot Games",
        "publisher_original_id": "riotgames",
        "url": "http://www.twitch.tv/riotgames/v/22190983",
        "storyboard_spec": "0",
        "channel": {
            "channel_id": "27",
            "partner": "3",
            "channel_name_original": "riotgames",
            "channel_name": "Riot Games"
        }
    },
    "user": {
        "id": "1804",
        "display_name": "Ilian Iliev",
        "image": "https://lh4.googleusercontent.com/-aIlhZ1zVx2E/AAAAAAAAAAI/AAAAAAAAGA4/OKwoOvXVrXE/photo.jpg?sz=50",
        "personalize": "{\"favorite_partner_channel\":\"\",\"pNext_skip\":\"true\"}",
        "followers": 2
    }
}
```

------------------------------------------------

<a name="moment_partner_asset_endpoint"></a>
[<](#top)

## GET /v1/moments/:partner/asset/:id

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
