// To Find The Top Scorer Of The Team
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
// Write The Function
function getTopScorers(players) {
    // Sort the players array by runs in descending order
    players.sort((highScore, lowScore) => lowScore.runs - highScore.runs);

    const topScorers = players.slice(0, 2);// Select the top 2 players By Using Slice Method

    return topScorers;
}

const topScorers = getTopScorers(players);
console.log(topScorers);

