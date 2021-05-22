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
    //const teamData = fetchData.data
    teamData.push(data.data)
    console.log(teamData)
    //console.log(Object.values(data.data))
    //console.log(Object.values(data.data[7]))
})
.catch(err => {
	console.error(err);
        }
    )}

const teamData = [];
fetchTeams();




// teamData.push(fetchTeams())
//console.log(teamData)

// function renderTeam(teams) {

//     const teamContainer = document.getElementById("west-list")
//     const liTag = document.createElement('li')
//     const pTag = document.createElement('p')

//     pTag.innerText = 'team'
//     liTag.append(pTag)

//     teamContainer.appendChild(liTag)
// }
