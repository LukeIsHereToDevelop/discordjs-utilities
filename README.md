### discordjs-utilities

### A package that helps you in creating your Discord.js Bot.


## Index

- [About](#about)
- [Updates](#updates)
- [Requirements](#requirements)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [All Commands](#all-commands)
- [Links](#links)

## About

**discordjs-utilities** is a **NodeJS package** that will **save your time**!

## Updates

At the moment, there is nothing to write here because it is the first version!

## Requirements

- Discord.js **v12** or **newer**
- Node.js **12** or **newer**

## Installation

Just open your Terminal/Command Prompt and then write `npm i discordjs-utilities`.
If you don't have Discord.js, also write `npm i discord.js`.

## Example Usage

```js
const Discord = require('discord.js')
const bot = new Discord.Client()
const util = require('discordjs-utilities')

util.onReady('bot', 'Example Bot is online!', 'discordjs-utilities', 'WATCHING')

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
const prefix = "!"

if(message.content === prefix + "testMsg")
util.sendMsg('Coming soon!', 'channel')
}

if(message.content === prefix + 'testEmbed') {
util.sendEmbed('Important', 'Coming soon!', 'discordjs-utilities')
}

bot.login('YOUR_TOKEN')
```

## All Commands

- `util.onReady(clientvariable, logmsg, statusmsg, statustype)`
  - Event onReady without writing many lines of code.
 
- `util.sendMsg(msg, type)`
  - Sends a Message on channel or dm.
 
- `util.sendEmbed(titlemsg, descriptionmsg, footermsg)`
  - Sends an Embed without writing many lines of code.
 
 ***Other Commands are Coming Soon!!***
 
 ## Links
 
 - [GitHub Repository](https://github.com/LukeIsHereToDevelop/discordjs-utilities)
