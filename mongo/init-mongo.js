db = db.getSiblingDB('trip');

db.createCollection('users');
db.createCollection('routes');
db.createCollection('points');
db.createCollection('bookings');
db.createCollection('activities');
db.createCollection('reviews');


db.users.insertMany([
    {
      fullname: "jane doe",
      email: "jane@example.com",
      disabled: null,
      password: "$argon2id$v=19$m=65536,t=3,p=4$snYOwXhv7b3XmvN+z3nvXQ$BNZz1qvFFmKsB+ZxyhbLh6h7+7+0WUjeSnz65uJ9TTU"
    },
    {
      fullname: "alex smith",
      email: "alex@example.com",
      disabled: null,
      password: "$argon2id$v=19$m=65536,t=3,p=4$snYOwXhv7b3XmvN+z3nvXQ$BNZz1qvFFmKsB+ZxyhbLh6h7+7+0WUjeSnz65uJ9TTU"
    }
  ]);
