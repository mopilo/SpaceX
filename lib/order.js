const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../lib/value');

const questions = [
    {
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
            if (answers.wallet) {
                if(stationDes == "ISS"){
                    console.log(3000-200)
                }
                else{
                    if(answers.craft == "Falcon1"){
                        if(orbitLoc.slice(1,-1) == "Earth" && orbitDes.slice(1,-1) == "Earth"){
                            console.log(3000-50)
                        }
                        else{console.log(3000-250)}
                    }
                    else{
                        if(orbitLoc.slice(1,-1) == "Earth" && orbitDes.slice(1,-1) == "Earth"){
                            console.log(3000-100)
                        }
                        else{console.log(3000-500);}
                    }
                }
                
                // console.log(pad(colors.grey('Thank you: '), 5), answers.name);
                // console.log(pad(colors.red("You've have 3000BTC in you fare wallet")))

                // console.log('YOUR ORDER');
                // console.log('------------------');

                // console.log(pad(colors.grey('Present Location: '), 30), answers.location);
                // console.log(pad(colors.grey('Destination: '), 30), answers.destination);
                // console.log(pad(colors.grey('Spacecraft: '), 30), answers.craft);
            }
            else{
                console.log('Your wallet is empty, please load wallet.')
            }

        });
};