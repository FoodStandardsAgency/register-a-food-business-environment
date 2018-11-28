db = db.getSiblingDB('admin');
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
db.createCollection('sessions');