var db = require('monk')('localhost/bumble');
var states = db.get('states');


states.remove({})

.then(function() {

  return Promise.all([
states.insert({
Vermont: 0.139, place: 1
}),
states.insert({
WashingtonDC: 0.059, place: 2,
}),
states.insert({
Oregon: 0.019, place: 3,
}),
states.insert({
Alaska: 0.016, place: 4,
}),
states.insert({
Washington: 0.014, place: 5,
}),
states.insert({
Colorado: 0.011, place: 6
}),
states.insert({
Massachusetts: 0.009, place: 7
}),
states.insert({
Hawaii: 0.008, place: 8
}),
states.insert({
Delaware: 0.008, place: 9
}),
states.insert({
Kansas: 0.007, place: 10
}),
states.insert({
RhodeIsland: 0.007, place: 11
}),
states.insert({
NorthDakota: 0.007, place: 12
}),
states.insert({
Montana: 0.007, place: 13
}),
states.insert({
Nebraska: 0.006, place: 14
}),
states.insert({
Illinois: 0.006, place: 15
}),
states.insert({
Minnesota: 0.006, place: 16
}),
states.insert({
Maine: 0.006, place: 17
}),
states.insert({
SouthDakota: 0.006, place: 18
}),
states.insert({
Utah: 0.005, place: 19
}),
states.insert({
Louisiana: 0.005, place: 20
}),
states.insert({
NewYork: 0.005, place: 21
}),
states.insert({
Maryland: 0.005, place: 22
}),
states.insert({
NewHampshire: 0.005, place: 23
}),
states.insert({
Pennsylvania: 0.005, place: 24
}),
states.insert({
Arizona: 0.004, place: 25
}),
states.insert({
NewMexico: 0.004, place: 26
}),
states.insert({
Michigan: 0.004, place: 27
}),
states.insert({
Idaho: 0.004, place: 28
}),
states.insert({
Kentucky: 0.004, place: 29
}),
states.insert({
Georgia: 0.004, place: 30
}),
states.insert({
Connecticut: 0.004, place: 31
}),
states.insert({
Oklahoma: 0.004, place: 32
}),
states.insert({
Texas: 0.004, place: 33
}),
states.insert({
Nevada: 0.004, place: 34
}),
states.insert({
Wyoming: 0.004, place: 35
}),
states.insert({
California: 0.003, place: 36
}),
states.insert({
Arkansas: 0.003, place: 37
}),
states.insert({
Tennessee: 0.003, place: 38
}),
states.insert({
NorthCarolina: 0.003, place: 39
}),
states.insert({
Ohio: 0.003, place: 40
}),
states.insert({
Alabama: 0.003, place: 41
}),
states.insert({
Indiana: 0.003, place: 42
}),
states.insert({
NewJersey: 0.003, place: 43
}),
states.insert({
Wisconsin: 0.003, place: 44
}),
states.insert({
SouthCarolina: 0.003, place: 45
}),
states.insert({
Iowa: 0.003, place: 46
}),
states.insert({
Florida: 0.002, place: 47
}),
states.insert({
WestVirginia: 0.002, place: 48
}),
states.insert({
Virginia: 0.002, place: 49
}),
states.insert({
Mississippi: 0.001, place: 50
}),
states.insert({
Missouri: 0.0006 , place: 51
})

]);

})

.then(function(){
db.close();
});
