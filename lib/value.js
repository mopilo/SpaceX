// station types
exports.stations = [
    {station: 'Abuja', type: 'Natural', orbit: 'Earth' },
    {station: 'Spock', type: 'Natural', orbit: 'Mars'},
    {station: 'ISS', type: 'Manmade', orbit: 'Earth'},
    {station: 'Moon', type: 'Natural', orbit: 'Earth'}
];
exports.staions_orbit = exports.stations.map(function(o) {
    return o.station + ' (' + o.orbit + ')' + ' (' + o.type + ')'; // convert to one line
});

// destination levels
exports.destination = [
    {station: 'Moon', type: 'Natural', orbit: 'Earth'},
    {station: 'Spock', type: 'Natural', orbit: 'Mars'},
    {station: 'ISS', type: 'Manmade', orbit: 'Earth'}
];
exports.destionation_orbit = exports.destination.map(function(o) {
    return o.station + ' (' + o.orbit + ')' + ' (' + o.type + ')'; // convert to one line
});

// sopacecraft
exports.scapeCraft = [
    "Falcon1",
    "Falcon9",
];