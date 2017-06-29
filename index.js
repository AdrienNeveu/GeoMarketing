var faker = require('faker');
var fs = require('fs');

let countries = [
    "fr", "en_US", "en_GB", "de", "ko"
]

let hIndexesRanges = [
    [80, 150], [110, 180], [90, 160], [85, 155], [40, 75]
]

let domains = [
    "Mathématiques et leurs interactions",
    "Physique",
    "Sciences de la terre et de l'univers, espace",
    "Chimie",
    "Biologie, médecine et santé",
    "Sciences et technologies de l'information et de la communication"
]

let err = (err) => { if (err) console.log(err); };

let h = 0;
for (country of countries) {
    faker.locale = country;

    fs.appendFile("data.txt", country + "\r\n", err); 

    for (domain of domains) {
        fs.appendFile("data.txt", "\t" + domain + "\r\n", err); 

        for (let i = 0; i < 4; ++i) {
            let max = hIndexesRanges[h][1]
            let min = hIndexesRanges[h][0];
            fs.appendFile("data.txt", "\t\t" + faker.fake("{{name.lastName}}\t{{name.firstName}}") + "\t" + (Math.floor(Math.random() * (max-min+1)) + min)  + "\r\n", err); 
        }
    }

    h++;
}



