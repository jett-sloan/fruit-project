const inputBox = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    // filter fruit list to match str
    const results = fruit.filter((val)=>
        val.toLowerCase().includes(str.toLowerCase())
    );
    
	return results;
    
}

function searchHandler(e) {
    // get str from the input 
    const inputVal = inputBox.value;
    if (inputVal.length === 0) {
        suggestions.innerHTML = '';
        return;
    }

    const results = search(inputVal)
    showSuggestions(results,inputVal)
    // call search 
    // call showsuggestions

}

function showSuggestions(results, inputVal) {
    // to show html and css <li>
	// TODO

    suggestions.innerHTML = '';
    for(let i = 0; i < results.length; i ++){
        let newLi = document.createElement('li')
        const matchIndex = results[i].toLowerCase().indexOf(inputVal.toLowerCase());
        const formatResult = results[i].substring(0, matchIndex) + results[i].substring(matchIndex,matchIndex + inputVal.length).bold() + results[i].substring(matchIndex + inputVal.length)
        newLi.innerHTML = formatResult;
        suggestions.appendChild(newLi)
    
    }  
}

function useSuggestion(e) {
    inputBox.value = e.target.textContent;
    suggestions.innerHTML = '';
}

inputBox.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);