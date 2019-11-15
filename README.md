# Functional Programming - Visualisatie: de categorie met de meeste objecten, per land


Dit is mijn repository voor het vak Functional-Programming. Ik heb dit vak gevolgd van 4-11-2019 t/m 15-11-2019. Het vak is een onderdeel van de tech-track van Information Design in jaar 3 van CMD aan de HvA.

![Afbeelding huidige uitwerking concept](https://i.imgur.com/FBgKnYd.png)

## Inhoud
* [Link naar de applicatie](#link-naar-de-applicatie)
* [Lokale installatie](#lokale-installatie)
* [Leerdoelen](#leerdoelen)
* [Introductie](#introductie)
* [Doelgroep](#doelgroep)
* [Het concept](#het-concept)
* [Features](#features)
* [Gebruikte data & verwerken data](#gebruikte-data--verwerken-data)
* [Credits](#credits)

## Link naar de applicatie
[Klik hier om de applicatie te gebruiken/bekijken.](https://fervent-bartik-34cd02.netlify.com/)

## Wiki
Houd het ontwikkelingsproces bij in de [wiki!](https://github.com/DaanKos/functional-programming/wiki)

## Bekende bugs
* De gebruiker kan niet inzoomen op de kaart
* Sommige tekst loopt over elkaar heen
* De styling van de visualisatie is ondermaats

## Lokale installatie
### Installatie
Om de applicatie lokaal te installeren, moet je een ```git clone``` uitvoeren.

Voordat je de clone uitvoert:
* Installeer node.js
* Installeer een code editor (zoals bijv. Visual Studio Code)
* Installeer een CLI (command line interface)

Gebruikte bronnen/packages:
* NPM
* Rollup.js
* d3.js

**Doorloop dit proces:**

Clone deze repository
```
git clone https://github.com/DaanKos/functional-programming.git
```

Ga naar de juiste folder
```
cd functional-programming
```

Installeer de gebruikte bronnen/packages met NPM
```
npm install
```

### Gebruik
Start de applicatie
```
npm run start
```

Om de code klaar te maken voor deployment
```
npm run build
```

### Up to date blijven
Als ik nog actief aan dit project werk is het slim om af en toe een ```git pull``` uit te voeren om er zeker van te zijn dat je de meest recente versie gebruikt.

## Leerdoelen
- [x] Kennis maken met functional programming
- [x] Kennis maken met de ES6 javascript syntax
- [x] Kennis maken met d3.js
- [x] Het maken van datavisualisaties met d3.js met opgehaalde data, op basis van een voorbeeld
- [x] Het opschonen van opgehaalde data

## Introductie
Voor het vak Functional Programming heb ik de opdracht gekregen om aan de slag te gaan met de database van het NMVW (Nationaal Musea van Wereldkunde).

Het NMVW heeft een ontzettend grote collectie, en maar een deel hiervan wordt tentoongesteld in de musea die bij het NMVW horen. 
Deze grote collectie is online te bekijken, maar hier komen maar weinig mensen op af.

Aan mij de taak om de data die in de database beschikbaar is te verwerken in een datavisualisatie die mensen dichter bij de collectie kan brengen op een informatieve en overzichtelijke manier.

## Doelgroep
Dit concept is vooral passend voor een online omgeving. In een volledig uitgewerkte datavisualisatie wil ik de gebruiker de mogelijkheid geven om in te zoomen op de wereldkaart, zo kan de gebruiker ook de details zien van de landen met een kleinere omvang.

Verder denk ik dat mijn concept eigenlijk meerdere doelgroepen kent. Het is een simpel te begrijpen visualisatie, dus mensen die weinig over de collectie weten kunnen er makkelijk mee aan de slag. Toch is het ook interessant voor mensen die wat bekender zijn met de collectie omdat de visualistie nieuwe inzichten brengt die eerder niet bekend waren.

## Features
* Ontdek welke categorie het vaakst voorkomt in ieder land op een wereldkaart en leer meer over wat de verschillende landen op de wereld hebben bijgedragen aan de collectie.

## Gebruikte data & verwerken data
In de applicatie wordt data opgehaald uit de collectie database van het NMVW. Hiervoor gebruik ik een SPARQL query die objecten ophaalt die aan vooraf opgestelde voorwaarden voldoen. Meer hierover in de wiki op de [SPARQL query](https://github.com/DaanKos/functional-programming/wiki/SPARQL-query) pagina. De opgehaalde data heb ik opgeschoond en getransformeerd met JavaScript, hoe ik dit heb gedaan is te lezen op de  [data ophalen en verwerken](https://github.com/DaanKos/functional-programming/wiki/Data-ophalen-en-verwerken) pagina in de wiki.

## Credits
* [Hulp van Kris Kuiper](https://github.com/kriskuiper)
* [Hulp van Robert](https://github.com/roberrrt-s)
* [Hulp van Laurens](https://github.com/razpudding)
