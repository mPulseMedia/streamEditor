<a name="top"></a>
[< README](/README.md#top)

# Users

APIs for end-users and and app clients.

|       | Endpoint | Description |
| ----- |-------- | ----------- |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png) | [https://api.theMoment.tv/v1/users](#user_create_endpoint) | Create a new user |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) | [https://api.theMoment.tv/v1/users/{id}/](#user_get_endpoint) | Get a user object |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) | [https://api.theMoment.tv/v1/users/{id}/playlists](#user_playlist_get_endpoint) | Get a user's playlists |
| ![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png) | [https://api.theMoment.tv/v1/users/{id}/history](#user_history_get_endpoint) | Get a user's history |
| ![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png) | [https://api.theMoment.tv/v1/users/{id}/user_history_add](#user_history_add_endpoint) | Add to user's history |

------------------------------------------------
<a name="user_create_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png)
## https://api.theMoment.tv/v1/users

Create new user.

#### Nametag
[user_create_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__user_create_endpoint)

### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| email | required | string | Email address of the user |
| gender | optional | string | Either m or f. Default is u (unspecified) |
| display_name | optional | string | Publicly visible display name of the user |

### Example Request

```bash
curl --data "\
email=paul%40mpulsemedia.com&\
gender=male&\
display_name=Paul Smith" https://api.themoment.tv/v1/users
```

### Example Response

```json
{
    "user": {
        "id": "508",
        "display_name": "Paul Smith",
        "image": "https://lh5.googleusercontent.com/-7zm0FzqLBQw/AAAAAAAAAAI/AAAAAAAAAFQ/_gZf8WbbDa8/photo.jpg?sz=50",
        "personalize": "{\"favorite_partner_channel\":\"twitch\\/showdowngg,twitch\\/ShowdownSmash,twitch\\/onenationofgames\",\"pNext_skip\":\"false\"}",
        "followers": 8
    }
}
```

------------------------------------------------
<a name="user_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/users/{id}/

Get user object.

#### Nametag
[user_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__user_get_endpoint)

### Example Request

```bash
curl -X GET https://api.themoment.tv/v1/users/508
```

### Example Response

```json
{
    "user": {
        "id": "508",
        "display_name": "Paul Smith",
        "image": "https://lh5.googleusercontent.com/-7zm0FzqLBQw/AAAAAAAAAAI/AAAAAAAAAFQ/_gZf8WbbDa8/photo.jpg?sz=50",
        "personalize": "{\"favorite_partner_channel\":\"twitch\\/showdowngg,twitch\\/ShowdownSmash,twitch\\/onenationofgames\",\"pNext_skip\":\"false\"}",
        "followers": 8
    }
}
```

------------------------------------------------
<a name="user_playlist_get_endpoint"></a>[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/users/{id}/playlists

Get user's playlists.

#### Nametag
[user_playlist_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__user_playlist_get_endpoint)

### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| limit | optional | number | Number of playlists to be fetched. Default is 10 |
| offset | optional | number | Allow to fetch playlists starting from a particular index. Default is 0 |

### Example Request

```
curl -X GET https://api.themoment.tv/v1/users/pyLvpx3XTGXfJG0OtlBnOZpWgLgFi9RIHCd79g43W2jGIkvbG6zu6YrnJH22RULy/playlists?limit=1
```

### Example Response

```json
{
    "total": 19,
    "offset": 0,
    "limit": "1",
    "items": [
        {
            "id": "2836",
            "title": "Capn_Flint: Partner Spotlight!!! Star Citizen & Starfarer giveaway!",
            "thumb": "",
            "moment_count": "2",
            "duration": "60",
            "publisher_id": "508",
            "status_public": "1",
            "status_blocked": "0",
            "status_deleted": "0",
            "copy_playlist_id": "0",
            "count_played": "0",
            "count_played_dup": "1",
            "count_shared": "0",
            "epoch_added": "1468013221",
            "mode": "sticky_stream",
            "terms": "",
            "status_changed": "0",
            "playlist_type": "0",
            "channel_ids": "564",
            "game_ids": "59",
            "asset_ids": "2054",
            "sticky_asset_id": "2054",
            "moments": "22014,22015",
            "user_id": "508",
            "user_display_name": "Paul Smith",
            "user_image": "https://lh5.googleusercontent.com/-7zm0FzqLBQw/AAAAAAAAAAI/AAAAAAAAAFQ/_gZf8WbbDa8/photo.jpg?sz=50",
            "user_personalize": "{\"favorite_partner_channel\":\"twitch\\/showdowngg,twitch\\/ShowdownSmash,twitch\\/onenationofgames\",\"pNext_skip\":\"false\"}",
            "user": {
                "id": "508",
                "display_name": "Paul Smith",
                "image": "https://lh5.googleusercontent.com/-7zm0FzqLBQw/AAAAAAAAAAI/AAAAAAAAAFQ/_gZf8WbbDa8/photo.jpg?sz=50",
                "personalize": "{\"favorite_partner_channel\":\"twitch\\/showdowngg,twitch\\/ShowdownSmash,twitch\\/onenationofgames\",\"pNext_skip\":\"false\"}"
            }
        }
    ]
}
```

------------------------------------------------
<a name="user_history_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_get.png)
## https://api.theMoment.tv/v1/users/{id}/history

Get user's history.

#### Nametag
[user_history_get_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__user_history_get_endpoint)

### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| limit | optional | number | Number of playlists to be fetched. Default is 10 |
| offset | optional | number | Allow to fetch playlists starting from a particular index. Default is 0 |

### Example Request

```bash
curl -X GET https://api.themoment.tv/v1/users/pyLvpx3XTGXfJG0OtlBnOZpWgLgFi9RIHCd79g43W2jGIkvbG6zu6YrnJH22RULy/history?limit=1
```

### Example Response

```json
{
    "total": 339,
    "offset": 0,
    "limit": "1",
    "items": [
        {
            "id": "2871",
            "title": "BeyondTheSummit: Luminosity vs Liquid - Overwatch Cup - @AskJoshy & @JetSetJamerson",
            "thumb": "",
            "moment_count": "9",
            "duration": "180",
            "publisher_id": "5199",
            "status_public": "1",
            "status_blocked": "0",
            "status_deleted": "0",
            "copy_playlist_id": "0",
            "count_played": "2",
            "count_played_dup": "2",
            "count_shared": "0",
            "epoch_added": "1468178216",
            "mode": "sticky_stream",
            "terms": "",
            "status_changed": "0",
            "playlist_type": "0",
            "channel_ids": "37",
            "game_ids": "21",
            "asset_ids": "2064",
            "sticky_asset_id": "2064",
            "moments": "22176,22177,22179,22180,22182,22186,22188,22189,22190",
            "user_id": "5199",
            "user_display_name": "isaac basabe",
            "user_image": "https://lh6.googleusercontent.com/-8jtBDWcg9N0/AAAAAAAAAAI/AAAAAAAAADk/J3Jvt9ASg2k/photo.jpg?sz=50",
            "user_personalize": "",
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

<a name="user_history_add_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/doc_api_post.png)
## https://api.theMoment.tv/v1/users/{id}/user_history_add

Add to user's history.

#### Nametag
[user_history_add_endpoint](https://github.com/mPulseMedia/moment_api/search?l=php&q=__user_history_add_endpoint)

### Parameters

| Name | Required | Type | Description |
| ---- | ---- | ---- | ---- |
| object_id | required | number | Id of the moment or playlist |
| object_type | required | string | Either m (moment) or p (playlist) |

### Example Request

```bash
curl --data "\
object_id=2871&\
object_type=p" https://api.themoment.tv/v1/users/pyLvpx3XTGXfJG0OtlBnOZpWgLgFi9RIHCd79g43W2jGIkvbG6zu6YrnJH22RULy/user_history_add
```

### Example Response

```json
{
    "status":"success"
}
```
