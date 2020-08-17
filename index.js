const Discord = require('discord.js')

exports.test = function() {
    console.log('disjs-utilities is working correctly!')
}

exports.onReady = function(clientvariable, logmsg, statusmsg, statustype) {
    clientvariable.on("ready", async() => {
        console.log(logmsg)
        clientvariable.user.setActivity(statusmsg, { type: statustype, url: "https://www.youtube.com/user/PewDiePie#subtopewdiepie"})
    })
}

exports.sendEmbed = function(titlemsg, descriptionmsg, footermsg) {
    if(!titlemsg, !descriptionmsg, !footermsg) {
        return console.log("[disjs-utilities] Cannot send Embed due to no args. Usage: .sendEmbed(titlemsg, descriptionmsg, footermsg)")
    } else {
    const embed = new Discord.MessageEmbed()
    .setTitle(titlemsg)
    .setDescription(descriptionmsg)
    .setFooter(footermsg)
    message.channel.send(embed)
    }
}

exports.sendMsg = function(msg, type) {
    if(!type, !msg) {
        return console.log('[disjs-utilities] Cannot send Message due to no args. Usage: sendMsg(msg, type)')
    }
    else if(type === "channel") {
        message.channel.send(msg)
    }
    else if(type === "dm") {
        message.author.send(msg)
    }
    else if(type === "author") {
        message.author.send(msg)
    } else {
        console.log('[djsutils] Invalid usage! Usage: sendMsg(msg, type)')
    }
}