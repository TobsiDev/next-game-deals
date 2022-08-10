# Weather App

```bash
npm run dev
# or
yarn dev
```

## NPM INSTALLS:

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm install -D prettier prettier-plugin-tailwindcss

npm install react-icons

<br>

### API's

https://apidocs.cheapshark.com/
https://apidocs.cheapshark.com/#b9b738bf-2916-2a13-e40d-d05bccdce2ba

Steam: 1
HumbleBundle: 11
GOG: 7

<br>
Example **GET List of Deals** output
https://apidocs.cheapshark.com/#b9b738bf-2916-2a13-e40d-d05bccdce2ba
https://www.cheapshark.com/api/1.0/deals?storeID=1
```{
"internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
"title": "Deus Ex: Human Revolution - Director's Cut",
"metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
"dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
"storeID": "1",
"gameID": "102249",
"salePrice": "2.99",
"normalPrice": "19.99",
"isOnSale": "1",
"savings": "85.042521",
"metacriticScore": "91",
"steamRatingText": "Very Positive",
"steamRatingPercent": "92",
"steamRatingCount": "17993",
"steamAppID": "238010",
"releaseDate": 1382400000,
"lastChange": 1621536418,
"dealRating": "9.6",
"thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
}
```

https://www.cheapshark.com/redirect?dealID=wON5gjM9PTJ9SjiqxSl830LamXNpYh4vKYZqiPZftog%3D

IIokw%2BluKJ5aKPP6t7UTl7mkCLmEWDVhipCOS9FY4D4%3D
https://www.cheapshark.com/redirect?dealID=IIokw%2BluKJ5aKPP6t7UTl7mkCLmEWDVhipCOS9FY4D4%3D

```
[Possible deal comparison function]
https://www.cheapshark.com/api/1.0/games?title={Game-name} /*LEGO%20Star%20Wars*/
https://www.cheapshark.com/api/1.0/games?id={gameID} /*149357 LEGO Star Wars: The Force Awakens*/
```

```
https://www.cheapshark.com/redirect?dealID={cheapestDealID}
```
