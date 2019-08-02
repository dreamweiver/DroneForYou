import UserService from "./UserService";

it('User service : fetch user data case1 ', () => {

    const expectedUserData = '';

    const actualUserData = UserService.getUserData();

    expect(actualUserData).toEqual(expectedUserData);
});

it('User service : fetch user data case 2', () => {

	const expectedUserData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }

    UserService.setUserData(expectedUserData);

    const actualUserData = UserService.getUserData();

    expect(actualUserData).toEqual(expectedUserData);
});

it('User service : Set empty data ', () => {

	const expectedUserData = {}

    UserService.setUserData(expectedUserData);

    const actualUserData = UserService.getUserData();

    expect(actualUserData).toEqual(expectedUserData);
});

