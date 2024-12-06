import { countries } from "./data.js";

fetch('./templates/country-card.hbs')
.then(response => response.text())
.then(templateSource => {
    const template = Handlebars.compile(templateSource);

    const container = document.getElementById('app');
    countries.forEach(country => {
        const html = template(country);
        container.innerHTML += html;
    })
})

.catch(error => console.error('Error loading template: ', error))
