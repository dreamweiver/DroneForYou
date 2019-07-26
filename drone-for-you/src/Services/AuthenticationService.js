let userDataStorage = window.localStorage;
let session= window.sessionStorage;

// mimicking all the below service calls using dummy promise.
// When actual backend auth service are ready , this would be 
// replaced with async call using axios
const AuthenticationService = {
    isAuthenticated: false,
    isLoggedIn: function() {
        return session.getItem('isAuthenticated') === "true";
    },
    banUser: function(uniqueId){
        uniqueId = uniqueId.toLowerCase(); // email 
        let userData = userDataStorage.getItem(uniqueId);

        if(!!userData){
            let newUserData = JSON.parse(userData);
            newUserData.isBanned = true;
            newUserData = JSON.stringify(newUserData);
            userDataStorage.setItem(uniqueId, newUserData);
        }
    },
    isUserBanned: function(uniqueId) {
        let userData;
        uniqueId = uniqueId.toLowerCase(); // email 
        if(uniqueId) {
            userData = JSON.parse(userDataStorage.getItem(uniqueId));
        }
        
        return !!userData && userData.isBanned;
    },
    loginUser: function(emailId) {
        emailId = emailId.toLowerCase(); // email 
        let promise = new Promise((resolve, reject) => {
            setTimeout(_ => {
                let userData = userDataStorage.getItem(emailId);
        
                if(!!userData){
                    this.isAuthenticated = true;
                    session.setItem('isAuthenticated', true);
                    resolve(JSON.parse(userData));
                } else {
                    let errorMsg = `User with emailId ${emailId} is not yet registered`;
                    reject(errorMsg);
                }

            }, 500);
        });

        return promise;
    },
    logoutUser: function() {

        let promise = new Promise((resolve, reject) => {
            // In real prod app, this would be actual logout auth service result
            let isUserLoggedOut = true; 

            setTimeout(_=> {
                if(isUserLoggedOut) {
                    this.isAuthenticated = false; // update local flag
                    session.clear();
                    resolve(true);
                } else {
                    reject(false);
                }
            }, 500);
        })

    	return promise;
    },
    registerUser: function(user) {
        let uniqueId = user.emailId.toLowerCase(); // email 

        let promise = new Promise((resolve, reject) => {

            setTimeout(_=> {
                // In real prod app, this would be a actual auth service
                // call result
                let cachedUserData = userDataStorage.getItem(uniqueId);

                if(!!cachedUserData){
                    resolve(false); // user already registered
                } else {
                   user = JSON.stringify(user);
                    userDataStorage.setItem(uniqueId, user);
                    this.isAuthenticated = true;
                    session.setItem('isAuthenticated', true);
                    resolve(true);
                }
            }, 500);
        });

        return promise;
    }
};

export default AuthenticationService;