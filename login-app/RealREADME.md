"How I got this app to work"

npx create-react-app my-first-react-app

created Server folder to store backend app

modify pack-age.json to:
"start": "concurrently \"npm run server\" \"react-scripts start\" ",

create server scrtip for "start" to run:
"server": "nodemon Server/index.js",

npm i pacakges:
React
React-Redux
Redux
concurrently
mysql
jsonwebtoken
bcrypt
@material-ui/core
@material-ui/icons
react-router-dom
thunk / redux-thunk

GAMEPLAN:
1: Create react app : DONE
2: Integrate backend App: DONE
3: Install itinal Packages: DONE
4: Concurrently start React App + Server, and test server in Postman: DONE
5: Make new table/database in MySql workbench to connect server to: DONE
6: Make sure backend can reach database in postman: DONE
7: Test Authentication from backend: DONE - test some more to be sure
8: Build Components in Front end, use protected routes: IN PROGRESS - turns out schools own example homework assignment doesn't work. Need to learn new way of using cookies.
9: Implement redux to make fetch calls to back end to do authentication:
