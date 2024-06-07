// We Can Use The Data For Taken In The Scenario1
const players = [
    { name: 'Ramu', team: 'RR', runs: 450 },
    { name: 'Mahi', team: 'SRH', runs: 320 },
    { name: 'Padma', team: 'RCB', runs: 410 },
    { name: 'Nani', team: 'KKR', runs: 270 },
    { name: 'Navya', team: 'Panjab', runs: 490 },
    { name: 'Vani', team: 'Gujarath', runs: 390 },
    { name: 'Gayathri', team: 'CSK', runs: 480 },
    { name: 'Chinnu', team: 'MI', runs: 340 },
    { name: 'Moulali', team: 'Delhi', runs: 220 }
];
//function will accept a team name as a parameter
function getPlayersByTeam(players, teamName) {
    return players.filter(player => player.team === teamName);
}

const teamName = 'MI';  // Example team name to search for
const teamPlayers = getPlayersByTeam(players, teamName);
console.log(`Players in team ${teamName}:`, teamPlayers);