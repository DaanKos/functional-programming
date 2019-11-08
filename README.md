# Functional-Programming


Dit is mijn repository voor het vak Functional-Programming. Ik heb dit vak gevolgd van 4-11-2019 t/m 15-11-2019. Het vak is een onderdeel van de tech-track van Information Design in jaar 3 van CMD aan de HvA.

![Aangepast conceptvoorbeeld](https://i.imgur.com/BmB3guS.png)

## Inhoud
* [Link naar de applicatie](#link-naar-de-applicatie)
* [Lokale installatie](#lokale-installatie)
* [Leerdoelen](#leerdoelen)
* [Introductie](#introductie)
* [Doelgroep](#doelgroep)
* [Het concept](#het-concept)
* [Features](#features)
* [Gebruikte data](#gebruikte-date)
* [Credits](#credits)

## Link naar de applicatie
Klik hier om de applicatie te gebruiken/bekijken *(helaas nog niet mogelijk)*

## Wiki
Houd het ontwikkelingsproces bij in de [wiki!](https://github.com/DaanKos/functional-programming/wiki)

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
- [ ] Kennis maken met de ES6 javascript syntax
- [ ] Kennis maken met d3.js
- [ ] Het maken van datavisualisaties met d3.js
- [ ] Het opschonen van opgehaalde data

## Introductie
Voor het vak Functional Programming heb ik de opdracht gekregen om aan de slag te gaan met de database van het NMVW (Nationaal Musea van Wereldkunde).

Het NMVW heeft een ontzettend grote collectie, en maar een deel hiervan wordt tentoongesteld in de musea die bij het NMVW horen. 
Deze grote collectie is online te bekijken, maar hier komen maar weinig mensen op af.

Aan mij de taak om de data die in de database beschikbaar is te verwerken in een datavisualisatie die mensen dichter bij de collectie kan brengen op een informatieve en overzichtelijke manier.

## Doelgroep
Op het moment van schrijven is mijn concept ontwikkeld zonder dat ik hierbij een heel duidelijke doelgroep in mijn achterhoofd had. Cindy, de opdrachtgever, vond het concept vooral passend voor een online omgeving. In mijn concept moet de gebruiker vaak inzoomen op een wereldkaart om zo de informatie van de kleinere landen te bekijken, dit leent zich dus niet zo goed voor een platform waar geen interactie mogelijk is. Vandaar dat mijn huidige doelgroep de website bezoeker is.

## Features
* Ontdek welke categorie het vaakst voorkomt in ieder land en kom er achter wat er speelt/speelde in ieder land

## Gebruikte data
In de applicatie wordt data opgehaald uit de collectie database van het NMVW. Hiervoor gebruik ik een SPARQL query die objecten ophaalt die aan vooraf opgestelde voorwaarden voldoen. Meer hierover in de wiki onder [SPARQL query](https://github.com/DaanKos/functional-programming/wiki/SPARQL-query).

## Credits
* [Hulp van Kris Kuiper](https://github.com/kriskuiper)
