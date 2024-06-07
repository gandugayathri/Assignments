// Sometimes, you receive votes from an unknown number of regions

function totalVotes(...votes) {
    return votes.reduce((total, currentVote) => total + currentVote, 0);
}

console.log(totalVotes(6200, 7400, 6600, 7300)); // Output: 27500
console.log(totalVotes(1500, 2200));            // Output: 3700

