import DroneService from "./DroneService";

it('Drone service : Invoking all Drones ', () => {

    const {quads: allDrones} = DroneService.getAllDrones();

    expect(allDrones).not.toEqual({});
});
