'use strict';

const { FakeNames, FakeLocations, FakePhones } = require('..');

const people = Array.from({ length: 5 }, () => ({
  ...FakeNames.random(),
  phone: FakePhones.random(),
  location: FakeLocations.random()
}));

console.log(JSON.stringify(people, null, 2));
