
STEPS TO PREPARE THE SERVER TO WORK

### Create the express App

Install express-generator globally and create the project using express --view=hbs NOMBRE_PROYECTO.
Open the project and create a .gitignore file that contains exludes to node_modules and .env.
Install nodemon as a devDependency and create a new script in package.json called dev: DEBUG=NOMBRE_PROYECTO:*.
Configure eslint by installing npm i --save-dev eslint and running npx eslint --init.


TODO

Create Song model (title, year, author)
Create song route and controller files
Get songs & post song