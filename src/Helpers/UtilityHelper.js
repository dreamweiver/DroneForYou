const UtilityHelper = {
	convertSecondsToHHMMSS: seconds => {
		let hours = Math.floor(seconds / 3600);
	    let minutes = Math.floor((seconds % 3600) / 60);
	    let secs = Math.ceil((seconds % 3600) % 60);
	    let mDisp = minutes > 0 ? minutes : '00';
		let sDisp = secs > 0 ? secs : '00';
		let hDisp = hours > 0 ? hours : '00';

		return `${hDisp} : ${mDisp} : ${sDisp}`;
	},
	removeDroneFromStation : (allStations, stationId, currentDrone) => {
		// remove the drone from respective station 
		if(!!allStations){
			let targetStation = allStations[stationId].filter(drone => drone !== currentDrone);
	   		 return  {...allStations, [stationId] : targetStation};
		}

		return {}; 
	},
	divideDronesAcrossStations: (allDrones, droneStationsCount) => {
		let stations = {}

		// divide the drones across given no of stations
        for(let i= 0; i<allDrones.length;i++) {
          let stationNo = (i+1) % droneStationsCount;

          if(!stations[stationNo]) {
            stations[stationNo] = [];
          }

          stations[stationNo].push(allDrones[i]);
        }

        return {...stations};
	}
}

export default UtilityHelper;