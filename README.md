# ComposeTeams  

## What's this app for?  
This project aims to help you discover new cool and balanced teams for Basket, Football, ... and other team sports!

![Compose Teams](https://user-images.githubusercontent.com/4950209/30511600-fe49db1c-9adc-11e7-8fff-4749bc8582b0.png)

## Why?
If you're always playing with the same team, it's great but you might miss the opportunity to learn from different people and sometimes if someone is being replaced the teams can be unbalanced. This is where ***Compose Teams*** might help you!

## How can it help me build a team effectively?  
***Compose Teams*** will generate all the possible teams and order them from the most balanced teams to the most unbalanced ones. For that, you'll need to add at least 10 players*&#42;* and give them a grade. Once you've selected 10 players for the current game, a delta will be displayed for every generated teams to show the difference between two teams. The lowest the delta is, the better.

*&#42;: Compose Teams needs 10 players exactly for now but I plan to support other numbers of people*

## How this project started?  
At the beginning, it was a small challenge we had with [Victor Noël](https://github.com/victornoel): Create a functionnal demo within <= 1h. And we did it! :tada:. Few days later, I decided to go a bit further and started to refactor the code to work as much as possible with streams (rxjs) and also provide a better UI (with angular-material).

## Where can I try it?  
The project is now continuously deployed (thanks to Travis) at this address: https://maxime1992.github.io/compose-teams

If you prefer to run it on your own, just clone the project:  
```bash
git clone https://github.com/maxime1992/compose-teams.git
cd compose-teams
yarn install
yarn run build:prod
```
and the built project will be into the dist folder.  
(you might serve it with `http-server` for example).

## Is there still room for improvement?  
Yes! Definitely.  
It would be really nice to see those features landing to ***Compose Teams***:  
- [ ] Accept more or less than 10 players exactly to generate the games  
- [ ] Run the computation to generate all the teams within a web worker to improve the responsiveness of the app  
- [ ] Add an option panel to define some constraints (player 1 and 2 should be in the same team or in different teams)  
- [ ] Make some unit and E2E tests!  

## How to contribute?  
If you don't feel like coding, you might just report issue(s) or ask for improvement(s) [here](https://github.com/maxime1992/compose-teams/issues).  

On the other hand, if you're willing to contribute (and don't be shy), please be my guest: PR are welcome!  

- Fork the repo  
- Clone it from your account: `git clone https://github.com/YOUR-GITHUB-USERNAME/compose-teams.git`  
- Create a new branch with a name that sums up your idea: `git checkout -b my-branch-name`  
- Let your fingers roll on the keyboard  
- Commit `git add . && git commit -m "feat: a great feature"`  
- Push `git push`  
- Open a pull request from your repo at https://github.com/YOUR-GITHUB-USERNAME/compose-teams and compare it against `maxime1992/compose-teams` master branch  

 Let's make ***Compose Teams*** as cool as possible! :smile:
