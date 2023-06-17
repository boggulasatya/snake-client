# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["Message"](message.jpg)
!["Moveup"](moveup.jpg)


## Getting Started

- To run the snake client, one first need to set up and run the server side of the project as mentioned below:
- Clone serverside code from [https://github.com/lighthouse-labs/snek-multiplayer.git].
- Open a terminal/command prompt and navigate to the snek-multiplayer directory.
- Install the necessary dependencies by running the following commands:
    npm install
    
    npm run play

- Clone the client-side code from the GitHub repository [https://github.com/boggulasatya/snake-client].
- Open a terminal and navigate to the snake-client directory.
- Run the Snake client using the following command:
  node play.js

# Note:

- Update the port number in constants.js info by running snek-multiplayer so that one can run it on their computer.

# Controls

- Use  w, a, s, d keys to navigate the snake: up, left, down, right.
- Use m, g, h keys to send messages to server to display text on screen, next to snake: Hey Snake!, Have a good game!, Have fun!.