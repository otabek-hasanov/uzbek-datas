'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { FakeNames, FakeLocations, FakePhones } = require('..');

test('ismlar, familiyalar va jins bir-biriga mos', () => {
  for (const gender of ['male', 'female']) {
    for (const person of FakeNames.many(100, gender)) {
      assert.equal(person.gender, gender);
      assert.equal(person.fullName, `${person.firstName} ${person.lastName}`);
      assert.equal(person.lastName.endsWith('a'), gender === 'female');
    }
  }
});

test('joylashuv tanlangan hududga mos', () => {
  assert.equal(FakeLocations.regions().length, 14);
  for (const location of FakeLocations.many(100, 'Toshkent viloyati')) {
    assert.equal(location.region, 'Toshkent viloyati');
    assert.ok(['Chirchiq', 'Angren', 'Olmaliq', 'Nurafshon'].includes(location.city));
    assert.ok(location.address.includes(location.city));
    assert.ok(location.house >= 1 && location.house <= 200);
  }
});

test('telefon formatlari va prefikslar', () => {
  for (const prefix of FakePhones.prefixes()) {
    assert.match(FakePhones.random({ prefix }), new RegExp(`^\\+998 ${prefix} \\d{3} \\d{2} \\d{2}$`));
    assert.match(FakePhones.random({ prefix, format: 'compact' }), new RegExp(`^\\+998${prefix}\\d{7}$`));
    assert.match(FakePhones.random({ prefix, format: 'national' }), new RegExp(`^${prefix} \\d{3} \\d{2} \\d{2}$`));
  }
});

test('noto‘g‘ri parametrlar xato beradi', () => {
  assert.throws(() => FakeNames.random('other'), TypeError);
  assert.throws(() => FakeLocations.random('Mars'), RangeError);
  assert.throws(() => FakePhones.random({ prefix: '00' }), RangeError);
  assert.throws(() => FakePhones.random({ format: 'other' }), RangeError);
  assert.throws(() => FakePhones.random(null), TypeError);
  for (const Generator of [FakeNames, FakeLocations, FakePhones]) {
    for (const count of [-1, 1.5, 10001, '2']) assert.throws(() => Generator.many(count), RangeError);
    assert.deepEqual(Generator.many(0), []);
    assert.equal(new Generator().many(3).length, 3);
    assert.ok(new Generator().random());
  }
});
