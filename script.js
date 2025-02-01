let scores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0
};

function updateScore(team) {
    let input = document.getElementById(`team${team}Score`);
    let score = parseInt(input.value);
    if (!isNaN(score)) {
        scores[team] = score;
        localStorage.setItem("scores", JSON.stringify(scores));
        alert(`Score updated for Team ${team}`);
    }
}

function loadLeaderboard() {
    let storedScores = localStorage.getItem("scores");
    if (storedScores) {
        scores = JSON.parse(storedScores);
    }

    let table = document.getElementById("leaderboard");
    table.innerHTML = ""; // Clear existing rows
    let sortedTeams = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    sortedTeams.forEach((team, index) => {
        let row = table.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = `Team ${team[0]}`;
        row.insertCell(2).innerText = team[1];
    });
}

if (document.getElementById("leaderboard")) {
    loadLeaderboard();
}
