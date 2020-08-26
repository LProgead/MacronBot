# MacronBot
MacronBot est un bot à visée ironique et divertissante rassemblant des phrases ayant été prononcées par le grand, le seul, l'unique, Emannuel Macron.

## Questions générales

### A quoi sert-il ?
Eh bien... disons que... il ne sert pas à grand chose. Simplement à vous divertir. Mais quoi de mieux que se divertir après une dure journée de labeur ?
MacronBot possède actuellement 22 phrases connues avec couplées avec plus de 75 mots-clés. Ce qui permet au robot de répondre *à peu près* au bon moment.

### Où le trouver ?
Actuellement, vous ne pouvez retrouver MacronBot uniquement sur Discord grâce à son [lien d'invitation](https://discord.com/api/oauth2/authorize?client_id=737659120219586652&permissions=67584&scope=bot).
Il est prévu qu'une version Twitter soit développée, affaire à suivre.

### Comment participer au projet ?
Votre aide est la bienvenue ! Si vous connaissez des phrases prononcées par Emmanuel Macron n'apparaissant pas dans le bot, vous pouvez me contacter par [e-mail](mailto:lprogead@mailo.com), via [Twitter](https://twitter.com/lprogead) ou via Discord (LProgead#3667).
Vous pouvez aussi aider à faire avancer le bot en l'ajoutant sur votre serveur grâce à son [lien d'invitation](https://discord.com/api/oauth2/authorize?client_id=737659120219586652&permissions=67584&scope=bot). Grâce à cet acte, plus d'utilisateurs le connaîtront et ça, ça me fera très plaisir 🥰

### Pour plus d'informations...
...n'hésitez pas à aller jeter un oeil sur le [document Evernote](https://www.evernote.com/shard/s747/sh/84a0652a-8bae-4aad-9966-e43bce06651d/30e65a53aaf847f95d387cab8685def6) sur lequel vous pourrez retrouver l'avancement en direct du projet et d'autres informations utiles.


## Questions développement
Entrons maintenant dans le vif du sujet pour les développeurs !

### Quel langage est utilisé pour le développement du robot ?
J'utilise JavaScript pour le script principal et JSON pour le fichier contenant les mots-clés. Le programme est supporté par NPM.

### Quels sont les modules utilisés ?
Pour ce projet, j'ai utilisé le module de la librairie Discord.JS pour faire le pont avec l'API Discord, le module DayJS pour calculer le temps restant avant les prochaines présidentielles ainsi que le module DotENV pour charger le fichier .env.

### Puis-je ré-utiliser le robot sur mon compte Discord ?
Comme le stipule la licence Affero, vous pouvez utiliser, fork, et distribuer ce projet à quelques conditions :
- Me citer (LProgead)
- Permettre à tous de télécharger votre nouveau code source
- Ne pas l'inclure dans un produit commercial
- Le distribuer sous la même licence, Affero.

Ainsi, vous pouvez sans risque l'utiliser pour une utilisation personnelle.

Je ne suis pas fermé à l'idée de donner à certains utilisateurs une dérogation de permissions. Si vous en souhaitez une, contactez-moi par [e-mail](mailto:lprogead@mailo.com) et nous en parlerons ensemble.

### Quels sont les prérequis pour lancer MacronBot sur mon équipement ?
- Tout d'abord, il vous faut avoir installé Node.JS sur votre ordinateur/serveur.
- Ensuite, vous pouvez cloner le repository, effectuer la commande `npm i` dans le dossier résultant.
- Créez un fichier .env dans lequel vous indiquez `token=VOTRE TOKEN`.
- Pour lancer le programme, lancez `node .`.
Et là, swhoosh !, votre application Discord se lance 😁
