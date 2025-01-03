// import { countries } from "./data.js";

// fetch('./templates/country-card.hbs')
// .then(response => response.text())
// .then(templateSource => {
//     const template = Handlebars.compile(templateSource);

//     const container = document.getElementById('app');
//     countries.forEach(country => {
//         const html = template(country);
//         container.innerHTML += html;
//     })
// })

// .catch(error => console.error('Error loading template: ', error))



////////////////////////////////////////////2



// import { countries } from './data.js';
// const templateSource = document.getElementById('country-template').innerHTML;

// const template = Handlebars.compile(templateSource);
// const renderHTML = countries.map(country => template(country)).join('');
// const container = document.getElementById('app');
// container.innerHTML = renderHTML;