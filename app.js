{
  "name": "PX V1.0",
  "description": "JUST YOUR NORMAL WHATSAPP BOT",
  "logo": "https://i.imgur.com/mYXK0Jn.jpeg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}