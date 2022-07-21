# Steps
* For execute the server is used the next command: node archiveName.js in my case i used: node app.js
* Install Nodemon

```
npm install -g nodemon
execute program with nodemon
nodemon nameFile (without extension)
```

# Introduction to Express

* Install Express 
```
npm i express
or
npm i express --save
```

# Implement handlebars
* render page but is not recommended, but you too (igualmente) let's see it (vamos a verlo)
```
npm install hbs
```
# Build of production
* First configure a variable of environment for port, so, we install dotenv for make the variable of environment for aplication of node.
```
npm i dotenv
```
* Now create a file called ".env" where we put our variable of environment

# Package.json
* In our file package.json we have that put a script in "scripts" the next line code:
```
  "scripts": {
    "start":"node app.js"
  }
```