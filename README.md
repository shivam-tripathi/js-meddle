JS-Meddle
======

Code written while meddling with js es6, react, express and related stuff.

--------------------------------------------------------------------------------
## Cloning

Clone the repository using:

```bash
git clone https://github.com/shivam-tripathi/js-meddle.git
```

Alternatively, you can download zip file too using this [link](https://github.com/shivam-tripathi/js-meddle.git/archive/master.zip).

--------------------------------------------------------------------------------

## Configuration

Rename `config.example.json` to `config.json`, and make relevant changes to the file.

## Installation

Run `npm install`.

--------------------------------------------------------------------------------

## Building and running

### TL;DR

```bash
npm start
```
### Details

The following commands can be used to transpile the source code in src to ES6 via babel.
```bash
#To transpile server code
npm run buildserver
#To transpile client code
npm run buildclient
#Alternatively, to do both
npm run build
```

To clean earlier transpiled code, run:
```bash
npm run clean
```

To run the server:
```bash
npm run runserver
```

To run nodemon, which tracks any changes made in src and immediately transpiles them:
```bash
#To run daemon which tracks only src/client files
npm run clientdaemon
#To run daemon which tracks only src/server files
npm run serverdaemon
#Alternatively, to run both daemons parallely
npm run startdaemons
```

Finally, the command to start the server and track all changes made in src/client and src/server separately:
```bash
npm start
```