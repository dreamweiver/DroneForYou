import allDrones from './../Misc/drone-list-mock';

// mimicking all the below service calls using dummy promise.
// When actual backend Drone services are ready , this would be 
// replaced with async call using axios
const DroneService = {
    getAllDrones: _=> {
        // Currently mock data is returned.
        // however once the backend services are ready, 
        // then data would be fetched from the REST service call.
        let promise = new Promise((resolve, reject) => {
 
 		  // mimicking service call
		  setTimeout(_ => {
		    resolve(allDrones); 
		  }, 500);
		});

		return promise;
    },

};

export default DroneService;