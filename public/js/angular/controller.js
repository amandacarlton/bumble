
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', '$location', 'CategoryService', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService, $location, CategoryService) {

  $scope.loggedInUser = $cookies.get('session_id');
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
  $scope.commonWords = [
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
    'there', 'these', 'those', "s",'philosophy'];




    $scope.starttimer = function () {
      $scope.prevStart = $scope.startTime;
      $scope.startTime = new Date();
    };

    $scope.endtimer = function () {
      $scope.endTime = new Date();
      $scope.timeDiff = $scope.endTime - $scope.prevStart;
      //timeDiff /= 1000;
      // var timeobj = {
      //   user_id:$scope.loggedInUser,
      //   category : $scope.categoryChosen,
      //   timer: $scope.timeDiff
      // };
      // if($scope.preliked===true){
      //   $http.post('/timeliked', timeobj);
      //   $http.post('/alltime', timeobj);
      // }else if($scope.preliked===false){
      //   $http.post("/timedisliked", timeobj);
      //   $http.post("/alltime", timeobj);
      // // }else{
      // //   $http.post("/alltime", timeobj);
      // }

    };

  $scope.created = function () {
    $http.get("/created").then(function (response) {
      console.log(response);
    });
  };

  // $scope.created();

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

    $scope.reddit = function () {
      $scope.likedchecked=false;
      $scope.dislikedchecked=false;
      $scope.preliked = $scope.likedvalue;
      $scope.likedvalue="indifferent";
      var redditobj = {
        user_id: $scope.loggedInUser
      };
      $http.post('/reddit', redditobj ).then(function (info) {
        $scope.categoryChosen = info.data.category;
        $scope.preurl = info.data.url;
        $scope.url = $sce.trustAsResourceUrl(info.data.url);
        $location.path('/stumble');
      });
    };

    $scope.articleInfo = function () {
      var articleObj = {
        category: $scope.categoryChosen,
        user_id: $scope.loggedInUser,
        timer:$scope.timeDiff,
        opinion:$scope.preliked,
        url: $scope.preurl
      };
      //console.log(articleObj);
      $http.post('/articleInfo', articleObj);
    };

    $scope.removeCookie = function () {
      $cookies.remove('session_id');
      $scope.loggedInUser = null;
      $location.path("/");
    };

    $scope.allcats = CategoryService.categoryList();

    $scope.categoryList = function () {
      // $scope.allcats = CategoryService.categoryList();
      var userobj = {
        user_id:$scope.loggedInUser
      };
      $http.post("/userinfo", userobj).then(function (response) {

        $scope.checkedInterest= response.data.interest;
        //console.log(checkedData);
      });
    };

    $scope.categoryList();

    // $scope.checkArrayFor = function (category) {
    //   return ($scope.checkedInterest.indexOf(category)>-1);
    // };

    $scope.getSubredditInfo = function () {
      var subscriberobj = {
        category:  CategoryService.categoryList()
      };

      console.log(subscriberobj);
      $http.post("/subscriber", subscriberobj).then(function (response) {
        console.log(response);
      });
    };

    $scope.getStateInfo = function () {
      return CategoryService.getState().then(function (response) {
        console.log(response);
      });
      //   console.log("here");
      //  var subscriberobj = {
      //    category:  CategoryService.states()
      //  };
      //  console.log(subscriberobj);
      //  $http.post("/subscriberstate", subscriberobj).then(function (response) {
      //    console.log(response);
      //  });
    };

    // console.log($scope.getStateInfo());

    $scope.interestInsert = function (category) {
      $scope.interest = [];
      var interestobj = {
        user_id:$scope.loggedInUser,
        interest:category
      };
      $http.post("/insert", interestobj);
    };

    $scope.liked = function () {
      $scope.likedchecked=true;
      console.log($scope.likedchecked=true);
      $scope.likedvalue = "liked";
      var likedobj = {
        user_id:$scope.loggedInUser,
        category : $scope.categoryChosen,
        site: $scope.preurl
      };
    };

    $scope.disliked = function () {
      $scope.dislikedchecked=true;
      $scope.likedvalue = "disliked";
      var dislikedobj = {
        user_id:$scope.loggedInUser,
        category : $scope.categoryChosen,
        site: $scope.preurl
      };
    };

    var testing = [];
    $scope.getwords = function (category) {
    return CategoryService.getwords().then(function (response) {
      $scope.wordarray = response;
      // console.log($scope.wordarray.Art);
      testing=[];
      console.log('before', testing);
      for (var i = 0; i < 30; i++) {

        testing.push({name:$scope.wordarray[category][i][0] , balance:$scope.wordarray[category][i][1]});
      }
      console.log(testing);

    $scope.net_worth = {
        assets: testing,
          // liabilities: [
          //     { name: 'Credit Cards', balance: 5000 },
          //     { name: 'Laptop', balance: 1500 },
          //     { name: 'Student Loans', balance: 35000 },
          // ],
      };
    });

  };

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
        console.log(response.data[0]);
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
          geo.properties.name, ' ranked ' + $scope.statesubinfo[searchterm].place,

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
          geo.properties.name, ' ranked ' + $scope.statesubinfo[searchterm].place,

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


  app.controller('ModalController', function($scope, close, $http, $cookies, SessionService, $location) {
    $scope.ok = function (credentials) {
      $http.post("/insertuser", credentials).then(function (response) {
        SessionService.set(response.data._id);
        $scope.loggedInUser = $cookies.get('session_id');
        console.log($scope.loggedInUser);
        console.log("here");
        $location.path('/userpref');
      });
    };



    $scope.checkuser = function (checking) {
      console.log("here");
      console.log(checking);
      $http.post("/checkuser", checking).then(function (response) {
        console.log(response);
        if(response.data === null){
          $scope.errors = "User not found";
        }else if (response.data.good === false){
          $scope.errors = "Password does not match";
        }else{
          SessionService.set(response.data._id);
          $location.path('/stumble');
        }
      });
    };

    $scope.close = function(result) {
      close(result);
    };
  });
