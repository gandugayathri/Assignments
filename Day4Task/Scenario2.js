//To ensure the election data is accurate, you need to verify the votes from multiple sources

function verifyVotes(voteCounts, index = 0) {
    // if the index reaches the length of the array, return 0
    if (index >= voteCounts.length) {
        return 0;
    }

    // add the current element to the result of the function
    return voteCounts[index] + verifyVotes(voteCounts, index + 1);
}

const votesArray = [2400, 3900, 7600, 3300];
console.log(verifyVotes(votesArray)); // Output: 17200

