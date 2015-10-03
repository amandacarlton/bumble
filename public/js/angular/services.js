app.factory('SessionService', function ($cookies) {
  return {
    set: function(id){
      $cookies.put('session_id', id);
      this.currentUser = id;
    }
  };
});
