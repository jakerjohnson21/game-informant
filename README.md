
# game-informant

Game-informant is a website developed using **HTML**, **Javascript**, **CSS**,    **MongoDB** and **Javascript**.  Game-informant shows relevant information pertaining to a game and allows users to see trending games or search for specific games and add them to their favorites collection.



## Index
- [Scope](#Scope)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Data Models](#data-models)
- [Milestones](#milestones)

 __Option 1:__

```Download zip from this repository ```
 
 ___OR___   Clone Repo: ```https://github.com/ajay-k/hangman.git: ```


Then, open __index.html__ using Firefox or Google Chrome.

 __Option 2:__
 
[Hangman Github Pages](https://ajay-k.github.io/hangman/)

## User Stories

#### User opens the page:

- Loads page, trending/popular games is shown
- Loads user’s favorite games 
- Search specific game in search bar
User selecting clicking specific game:

#### User  clicking specific game:
- Modal pops up with summarized game information (game title, description)
- Inside modal view more button is option to get more in-depth information about the game ( comments / summary, clips of game)
- Clicking favorites button will add game to favorites container and the database
- User can leave unique comments of their favorite games

#### User Searching specific game in search bar:
- Search results show up which are clickable
- Selecting specific games's hyperlinks takes you to in-depth game information page

## The Approach Taken
Intially the word was choosen by me, to make it more difficult and dynamic I choose to obtain random words from an API. Once this word is retrieved I create the empty div elements with black bottoms borders on bottom to simulate a empty word bank. I create divs according to the letter for the word, so one empty div for each letter. Then I generate the buttons with corresponding alphabet letters as their values. Once the user clicks on a button I check to see if that letter appears in the word and find all placements of that button and place the letter to its div element. If player guesses the letter wrong I update the image to add a piece of body part and decrease their remaining turns. 

## Screenshots
![GameScreenshot](https://github.com/ajay-k/hangman/blob/master/images/hangmanGame.png)

## Wireframe (Prototype)
![WireFrame](https://github.com/ajay-k/hangman/blob/master/images/State1.png)

## Known Bugs / Unsolved Problems
When resizing the browser window the animiation may animate the letter to the wrong location, but the correct letter will appear on the word bank.

## Sources
[Random Word API](https://github.com/RazorSh4rk/random-word-api)