db = db.getSiblingDB('register_a_food_business_status');
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
db.createCollection('status');
db.status.insertOne({
  "_id" : "frontEndStatus",
  registrationsStarted: 0,
  submissionsSucceeded: 0,
  submissionsFailed: 0,
  mostRecentSubmitSucceeded: true,
  addressLookupsSucceeded: 0,
  addressLookupsReturnedZero: 0,
  addressLookupsFailed: 0,
  mostRecentAddressLookupSucceeded: true,
  getPathConfigSucceeded: 0,
  getPathConfigFailed: 0,
  mostRecentGetPathConfigSucceeded: true,
  getLocalCouncilsSucceeded: 0,
  getLocalCouncilsFailed: 0,
  mostRecentGetLocalCouncilsSucceeded: true
});