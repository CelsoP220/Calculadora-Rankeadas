// Function to calculate the rank based on wins and losses
function calculateRank(heroName, wins, losses) {
    const winBalance = wins - losses;
    let rank;

    // Determine the rank based on the number of wins
    if (wins >= 101) {
        rank = "Immortal";
    } else if (wins >= 91) {
        rank = "Legendary";
    } else if (wins >= 81) {
        rank = "Diamond";
    } else if (wins >= 51) {
        rank = "Gold";
    } else if (wins >= 21) {
        rank = "Silver";
    } else if (wins >= 11) {
        rank = "Bronze";
    } else {
        rank = "Iron";
    }

    // Display the final message
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is ranked ${rank}`);
}

// Hero data
const heroes = [
    { name: "Z3usT0P100", wins: 106, losses: 5 },
    { name: "Cleitinh0doleste", wins: 45, losses: 10 },
    { name: "DiogaoOgigante33", wins: 85, losses: 20 }
];

// Calculate and display the rank for each hero
heroes.forEach(hero => {
    calculateRank(hero.name, hero.wins, hero.losses);
});

