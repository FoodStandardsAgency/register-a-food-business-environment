db = db.getSiblingDB('register_a_food_business_cache');
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
db.createCollection('cachedRegistrations');