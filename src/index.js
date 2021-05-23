const teamData = [];
const playerData = [];

function fetchTeams() {
    fetch("https://free-nba.p.rapidapi.com/teams", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eea0f00af2msh1d7263f0e338362p1c74e0jsn3f1c0b5b1925",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => {
    //push api data into global array
    teamData.push(...data.data)
    //console.log(teamData[7])
    //console.log(Object.values(data.data[7]))

    //arrays based on array element position
    const playoffTeamWest = [28, 14, 12, 6, 7, 24, 23, 13];
    const playoffTeamEast = [22, 29, 19, 0, 16, 15, 2, 1];

    //rendering playoff teams by east/west divs
    playoffTeamWest.forEach(renderTeamWest);
    playoffTeamEast.forEach(renderTeamEast);

    const utahJazz = document.getElementById('29');
    utahJazz.addEventListener('click', fetchTeamStats);
})
.catch(err => {
	console.error(err);
        }
    )}
fetchTeams();

function renderTeamWest(team) {

    const teamContainer = document.getElementById("westrd1")
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')
    pTag.setAttribute("id", teamData[team].id)
    pTag.innerText = teamData[team].full_name
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
}
function renderTeamEast(team) {

    const teamContainer = document.getElementById("eastrd1")
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')
    pTag.setAttribute("id", teamData[team].id)
    pTag.innerText = teamData[team].full_name
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
}

function fetchTeamStats() {
    const teamContainer = document.getElementById('playoff-bracket')

    teamContainer.innerText ='';
    
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')

    fetchPlayerData();
    
}

function fetchPlayerData() {
    fetch("https://free-nba.p.rapidapi.com/players", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eea0f00af2msh1d7263f0e338362p1c74e0jsn3f1c0b5b1925",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => {
    playerData.push(...data.data)
    console.log(playerData)
})}