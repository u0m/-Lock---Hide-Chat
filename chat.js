const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
    if(message.content.startsWith(prefix + 'hide')) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
   let channel = message.mentions.channels.first();
   let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
   if(!channel) return message.channel.send(`**True Use CMD: ${prefix}hide \`<MentionChannel>\`**`)
   if(!channel_find) return message.channel.send(`**:x: | Error, Not Found**`);
   channel_find.updateOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
  });
  message.channel.send(`**Done Has Been Hide Channel**`);
    }
});


client.on('message', async message => {
    if(message.content.startsWith(prefix + 'show')) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
   let channel = message.mentions.channels.first();
   let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
   if(!channel) return message.channel.send(`**True Use CMD: ${prefix}show \`<MentionChannel>\`**`)
   if(!channel_find) return message.channel.send(`**:x: | Error, Not Found**`);
   channel.updateOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
  });
  message.channel.send(`**Done Has Been Showed Channel**`);
    }
});

client.login("");
