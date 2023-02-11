import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';

describe('User', () => {

  let user, userData, hydrationData, sleepData, activityData;

  beforeEach(function() {

    userData = {
      id: 1, name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
     };

     hydrationData = [
      {userID: 1, date: "2019/06/16", numOunces: 69},
      {userID: 2, date: "2019/06/15", numOunces: 75}];

    sleepData = [
      {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
      {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
      {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7},
      {userID: 5, date: '2019/06/17', hoursSlept: 10.5, sleepQuality: 3.7}];

      activityData = [
        {
         "userID": 1,
         "date": "2019/06/15",
         "numSteps": 3577,
         "minutesActive": 140,
         "flightsOfStairs": 16
         },
         {
         "userID": 1,
         "date": "2019/06/16",
         "numSteps": 4294,
         "minutesActive": 138,
         "flightsOfStairs": 10
         },
         {
         "userID": 1,
         "date": "2019/06/17",
         "numSteps": 7402,
         "minutesActive": 116,
         "flightsOfStairs": 33
         },
         {
         "userID": 1,
         "date": "2019/06/18",
         "numSteps": 3486,
         "minutesActive": 114,
         "flightsOfStairs": 32
         },
         {
         "userID": 1,
         "date": "2019/06/19",
         "numSteps": 11374,
         "minutesActive": 213,
         "flightsOfStairs": 13
         },
         {
         "userID": 1,
         "date": "2019/06/20",
         "numSteps": 14810,
         "minutesActive": 287,
         "flightsOfStairs": 18
       },
       {
       "userID": 1,
       "date": "2019/06/21",
       "numSteps": 14810,
       "minutesActive": 287,
       "flightsOfStairs": 18
     }
     ]

     user = new User(userData, hydrationData, sleepData, activityData);

  });

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function () {
    expect(user).to.be.an.instanceof(User)
  });

  it('should keep track of a user id', function() {
    expect(user.id).to.equal(userData.id);

  });

  it('should keep track of a user name', function() {
    expect(user.name).to.equal(userData.name);
  });

  it('should keep track of a user address', function() {
    expect(user.address).to.equal(userData.address);
  });

  it('should keep track of a user email', function() {
    expect(user.email).to.equal(userData.email);
  });

  it('should keep track of a user stride length', function() {
    expect(user.strideLength).to.equal(userData.strideLength);
  });

  it('should keep track of a user daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  });

  it('should keep track of a user friends', function() {
    expect(user.friends).to.eql(userData.friends);
  });

  it('should return the user first name', function() {
    expect(user.returnFirstName()).to.equal('Luisa');
  });

  it('should instantiate a new hydration instance', function() {
    expect(user.userHydration).to.eql(hydrationData);
    expect(user.createNewHydrationData()).to.be.an.instanceof(Hydration);
    expect(user.userHydration).to.be.an.instanceof(Hydration);
  });

  it('should instantiate a new sleep instance', function() {
    expect(user.userSleep).to.eql(sleepData);
    expect(user.createNewSleepData()).to.be.an.instanceof(Sleep);
    expect(user.userSleep).to.be.an.instanceof(Sleep);
  });

  // it('should instantiate a new activity instance', function() {
  //   expect(user.userActivity).to.eql(activityData);
  //   expect(user.createNewActivityData()).to.be.an.instanceof(Activity);
  //   expect(user.userActivity).to.be.an.instanceof(Activity);
  // });
});
