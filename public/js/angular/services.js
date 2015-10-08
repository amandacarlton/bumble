app.factory('SessionService', function ($cookies) {
  return {
    set: function(id){
      $cookies.put('session_id', id);
      this.currentUser = $cookies.get('session_id');
      console.log($cookies.get('session_id'));
    }
  };
});


app.factory('CategoryService', function ($http) {
  var categoryList = [
    "Art",
    "aww",
    "books",
    "creepy",
    "dataisbeautiful",
    "DIY",
    "Documentaries",
    "EarthPorn",
    "food",
    "funny",
    "Futurology",
    "gadgets",
    "gaming",
    "GetMotivated",
    "gifs",
    "history",
    "InternetIsBeautiful",
    "listentothis",
    "mildlyinteresting",
    "movies",
    "Music",
    "news",
    "nottheonion",
    "OldSchoolCool",
    "philosophy",
    "pics",
    "science",
    "space",
    "sports",
    "television",
    "todayilearned",
    "TwoXChromosomes",
    "UpliftingNews",
    "videos",
    "worldnews",
    "Sloth",
    "puppies",
    "homebrewing",
    "animals",
    "travel",
    "wtf"
  ];

  var states = ['Alabama',
  'Birmingham',
  'Montgomery',
  'Mobile',
  'Alaska',
  'Anchorage',
  'Fairbanks',
  'Juneau',
  'Arizona',
  'Phoenix',
  'Tucson',
  'Mesa',
  'Arkansas',
  'LittleRock',
  'FortSmith',
  'Fayetteville',
  'California',
  'LosAngeles',
  'SanDiego',
  'SanJose',
  'Colorado',
  'Denver',
  'ColoradoSprings',
  'Aurora',
  'Connecticut',
  // 'Bridgeport',
  'NewHaven',
  'Hartford',
  'Delaware',
  'Wilmington',
  'Dover',
  'Newark',
  'WashingtonDC',
  'Florida',
  'Jacksonville',
  'Miami',
  'Tampa',
  'Georgia',
  'Atlanta',
  'Columbus',
  'Savannah',
  'Hawaii',
  'Honolulu',
  'Hilo',
  'Kailua',
  'Idaho',
  'Boise',
  'Nampa',
  'Pocatello',
  'Illinois',
  'Chicago',
  'Rockford',
  'Naperville',
  'Indiana',
  'Indianapolis',
  'FortWayne',
  'Evansville',
  'Iowa',
  // 'DesMoines',
  'CedarRapids',
  'Davenport',
  'Kansas',
  'Wichita',
  // 'OverlandPark',
  'KansasCity',
  'Kentucky',
  'Lexington',
  'Louisville',
  'Owensboro',
  'Louisiana',
  'NewOrleans',
  'BatonRouge',
  'Shreveport',
  'Maine',
  'Lewiston',
  'Bangor',
  'Maryland',
  'Baltimore',
  //'Columbia',
  'SilverSpring',
  'Massachusetts',
  'Boston',
  'Worcester',
  'Springfield',
  'Michigan',
  'Detroit',
  'GrandRapids',
  'Warren',
  'Minnesota',
  'Minneapolis',
  //'St.Paul',
  'Duluth',
  'Mississippi',
  // 'Jackson',
  'Gulfport',
  'Biloxi',
  'Missouri',
  'Montana',
  'Billings',
  'Missoula',
  'GreatFalls',
  'Nebraska',
  'Omaha',
  'Lincoln',
  //'Bellevue',
  'Nevada',
  'LasVegas',
  'Reno',
  'NewHampshire',
  // 'Nashua',
  // 'Concord',
  //'Rochester',
  'NewJersey',
  'Newark',
  'JerseyCity',
  'Paterson',
  'NewMexico',
  'Albuquerque',
  'LasCruces',
  'SantaFe',
  'NewYork',
  //'nyc',
  'Buffalo',
  'NorthCarolina',
  'Charlotte',
  'Raleigh',
  'Greensboro',
  'NorthDakota',
  'Fargo',
  'Bismarck',
  //'GrandForks',
  'Minot',
  'Ohio',
  'Columbus',
  'Cleveland',
  'Cincinnati',
  'Oklahoma',
  'OklahomaCity',
  'Tulsa',
  'Oregon',
  'Portland',
  'Eugene',
  'Salem',
  'Pennsylvania',
  'Philadelphia',
  'Pittsburgh',
  'Allentown',
  'RhodeIsland',
  'Providence',
  'Warwick',
  'Cranston',
  'SouthCarolina',
  'Charleston',
  'Greenville',
  'SouthDakota',
  'SiouxFalls',
  'RapidCity',
  'Aberdeen',
  'Tennessee',
  'Memphis',
  'Nashville',
  'Knoxville',
  'Texas',
  'Houston',
  'Dallas',
  'SanAntonio',
  'Utah',
  'SaltLakeCity',
  'WestValleyCity',
  'Vermont',
  'Burlington',
  'Rutland',
  'Virginia',
  'VirginiaBeach',
  'Norfolk',
  'Chesapeake',
  'Washington',
  'Seattle',
  'Spokane',
  'Tacoma',
  'WestVirginia',
  'Parkersburg',
  'Wisconsin',
  'Milwaukee',
  'Madison',
  'Kenosha',
  'Wyoming',
  'Cheyenne',
  //'Laramie',
];


var populations = {"California": (37253956) ,
	"Texas":	(25145561),
 "NewYork":	(19378102),
"Florida":	(18801310),
  "Illinois":	(12830632),
  "Pennsylvania":	(12702379),
  "Ohio":	(11536504),
	"Michigan":	(9883640),
  "Georgia":	(9687653),
	"NorthCarolina":	(9535483),
	"NewJersey":	(8791894),
	"Virginia":	(8001024),
	"Washington":	(6724540),
	"Massachusetts":	(6547629),
	"Indiana":	(6483802),
	"Arizona":	(6392017),
	"Tennessee":	(6346105),
	"Missouri":	(5988927),
	"Maryland":	(5773552),
	"Wisconsin":	(5686986),
	"Minnesota":	(5303925),
	"Colorado":	(5029196),
	"Alabama":	(4779736),
	"SouthCarolina":	(4625364),
	"Louisiana":	(4533372),
	"Kentucky":	(4339367),
	"Oregon":	(3831074),
	"Oklahoma":	(3751351),
	"Connecticut":	(3574097),
	"Iowa":	(3046355),
	"Mississippi":	(2967297),
	"Arkansas":	(2915918),
	"Kansas":	(2853118),
	"Utah":	(2763885),
	"Nevada":	(2700551),
	"NewMexico":	(2059179),
	"WestVirginia":	(1852994),
	"Nebraska":	(1826341),
	"Idaho":	(1567582),
	"Hawaii":	(1360301),
	"Maine":	(1328361),
	"NewHampshire":	(1316470),
	"RhodeIsland":	(1052567),
	"Montana":	(989415),
	"Delaware":	(897934),
	"SouthDakota":	(814180),
	"Alaska":	(710231),
	"NorthDakota":	(672591),
	"Vermont":	(62541),
	"WashingtonDC":(601723),
	"Wyoming":(563626),
};

var categoryobj = {

  categoryList: function () {
    return categoryList;
  },

  states: function () {
    return states;
  },

  populations: function () {
    return populations;
  },

  populate:  function (state, state11, state1, state2, state3) {
      return (populations.state)/(info.state11+info.state1+info.state2+info.state3);
    },

  getState: function () {

      console.log("here");
     var subscriberobj = {
       category: states
     };
     console.log(subscriberobj);
     return $http.post("/subscriberstate", subscriberobj).then(function (response) {
          var info = response.data;
          console.log("wash", populations.WashingtonDC);
          console.log("pop", populations.Wyoming);
          console.log("Wyoming", info.wyoming);
          console.log("chey", info.Cheyenne);
          var populate = function (state, state11, state1, state2, state3) {
            console.log(populations[state]);
            console.log(info.state11);
              return (info[state11]+info[state1]+info[state2]+info[state3])/(populations[state]);
            };
          var populate2 = function (state, state11, state1, state2) {
              return (info[state11]+info[state1]+info[state2])/(populations[state]);
          };

          var populate1 = function (state, state11, state1) {
              return (info[state11]+info[state1])/(populations[state]);
          };

          var stateobj = {
           "California": (info.LosAngeles+info.California+info.sandiego+info.SanJose)/(populations.California),
           "Alaska": populate( "Alaska", "alaska", "anchorage", "Fairbanks", "Juneau"),
           "Alabama": populate("Alabama", "Alabama", "montgomery", "mobile", "Birmingham"),
           "Arizona": populate("Arizona", "arizona", "Tucson", "Mesa", "phoenix"),
           "Florida": populate("Florida", "florida", "Miami", "tampa", "jacksonville"),
           "Wyoming": (info.wyoming +info.Cheyenne)/populations.Wyoming,
           "WashingtonDC": (info.washingtondc)/populations.WashingtonDC ,
           "Vermont": (info.vermont+info.burlington+info.rutland)/populations.Vermont,
           "NorthDakota": populate("NorthDakota", "northdakota", "bismarck", "minot", "fargo"),
           "SouthDakota": populate("SouthDakota", "SouthDakota","RapidCity", "SiouxFalls", "Aberdeen"),
           "Delaware": populate("Delaware", "Delaware", "dover", "Wilmington", "Newark"),
           "Montana" : populate("Montana", "Montana", "missoula", "GreatFalls", "Billings"),
           "RhodeIsland": (info.RhodeIsland+info.providence+info.Warwick)/populations.RhodeIsland,
           "NewHampshire": (info.newhampshire)/populations.NewHampshire,
           ///"Maine": (info.Maine+info.Bangor+info.)/populations.Maine
           "Arkansas": populate("Arkansas","Arkansas", "LittleRock", "fortsmith", "fayetteville"),
           "Colorado": populate("Colorado", "Colorado", "ColoradoSprings", "Denver", "aurora"),
           "Connecticut" : populate2("Connecticut", "Connecticut", "Hartford", "newhaven"),
           "Georgia": populate2("Georgia", "Georgia", "Atlanta", "savannah"),
           "Hawaii": populate("Hawaii", "Hawaii", "hilo", "Honolulu", "Kailua"),
           "Idaho": populate2("Idaho", "Boise", "Idaho", "nampa"),
           "Illinois": populate("Illinois", "illinois", "chicago", "Naperville", "rockford"),
           "Indiana": populate("Indiana", "Indiana", "indianapolis", "fortwayne", "evansville"),
           "Iowa": populate2("Iowa", "Iowa", "cedarrapids", "davenport"),
           "Kansas": populate2("Kansas", "kansas", "wichita", "kansascity"),
           "Kentucky": populate("Kentucky", "Kentucky", "Louisville", "Owensboro", "lexington"),
           "Louisiana": populate("Louisiana", "Louisiana", "NewOrleans", "shreveport", "batonrouge"),
           "Nebraska": populate2("Nebraska", "Nebraska", "Omaha", "lincoln"),
           "Nevada": populate2("Nevada", "Nevada", "LasVegas", "Reno"),
           "Mississippi":(info.mississippi+info.Biloxi)/populations.Mississippi,
           "Minnesota": populate2("Minnesota", "minnesota", "duluth", "Minneapolis"),
           "Michigan": populate("Michigan", "grandrapids", "Michigan", "Detroit", "warren"),
           "NewJersey": populate1("NewJersey", "jerseycity", "newjersey"),
           "NewMexico": populate("NewMexico", "NewMexico", "Albuquerque", "LasCruces", "SantaFe"),
           "NewYork": populate("NewYork", "newyork"),
           "NorthCarolina": populate("NorthCarolina", "NorthCarolina", "Charlotte", "raleigh", "Greensboro"),





          //  "Alabama": (populations.Alabama)/(info.Alabama+info.montgomery+info.Birmingham+info.mobile),
          //  "Alaska": (populations.Alaska)/(info.alaska+info.anchorage+)
         };
         return stateobj;
     });

},




  stateStats: function (func) {
    var statereturn = func().then(function (response) {


   var stateobj = {
    "California": (response.LosAngeles)
    // 	"Texas":	(25,145,561),
    //  "New York":	(19,378,102),
    // "Florida":	(18,801,310),
    //   "Illinois":	(12,830,632),
    //   "Pennsylvania":	(12,702,379),
    //   "Ohio":	(11,536,504),
    // 	"Michigan":	(9,883,640),
    //   "Georgia":	(9,687,653),
    // 	"North Carolina":	(9,535,483),
    // 	"New Jersey":	(8,791,894),
    // 	"Virginia":	(8,001,024),
    // 	"Washington":	(6,724,540),
    // 	"Massachusetts":	(6,547,629),
    // 	"Indiana":	(6,483,802),
    // 	"Arizona":	(6,392,017),
    // 	"Tennessee":	(6,346,105),
    // 	"Missouri":	(5,988,927),
    // 	"Maryland":	(5,773,552),
    // 	"Wisconsin":	(5,686,986),
    // 	"Minnesota":	(5,303,925),
    // 	"Colorado":	(5,029,196),
    // 	"Alabama":	(4,779,736),
    // 	"South Carolina":	(4,625,364),
    // 	"Louisiana":	(4,533,372),
    // 	"Kentucky":	(4,339,367),
    // 	"Oregon":	(3,831,074),
    // 	"Oklahoma":	(3,751,351),
    // 	"Connecticut":	(3,574,097),
    // 	"Iowa":	(3,046,355),
    // 	"Mississippi":	(2,967,297),
    // 	"Arkansas":	(2,915,918),
    // 	"Kansas":	(2,853,118),
    // 	"Utah":	(2,763,885),
    // 	"Nevada":	(2,700,551),
    // 	"New Mexico":	(2,059,179),
    // 	"West Virginia":	(1,852,994),
    // 	"Nebraska":	(1,826,341),
    // 	"Idaho":	(1,567,582),
    // 	"Hawaii":	(1,360,301),
    // 	"Maine":	(1,328,361),
    // 	"New Hampshire":	(1,316,470),
    // 	"Rhode Island":	(1,052,567),
    // 	"Montana":	(989,415),
    // 	"Delaware":	(897,934),
    // 	"South Dakota":	(814,180),
    // 	"Alaska":	(710,231),
    // 	"North Dakota":	(672,591),
    // 	"Vermont":	(625,741),
    // 	"Washington, D. C.":(601,723),
    // 	"Wyoming":	(563,626),


 };
return stateobj;
});



}
};
return categoryobj;

});


app.factory('TimeService', function () {
  // body...
var startTime;

function display(startTime) {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;

    // $(".time").text(days + " days, " + hours + ":" + minutes + ":" + seconds);
    // setTimeout(display, 1000);
}

$("input#button").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});
});
