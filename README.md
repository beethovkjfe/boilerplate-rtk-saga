## BLINKLINK WEB UI

Frontend codebase for Blinklink Web App

## Requirements

- Node `v16.17.0`
- NPM `v8.15.0`

### Setup Instructions:

`git clone git@github.com:beethovkjfe/blinklink-web-app.git`

`cd blinklink-web-ui`

`npm install --legacy-peer-deps`

### Run Instructions:

Create `.env` file inroot folder. (Required keys can be found in `.env.sample` file)

`npm start`

Then go to 

`dev.blinklink.com:3000` 

For using API's, follow the given instructions.

1.  `sudo nano /etc/hosts`
2.  Add `${ip} api.blinklink.com`, where ip belongs to API of hosted machine.
3.  Save and Exit.

### Test

`npm run test`

### Lint

`npm run lint`

### Issue Tracker

### Coding styles

- Keep it simple and readable with type definitions.
- Write unit tests as much as possible.
- Follow the rule of linting. You can't do committing with messy codes.
