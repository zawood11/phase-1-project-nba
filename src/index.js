//empty array to push team data into
const teamData = [];

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

    //click functions on teams
    const utahJazz = document.getElementById('29');
    utahJazz.addEventListener('click', fetchUtahPlayers);
    const memphisGrizzlies = document.getElementById('15');
    memphisGrizzlies.addEventListener('click', fetchMemphisPlayers);
    const laClippers = document.getElementById('13');
    laClippers.addEventListener('click', fetchlaClippersPlayers);
    const dallasMavericks = document.getElementById('7');
    dallasMavericks.addEventListener('click', fetchDallasPlayers);
    const denverNuggets = document.getElementById('8');
    denverNuggets.addEventListener('click', fetchDenverPlayers);
    const portlandTrailblazers = document.getElementById('25');
    portlandTrailblazers.addEventListener('click', fetchPortlandPlayers);
    const phoenixSuns = document.getElementById('24');
    phoenixSuns.addEventListener('click', fetchPhoenixPlayers);
    const laLakers = document.getElementById('14');
    laLakers.addEventListener('click', fetchLakersPlayers);
    const phil76ers = document.getElementById('23');
    phil76ers.addEventListener('click', fetch76erPlayers);
    const washingtonWizards = document.getElementById('30');
    washingtonWizards.addEventListener('click', fetchWashingtonPlayers);
    const nyKnicks = document.getElementById('20');
    nyKnicks.addEventListener('click', fetchKnicksPlayers);
    const atlantaHawks = document.getElementById('1');
    atlantaHawks.addEventListener('click', fetchAtlantaPlayers);
    const milwaukeeBucks = document.getElementById('17');
    milwaukeeBucks.addEventListener('click', fetchMilwaukeePlayers);
    const miamiHeat = document.getElementById('16');
    miamiHeat.addEventListener('click', fetchMiamiPlayers);
    const brooklynNets = document.getElementById('3');
    brooklynNets.addEventListener('click', fetchBrooklynPlayers);
    const bostonCeltics = document.getElementById('2');
    bostonCeltics.addEventListener('click', fetchBostonPlayers);

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
    const utahPlayerIDs = [322, 104, 176, 226, 54];
    utahPlayerIDs.forEach(fetchPlayerData);
}
function fetchMemphisPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const memphisPlayerIDs = [666786, 455, 66, 716, 12];
    memphisPlayerIDs.forEach(fetchPlayerData);
}
function fetchlaClippersPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const clipperPlayerIDs = [274, 172, 493, 328, 45];
    clipperPlayerIDs.forEach(fetchPlayerData);
}
function fetchDallasPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const dallasPlayerIDs = [132, 378, 191, 158, 379];
    dallasPlayerIDs.forEach(fetchPlayerData);
}
function fetchDenverPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const denverPlayerIDs = [3547304, 393, 375, 177, 246];
    denverPlayerIDs.forEach(fetchPlayerData);
}
function fetchPortlandPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const portlantPlayerIDs = [278, 303, 380, 108, 349];
    portlantPlayerIDs.forEach(fetchPlayerData);
}
function fetchPhoenixPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const phoenixPlayerIDs = [367, 57, 22, 61, 112];
    phoenixPlayerIDs.forEach(fetchPlayerData);
}
function fetchLakersPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const lakerPlayerIDs = [237, 117, 409, 81, 137];
    lakerPlayerIDs.forEach(fetchPlayerData);
}
function fetch76erPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const philadelphiaPlayerIDs = [417, 114, 184, 200, 145];
    philadelphiaPlayerIDs.forEach(fetchPlayerData);
}
function fetchWashingtonPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const washingtonPlayerIDs = [472, 37, 343, 666609, 273];
    washingtonPlayerIDs.forEach(fetchPlayerData);
}
function fetchKnicksPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const knickPlayerIDs = [75, 666423, 387, 345, 369];
    knickPlayerIDs.forEach(fetchPlayerData);
}
function fetchAtlantaPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const atlantaPlayerIDs = [53, 666656, 101, 83, 490];
    atlantaPlayerIDs.forEach(fetchPlayerData);
}
function fetchMilwaukeePlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const milwaukeePlayerIDs = [214, 315, 15, 131, 283];
    milwaukeePlayerIDs.forEach(fetchPlayerData);
}
function fetchMiamiPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const miamiPlayerIDs = [50927, 397, 79, 20, 4];
    miamiPlayerIDs.forEach(fetchPlayerData);
}
function fetchBrooklynPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const brooklynPlayerIDs = [228, 140, 192, 197, 189];
    brooklynPlayerIDs.forEach(fetchPlayerData);
}
function fetchBostonPlayers() {
    const teamContainer = document.getElementById('playoff-bracket')
    teamContainer.innerText ='';
    const bostonPlayerIDs = [465, 420, 434, 444, 160];
    bostonPlayerIDs.forEach(fetchPlayerData);
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

    const teamContainer = document.getElementById('playoff-bracket')
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')

    pTag.innerText = `${data.position}: ${data.first_name} ${data.last_name}`
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
})
.catch(err => {
	console.error(err);
        }
    )}