<a name="toc"></a>
[< README](/README.md#top)

# Overview

The streamEditor library adds functionality to  live streams and video players. It allows users to mark highlights (or moments) and group them into remixes (or playlists). These remixes let users jump to the best parts of videos and streams, even while they event is still happening.

[theMoment.tv website](http://theMoment.tv) illustrates the use of the streamEditor library within  eSports. The site shows recently created remixes across multiple games on numerous video services such as YouTube, Twitch.

The companion to theMoment.tv website is the [browser extension](http://j.mp/moment_chrome_1). The extension adds functionality to mark highlights and replay remixes of other sites (YouTube, Twitch).

The [streamEditor library](http://streamEditor.tv) may be added to a 3rd party website. This will add the same functionality as the extension to the website without requiring that end-users have the extension.

![Architecture Diagram](/doc/v1/arch_diagram.png)

------------------------------------------------
<a name="arch_environment"></a>
## Environments, Instances and Databases

streamEditor is served via EC2 on Amazon Web Services.
There are three environments
- dev
- stage
- prod

Within each environment, there are multiple [instances](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:sort=Name). (Dev only has one instance: devInst_dev)
- app
- main
- support

Databases are built using mysql and reside within the following instances:

mainInst contains:
- [mainDB](https://api.themoment.tv/phpmyadmin/sql.php?db=mainDB&table=playlistTable&server=1&target=&token=6190222856436cfaec1d9800408d19a2#PMAURL-1:db_structure.php?db=mainDB&table=&server=1&target=&token=c7aeaac5a405499d7f8d010e3c9e0b14) - primary objects including moment, playlists, users
 - momentTable
 - playlistTable
 - userTable
 - assetTable
 - cacheTable, configTable, deviceTable, gameTable, instructionTable

supportInst contains:
- [eventDB](https://media.themoment.tv/phpmyadmin/index.php?db=eventDB&table=eventTable&target=sql.php&token=7f3e5e96c0cec446407eac666cc79eaa#PMAURL-1:db_structure.php?db=eventDB&table=&server=1&target=&token=7f3e5e96c0cec446407eac666cc79eaa) - site-supporting data, including user event logs
 - eventTable
 - accessTable, blacklistTable, logTable
- [thumbDB](https://media.themoment.tv/phpmyadmin/index.php?db=eventDB&table=eventTable&target=sql.php&token=7f3e5e96c0cec446407eac666cc79eaa#PMAURL-2:db_structure.php?db=thumbDB&table=&server=1&target=&token=7f3e5e96c0cec446407eac666cc79eaa) - thumbnails used by moments and playlists
 - thumbTable

|  | app | main | support |
| --- | --- | --- | --- |
| dev | devInst_dev | <-- | <-- |
| stage | appInst_stage | mainInst_stage | supportInst_stage |
| prod | appInst_prod | mainInst_prod | supportInst_prod |
| | | | |
| databases | | mainDB | eventDB, thumbDB |

------------------------------------------------
<a name="arch_repository"></a>
## Repositories & Code

The gitHub repositories include:
- Back end
 - [moment_api](https://github.com/mPulseMedia/moment_api) - backend api
 - [moment_config](https://github.com/mPulseMedia/moment_config) - deployment scripts
- Front end
 - [moment_app](https://github.com/mPulseMedia/moment_app) - website and extension
 - [moment_watch](https://github.com/mPulseMedia/moment_watch) - Apple iOS watch app

The API is written in php using the CMV paradigm and the CodeIgniter framework.

The website is written in javascript using the CodeIgniter CMV framework and SASS. The libraries used include: bootstrap and jQuery.
