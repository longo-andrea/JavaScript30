const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint).then(blob => blob.json())
.then(data => cities.push(...data))
.catch(error => console.log("Error!"));

function cityMatch(word, cities) {
    return cities.filter(value => {
        const regex = new RegExp(word, 'gi');

        return value.city.match(regex) || value.state.match(regex);
    });
}

function fillSuggestionsList(e) {
    const suggestions = document.querySelector('.suggestions');
    suggestions.innerHTML = '';

    if(e.target.value) {
        const suggCity = cityMatch(e.target.value, cities);
        const html = suggCity.map(item => {
            const regex = new RegExp(e.target.value, 'gi');
            const hlCityName = item.city.replace(regex, `<span class="hl">${e.target.value}</span>`);

            return `<li>
                <span class="name">${hlCityName}, ${item.state}</span>
                <span class="population">${item.population}</span>
            </li>`;
        }).join('');

        suggestions.innerHTML = html;
    }
}

document.querySelector('.search').addEventListener('input', fillSuggestionsList);
