const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const keywords = require('./keywords.json');
const categories = ["salutation", "costard", "milliardaire", "covid", "kwassa-kwassa", "gaulois", "manif", "chômeur", "sextape", "retraite", "syndicat", "reelu", "perlimpimpin", "bigard", "t+", "entrepreneur", "roi", "apprenti", "jeune", "car", "gare", "pauvre"]
const dayjs = require ('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const a = dayjs();

client.login(process.env.token);

client.on('ready', () => {
    client.user.setActivity(a.to('2022-04-23', true).replace('years', 'années').replace('year', 'année').replace('months', 'mois').replace('month', 'mois').replace('days', 'jours').replace('day', 'jour').replace('hours', 'heures').replace('hour', 'heure').replace(' a ', ' 1 ').replace('in', 'dans') + " avant ma victoire aux prochaines présidentielles", { type : 'WATCHING' });
    setInterval(function() { client.user.setActivity(a.to('2022-04-23', true).replace('years', 'années').replace('year', 'année').replace('months', 'mois').replace('month', 'mois').replace('days', 'jours').replace('day', 'jour').replace('hours', 'heures').replace('hour', 'heure').replace(' a ', ' 1 ').replace('in', 'dans') + " avant ma victoire aux prochaines présidentielles", { type : 'WATCHING' }); }, 60000);
    
    console.log(`[DÉMARRAGE] Bot lancé. Disponible sur ${client.guilds.cache.size} serveurs avec ${client.users.cache.size} utilisateurs.`);
});

client.on('message', message => {
    if (message.author.bot) return;

    if (message.content.includes('737659120219586652')) return message.channel.send("Mon cher compatriote, bonjour ! \nJe suis très heureux que tu aies remarqué ma présence sur ton serveur. \nPour te remercier de la considération que tu portes à ton Président de la République, je vais te confier un immense secret : mon fonctionnement. Tu peux tout retrouver sur un document Evernote rédigé par Zibeth-ma-copine avant que Castex ne lui fasse prendre la porte : https://www.evernote.com/shard/s747/sh/84a0652a-8bae-4aad-9966-e43bce06651d/30e65a53aaf847f95d387cab8685def6")
    
    if (message.content.toLocaleLowerCase().includes('manu')) return message.channel.send("Tu m'appelles Monsieur le président de la République, ou Monsieur. D'accord ?");

    let answered = 0;

    message.content.toLocaleLowerCase().replace('.', '').replace(',', '').split(' ').forEach(word => {
        if (answered === 1) return;

        categories.forEach(category => {
            keywords.keywords.forEach(element => {
                if (!element[category]) return;
                element[category].forEach(keyword => {
                    if (keyword === word) {
                        message.channel.send(`${element[category + `_answer`]}`);
                        answered = 1;
                        return;
                    }
                });
            });
        });
    });
});
