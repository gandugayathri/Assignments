//Scenario1 : Functions and Expressions
//You are developing a system to manage and analyze election data for the 2024 elections

// Difine The Function And Expression
const calculateVotes = function (candidateName, votes, region) {
    return `Candidate ${candidateName} received ${votes} votes in the ${region} region.`;
};


console.log(calculateVotes("Pawan Kalyan", 500000, "Pitapuram"));
console.log(calculateVotes("Nadendla Manohar", 400000, "Tenali"));
console.log(calculateVotes("Narendra", 300000, "Ponnur"));


