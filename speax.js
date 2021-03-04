const Discord = require("discord.js");
const speaxbot = new Discord.Client({ ws: { intents: Discord.Intents.ALL }, disableMentions: 'everyone'});
const db = require('quick.db');
const moment = require('moment');
require('moment-duration-format');
 
let settings = {
   token: "", //bot tokeninizi girin
   prefix: "", //prefixinizi girin
   dogru: "", //onay emojinizin idsini girin
   yanlis: "", //yanlis emoji idsini girin
   uyari: "", //uyari emoji idsini girin
   botoynuyor: "", //bot oynuyorda ne yazmasını istiyorsanız girin
   beklemerenk: "#ffc000"
}

let bottoken = settings.token
let botoynuyor = settings.botoynuyor
let beklemerenk = settings.beklemerenk
speaxbot.on('ready', () => {
    //speaxbot.user.setActivity('CodeHere' ,  { type: 'PLAYING' })
    speaxbot.user.setActivity(botoynuyor, { type: 'LISTENING' }) 
    console.log("CodeHere Development tarafından başarıyla hostlanmıştır!")
})   
let speaxp = settings.prefix;
    if (!message.content.startsWith(speaxp)) return;
    const args = message.content.slice(speaxp.length).trim().split(/ +/g);
    const speaxc = args.shift().toLowerCase();
    //quick db server data
    let speaxgif =  db.get(`serverData.${message.guild.id}.speaxgif`);
    let speaxpng = db.get(`serverData.${message.guild.id}.speaxpng`);
    
    const speaxgenel = new Discord.MessageEmbed()
	.setColor(beklemerenk)
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setTimestamp()
	.setFooter(client.user.username, client.user.avatarURL())
    
    if(speaxc == "gif-kanal"){

        if(args[0] == "sıfırla"){
            if(!speaxgif) return message.channel.send(speaxgenel.setDescription(`<a:speaxemoji:${yanlis}> Gif kanalı zaten ayarlanmamış!`))
            db.delete(`serverData.${message.guild.id}.speaxgif`)
            return message.channel.send(genel.setDescription(`<a:speaxemoji2:${dogru}> Gif kanalı başarılı bir şekilde sıfırlandı!`))
        }
              let speaxgifkanal = message.mentions.channels.first();
        if(!speaxgifkanal) return message.channel.send(speaxgenel.setDescription(`<a:speaxemoji3:${uyari}> Ayarlamak istediğiniz kanalı etiketleyiniz!`))
          db.set(`serverData.${message.guild.id}.speaxgif`, channels.id)
         return message.channel.send(genel.setDescription(`<a:speaxemoji2:${dogru}> Gif kanalı başarılı bir şekilde ${channels} olarak ayarlandı!`))
     } else if(speaxcp == "png-kanal"){

        if(args[0] == "sıfırla"){
            if(!speaxpng) return message.channel.send(speaxgenel.setDescription(`<a:speaxemoji:${yanlis}> Png kanalı zaten ayarlanmamış!`))
            db.delete(`serverData.${message.guild.id}.speaxpng`)
            return message.channel.send(genel.setDescription(`<a:speaxemoji2:${dogru}> Png kanalı başarılı bir şekilde sıfırlandı!`))
        }
              let speaxpngkanal = message.mentions.channels.first();
        if(!speaxpngkanal) return message.channel.send(genel.setDescription(`<a:speaxemoji3:${uyari}> Ayarlamak istediğiniz kanalı etiketleyiniz!`))
          db.set(`serverData.${message.guild.id}.speaxpng`, speaxpngkanal.id)
         return message.channel.send(genel.setDescription(`<a:speaxemoji2:${dogru}> Png kanalı başarılı bir şekilde ${speaxpngkanal} olarak ayarlandı!`))
     }
speaxbot.login(bottoken)


//gif bölümü


speaxbot.on(`userUpdate`, (oldUser, newUser) => {

  let kişi = speaxbot.users.get(oldUser.id)
  let avatar = kişi.avatarURL.split('?')[0]
if(avatar.endsWith('.png')) {
  const speaxemb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${speaxbot.user.username}`, speaxbot.user.avatarURL)
  .setColor("GRAY")
  .setDescription(`To see a better quality picture [Tıkla](${kişi.avatarURL})!`)
  message.guild.channels.cache.get(speaxpng).send(speaxemb)
}
if(avatar.endsWith('.gif')) {
  const speaxemb2 = new Discord.RichEmbed()
  .setImage(avatar)
  .setColor("GRAY")
  .setFooter(`${speaxbot.user.username}`, speaxbot.user.avatarURL)
  .setDescription(`To see a better quality gif [Tıkla](${kişi.avatarURL})!`)
  message.guild.channels.cache.get(speaxgif).send(speaxemb2)
}
});