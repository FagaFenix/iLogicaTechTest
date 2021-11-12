const jsdom = require("jsdom");
const { JSDOM } = jsdom;
document = new JSDOM("contact.html").window.document;

function capture(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log('data from Form: ', JSON.stringify(value));
    return value
}
const form = document.querySelector('form');
let lastFunction = form.addEventListener('submit', capture);

module.exports = { capture, lastFunction }




// function capture(event) {
//     const contactForm = document.getElementById('contactForm')
//     let fullname = document.getElementById("Fullname").value
//     let email = document.getElementById("Email").value
//     let phone = document.getElementById("Phone").value
//     let message = document.getElementById("Message").value
//     console.log(fullname, email, phone, message)
//     console.log('tremos la info del Form: ', contactForm)
//     let formData
//     formData = new FormData(event)
//     const value = Object.fromEntries(formData.entries());
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//     })
//     console.log('FinalFormData: ', formData)
//     console.log('object: ', value)
//     return { formData }
// }


// module.exports = { capture }