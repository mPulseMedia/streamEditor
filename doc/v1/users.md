<a name="top"></a>
[< README](/README.md#top)

# Users

APIs for end-users and and app clients.

|       | Endpoint | Description |
| ----- |-------- | ----------- |
| [![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)](#user_create_endpoint) | [https://api.theMoment.tv/v1/users](#user_create_endpoint) | Create a new user |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#user_get_endpoint) | [https://api.theMoment.tv/v1/users/{id}/](#user_get_endpoint) | Get a user object |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#user_playlist_get_endpoint) | [https://api.theMoment.tv/v1/users/{id}/playlists](#user_playlist_get_endpoint) | Get a user's playlists |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#user_history_get_endpoint) | [https://api.theMoment.tv/v1/users/{id}/history](#user_history_get_endpoint) | Get a user's  viewing history |
| [![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)](#user_history_add_endpoint) | [https://api.theMoment.tv/v1/users/{id}/user_history_add](#user_history_add_endpoint) | Add to user's  viewing history |
| [![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)](#user_follow_endpoint) | [https://api.theMoment.tv/v1/users/{id}/follow/{id}](#user_follow_endpoint) | Start following other user |
| [![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)](#user_unfollow_endpoint) | [https://api.theMoment.tv/v1/users/{id}/unfollow/{id}](#user_unfollow_endpoint) | Stop following other user |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#user_followers_endpoint) | [https://api.theMoment.tv/v1/users/{id}/followers](#user_followers_endpoint) | List who user follows |
| [![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)](#user_follows_endpoint) | [https://api.theMoment.tv/v1/users/{id}/follows](#user_follows_endpoint) | List who follows user |

------------------------------------------------
<a name="user_create_endpoint"></a>
[<](#top)

![POST](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/post.png)
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
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    }
}
```

------------------------------------------------
<a name="user_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
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
        "id":           "0",
        "display_name": "display_name",
        "image":        "image",
        "personalize":  "personalize",
        "followers":    0
    }
}
```

------------------------------------------------
<a name="user_playlist_get_endpoint"></a>[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
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
    "total":                     0,
    "offset":                    0,
    "limit":                     "0",
    "items": [
        {
            "id":                "0",
            "title":             "title",
            "thumb":             "thumb",
            "moment_count":      "0",
            "duration":          "0",
            "publisher_id":      "0",
            "status_public":     "0",
            "status_blocked":    "0",
            "status_deleted":    "0",
            "copy_playlist_id":  "0",
            "count_played":      "0",
            "count_played_dup":  "0",
            "count_shared":      "0",
            "epoch_added":       "0",
            "mode":              "mode",
            "terms":             "",
            "status_changed":    "0",
            "playlist_type":     "0",
            "channel_ids":       "0",
            "game_ids":          "0",
            "asset_ids":         "0",
            "sticky_asset_id":   "0",
            "moments":           "0,0",
            "user_id":           "0",
            "user_display_name": "user_display_name",
            "user_image":        "user_image",
            "user_personalize":  "user_personalize",
            "user": {
                "id":            "0",
                "display_name":  "display_name",
                "image":         "image",
                "personalize":   "personalize"
            }
        }
    ]
}
```

------------------------------------------------
<a name="user_history_get_endpoint"></a>
[<](#top)

![GET](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/get.png)
## https://api.theMoment.tv/v1/users/{id}/history

Get user's viewing history.

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
    "total":                     0,
    "offset":                    0,
    "limit":                     "0",
    "items": [
        {
            "id":                "0",
            "title":             "title",
            "thumb":             "thumb",
            "moment_count":      "0",
            "duration":          "0",
            "publisher_id":      "0",
            "status_public":     "0",
            "status_blocked":    "0",
            "status_deleted":    "0",
            "copy_playlist_id":  "0",
            "count_played":      "0",
            "count_played_dup":  "0",
            "count_shared":      "0",
            "epoch_added":       "0",
            "mode":              "mode",
            "terms":             "",
            "status_changed":    "0",
            "playlist_type":     "0",
            "channel_ids":       "0",
            "game_ids":          "0",
            "asset_ids":         "0",
            "sticky_asset_id":   "0",
            "moments":           "0,0",
            "user_id":           "0",
            "user_display_name": "user_display_name",
            "user_image":        "user_image",
            "user_personalize":  "user_personalize",
            "user":  {
                "id":            "0",
                "display_name":  "display_name",
                "image":         "image",
                "personalize":   "personalize"
            }
        }
    ]
}
```

------------------------------------------------

<a name="user_history_add_endpoint"></a>
[<](#top)

![PUT](https://s3-us-west-2.amazonaws.com/themoment-s3-bucket/document/put.png)
## https://api.theMoment.tv/v1/users/{id}/user_history_add

Add to user's viewing history.

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
