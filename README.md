# Foamy Challenge!

## Hello!

My name is Taylor and I wanted to thank you for the opportunity to work on this project, I had a lot of fun with it! ⭐️

## Note

Unfortunately I missed the 1 repo stipulation in the challenge instructions. I have made a monorepo clone here but commit histories must be viewed on the separate repos listed below. So sorry for any inconvenience!

## Quick Video Tour!

https://loom.com/share/fa9491d8a33045e184a099fe76ac9937

## Repositories & Deploys:

Foamy Front End Repo:
https://github.com/taylor-c-williams/foamy-FE

Foamy Front End Deploy:
https://foamy-taylor.netlify.app/

---

Foamy Back End Repo:
https://github.com/taylor-c-williams/foamy-BE

Foamy API Deploy:
https://foamy-be.herokuapp.com/api/v1/images

(append "?perPage=2100&pageNumber=1" to URL for full dataset )

---

## Notes

- Lost a day fighting some nasty CORS errors. Tried several approaches to set Access-Control-Allow-Origin/Methods etc for PATCH/OPTIONS/Preflight HTTP request headers to no avail. I ultimately used a workaround called CORS Anywhere to set up & hit a proxy server in order to access my foamy server from the client side.

- More details:
  https://github.com/Rob--W/cors-anywhere

- Backend commits after CORS workaround were made to main via Heroku CLI as the fix required hitting a deployed server- localhost is still stuck
- See closed PRs for Frontend commit history/messages
- To run front end locally, clone and run 'npm run start'. The front end hits the deployed back end, not a local port.
- To run back end locally, clone and run 'npm setup-db' followed by 'npm run start'

---

## If I had more time I would:

- Refactor all buttons & toggle handlers into their own components
- Handle images in Context rather than prop drilling state
- Make arrow key navigation more apparent/intuitive on imageItem component

---

Magnifying glass icons created by Freepik - Flaticon.com

Arrow icons created by Roundicons - Flaticon.com
