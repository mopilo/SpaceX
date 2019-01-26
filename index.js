#!/usr/bin/env node

const program = require('commander');

const order = require('./lib/order');

program
    .command('order') // sub-command name
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description

    // function to execute when command is uses
    .action(function () {
        order();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);