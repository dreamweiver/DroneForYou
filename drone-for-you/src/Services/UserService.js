// mimicking all the below service calls using dummy promise.
// When actual backend user data services are ready , this would be 
// replaced with async call using axios

const UserDataService = {
	userData: '',
	getUserData: function() {
		return this.userData;
	},
	setUserData: function(data) {
		if(!!data) {
			this.userData = Object.assign({}, data);
		}
	}
}

export default UserDataService;