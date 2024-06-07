//Scenario4 : Arrow Functions
//You need to quickly filter and analyze the election data using modern ES6 features.

const filterCandidates = (candidates, threshold) => {
    return candidates
        .filter(candidate => candidate.votes > threshold)
        .map(candidate => candidate.name); // Using Map Function
};

const candidates = [
    { name: "Nadendla Monohar", votes: 250000 },
    { name: "Pawan Kalyan", votes: 200000 },
    { name: "Chandrababu", votes: 210000 },
    { name: "Narendra", votes: 680000 }
];

const threshold = 200000;
console.log(filterCandidates(candidates, threshold)); //['Nadendla Monohar', 'Chandrababu', 'Narendra']
