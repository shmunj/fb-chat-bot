# fb-chat-bot

Customizable facebook chat bot.

No API keys required, the bot promts for your email and password when you start it.

Write custom rules for your bot in botRules.js file. Rules are simple objects which can do any sort of check and perform any action, usually using facebook-chat-api module.

Run the bot:
```
node server.js
```

Get the list of objects representing last 10 chat threads/conversations (in case you want to write some thread-specific rules using thread IDs):
```
node server.js threads
```
