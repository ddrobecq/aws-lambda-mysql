const db = require ("../db.js");

/* GET ONE USER BY ID */
function getOne (id, body){
    let strreq = 'SELECT * FROM user WHERE usr_id = ' + id;
    return (db.execSQL(strreq));
};

/* GET ALL USERS */
function getAll (id, body){
    let strreq = "SELECT * FROM user";
    return (db.execSQL(strreq));
};

/* UPDATE A USER */
const update = function (id, body) {
    let strreq = "UPDATE user \
    SET usr_name = " + db.escape (body.usr_name) + " WHERE usr_id=" + id;
    console.log (strreq);
    return (db.execSQL(strreq));
};

/* INSERT A USER */
const create = function (id, body) {
    let strreq = "INSERT INTO user (usr_name) VALUES (" + db.escape (body.usr_name)  +  ")";
    return (db.execSQL(strreq));
};


module.exports ={
    getOne,
    getAll,
    update,
    create
}