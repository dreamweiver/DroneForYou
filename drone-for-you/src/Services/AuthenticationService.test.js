import AuthenticationService from "./AuthenticationService";

describe("Authentication services", () => {

  it('Authentication service : invoking isLoggedIn positive case', () => {

     const expectedAuth = true;
      window.sessionStorage.setItem('isAuthenticated', true);

      const actualAuth = AuthenticationService.isLoggedIn();

      expect(actualAuth).toEqual(expectedAuth);
  });

  it('Authentication service : invoking isLoggedIn negative case', () => {

     const expectedAuth = false;
      window.sessionStorage.setItem('isAuthenticated', false);

      const actualAuth = AuthenticationService.isLoggedIn();

      expect(actualAuth).toEqual(expectedAuth);
  });

  it('Authentication service : Ban User for valid user data', () => {
     const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }
    const expectedLoginRevocation = true;
    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user); 

    AuthenticationService.banUser(userData.emailId);

    let userAfterUpdate = window.localStorage.getItem(userData.emailId);
    userAfterUpdate = JSON.parse(userAfterUpdate);


    expect(userAfterUpdate.isBanned).toEqual(expectedLoginRevocation);
  });


it('Authentication service : Ban User for valid user data', () => {

    const uniqueId = 'unauthorised.user@gmail.com';
    const expectedUser = null;

    AuthenticationService.banUser(uniqueId);

    const userAfterUpdate = window.localStorage.getItem(uniqueId); 

    expect(userAfterUpdate).toEqual(expectedUser);
  });


  it('Authentication service : invoking login action with valid user', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }
    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user); 


    //execute 
    const actualPromise = AuthenticationService.loginUser(userData.emailId);
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });


    //assert
    expect(actualPromise).toEqual(expectedPromise);

    return expect(actualPromise).resolves.toEqual(expect.objectContaining(userData));

  });


  it('Authentication service : invoking login action with Invalid user', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }

    const loginUserId = 'unauthorised.user@gmail.com';
    const loginError = `User with emailId ${loginUserId} is not yet registered`;
    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user); 


    //execute 
    const actualPromise = AuthenticationService.loginUser(loginUserId);
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });


    //assert
    expect(actualPromise).toEqual(expectedPromise);

    return expect(actualPromise).rejects.toEqual(loginError);

  });

  it('Authentication service : invoking logout action with valid user', () => {

   //execute 
    const actualPromise = AuthenticationService.logoutUser();
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });


    //assert
    expect(actualPromise).toEqual(expectedPromise);

    return expect(actualPromise).resolves.toEqual(true);

  });

  it('Authentication service : Register New User', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }


    window.localStorage.removeItem(userData.emailId);

    //execute 
    const actualPromise = AuthenticationService.registerUser(userData);
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });


    //assert
    expect(actualPromise).toEqual(expectedPromise);

    return expect(actualPromise).resolves.toEqual(true);

  });

    it('Authentication service : Register Existing User', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }

    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user);


    //execute 
    const actualPromise = AuthenticationService.registerUser(userData);
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });


    //assert
    expect(actualPromise).toEqual(expectedPromise);

    return expect(actualPromise).resolves.toEqual(false);

  });


  it('Authentication service : Invoke isUserBanned -valid case', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: true,
             }

    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user);

    const expectedValue = true;

    const actualValue = AuthenticationService.isUserBanned(userData.emailId);

    expect(actualValue).toEqual(expectedValue);
  });

  it('Authentication service : Invoke isUserBanned - invalid case', () => {

    const userData = {
              emailId : 'xyz@gmail.com',
              firstName: 'Manoj Kumar',
              lastName:'Lakshman',
              phoneNumber: '9219219213',
              isBanned: false,
             }

    const user = JSON.stringify(userData);

    window.localStorage.removeItem(userData.emailId);
    window.localStorage.setItem(userData.emailId, user);

    const expectedValue = false;

    const actualValue = AuthenticationService.isUserBanned(userData.emailId);

    expect(actualValue).toEqual(expectedValue);
  });

});