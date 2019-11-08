# Functional-Programming


Dit is mijn repository voor het vak Functional-Programming. Ik heb dit vak gevolgd van 4-11-2019 t/m 15-11-2019. Het vak is een onderdeel van de tech-track van Information Design in jaar 3 van CMD aan de HvA.

![](https://i.imgur.com/SQ8ccKy.png)

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
Voor het vak Frontend-Applications heb ik de opdracht gekregen om aan de slag te gaan met de database van het NMVW (Nationaal Musea van Wereldkunde).

Het NMVW heeft een ontzettend grote collectie, en maar een deel hiervan wordt tentoongesteld in de musea die bij het NMVW horen. 
Deze grote collectie is online te bekijken, maar hier komen maar weinig mensen op af.

Ook is deze collectie moeilijk om te ontdekken, het is vooral gericht op mensen die weten wat ze willen bekijken.

Aan mij de taak om met deze collectie aan de slag te gaan en het aantrekkelijk(er) te maken om de website van de collectie te bezoeken.

## Doelgroep
In mijn uitwerking van deze opdracht heb ik mij gericht op een jonge doelgroep, kinderen tussen de 8 en 14 jaar, maar het concept is ook leuk voor personen die buiten deze groep vallen.

Ik heb voor deze doelgroep gekozen omdat ik denk dat er weinig tot geen mensen uit deze doelgroep de huidige site van de collectie van het NMVW bezoeken. Er valt dus veel te winnen binnen deze doelgroep.

Toen ik de opdracht voor het eerst hoorde, dacht ik al snel aan gamification. Gamification is een goede en leuke manier om minder interessante data toch leuk te maken. Het ontdekken van de collectie terwijl je een spelletje speelt lijkt mij ideaal, vooral voor kinderen.

## Features
* Ontdek de collectie van het NMVW op een speelse manier
* Speel het "Welk object is ouder?" spel: kies het object waarvan jij denkt dat hij ouder is dan de ander
* Houd je score bij
* Verbeter je eigen high score

## Gebruikte data
In de applicatie wordt data opgehaald uit de collectie database van het NMVW. Hiervoor gebruik ik een SPARQL query die objecten ophaalt die aan vooraf opgestelde voorwaarden voldoen. Meer hierover in de wiki onder [SPARQL query](https://github.com/DaanKos/functional-programming/wiki/SPARQL-query).

## Credits
* [Hulp van Kris Kuiper](https://github.com/kriskuiper)
