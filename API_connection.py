import requests



response = requests.get('https://swapi.co/api/planets').json()
dict_of_planets = response['results']
for planet in dict_of_planets:
    planet_data = [planet["name"], planet['diameter'], planet['climate'], planet['terrain'], planet['surface_water'],
                   planet['population']]
