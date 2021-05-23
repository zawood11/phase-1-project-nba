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
    teamData.push(...data.data)
    //console.log(teamData[7])
    console.log(Object.values(data.data))
    //console.log(Object.values(data.data[7]))
    const playoffTeamWest = [28, 14, 12, 6, 7, 24, 23, 13];
    const playoffTeamEast = [22, 29, 19, 0, 16, 15, 2, 1];
    playoffTeamWest.forEach(renderTeamWest);
    playoffTeamEast.forEach(renderTeamEast);
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

    pTag.innerText = teamData[team].full_name
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
}

function renderTeamEast(team) {

    const teamContainer = document.getElementById("eastrd1")
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')

    pTag.innerText = teamData[team].full_name
    liTag.append(pTag)
    teamContainer.appendChild(liTag)
}