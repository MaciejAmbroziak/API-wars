fetch('https://swapi.co/api/planets')  // set the path; the method is GET by default, but can be modified with a second parameter
.then((response) => response.json())  // parse JSON format into JS object
.then((data) => {
    let residentsButtons = document.getElementsByClassName('residents');
    let residentsOfPlanet = Array();
    for (let i = 0; i < data.results.length; i++) {
        residentsOfPlanet.push(data.results[i].residents.length);
    }
    for (let i = 0; i < residentsButtons.length; i++){
        if (residentsOfPlanet[i] === 0) {
            residentsButtons[i].innerHTML = 'no known residents';
        } else {
            residentsButtons[i].innerHTML = `${residentsOfPlanet[i]} resident(s)`;
            residentsButtons[i].setAttribute('id',`planet-${i}`)
        }
        if (residentsButtons[i].innerHTML === 'no known residents') {
            residentsButtons[i].disabled = true;
        }
    }
});
