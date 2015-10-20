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
  var statewords = {
    'Alabama' :'Phone',
    'Alaska': 'Alaskan',
    'Arizona': 'Valley',
    'Arkansas': 'holder',
    'California': 'Water',
    'Colorado': 'holder',
    'Connecticut' : 'holder',
    'Florida': 'Beach',
    'Delaware' : 'holder',
    'Georgia': 'Ratlanta',
    'Hawaii' :'Island',
    'Idaho' : 'holder',
    'Illinois' : 'Rauner',
    'Indiana': 'Wayne',
    'Iowa': 'Corn',
    'Kansas': 'Brownback',
    'Kentucky': 'holder',
    'Louisiana': 'Nola',
    'Maine': 'Lepage',
    'Maryland': 'Police',
    'Massachusetts': 'Snow',
    'Michigan' : 'gr',
    'Minnesota': 'Lake',
    'Mississippi': 'Oxford',
    'Missouri': 'Ferguson',
    'Montana': 'man',
    'Nebraska': 'holder',
    'Nevada': 'Strip',
    'NewHampshire': 'holder',
    'NewJersey': 'Downtown',
    'NewMexico': 'holder',
    'NewYork': 'all',
    'NorthCarolina' : 'holder',
    'NorthDakota': 'oil',
    'Ohio': 'Police',
    'Oklahoma': 'holder',
    'Oregon': 'holder',
    'Pennsylvania': 'Police',
    'RhodeIsland': 'holder',
    'SouthCarolina': 'Downtown',
    'Tennessee': 'holder',
    'Texas': 'holder',
    'Utah': 'holder',
    'Vermont': 'Police',
    'Virginia': 'Beach',
    'Washington': 'Moving',
    'WashingtonDC': 'Metro',
    'WestVirginia': 'county',
    'Wisconsin': 'Walker',
    'Wyoming': 'Laramie'
  };


  var categoryList = [
    "Art",
    "aww",
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
    "gifs",
    "InternetIsBeautiful",
    "listentothis",
    "mildlyinteresting",
    "Music",
    "news",
    "nottheonion",
    "OldSchoolCool",
    "philosophy",
    "pics",
    "science",
    "sports",
    "television",
    "todayilearned",
    "TwoXChromosomes",
    "UpliftingNews",
    "videos",
    "worldnews",
    "sloth",
    "puppies",
    "homebrewing",
    "animals"
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
  'nyc',
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

var pcCategories = {
  'Art':'Art',
  'aww':'Cute',
  'books':'Books',
  'creepy':'Creepy',
  'dataisbeautiful':'Data',
  'DIY':'DIY',
  'Documentaries':'Documentaries',
  'EarthPorn':'Nature',
  'food':'Food',
  'funny':'Funny',
  'Futurology':'Futurology',
  'gadgets':'Gadgets',
  'gaming':'Gaming',
  'GetMotivated':'Motivation',
  'gifs':'Gifs',
  'history':'History',
  'InternetIsBeautiful':'Internet',
  'listentothis':'Listen',
  'mildlyinteresting':'Interesting News',
  'movies':'Movies',
  'Music':'Music',
  'news':'News',
  'nottheonion':'Weird News',
  'OldSchoolCool':'Throwback',
  'philosophy':'Philosophy',
  'pics':'Pictures',
  'science':'Science',
  'space':'Space',
  'sports':'Sports',
  'television':'Television',
  'todayilearned':'Fun Facts',
  'TwoXChromosomes':'Women',
  'UpliftingNews': 'Uplifting News',
  'videos':'Videos',
  'worldnews':'World News',
  'sloth':'Sloth',
  'puppies':'Puppies!',
  'homebrewing':'Home Brewing',
  'animals':'Animals',
  'travel':'Travel',
  'wtf':'Seriously?'

};

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

var onlyStates = ["California",
"Texas",
"NewYork",
"Florida",
"Illinois",
"Pennsylvania",
"Ohio",
"Michigan",
"Georgia",
"NorthCarolina",
"NewJersey",
"Virginia",
"Washington",
"Massachusetts",
"Indiana",
"Arizona",
"Tennessee",
"Missouri",
"Maryland",
"Wisconsin",
"Minnesota",
"Colorado",
"Alabama",
"SouthCarolina",
"Louisiana",
"Kentucky",
"Oregon",
"Oklahoma",
"Connecticut",
"Iowa",
"Mississippi",
"Arkansas",
"Kansas",
"Utah",
"Nevada",
"NewMexico",
"WestVirginia",
"Nebraska",
"Idaho",
"Hawaii",
"Maine",
"NewHampshire",
"RhodeIsland",
"Montana",
"Delaware",
"SouthDakota",
"Alaska",
"NorthDakota",
"Vermont",
"WashingtonDC",
"Wyoming",
];

var statecommonWords =  [
  'i','a','about', 'an','and','are','as','at',
  'be', 'been','by','com','for', 'from','how','in',
  'is','it','not', 'of','on','or','that',
  'the', 'then', 'than', 'this','to','was', 'what','when','where', 'which',
  'who','will','with', 'www', 'http*','the',
  'we', 'us', 'our', 'ours',
  'they', 'them', 'their', 'he', 'him', 'his',
  'she', 'her', 'hers', 'it', 'its', 'you', 'yours', 'your',
  'has', 'have', 'would', 'could', 'should', 'shall',
  'can', 'may', 'if', 'then', 'else', 'but',
  'there', 'these', 'those','my','so',"", "oc", "x",'s','philosophy','anyone',
  'la', 'ct', 'indy', 'oahu', 'any', 'san', 'looking', 'new','state', 'do',
  'haven', 'orleans', 'mn', 'little', 'help', 'city', 'louis', 'los',
  'fort', 'grand', 'vegas', 'nh', 'jersey', 'mexico', 'york', 'nc',
  'north', 'okc', 'pa', 'rhode', 'sc', 'south', 'slc', 'vt', 'va', 'dc', 'west', 'wy',
  'out', 'need', 'diego', 'jose', 'best', 'wv', 'good', 'kc', 'know',
  'rapids', 'st', 'las', 'just', 'jc', 'abq', 'ny', 'carolina', 'dakota', 'some', 'up', 'az', 'angeles', 'cities',
  'springs', 'dc', 'get', 'hampshire', 'area', 'th', 'de', 'me', 'after', 'santa', 'nd', 'area', 'th', 'de', 'me',
  'after', 'santa', 'nd'];

  var commonWords = ['i','a','about', 'an','and','are','as','at',
  'be', 'been','by','com','for', 'from','how','in',
  'is','it','not', 'of','on','or','that',
  'the', 'then', 'than', 'this','to','was', 'what','when','where', 'which',
  'who','will','with', 'www', 'http*','the',
  'we', 'us', 'our', 'ours',
  'they', 'them', 'their', 'he', 'him', 'his',
  'she', 'her', 'hers', 'it', 'its', 'you', 'yours', 'your',
  'has', 'have', 'would', 'could', 'should', 'shall',
  'can', 'may', 'if', 'then', 'else', 'but',
  'there', 'these', 'those','my','so',"", "oc", "x",'s','philosophy'];

  var statewordCount = {};

  var mostCommon = {};

  var categoryobj = {

    quickstateWords: function () {
      return statewords;
    },

    pcCategories: function () {
      return pcCategories;
    },

    commonWords: function () {
      return commonWords;
    },

    getwords: function () {
      var wordCount = {};
      return $http.get("/findwords").then(function (response) {
        for (var i = 0; i < categoryList.length; i++) {
          var filtered = [];
          for (var m = 0; m < response.data.length; m++) {
            if(categoryList[i] === response.data[m].subreddit){
              //console.log(response.data[m].subreddit);
              text = response.data[m].title.toLowerCase()
              .replace(/[\n,\r]/g,' ')
              .replace(/[^a-zA-Z ]/g, "")
              .replace(/\s{2,}/g, ' ')
              .split(' ');
              filtered.push(text);

            }
          }
          var noncommon = [];
          for (var j = 0; j < filtered.length; j++) {
            for (var k = 0; k < filtered[j].length; k++) {
              if (commonWords.indexOf(filtered[j][k])<0){
                if(categoryList.indexOf(filtered[j][k])<0){
                noncommon.push(filtered[j][k]);
              }
                }
            }
          }

          var sortObj = function (obj) {
            var sortable = [];
            for (var key in obj) {
              sortable.push([key, obj[key]]);
            }
            sortable.sort(function (a, b) {
              return b[1]-a[1];
            });
            return sortable;
          };


          wordCount[categoryList[i]]={};
          noncommon.forEach(function (e) {
            wordCount[categoryList[i]][e] = wordCount[categoryList[i]][e] || 0;
            wordCount[categoryList[i]][e] += 1;
          });

          wordCount[categoryList[i]] = sortObj(wordCount[categoryList[i]]);

          // console.log(wordCount);


        }
        //console.log(wordCount);
        return wordCount;
      });
    },


    getStateWords: function () {
      statewordCount = {};
      var promises = [];
      for (var i = 0; i < onlyStates.length; i++) {
        promises.push($http.post('/statewords', {state:onlyStates[i]}));
      }
      return Promise.all(promises).then(function (response) {
          for (var m = 0; m < response.length; m++) {
            var statefiltered = [];
            for (var a = 0; a < response[m].data.length; a++) {
              if(response[m].data[a].title != undefined){
                text = response[m].data[a].title.toLowerCase()
                  .replace(/[\n,\r]/g,' ')
                  .replace(/[^a-zA-Z ]/g, "")
                  .replace(/\s{2,}/g, ' ')
                  .split(' ');
                  statefiltered.push(text);
          }
        }
          var noncommon = [];
          var lowerstates =[];
           for (var p = 0; p < states.length; p++) {
             lowerstates.push(states[p].toLowerCase());
           }
          for (var j = 0; j < statefiltered.length; j++) {
            for (var k = 0; k < statefiltered[j].length; k++) {
              if (statecommonWords.indexOf(statefiltered[j][k])<0){
                if (lowerstates.indexOf(statefiltered[j][k])<0){
                noncommon.push(statefiltered[j][k]);
              }
            }
            }
          }
          //console.log(noncommon);

          var sortObj = function (obj) {
            var sortable = [];
            for (var key in obj) {
              sortable.push([key, obj[key]]);
            }
            sortable.sort(function (a, b) {
              return b[1]-a[1];
            });
            return sortable;
          };

          statewordCount[response[m].config.data.state]={};
          noncommon.forEach(function (e) {

            statewordCount[response[m].config.data.state][e] = statewordCount[response[m].config.data.state][e] || 0;
            statewordCount[response[m].config.data.state][e] += 1;
          });

          statewordCount[response[m].config.data.state] = sortObj(statewordCount[response[m].config.data.state]);
          mostCommon[response[m].config.data.state] = statewordCount[response[m].config.data.state][0];

        }
        return mostCommon;
      });


    },


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


      var subscriberobj = {
        category: states
      };


      return $http.post("/subscriberstate", subscriberobj).then(function (response) {
        var info = response.data;
        console.log(response.nyc);
        var populate = function (state, state11, state1, state2, state3) {
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
          "Maine": populate1("Maine", "Maine", "Bangor"),
          "Arkansas": populate("Arkansas","Arkansas", "LittleRock", "fortsmith", "fayetteville"),
          "Colorado": populate2("Colorado", "Colorado", "ColoradoSprings", "Denver"),
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
          "NewYork": (info.newyork+ 91318 +info.Buffalo)/populations.NewYork,
          "NorthCarolina": populate("NorthCarolina", "NorthCarolina", "Charlotte", "raleigh", "Greensboro"),
          "SouthCarolina" : populate2  ("SouthCarolina", "southcarolina", "Charleston", "greenville"),
          "Oregon": populate("Oregon", "oregon", "Portland", "Eugene", "SALEM"),
          "Washington": populate("Washington", "Washington", "Seattle", "Spokane", "Tacoma"),
          "WestVirginia": populate1("WestVirginia", "WestVirginia", "Parkersburg"),
          "Utah": populate1("Utah", "Utah", "SaltLakeCity"),
          "Texas": populate2("Texas", "texas", "Dallas", "houston", "sanantonio"),
          "Pennsylvania": populate2("Pennsylvania", "Pennsylvania", "pittsburgh", "philadelphia", "allentown" ),
          "Tennessee": populate2("Tennessee", "Tennessee", "Knoxville", "nashville", "memphis"),
          "Oklahoma": populate2("Oklahoma", "oklahoma", "oklahomacity", "tulsa"),
          "Wisconsin": populate2("Wisconsin", "wisconsin", "Madison", "Kenosha"),
          "Maryland": populate2("Maryland", "maryland", "baltimore", "SilverSpring"),
          "Massachusetts" : populate("Massachusetts", "massachusetts", "boston", "Worcester", "Springfield"),
          "Ohio": populate2("Ohio", "Ohio", "cincinnati", "Cleveland"),
          "Virginia": populate("Virginia", "Virginia", "VirginiaBeach", "Chesapeake", "norfolk"),
          "Missouri": (info.missouri)/populations.Missouri,
        };
        return stateobj;
      });

    },

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

// app.factory('d3Service', [function(){
//     var d3;
//     // insert d3 code here
//     return d3;
//   }]);
