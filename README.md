# CMTTHE04 Week3 oefening 1

## Pong

Startproject voor Pong in Typescript

### Beweeg de bal

Bestudeer de opzet van het project: game roept de update functie van de bal aan. Maak de volgende aanpassingen:

- In de update functie van de bal tel je 1 op bij de `x` en `y` variabelen.
- Log de waarde van de `x` en `y` variabelen in de console.
- Gebruik de variabelen om de bal op die plek te tekenen!
- Geef de bal twee nieuwe variabelen: `xspeed` en `yspeed`. Zet deze op 1.
- In de update functie tel je `xspeed` op bij `x` en `yspeed` bij `y`.

### Hou de bal binnen het scherm

De breedte en hoogte van het scherm kan je opvragen met `window.innerWidth` en `window.innerHeight`. 

- Controleer of de positie van de bal binnen het window is.
- Als de bal rechts of links buiten beeld gaat, wissel je de `xspeed` van 1 naar -1, en terug.
- Als de bal boven of onder buiten beeld gaat, wissel je de `yspeed` van 1 naar -1, en terug.
- Kijk of de bal nu binnen het beeld blijft stuiteren.

### Meerdere ballen

- Maak een array van ballen in Game.ts: `balls:Ball[] = []`
- Plaats een aantal ballen in de array met `this.balls.push(new Ball())`. Experimenteer met het aantal ballen.
- Update alle ballen in de gameloop van game.ts

### Paddles

- Het project bevat een `paddle.ts` class. Voeg een paddle instance toe aan Game.ts!
- Bestudeer het [voorbeeld van collision detection](https://github.com/HR-CMGT/Typescript/blob/master/snippets/collision.md)
- Voeg in game.ts collision detection toe tussen de balls en de paddle
- Wat moet er gebeuren als een ball een paddle raakt?

### De game af maken

- Kan je twee paddles toevoegen die elk hun eigen keyboard controls hebben?
- Kan je een score weergeven? Wanneer is het game over?

### Voorbeeldcode

- [Collision detection](https://github.com/HR-CMGT/Typescript/blob/master/snippets/collision.md)
- [Keyboard input](https://github.com/HR-CMGT/Typescript/blob/master/snippets/movement.md)
- [Game Loop](https://github.com/HR-CMGT/Typescript/blob/master/snippets/game.md)