const search = document.getElementById('search');
const matchList = document.getElementById('matchList');

// search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('./data/states.json');
    const states = await res.json();
// let matches to current text input
let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
})

if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = ' ';
}
outputStates(matches);
} 
    const outputStates = (matches) => {
        if (matches.length > 0) {
            const stateList = matches.map(match => `
                <div class="card card-body mb-2>
                    <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</h4>
                    <p class="small"> Lat: ${match.lat} / Long: ${match.long}</p>
                </div>
            `)
             .join(' ');
            matchList.innerHTML = stateList;
        }
    }
search.addEventListener('input', () => searchStates(search.value));
 
//show result in HTML
