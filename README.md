# Foamy Back-End!

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

- See backend repo commits to Main for CORS/Request Header fix attempts & processes
- Backend commits after CORS workaround were made to main via Heroku CLI as the fix required hitting a deployed server- localhost is still stuck
- setup-db, create-tables, drop-tables and load-seed-data commands must be run via Heroku admin (not required to access and use deployed site)
- See closed PRs for Frontend commit history/messages

---

## If I had more time I would:

- Refactor all buttons & toggle handlers into their own components
- Handle images in Context rather than prop drilling state
- Make arrow key navigation more apparent on imageItem component

---

Magnifying glass icons created by Freepik - Flaticon.com

Arrow icons created by Roundicons - Flaticon.com
