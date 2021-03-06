
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', '$location', 'CategoryService','$state','$window', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService, $location, CategoryService,$state,$window) {
  $scope.back = true;
  $scope.thumbs = false;
  $scope.$state = $state;
  $scope.loggedInUser = SessionService;
  $scope.logged = $cookies.get('session_id');
  $scope.usertrafficobj={};
  $scope.categoryChosen="";
  $scope.preurl="";
  $scope.prevStart ="";
  $scope.likedvalue="indifferent";
  $scope.preliked="";
  $scope.timeDiff="";
  $scope.likedchecked=false;
  $scope.dislikedchecked=false;
  $scope.checkedInterest="";
  $scope.statenums = "";
  $scope.wordarray="";
  $scope.mapwords = "";


    $scope.pcCategory = CategoryService.pcCategories();

    $scope.quickstate = CategoryService.quickstateWords();

    $scope.stateCount = function () {
    return CategoryService.getStateWords().then(function (response) {
      $scope.mapwords = response;
    });
  };

  //$scope.stateCount();


  $scope.checkloggedin = function () {
    if($scope.loggedInUser.currentUser){
      $scope.logger = $scope.loggedInUser.currentUser;
    }else{
      $scope.logger = $scope.logged;
    }
  };


    $scope.backfalse = function () {
      $scope.back = false;
    };

    $scope.bardata = "";
    $scope.linedata = "";
    $scope.userpref = function () {
      $scope.checkloggedin();
      var user = {
        id:$scope.logger
      };
      return $http.post('/userpref', user).then(function (response) {
      return  $http.post('/userlikes',user).then(function (catresponse) {
         var bararray = [];
         var linearray = [];
         var visitarray = [];
         var indiff = 0;
         var liked = 0;
         var disliked = 0;
         var likedtime = 0;
         var dislikedtime = 0;
         var indifftime = 0;
         for (var i = 0; i < catresponse.data.length; i++) {
           for (var j = 0; j < catresponse.data[i].site.length; j++) {
             if(catresponse.data[i].site[j].opinion === 'indifferent'){
             indiff++;
             indifftime+=catresponse.data[i].site[j].time;
           } else if(catresponse.data[i].site[j].opinion === 'liked'){
             liked++;
             likedtime+=catresponse.data[i].site[j].time;
           } else{
             disliked++;
             dislikedtime+=catresponse.data[i].site[j].time;
           }

           visitarray.push(catresponse.data[i].site[j].visit.toString());
        }

           bararray.push({x: $scope.pcCategory[catresponse.data[i].categoryname],
                          y:[liked, disliked, indiff]});
           linearray.push({x:$scope.pcCategory[catresponse.data[i].categoryname],
                            y:[((likedtime/1000)/liked)||0, ((dislikedtime/1000)/disliked)||0, ((indifftime/1000)/indiff)||0] });
         }

         for (var l = 0; l < visitarray.length; l++) {
           $scope.usertrafficobj[visitarray[l]] = $scope.usertrafficobj[visitarray[l]] || 0;
           $scope.usertrafficobj[visitarray[l]]+= 1;
         }

         $scope.userheatmap = function(){
           return $scope.usertrafficobj;
         };


         $scope.linedata = linearray;

         $scope.bardata = (bararray);
         $scope.config = {
         title: 'Preference By Category',
         tooltips: true,
         labels: false,
         mouseover: function() {},
         mouseout: function() {},
         click: function() {},
         legend: {
           display: true,
           //could be 'left, right'
           position: 'right'
         }
       };

         $scope.pieconfig = {
         title: 'Total Preference',
         tooltips: true,
         labels: false,
         mouseover: function() {},
         mouseout: function() {},
         click: function() {},
         legend: {
           display: true,
           //could be 'left, right'
           position: 'right'
         }
       };

         $scope.lineconfig = {
         title: 'Avg Time Spent in Seconds by Category',
         tooltips: true,
         labels: false,
         mouseover: function() {},
         mouseout: function() {},
         click: function() {},
         legend: {
           display: true,
           //could be 'left, right'
           position: 'right'
         }
       };

       $scope.dataline = {
         series: ['Liked', 'Disliked', 'Neutral'],
         data: $scope.linedata
       };


       $scope.data = {
         series: ['Liked', 'Disliked', 'Indifferent'],
         data: $scope.bardata,
       };

       var positive = 0;
       var neg = 0;
       var neutral = 0;

       for (var k = 0; k < $scope.bardata.length; k++) {
         positive += $scope.bardata[k].y[0];
         neg += $scope.bardata[k].y[1];
         neutral +=$scope.bardata[k].y[2];
       }

       $scope.datapie = {
          series: ['Liked', 'Disliked', 'Indifferent'],
          data:[
          {
          x:'Liked',
          y: [positive,0,0]
        },
          {
          x:'Disliked',
          y: [neg,0,0]
        },
          {x: 'Indifferent',
          y: [neutral,0,0]
        }],
      };


       });

      });
    };

    $scope.userpref();

    $scope.trendart = function (article) {
      $scope.trendurl = $sce.trustAsResourceUrl(article);
      $location.path("/trendart");
    };

    $scope.starttimer = function () {
      $scope.prevStart = $scope.startTime;
      $scope.startTime = new Date();
    };

    $scope.endtimer = function () {
      $scope.endTime = new Date();
      $scope.timeDiff = $scope.endTime - $scope.prevStart;
    };


  //$scope.trafficobj={};
  $scope.created = function (heatcategory) {
    if (heatcategory === undefined){
      heatcategory = 'puppies';
    }
     console.log(heatcategory);
    var sendcat = {
      category: heatcategory
    };
    $scope.trafficobj={};
    return $http.post("/created", sendcat).then(function (response) {
      $scope.traffic = response.data;
      var trafficarray=[];
      for (var i = 0; i < $scope.traffic.length; i++) {
        trafficarray.push($scope.traffic[i].created.toString());
      }
      for (var j = 0; j < trafficarray.length; j++) {
        $scope.trafficobj[trafficarray[j]] = $scope.trafficobj[trafficarray[j]] || 0;
        $scope.trafficobj[trafficarray[j]]+= 1;
      }
      console.log($scope.trafficobj);
    });
  };

  $scope.created();

  // $scope.$watch('trafficobj', $scope.created);
  //console.log($scope.created());

    // $scope.stats = function () {
    //   return CategoryService.stateStats(CategoryService.getState);
    // };
    //
    // console.log($scope.stats());

    $scope.signup = function() {
      ModalService.showModal({
        templateUrl: 'partials/signup.html',
        controller: "ModalController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = "You said " + result;
        });
      });
    };

    $scope.signin = function() {
      ModalService.showModal({
        templateUrl: 'partials/signin.html',
        controller: "ModalController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = "You said " + result;
        });
      });
    };



    $scope.thumbson = function () {
      $scope.thumbs = true;
    };

    $scope.thumbsoff = function () {
      $scope.thumbs = false;
    };

    $scope.reddit = function () {
      $scope.checkloggedin();
      $scope.likedchecked=false;
      $scope.dislikedchecked=false;
      $scope.preliked = $scope.likedvalue;
      $scope.likedvalue="indifferent";
      var redditobj = {
        user_id: $scope.logger
      };
      $http.post('/reddit', redditobj ).then(function (info) {
        $scope.categoryChosen = info.data.category;
        $scope.preurl = info.data.url;
        $scope.url = $sce.trustAsResourceUrl(info.data.url);
        $location.path('/stumble');
      });
    };

    $scope.articleInfo = function () {
      $scope.checkloggedin();
      var articleObj = {
        category: $scope.categoryChosen,
        user_id: $scope.logger,
        timer:$scope.timeDiff,
        opinion:$scope.preliked,
        url: $scope.preurl,
        visit: Date.now() / 1000 | 0,
      };
      $http.post('/articleInfo', articleObj).then(function (response) {
        $scope.userpref();
      });
    };

    $scope.removeCookie = function () {
      $cookies.remove('session_id');
      $scope.loggedInUser.currentUser = null;
      $scope.logged = null;
      $location.path("/");
    };

    $scope.allcats = CategoryService.categoryList();

    $scope.categoryList = function () {
      $scope.checkloggedin();
      // $scope.allcats = CategoryService.categoryList();
      if($scope.logger){
      var userobj = {
        user_id:$scope.logger
      };
      $http.post("/userinfo", userobj).then(function (response) {

        $scope.checkedInterest= response.data.interest;
      });
    }else{
      $scope.checkedInterest = [];
    }
  };

    $scope.categoryList();

    $scope.checkArrayFor = function (category) {
      return ($scope.checkedInterest.indexOf(category)>-1);
    };

    $scope.getSubredditInfo = function () {
      var subscriberobj = {
        category:  CategoryService.categoryList()
      };
      $http.post("/subscriber", subscriberobj).then(function (response) {
      });
    };

    $scope.getStateInfo = function () {
      return CategoryService.getState().then(function (response) {
      });

      //  var subscriberobj = {
      //    category:  CategoryService.states()
      //  };

      //  $http.post("/subscriberstate", subscriberobj).then(function (response) {

      //  });
    };



    $scope.interestInsert = function (category) {
      $scope.checkloggedin();
      $scope.interest = [];
      var interestobj = {
        user_id:$scope.logger,
        interest:category
      };
      $http.post("/insert", interestobj);
    };

    $scope.liked = function () {
      $scope.checkloggedin();
      $scope.likedchecked=true;
      $scope.likedvalue = "liked";
      var likedobj = {
        user_id:$scope.logger,
        category : $scope.categoryChosen,
        site: $scope.preurl
      };
    };

    $scope.disliked = function () {
      $scope.checkloggedin();
      $scope.dislikedchecked=true;
      $scope.likedvalue = "disliked";
      var dislikedobj = {
        user_id:$scope.logger,
        category : $scope.categoryChosen,
        site: $scope.preurl
      };
    };

    var testing = [];
    $scope.getwords = function (category) {
    return CategoryService.getwords().then(function (response) {
      $scope.wordarray = response;
      testing=[];
      for (var i = 0; i < 30; i++) {

        testing.push({name:$scope.wordarray[category][i][0] + ' '+ $scope.wordarray[category][i][1], balance:$scope.wordarray[category][i][1]});
      }

    $scope.net_worth = {
        assets: testing,
      };
    });

  };

    $scope.getwords('Art');

        $scope.fill_color = function (group) {
          return group === 'assets' ? '#3eb536' : '#641726';
        };

        $scope.label_color = function (group) {
          return group === 'assets' ? 'black' : '#8c8c8c';
        };


        $scope.tooltip_format = function (datum) {
            return datum.object.name + ': $' + d3.format(',d')(datum.object.balance);
        };


    $scope.trending = function () {
      $http.get("/reddittrend").then(function (response) {
        $scope.trendings = response.data;
      });
    };

    $scope.statesubinfo =
    {
      Vermont:{

        sub: 0.139, place: 1,
      },

      WashingtonDC:{
        sub: 0.059, place: 2,
      },

      Oregon:{
        sub: 0.019, place: 3
      },

      Alaska: {
        sub:  0.016, place: 4
      },

      Washington: {
        sub: 0.014, place: 5
      },

      Colorado: {
        sub: 0.011, place: 6
      },
      Massachusetts: {
        sub: 0.009, place: 7
      },
      Hawaii: {
        sub:0.008, place: 8
      },
      Delaware: {
        sub: 0.008, place: 9
      },
      Kansas: {
        sub: 0.007, place: 10
      },

      RhodeIsland: {
        sub: 0.007, place: 11
      },

      NorthDakota: {

        sub: 0.007, place: 12
      },

      Montana: {
        sub: 0.007, place: 13
      },

      Nebraska: {
        sub: 0.006, place: 14
      },

      Illinois: {
        sub: 0.006, place: 15
      },

      Minnesota: {
        sub: 0.006, place: 16
      },

      Maine: {
        sub: 0.006, place: 17
      },

      SouthDakota: {
        sub: 0.006, place: 18
      },

      Utah: {
        sub: 0.005, place: 19
      },

      Louisiana: {
        sub: 0.005, place: 20
      },

      NewYork: {
        sub: 0.005, place: 21
      },

      Maryland: {
        sub: 0.005, place: 22
      },

      NewHampshire: {
        sub: 0.005, place: 23
      },

      Pennsylvania: {
        sub: 0.005, place: 24
      },

      Arizona: {
        sub: 0.004, place: 25
      },

      NewMexico: {
        sub: 0.004, place: 26
      },

      Michigan: {
        sub: 0.004, place: 27
      },

      Idaho: {
        sub: 0.004, place: 28
      },

      Kentucky: {
        sub: 0.004, place: 29
      },

      Georgia: {
        sub: 0.004, place: 30
      },

      Connecticut: {
        sub: 0.004, place: 31
      },

      Oklahoma: {
        sub: 0.004, place: 32
      },

      Texas: {
        sub: 0.004, place: 33
      },

      Nevada: {
        sub: 0.004, place: 34
      },

      Wyoming: {
        sub: 0.004, place: 35
      },

      California: {
        sub: 0.003, place: 36
      },

      Arkansas: {
        sub: 0.003, place: 37
      },

      Tennessee: {
        sub: 0.003, place: 38
      },

      NorthCarolina: {
        sub: 0.003, place: 39
      },

      Ohio: {
        sub: 0.003, place: 40
      },

      Alabama: {
        sub: 0.003, place: 41
      },

      Indiana: {
        sub: 0.003, place: 42
      },

      NewJersey: {
        sub: 0.003, place: 43
      },

      Wisconsin: {
        sub: 0.003, place: 44
      },

      SouthCarolina: {
        sub: 0.003, place: 45
      },

      Iowa: {
        sub: 0.003, place: 46
      },

      Florida: {
        sub: 0.002, place: 47
      },

      WestVirginia: {
        sub: 0.002, place: 48
      },

      Virginia: {
        sub: 0.002, place: 49
      },

      Mississippi: {
        sub: 0.001, place: 50
      },

      Missouri: {
        sub: 0.0006 , place: 51
      }
    };

    $scope.mapzoomObject = {
      scope: 'usa',
      options: {
        width: 1110,
        legendHeight: 60 // optionally set the padding for the legend
      },

      geographyConfig: {
        highlightBorderColor: '#bada55',
        highlighBorderWidth: 2,
        popupTemplate: function(geo, data) {
          var searchterm = geo.properties.name.replace(" ","");
          return ['<div class="hoverinfo"><strong>',
          geo.properties.name, ' ranked: ' + $scope.statesubinfo[searchterm].place,
          '<div>',
          ' Most Common Word: ', $scope.quickstate[searchterm],
          '</div>',

          '</strong></div>'].join('');
        }
      },
      fills: {
        '.139': '#3B5323',
        '.059': '#4A7023',
        '.016': '#4A7023',
        '.014': '#4A7023',
        '.019': '#4A7023',
        '.011': '#4A7023',
        '.009': '#458B00',
        '.008': '#458B00',
        '.007': '#7F9A65',
        '.006': '#7F9A65',
        '.005': '#8BA870',
        '.004': '#8BA870',
        '.003': '#C0D9AF',
        '.002': '#C0D9AF',
        '.001': '#E0EEE0',
        '.0006': '#E0EEE0',
        'defaultFill': '#DDDDDD'
      },

      data: {
        "AZ": {
          "fillKey": '.004'
        },
        "CO": {
          "fillKey": '.011',
        },
        "DE": {
          "fillKey": '.008',
        },
        "GA": {
          "fillKey": ".004"
        },
        "FL":{
          "fillKey": ".002"
        },
        'AL':{
          "fillKey": ".003"
        },
        //
        'AK':{
          "fillKey": ".016"
        },
        //
        'AR':{
          "fillKey": ".003"
        },
        //
        'CA':{
          "fillKey": ".003"
        },
        //
        //
        'CT':{
          "fillKey": ".004"
        },
        //
        'DC':{
          "fillKey": '.059'
        },
        //
        'HI':{
          "fillKey": ".008"
        },
        //
        'ID':{
          "fillKey": ".004"
        },
        //
        'IL':{
          "fillKey": ".006"
        },
        //
        'IN':{
          "fillKey": ".003"
        },
        //
        'IA':{
          "fillKey": ".003"
        },
        //
        'KS':{
          "fillKey": ".007"
        },
        //
        'KY':{
          "fillKey": ".004"
        },
        //
        'LA':{
          "fillKey": ".005"
        },
        //
        'ME':{
          "fillKey": ".006"
        },
        //
        'MD':{
          "fillKey": ".005"
        },
        //
        'MA':{
          "fillKey": ".009"
        },
        //
        'MI':{
          "fillKey": ".004"
        },
        //
        'MN':{
          "fillKey": ".006"
        },
        //
        'MS':{
          "fillKey":".001"
        },

        'MO':{
          "fillKey": ".0006"
        },
        //
        'MT':{
          "fillKey": ".007"
        },
        //
        'NE':{
          "fillKey": ".006"
        },
        //
        'NV':{
          "fillKey": ".004"
        },
        //
        'NH':{
          "fillKey": ".005"
        },
        //
        'NJ':{
          "fillKey": ".003"
        },
        //
        'NM':{
          "fillKey": ".004"
        },
        //
        'NY':{
          "fillKey": ".005"
        },
        //
        'NC':{
          "fillKey": ".003"
        },
        //
        'ND':{
          "fillKey": ".007"
        },
        //
        'OH':{
          "fillKey": ".003"
        },
        //
        'OK':{
          "fillKey": ".004"
        },
        //
        'OR':{
          "fillKey": ".019"
        },
        //
        'PA':{
          "fillKey": ".005"
        },

        'RI':{
          "fillKey":".007"
        },

        'SC':{
          "fillKey":".003"
        },
        'SD':{
          "fillKey": ".006"
        },
        'TN':{
          "fillKey": ".003"
        },

        'TX':{
          "fillKey": ".004"
        },
        //
        'UT':{
          "fillKey": ".005"
        },
        //
        'VT':{
          "fillKey": ".139"
        },
        //
        'VA':{
          "fillKey": ".002"
        },
        //
        'WA':{
          "fillKey": ".014"
        },
        //
        'WV':{
          "fillKey": ".002"
        },
        //
        'WI':{
          "fillKey": ".003"
        },
        //
        'WY':{
          "fillKey": ".004"
        },
      },


    };


    $scope.mapObject = {
      scope: 'usa',
      options: {
        width: 1110,
        legendHeight: 60 // optionally set the padding for the legend
      },
      geographyConfig: {
        highlighBorderColor: '#EAA9A8',
        highlighBorderWidth: 2,
        popupTemplate: function(geo, data) {
          var searchterm = geo.properties.name.replace(" ","");
          return ['<div class="hoverinfo"><strong>',
          geo.properties.name, ' ranked: ' + $scope.statesubinfo[searchterm].place,
          '<div>',
          ' Most Common Word: ', $scope.quickstate[searchterm],
          '</div>',
          '</strong></div>'].join('');
        }
      },
      fills: {
        '.139': '#3B5323',
        '.059': '#4A7023',
        '.016': '#4A7023',
        '.014': '#4A7023',
        '.019': '#4A7023',
        '.011': '#4A7023',
        '.009': '#458B00',
        '.008': '#458B00',
        '.007': '#7F9A65',
        '.006': '#7F9A65',
        '.005': '#8BA870',
        '.004': '#8BA870',
        '.003': '#C0D9AF',
        '.002': '#C0D9AF',
        '.001': '#E0EEE0',
        '.0006': '#E0EEE0',
        'defaultFill': '#DDDDDD'
      },

      data: {
        "AZ": {
          "fillKey": '.004'
        },
        "CO": {
          "fillKey": '.011',
        },
        "DE": {
          "fillKey": '.008',
        },
        "GA": {
          "fillKey": ".004"
        },
        "FL":{
          "fillKey": ".002"
        },
        'AL':{
          "fillKey": ".003"
        },
        //
        'AK':{
          "fillKey": ".016"
        },
        //
        'AR':{
          "fillKey": ".003"
        },
        //
        'CA':{
          "fillKey": ".003"
        },
        //
        //
        'CT':{
          "fillKey": ".004"
        },
        //
        'DC':{
          "fillKey": '.059'
        },
        //
        'HI':{
          "fillKey": ".008"
        },
        //
        'ID':{
          "fillKey": ".004"
        },
        //
        'IL':{
          "fillKey": ".006"
        },
        //
        'IN':{
          "fillKey": ".003"
        },
        //
        'IA':{
          "fillKey": ".003"
        },
        //
        'KS':{
          "fillKey": ".007"
        },
        //
        'KY':{
          "fillKey": ".004"
        },
        //
        'LA':{
          "fillKey": ".005"
        },
        //
        'ME':{
          "fillKey": ".006"
        },
        //
        'MD':{
          "fillKey": ".005"
        },
        //
        'MA':{
          "fillKey": ".009"
        },
        //
        'MI':{
          "fillKey": ".004"
        },
        //
        'MN':{
          "fillKey": ".006"
        },
        //
        'MS':{
          "fillKey":".001"
        },

        'MO':{
          "fillKey": ".0006"
        },
        //
        'MT':{
          "fillKey": ".007"
        },
        //
        'NE':{
          "fillKey": ".006"
        },
        //
        'NV':{
          "fillKey": ".004"
        },
        //
        'NH':{
          "fillKey": ".005"
        },
        //
        'NJ':{
          "fillKey": ".003"
        },
        //
        'NM':{
          "fillKey": ".004"
        },
        //
        'NY':{
          "fillKey": ".005"
        },
        //
        'NC':{
          "fillKey": ".003"
        },
        //
        'ND':{
          "fillKey": ".007"
        },
        //
        'OH':{
          "fillKey": ".003"
        },
        //
        'OK':{
          "fillKey": ".004"
        },
        //
        'OR':{
          "fillKey": ".019"
        },
        //
        'PA':{
          "fillKey": ".005"
        },

        'RI':{
          "fillKey":".007"
        },

        'SC':{
          "fillKey":".003"
        },
        'SD':{
          "fillKey": ".006"
        },
        'TN':{
          "fillKey": ".003"
        },

        'TX':{
          "fillKey": ".004"
        },
        //
        'UT':{
          "fillKey": ".005"
        },
        //
        'VT':{
          "fillKey": ".139"
        },
        //
        'VA':{
          "fillKey": ".002"
        },
        //
        'WA':{
          "fillKey": ".014"
        },
        //
        'WV':{
          "fillKey": ".002"
        },
        //
        'WI':{
          "fillKey": ".003"
        },
        //
        'WY':{
          "fillKey": ".004"
        },
      },


    };

    $scope.updateActiveGeography = function(geography) {
      $scope.stateName = geography.properties.name;
      $scope.stateCode = geography.id;
    };

    $scope.mapObject.responsive = true;



  }]);


  app.controller('ModalController', function($scope, close, $http, $cookies, SessionService, $location,$element) {
    $scope.ok = function (credentials) {
      $http.post("/insertuser", credentials).then(function (response) {
        SessionService.set(response.data._id);
        $location.path('/userpref');
      });
    };



    $scope.checkuser = function (checking) {
      $http.post("/checkuser", checking).then(function (response) {
        $scope.showModal = true;
        if(response.data === null){
          $scope.errors = "User not found";
          $scope.showModal = true;
        }else if (response.data.good === false){
          $scope.errors = "Password does not match";
          $scope.showModal = true;
        }else{
          $scope.closeModal();
          SessionService.set(response.data._id);
          $location.path('/stumble');
        }
      });
    };


    $scope.closeModal = function() {
     $element.modal('hide');
     close(null, 500);
 };

    $scope.close = function(result) {
      close(result);
    };
  });
