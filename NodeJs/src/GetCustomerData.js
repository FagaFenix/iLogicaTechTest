// const fastify = require('fastify')
// const { default: fastify } = require("fastify");
async function GetUserData() {
    const userData = await fetch('http://127.0.0.1:3000/form/findAll', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    console.log(userData.json())

    for (var tok in userData) { console.log(tok, userData[tok][1]); }
    tok = Element.innerHtml("navp");
    // for (var i = 0, len = li.length; i < len; i++) {
    //     li[i].innerHTML = myList[i][1];
    // }
}

module.exports = { GetUserData }