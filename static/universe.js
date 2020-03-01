let residentsButtons = document.getElementsByClassName('btn btn-primary');
let numberOfPlanetResidents = Array();
let allResidents ='     <tr>\n' +
    '                        <th>name</th>\n' +
    '                        <th>height</th>\n' +
    '                        <th>mass</th>\n' +
    '                        <th>skin color</th>\n' +
    '                        <th>hair color</th>\n' +
    '                        <th>eye color</th>\n' +
    '                        <th>birth year</th>\n' +
    '                        <th>gender</th>\n' +
    '                    </tr>';
fetch('https://swapi.co/api/planets')  // set the path; the method is GET by default, but can be modified with a second parameter
.then((response) => response.json())  // parse JSON format into JS object
.then((data) => {
    //for planet
    for (let i = 0; i < data.results.length; i++) {
        //pushing number of residents into array it is necessary for buttons residents buttons
        numberOfPlanetResidents.push(data.results[i].residents.length);
        //changing look of buttons
        if (numberOfPlanetResidents[i] === 0) {
            residentsButtons[i].innerHTML = 'no known residents';
        } else {
            residentsButtons[i].innerHTML = `${numberOfPlanetResidents[i]} resident(s)`;
        }
        if (residentsButtons[i].innerHTML === 'no known residents') {
            residentsButtons[i].disabled = true;
        }
        let planetResidents;
        residentsButtons[i].addEventListener('click', function () {
            let allResidents = '';
            allResidents ='     <tr>\n' +
    '                        <th>name</th>\n' +
    '                        <th>height</th>\n' +
    '                        <th>mass</th>\n' +
    '                        <th>skin color</th>\n' +
    '                        <th>hair color</th>\n' +
    '                        <th>eye color</th>\n' +
    '                        <th>birth year</th>\n' +
    '                        <th>gender</th>\n' +
    '                    </tr>';
            for (let j = 0; j < data.results[i].residents.length; j++) {
                if (data.results[i].residents.length > 0) {
                    fetch(data.results[i].residents[j])
                        .then((residentsResponse) => residentsResponse.json())
                        .then((residentsData) => {
                            planetResidents =
                                `    
                            <tr>
                                <td>${residentsData.name}</td>
                                <td>${residentsData.height}</td>
                                <td>${residentsData.mass}</td>
                                <td>${residentsData.skin_color}</td>
                                <td>${residentsData.hair_color}</td>
                                <td>${residentsData.eye_color}</td>
                                <td>${residentsData.birth_year}</td>
                                <td>${residentsData.gender}</td>
                            </tr>
                    `;
                            allResidents = allResidents + planetResidents;
                            document.getElementById("classTable").innerHTML = allResidents;
                        });
                }
            }
        });
    }

});
