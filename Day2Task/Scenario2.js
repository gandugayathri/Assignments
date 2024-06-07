const teamWins = {
    "MI": 5,
    "CSK": 5,
    "SRH": 2,
    "KKR": 3,
    "RCB": 0,
    "Gujarath": 1,
    "Delhi": 0,
    "RR": 2
};

//We will parse this JSON object, iterate through its properties

function teamWithMaxWins(wins) {
    let maxWins = -1;
    let maxWinsTeam = '';

    for (const team in wins) {
        if (wins[team] > maxWins) {
            maxWins = wins[team];
            maxWinsTeam = team;
        }
    }

    return maxWinsTeam;
}

const topTeam = teamWithMaxWins(teamWins);
console.log(`The Team With The Maximum Wins Is: ${topTeam}`);
