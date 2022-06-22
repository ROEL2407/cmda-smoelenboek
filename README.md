# Design Rationale CMDA Smoelenboek

## Inhoudsopgave

- [Debrief](#Debrief)
- [Probleem definitie](#Probleem-definitie)
- [Design challenge](#Design-challenge)
- [Oplossing](#Oplossing)
- [Gemaakte keuzes](#Gemaakte-keuzes)
- [Uitleg van de code](#Uitleg-van-de-code)
- [Wiki's](#Wiki's)
- [Licentie](#Licentie)

## Debrief

<details open>
<summary>onze debrief</summary>
In deze debriefing zullen wij de opdracht en de opdrachtgever in kaart brengen:

### Contactgegevens

Wij maken deze opdracht voor de opleiding Communication and Multimedia Design van de Hogeschool van Amsterdam.

Ons contactpersoon is Vasilis van Gemert. Vasilis wordt het liefst op teams gecontacteerd onder dezelfde naam. Zijn email is: v.van.gemert@hva.nl en de locatie waar Vasilis vooral te vinden is, is het Theo Thijssenhuis van de HvA in Amsterdam.

Wij hebben deze opdracht aangevraagd gekregen op 23-05-2022 en deze zal opgeleverd worden op 23-06-2022.

### Achtergrondinformatie

De opdrachtgever is de opleiding Communication and Multimedia Design van de HvA in Amsterdam. Deze opleiding biedt lessen voor studenten op HBO-niveau.

### Opdrachtomschrijving

De opdracht is het maken van een digitaal smoelenboek. In dit smoelenboek kunnen de docenten en studenten alle docenten van CMD zien.

CMD wil een digitaal Smoelenboek zodat studenten en docenten kunnen zien wie er werken binnen de CMD opleiding en zo contact met ze kunnen opnemen.

### Aanleiding

De reden dat deze opdracht ingediend wordt is omdat er vroeger in de gang bij de medialounge foto’s van alle docenten hingen waarop je kon zien wie er werkte. Na de verhuizing van de medialounge zijn deze foto’s weggehaald. Dit digitaal smoelenboek moet ervoor zorgen dat je weer een beeld krijgt bij de naam van de docent.

### Doelstelling

De doelstelling van onze opdrachtgever is het terug brengen van een sfeer waar studenten bij hun docenten kunnen aankloppen voor vragen. Vroeger was dit gedaan via de vaste werkplekken van docenten en hiermee wordt onze doelstelling dan ook deze sfeer weer terug te brengen.

### Oplevering

Wij zullen een digitaal product opleveren waarin een overzicht van docenten afgebeeld wordt. Docenten kunnen hun eigen informatie invullen of aanpassen. Voor ons product gebruiken wij de CMD huisstijl. Dit product zal op een groot touchscreen in de medialounge neergezet worden zodat docenten en studenten de docenten kunnen leren kennen.

### Randvoorwaarden

De randvoorwaarden van deze opdracht zijn:

- Het product moet op een groot scherm werken
- Het moet te gebruiken zijn voor blinde mensen en mensen in een rolstoel
- Het project zal gemaakt worden in CSS, HTML en JavaScript
- Docenten moeten hun eigen informatie aan kunnen passen
- Studenten en docenten moeten docenten kunnen leren kennen
- Er moet plaats zijn voor formele en informele informatie bij de docenten
- Er is geen dataset dus deze moet zelf gemaakt worden met behulp van een zelfgemaakte API
- Een diamanten beeldscherm behoort niet tot de oplevering

### Gebruikers van het eindresultaat

De website is bedoeld voor studenten en docenten. Met de website kunnen docenten andere docenten opzoeken en studenten kunnen zien wie hun docenten zijn. Docenten kunnen contact leggen met andere docenten.

### Relatie met andere projecten

Het project is onderdeel van de HvA.

</details>

## Probleem definitie

CMD Amsterdam wilt een online smoelenboek. Vroeger voor corona hingen er fysieke afbeeldingen naast de deuren van de kamers. Op deze afbeeldingen stonden de gezichten van de docenten met hun naam. Deze hingen dan bij de kamers van hun vaste plek. Sinds die tijd is CMD gegroeid en hebben de docenten niet meer een vaste plek waar ze zitten als ze geen les geven. Hierdoor zijn dus ook de afbeeldingen naast de kamers verdwenen.

CMD, met name Vasilis van Gemert en Brit Wijnmaalen, zijn dus nu op zoek om dezelfde fijne sfeer terug te krijgen. De sfeer dat je als student gewoon bij docenten aan kon kloppen voor vragen. Hierbij kunnen de docenten ook extra informatie over zichzelf delen om ook op andere vlakken met studenten of andere docenten te kunnen connecten.

### User stories

Met dit online smoelenboek gaan wij proberen de volgende user stories te behalen.

1. Docent opzoeken

Als student, wil ik snel een naam bij een gezicht kunnen vinden, zodat ik weet hoe mijn docent er uitziet/ook al weer heet.

2. Connectie met docent maken

Als docent, wil ik snel meer weten over collega’s, zodat ik interessantere connecties weet te leggen

3. Profiel kunnen wijzigen

Als docent, wil ik eenvoudig mijn profiel kunnen wijzigen, zodat ik dat niet op honderd verschillende plekken hoef te doen.

## Design Challenge

De docenten moeten met z'n allen op een heel groot scherm zichtbaar zijn. Je moet kunnen klikken op een foto en dan meer info kunnen lezen. En idealiter zou het gekoppeld moeten zijn aan een bestaande API zodat docenten hun eigen profiel kunnen updaten.

## Oplossing

Onze oplossing voor het probleem is een groot scherm in de medialounge, op dit scherm kun je alle docenten zien. Wanneer je op een docent tikt krijg je een pop-up met wat basis informatie zoals op welke dagen de docent beschikbaar is en zijn email. Als je door tikt op meer info krijg je alle informatie van de docent te zien, dit kan bestaan uit hun hobby's en / of een leuke feitje over ze, zo kun je de docent beter leren kennen. Op de detailpagina staat naast de docent 9 andere docenten die dezelfde specialiteit hebben, zo kun je zien welke docenten dezelfde specialiteit hebben om zo met deze in contact te komen. Onderaan de pagina kun je switchen tussen een grid en een catalogus view, in de catalogus view staan alle docenten alfabetisch gesorteerd op voornaam. Onderaan de pagina kun je ook zoeken op een docent door hun naam in te typen, als er geen resultaten gevonden worden krijg je 3 random docenten te zien, verder kun je nog filteren op specialiteit van een docenten. Rechts onderin zitten een omhoog en omlaag knop waarmee je de pagina omhoog en omlaag kan bewegen voor als je niet bij de bovenste rij kunt komen of als je niet de motoriek hebt om te scrollen.

## Gemaakte keuzes

Tijdens onze tijd die wij werkten aan deze opdracht hebben wij keuzes moeten maken die verdere acties bepaalde voor nieuwere features. Hier zullen wij uitleggen waarom we deze acties hebben gemaakt.

### CMS

Vanuit de minor werd ons aangeraden om het headless cms Prismic te gebruiken. Een headless CMS is een systeem waarin de gebruiken informatie kan zetten waar zelf vervolgens nog een website aan gekoppeld moet worden. Wat wij echter nodig hadden is dat er op de eigen website informatie gegeven kan worden zodat deze vervolgens afgebeeld kan worden. In ons geval was dat een docent zelf op de website zijn of haar informatie kan aanmaken of aanpassen. Dit kan jammer genoeg niet met prismic. Wij hebben toen met de opdrachtgever besloten dat wisselen naar een ander headless cms te veel tijd in zou nemen. Hierdoor hebben we besloten om bij Prismic te blijven en het account dat gebruikt kan worden voor het cms zelf, te gebruiken als de enige manier dat er data aangeleverd kan worden aangezien dit de enige mogelijke optie is die geen geld zou kosten.

De keuze om bij Prismic te blijven heeft meerdere gevolgen. Het eerste gevolg is dat de user story "Profiel kunnen wijzigen" niet optimaal uitgevoerd kan worden doordat er maar 1 account is. Het tweede gevolg is dat er geen connectie met de rooster website gemaakt kan worden. De opdrachtgever wilde dat de docenten niet zelf hun beschikbaarheid hoefde in te vullen door via de rooster website van de HvA een csv bestand te exporteren en deze via het cms te importeren. Echter kost het importeren geld aangezien dit een premium functie is binnen Prismic.

### Scrollen

Wij hebben ervoor gekozen om een extra stuk ruimte aan de bovenkant van de pagina te plaatsen zodat er kan gescrollt worden waarbij de bovenste rij docenten onderaan de pagina komt, op deze manier kunnen ook studenten / docenten die niet bovenin bij het scherm kunnen komen bij de bovenste rij docenten komen.

### Detail pagina

Wij hebben ervoor gekozen om eerst een pop-up te laten zien met wat basis informatie over de docent zoals dagen beschikbaar en hun email, hierdoor kun je als je snel een docent nodig hebt meteen zien of deze beschikbaar is en eventueel wat hun email adres is om een mail naar hun te sturen. Als je daarna op meer info tikt krijg je alle informatie over de docent te zien waarmee je deze echt kan leren kennen.

### Footer

Wij hebben ervoor gekozen om alle navigatie in de footer te plaatsen, dit hebben wij gedaan omdat de website op een groot scherm getoond wordt waarbij niet alle docenten / studenten bij de bovenkant van het scherm kunnen komen. Door middel van de scroll knoppen kan iedereen bij de bovenste rij docenten komen.

### Zoomen

Wij hebben door middel van de volgende code geprobeerd het zoomen uit te zetten voor het scherm:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0,  minimum-scale=1.0, user-scalable=no"
/>
```

Dit zou op alle devices de zoom functie moeten uitschakelen. Echter is dit niet het geval op het Sharp scherm waar wij mee getest hebben. Hierdoor raden wij aan om dit uit te schakelen in de instellingen op het device waar dit project op gaat draaien.

## Uitleg van de code

### Routes

De code is ingedeeld in routes, deze worden geimporteert in de server.js.

```js
import { homeRoute } from "./routes/homeRoute.js";
import { catalogRoute } from "./routes/catalogRoute.js";
import { detailRoute } from "./routes/detailRoute.js";
import { searchRoute } from "./routes/searchRoute.js";
import { filterRoute } from "./routes/filterRoute.js";
import { filterSearchRoute } from "./routes/filterSearchRoute.js";
import { searchFilterRoute } from "./routes/searchFilterRoute.js";
```
Vervolgens wordt er gekozen via welke url je bij deze route kan komen. 

```js
app.use("/", homeRoute);
app.use("/catalog", catalogRoute);
app.use("/detail", detailRoute);
app.use("/search", searchRoute);
app.use("/filter", filterRoute);
app.use("/filterSearch", filterSearchRoute);
app.use("/searchFilter", searchFilterRoute);
```

### Gerelateerde docenten

Op de detail pagina van een docent krijg je naast de informatie over deze docent nog 9 ander docenten te zien die dezelfde specialiteit hebben.
Hiervoor gebruik ik een lege array en loop ik door alle docenten heen, vervolgens wordt er gekeken of deze docent dezelfde specialiteit heeft als de docent waarop je geklikt is en of deze niet dezelfde voor en achternaam heeft als de docent waarop geklikt is. Als dat zo is wordt deze in de array gestopt.

```js
  let relatedTeachers = [];
  teachers.forEach((docent) => {
    if (
      docent.data.naam[0].text !== document.data.naam[0].text &&
      docent.data.achternaam[0].text !== document.data.achternaam[0].text
    ) {
      if (document.data.specaliteit == docent.data.specaliteit) {
        relatedTeachers.push({
          docent: docent,
        });
      }
    }
  });
```


### Filter

Met het filter feature wordt er gekeken naar welke category je kiest, vervoelgens wordt er gekeken of de docent deze category als specialiteit heeft en als dit zo is wordt deze in een lijstje gestopt. 

``` js
  document.forEach((docent) => {
    if (docent.data.specaliteit.includes(req.query.category)) {
      docenten.push({
        docent: docent,
      });
    }
  });
```

### Zoeken

Bij het zoeken wordt eerst de voornaam met de achternaam gecombineerd, zo kan er in een keer op deze string gezocht worden. Dan wordt er gekeken of wat er is ingetypt voor komt in deze naam, zo ja wordt deze in een lijstje gestopt. 

```js
  document.forEach((docent) => {
    let firstName = docent.data.naam[0].text;
    let lastName = docent.data.achternaam[0].text;
    let fullName = firstName + " " + lastName;

    if (fullName.toLowerCase().includes(req.query.q)) {
      docenten.push({
        docent: docent,
      });
    }
  });
```
#### Filteren na zoeken

Als je hebt gezocht en daarna wilt filteren wordt hiervoor een globaal variabel gemaakt, deze wordt aangemaakt in de searchRoute.js

``` js
  global.searchTeachers = docenten;
```

Vervolgens wordt dit variabel gebruikt in filterSearch.js om te kijken welke specialiteit je geselecteerd hebt.

``` js
  docenten = [];

  searchTeachers.forEach((docent) => {
    if (docent.docent.data.specaliteit.includes(req.query.category)) {
      docenten.push({
        docent: docent.docent,
      });
    }
  });
```

Dit werkt hetzelfde als je eerst filtert en dan een naam zoekt maar dan gebruik je searchFilter.js.


## Wiki's

[Wiki Roel](https://github.com/ROEL2407/cmda-smoelenboek/wiki) <br />
[Wiki Marloes](https://github.com/marloestacx/cmda-smoelenboek/wiki)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
