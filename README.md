> This script is useful if you have important files scattered all over the hard drive and you don't want to loose when your computer screws up.

#### Setup

1. Clone the Repo.
1. Rename [file.example.json](https://github.com/aptro/sync_files_with_dropbox/blob/master/files.example.json) to file.json.
1. Add local file path and equivalent dropbox file path as mentioned in the [file.example.json](https://github.com/aptro/sync_files_with_dropbox/blob/master/files.example.json).
1. Generate Access token for your dropbox account as mentioned in this [link](https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/)
1. Set the env virable ```ACCESS_TOKEN``` with token generated form Dropbox.
1. Run ```node index.js``` to sync.

#### Schedule daily sync with Mac Automator and ical.

1. Open Automator App and choose Type as calender Alarm.![](https://github.com/aptro/sync_files_with_dropbox/blob/master/assets/automator_1.png) 
1. Add `Run shell script as the next step` ![](https://github.com/aptro/sync_files_with_dropbox/blob/master/assets/automator_2.png)
1. Save the automation. It will create an automator event in calender.![](https://github.com/aptro/sync_files_with_dropbox/blob/master/assets/automator_3.png)
1. Open calender app and modify the event to run it at a particular time. Set repeat for the event and ready to go!
![](https://github.com/aptro/sync_files_with_dropbox/blob/master/assets/calendar.png)
