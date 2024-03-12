db = db.getSiblingDB('trip');

db.createCollection('users');
db.createCollection('routes');
db.createCollection('points');
db.createCollection('bookings');
db.createCollection('activities');
db.createCollection('reviews');
