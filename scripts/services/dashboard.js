'use strict';

app.factory('Dashboard', function($firebase, $q) {
	var ref = firebase.database().ref();

	var Dashboard = {

		getTasksForUser: function(uid) {
			var defer = $q.defer();

			$firebase(ref.child('user_tasks').child(uid))
				.$asArray()
				.$loaded()
				.then(function(tasks) {
					defer.resolve(tasks);
				}, function(err) {
					defer.reject();
				});

			return defer.promise;
		}
	};

	return Dashboard;
});
