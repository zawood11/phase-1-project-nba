//empty array to push team data into
const teamData = [];
//grabbed player ID's by team from API documentation
const utahPlayerIDs = [322, 104, 176, 104, 54];
const memphisPlayerIDs = [666786, 455, 66, 716, 12];
const phoenixPlayerIDs = [367, 57, 22, 61, 112];
const lakerPlayerIDs = [237, 117, 409, 81, 137];
const clipperPlayerIDs = [274, 172, 293, 328, 45];
const dallasPlayerIDs = [132, 378, 191, 158, 379];
const denverPlayerIDs = [3547304, 393, 375, 177, 246];
const portlantPlayerIDs = [278, 303, 380, 108, 349];
const philadelphiaPlayerIDs = [417, 114, 183, 200, 145];
const washingtonPlayerIDs = [472, 37, 343, 666609, 273];
const brooklynPlayerIDs = [228, 140, 192, 197, 189];
const bostonPlayerIDs = [465, 420, 434, 444, 160];
const milwaukeePlayerIDs = [214, 315, 15, 131, 283];
const miamiPlayerIDs = [50927, 397, 79, 20, 4];
const knickPlayerIDs = [75, 666423, 387, 345, 369];
const atlantaPlayerIDs = [53, 666656, 101, 83, 490];

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
    //arrays based on array element position
    const playoffTeamWestArr = [28, 14, 12, 6, 7, 24, 23, 13];
    const playoffTeamEastArr = [22, 29, 19, 0, 16, 15, 2, 1];

    //rendering playoff teams by east/west divs
    playoffTeamWestArr.forEach(renderTeamWest);
    playoffTeamEastArr.forEach(renderTeamEast);

    const utahJazz = document.getElementById('29');
    utahJazz.addEventListener('click', fetchUtahPlayers);
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

function fetchUtahPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')

    teamContainer.innerText ='';

    utahPlayerIDs.forEach(fetchPlayerData);
    
}

function fetchPlayerData(playerID) {
    fetch(`https://free-nba.p.rapidapi.com/players/${playerID}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eea0f00af2msh1d7263f0e338362p1c74e0jsn3f1c0b5b1925",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => {
    console.log(data)

    const firstname = data.first_name
    const lastname = data.last_name 

    const teamContainer = document.getElementById('playoff-bracket')
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')

    pTag.innerText = `${firstname} ${lastname}`
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
})
.catch(err => {
	console.error(err);
        }
    )}