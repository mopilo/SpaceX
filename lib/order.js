const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../lib/value');
const cal = require('../lib/actions');

const wallet = 3000;
const satelliteFare = 200;
const sameOrbit = 50;
const differentOrbit = 250;

const questions = [{
        type: 'input',
        name: 'name',
        message: 'Enter your name'
    },
    {
        type: 'confirm',
        name: 'wallet',
        message: 'Do you want to load you wallet with 3000BTC ?',
        default: false
    },
    {
        type: 'list',
        name: 'location',
        message: 'Choose present station',
        choices: values.staions_orbit
    },
    {
        type: 'list',
        name: 'destination',
        message: 'Choose destination station',
        choices: values.destionation_orbit
    },
    {
        type: 'list',
        name: 'craft',
        message: 'Select Space Craft of choice, Falcon9 attracts more expense',
        choices: values.scapeCraft
    },
];

module.exports = function () {
    inquirer
        .prompt(questions)
        .then(function (answers) {

            var parts = answers.destination.split(" ")
            var stationDes = parts[0];
            var typeDes = parts[2];
            var orbitDes = parts[1];

            var parts = answers.location.split(" ")
            var stationLoc = parts[0];
            var typeLoc = parts[2];
            var orbitLoc = parts[1];

            console.log();
            console.log();
            console.log("RESULT");
            //check if wallet is loaded
            if (answers.wallet) {
                //check if station is manmade
                if (stationDes == "ISS") {
                    console.log(pad(colors.grey('Welcome ')), answers.name.toUpperCase());
                    console.log(pad(colors.red("You've have an initial 3000BTC in you fare wallet")))
                    console.log()
                    console.log('YOUR TRIP');
                    console.log()
                    console.log(pad(colors.grey('From ')), answers.location + pad(colors.grey(' to')), answers.destination + pad(colors.grey(' cost')), satelliteFare);
                    console.log(pad(colors.grey('Your spacecraft is ')), answers.craft)
                    cal.royalty(wallet, satelliteFare).then(re => console.log(pad(colors.grey('Your Balance is ')) + re))

                } else { //and if it's not a manmade station it checks for the craft (falcon1)
                    if (answers.craft == "Falcon1") {
                        //if it's on the sameorbit
                        if (orbitLoc.slice(1, -1) == "Earth" && orbitDes.slice(1, -1) == "Earth") {
                            console.log(pad(colors.grey('Welcome ')), answers.name.toUpperCase());
                            console.log(pad(colors.red("You've have an initial 3000BTC in you fare wallet")))
                            console.log()
                            console.log('YOUR TRIP');
                            console.log()
                            console.log(pad(colors.grey('From ')), answers.location + pad(colors.grey(' to')), answers.destination + pad(colors.grey(' cost')), sameOrbit);
                            console.log(pad(colors.grey('Your spacecraft is ')), answers.craft)
                            cal.sameLocation(wallet, sameOrbit).then(re => console.log(pad(colors.grey('Your Balance is ')) + re))
                        } else { //different orbit
                            console.log(pad(colors.grey('Welcome ')), answers.name.toUpperCase());
                            console.log(pad(colors.red("You've have an initial 3000BTC in you fare wallet")))
                            console.log()
                            console.log('YOUR TRIP');
                            console.log()
                            console.log(pad(colors.grey('From ')), answers.location + pad(colors.grey(' to')), answers.destination + pad(colors.grey(' cost')), differentOrbit);
                            console.log(pad(colors.grey('Your spacecraft is ')), answers.craft)
                            cal.crossOrbit(wallet, differentOrbit).then(re => console.log(pad(colors.grey('Your Balance is ')) + re))
                        }
                    } else { //falcon9
                        //same orbit
                        if (orbitLoc.slice(1, -1) == "Earth" && orbitDes.slice(1, -1) == "Earth") {
                            console.log(pad(colors.grey('Welcome ')), answers.name.toUpperCase());
                            console.log(pad(colors.red("You've have an initial 3000BTC in you fare wallet")))
                            console.log()
                            console.log('YOUR TRIP');
                            console.log()
                            console.log(pad(colors.grey('From ')), answers.location + pad(colors.grey(' to')), answers.destination + pad(colors.grey(' cost')), sameOrbit*2);
                            console.log(pad(colors.grey('Your spacecraft is ')), answers.craft)
                            cal.sameLocation(wallet, sameOrbit * 2).then(re => console.log(pad(colors.grey('Your Balance is ')) + re))
                        } else { //different orbit
                            console.log(pad(colors.grey('Welcome ')), answers.name.toUpperCase());
                            console.log(pad(colors.red("You've have an initial 3000BTC in you fare wallet")))
                            console.log()
                            console.log('YOUR TRIP');
                            console.log()
                            console.log(pad(colors.grey('From ')), answers.location + pad(colors.grey(' to')), answers.destination + pad(colors.grey(' cost')), differentOrbit*2);
                            console.log(pad(colors.grey('Your spacecraft is ')), answers.craft)
                            cal.crossOrbit(wallet, differentOrbit * 2).then(re => console.log(pad(colors.grey('Your Balance is ')) + re))
                        }
                    }
                }

            } else {
                console.log('Your wallet is empty, please load wallet.')
            }

        });
};