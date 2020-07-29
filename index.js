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
                        switch (category) {
                            case "salutation":
                                message.channel.send("Bien le bonjour très cher compatriote.");
                                answered = 1;
                                return;
                            break;

                            case "costard":
                                message.channel.send("La meilleure façon de se payer un costard, c'est de travailler.");
                                answered = 1;
                                return;
                            break;

                            case "milliardaire":
                                message.channel.send("Il faut des jeunes Français qui aient envie de devenir milliardaires.");
                                answered = 1;
                                return;
                            break;

                            case "covid":
                                message.channel.send("La France unie, c'est notre meilleur atout dans la période troublée par la COVID-19 que nous traversons. Nous tiendrons. Tous ensemble.");
                                answered = 1;
                                return;
                            break;

                            case "kwassa-kwassa":
                                message.channel.send("Le kwassa-kwassa pêche peu, il amène du Comorien.");
                                answered = 1;
                                return;
                            break;

                            case "gaulois":
                                message.channel.send("Vous êtes des Gaulois réfractaires au changement.");
                                answered = 1;
                                return;
                            break;

                            case "manif":
                                message.channel.send("Je ne céderai rien ni aux fainéants, ni aux cyniques, ni aux extrêmes.");
                                answered = 1;
                                return;
                            break;

                            case "chômeur":
                                message.channel.send("Je traverse la rue, je vous trouve du travail.");
                                answered = 1;
                                return;
                            break;

                            case "sextape":
                                message.channel.send("Tu fais ce que tu veux. C’est ta vie, ta famille qui est en jeu.");
                                answered = 1;
                                return;
                            break;

                            case "retraite":
                                message.channel.send("On pouvait parler très librement, la chose que l’on n’avait pas le droit de faire c’est de se plaindre. Je trouve que c’est une bonne pratique qu’avait le Général, le pays se tiendrait autrement si c’était comme cela. On ne se rend pas compte de la chance que l’on a. On vit de plus en plus vieux et en bonne santé.");
                                answered = 1;
                                return;
                            break;

                            case "syndicat":
                                message.channel.send("Je mesure les craintes et l'opposition mais il y a aussi beaucoup de mensonges et de manipulation.");
                                answered = 1;
                                return;
                            break;

                            case "reelu":
                                message.channel.send("Il ne reste que " + a.to('2022-04-23', true).replace('years', 'années').replace('year', 'année').replace('months', 'mois').replace('month', 'mois').replace('days', 'jours').replace('day', 'jour').replace('hours', 'heures').replace('hour', 'heure').replace(' a ', ' 1 ').replace('in', 'dans') + " avant ma victoire aux prochaines présidentielles.");
                                answered = 1;
                                return;
                            break;

                            case "perlimpimpin":
                                message.channel.send("Ce que vous proposez, comme d'habitude, c'est de la poudre de Perlimpinpin.");
                                answered = 1;
                                return;
                            break;

                            case "bigard":
                                message.channel.send("Je suis fâché.");
                                answered = 1;
                                return;           
                            break;

                            case "t+":
                                message.channel.send("Les salariés français sont trop payés... Les salariés doivent pouvoir travailler plus, sans être payés plus si les syndicats majoritaires sont d’accord.");
                                answered = 1;
                                return;
                            break;

                            case "entrepreneur":
                                message.channel.send("Je dis aux jeunes : “ne cherchez plus un patron cherchez des clients”.");
                                answered = 1;
                                return;
                            break;

                            case "roi":
                                message.channel.send("La France est en deuil d'un roi.");
                                answered = 1;
                                return;
                            break;

                            case "apprenti":
                                message.channel.send("Je compte sur vous pour engager plus d’apprentis. C’est désormais gratuit quand ils sont mineurs.");
                                answered = 1;
                                return;
                            break;

                            case "jeune":
                                message.channel.send("Quand on est jeune, 35 heures ce n'est pas assez.");
                                answered = 1;
                                return;
                            break;

                            case "car":
                                message.channel.send("Les pauvres pourront voyager plus facilement.");
                                answered = 1;
                                return;
                            break;

                            case "gare":
                                message.channel.send("Une gare, c’est un lieu où l’on croise les gens qui réussissent et les gens qui ne sont rien.");
                                answered = 1;
                                return;
                            break;

                            case "pauvre":
                                message.channel.send("Les gens naissent pauvres et restent pauvres. Ceux qui tombent pauvres restent pauvres... Il faut qu'ils puissent s'en sortir.");
                                answered = 1;
                                return;
                            break;
                        }
                    }
                });
            });
        });
    });
});
