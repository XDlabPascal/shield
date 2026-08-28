Apple limite certaines fonctionnalités de Chrome sur iOS, notamment la possibilité d'ajouter une webapp en plein écran. Safari offre une meilleure intégration pour cela :

Créez une page web avec la balise <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">.
Ajoutez la balise suivante dans le <head> pour masquer la barre d'adresse en mode plein écran :
html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
Sur Safari, ajoutez la page à l'écran d'accueil via le menu "Partager" > "Ajouter à l'écran d'accueil".
Lorsqu'on ouvre cette icône, la webapp s'ouvrira en mode plein écran.
