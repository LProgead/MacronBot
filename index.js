const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs');
const stats = require('./stats.json');
const keywords = require( './keywords.json');
const categories = ["manu", "ping", "salutation", "costard", "milliardaire", "covid", "kwassa-kwassa", "gaulois", "manif", "chômeur", "sextape", "retraite", "syndicat", "reelu", "perlimpimpin", "bigard", "t+", "entrepreneur", "roi", "apprenti", "jeune", "car", "gare", "pauvre", "réélu", "vrvf", "démission", "amoureux", "ecole"];
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const a = dayjs();

client.login(process.env.token);

client.on('ready', () => {   
    client.user.setActivity(a.to('2022-04-23', true).replace('years', 'années').replace('year', 'année').replace('months', 'mois').replace('month', 'mois').replace('days', 'jours').replace('day', 'jour').replace('hours', 'heures').replace('hour', 'heure').replace('a ', ' 1 ').replace('in', 'dans') + " avant ma victoire aux prochaines présidentielles", { type : 'WATCHING' });
    setInterval(function() { client.user.setActivity(a.to('2022-04-23', true).replace('years', 'années').replace('year', 'année').replace('months', 'mois').replace('month', 'mois').replace('days', 'jours').replace('day', 'jour').replace('hours', 'heures').replace('hour', 'heure').replace('a ', ' 1 ').replace('in', 'dans') + " avant ma victoire aux prochaines présidentielles", { type : 'WATCHING' }); }, 60000);

    let keywords_stats = 0;
    categories.forEach(category => {
        keywords.keywords.forEach(element => {
            if (!element[category]) return;
            keywords_stats += element[category].length;
        });
    });

    let sentences_stats = 0;
    categories.forEach(category => {
        keywords.keywords.forEach(element => {
            if (!element[category]) return;
            sentences_stats += element[category + `_answer`].length;
        });
    });

    stats.stats[0].keywords = keywords_stats;
    stats.stats[0].sentences = sentences_stats;
    stats.stats[0].categories = categories.length;

    fs.writeFileSync('stats.json', JSON.stringify(stats));

    console.log(`[DÉMARRAGE] Bot lancé. Disponible sur ${client.guilds.cache.size} serveurs avec ${client.users.cache.size} utilisateurs.`);
});

client.on('message', message => {
    if (message.author.bot) return;
    
    let answered = 0;

    if (message.content.toLocaleLowerCase().replace('.', '').replace(',', '').split(' ').includes('manu')) {
        message.channel.send("Tu m'appelles Monsieur le président de la République, ou Monsieur. D'accord ?");

        answered = 1;
    }

    message.content.toLocaleLowerCase().replace('.', '').replace(',', '').split(' ').forEach(word => {
        if (answered === 1) return;

        categories.forEach(category => {
            keywords.keywords.forEach(element => {
                if (!element[category]) return;
                element[category].forEach(keyword => {
                    if (keyword === word) {
                        message.channel.send(`${element[category + `_answer`][Math.floor(Math.random() * Math.floor(element[category + `_answer`].length))]}`);
                        answered = 1;
                        stats.stats[0].answered++;

                        fs.writeFileSync('stats.json', JSON.stringify(stats));
                        return;
                    }
                });
            });
        });
    });
});
