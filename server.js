const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

const usersCtrl = require("./usersCtrl.js");

app.use(bodyParser.json());

//ENDPOINTS
//GET REQUESTS
app.get("/api/users", usersCtrl.getUsers);
app.get("/api/users/:id", usersCtrl.getUsersId);
app.get("/api/admins", usersCtrl.getAdmins);
app.get("/api/nonadmins", usersCtrl.getNonAdmins);
app.get('/api/user_type/:type', usersCtrl.getUserByTypes);

//PUT REQUESTS
app.put("/api/users/:id", usersCtrl.putUser);

//POST REQUESTS
app.post("/api/users", usersCtrl.postUser);

//DELETE REQUESTS
app.delete("/api/users/:id", usersCtrl.deleteUser);

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})