const people = {
    "count": 87, 
    "next": "https://swapi.co/api/people/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }, 
        {
            "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:10:51.357000Z", 
            "edited": "2014-12-20T21:17:50.309000Z", 
            "url": "https://swapi.co/api/people/2/"
        }
    ]
}

const planets = [
   {
    "count": 61, 
    "next": "https://swapi.co/api/planets/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/81/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.co/api/planets/2/"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, rainforests", 
            "surface_water": "8", 
            "population": "1000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:37:19.144000Z", 
            "edited": "2014-12-20T20:58:18.421000Z", 
            "url": "https://swapi.co/api/planets/3/"
        }
        ]
    }

]

const species =  [
    "count": 37, 
    "next": "https://swapi.co/api/species/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Hutt", 
            "classification": "gastropod", 
            "designation": "sentient", 
            "average_height": "300", 
            "skin_colors": "green, brown, tan", 
            "hair_colors": "n/a", 
            "eye_colors": "yellow, red", 
            "average_lifespan": "1000", 
            "homeworld": "https://swapi.co/api/planets/24/", 
            "language": "Huttese", 
            "people": [
                "https://swapi.co/api/people/16/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T17:12:50.410000Z", 
            "edited": "2014-12-20T21:36:42.146000Z", 
            "url": "https://swapi.co/api/species/5/"
        }, 
        {
            "name": "Yoda's species", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "66", 
            "skin_colors": "green, yellow", 
            "hair_colors": "brown, white", 
            "eye_colors": "brown, green, yellow", 
            "average_lifespan": "900", 
            "homeworld": "https://swapi.co/api/planets/28/", 
            "language": "Galactic basic", 
            "people": [
                "https://swapi.co/api/people/20/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:27:22.877000Z", 
            "edited": "2014-12-20T21:36:42.148000Z", 
            "url": "https://swapi.co/api/species/6/"
        }, 

    ]
]

export {
    people
}

export {
    planets
}

export {
    species
}