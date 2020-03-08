

Teams.find({divisionName: "Sunday"},{sort: {averageScore: -1}}).fetch(); 
//returns only teams from Sunday sorted by average score descending

Teams.find({divisionName: "Sunday"}).fetch(); 
//returns only teams from Sunday - 
//although normally you would do this by using the proper division ID, 
//but for demo purposes this is more likely to work

Teams.find().fetch(); 
//returns all teams from this skeeson

Teams.findOne(); 
//returns the first team record


PlayerGames.find({playerId: { $in: ["M8T5f5FhdzT7RzDof", "9pjB4WDb9ggRtQhqz", "d3ydv44rtRax2jxBc"]}},{fields: {frames: 1, week: 1}},{sort: {week: 1}}).fetch()
//returns our games

"d3ydv44rtRax2jxBc" - Zip
"9pjB4WDb9ggRtQhqz" - Bang
"M8T5f5FhdzT7RzDof" - Pow


# Players.find({name: "Pow"},{name: "Zip"},{name: "Bang"}).fetch()