[![codebeat badge](https://codebeat.co/badges/ba2fcc99-7d37-4d4a-b639-b8745b3381cb)](https://codebeat.co/projects/github-com-harrymt-habit-reward-chatbot-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dee0a3c7a16a4276b47c27751959c6a6)](https://www.codacy.com/app/harrymt/habit-reward-chatbot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=harrymt/habit-reward-chatbot&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/harrymt/habit-reward-chatbot.svg?branch=master)](https://travis-ci.org/harrymt/habit-reward-chatbot)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

## Harrys Habits - A Messenger Chatbot

Tracks habits and gives you rewards from 3 different modalities.

[Chat to him](https://m.me/2278578462368010).


#### Development

#### Local


- Create a `.env` file with: (also add these variables to Travis-CI and Heroku)

```
NODE_ENV=development
FB_PAGE_TOKEN=<your fb page token here>
FB_VERIFY_TOKEN=<verify token>
USER_ID=<user id>
CRON_SECRET=<secret phrase>
EMAIL_ID=<your email address for data backups and alerts>
EMAIL_PASS=<your email password>
```

- `npm test && npm start`

- Note you will have to manually send a curl to [whitelist your domain](https://developers.facebook.com/docs/messenger-platform/webview/extensions).


#### Deployment

- `npm run deploy`
- Done via heroku instead of [Now.Sh](https://zeit.co/docs) or Google App Engine.


#### Attribution

- *Audio* from [AudioBlocks](https://www.audioblocks.com/stock-audio/)
- *Logo* from [the Noun Project by Yu luck](https://thenounproject.com/term/custom/402041/)
