import UtilityHelper from './UtilityHelper';
import allDrones  from  './../Misc/drone-list-mock';

it('Convert seconds to HH:MM:SS format', () => {

	const timeInSeconds = 3661; // 01:01:01 
	const expectedFormattedTime = "1 : 1 : 1";
	const formattedTime = UtilityHelper.convertSecondsToHHMMSS(timeInSeconds);

    expect(formattedTime).toEqual(expectedFormattedTime);

});

it('Remove given drone from active station ', () => {
	const {quads: mockedDronesList} =  allDrones;
	const stationId = 0;
	const droneStationCount =  3;

	const drone ={
			"manufacturer":"Parrot",
			"model":"Anafi",
			"maxFlightTime":"25min",
			"charge":"0%"
		};


	const dronesByStation = UtilityHelper.divideDronesAcrossStations(mockedDronesList, droneStationCount);
	const newDronesList = UtilityHelper.removeDroneFromStation(dronesByStation, stationId, drone);

    expect(dronesByStation[stationId]).toEqual(newDronesList[stationId]);

});

it('Remove given drone from a invalid station ', () => {
	const {quads: mockedDronesList} =  allDrones;
	const stationId = 0;
	const droneStationCount =  3;

	const drone ={
			"manufacturer":"Parrot",
			"model":"Anafi",
			"maxFlightTime":"25min",
			"charge":"0%"
		};


	const dronesByStation = undefined;
	const newDronesList = UtilityHelper.removeDroneFromStation(dronesByStation, stationId, drone);

    expect(newDronesList).toEqual({});

});

it('Divides the drones among given number of stations count ', () => {
	const {quads: mockedDronesList} =  allDrones;
	const stationId = 0;
	const droneStationCount =  3;

	const dronesByStation = UtilityHelper.divideDronesAcrossStations(mockedDronesList, droneStationCount);
	const createdStationCount = Object.keys(dronesByStation);

    expect(createdStationCount.length).toEqual(droneStationCount);

});

it('Divides the drones among given number of stations count from a invalid station', () => {
	const {quads: mockedDronesList} =  allDrones;
	const stationId = 0;
	const droneStationCount =  3;

	const dronesByStation = UtilityHelper.divideDronesAcrossStations([], droneStationCount);
	const createdStationCount = Object.keys(dronesByStation);

    expect(createdStationCount.length).not.toEqual(droneStationCount);

});





