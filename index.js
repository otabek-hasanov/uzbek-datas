'use strict';

const { randomInt } = require('node:crypto');
const { names, surnames, locations, streets } = require('./src/data');
const pick = (items) => items[randomInt(items.length)];

function genderValue(gender) {
  if (gender === undefined) return pick(['male', 'female']);
  if (gender !== 'male' && gender !== 'female') {
    throw new TypeError('gender "male" yoki "female" bo‘lishi kerak');
  }
  return gender;
}

function many(count, generate) {
  if (!Number.isInteger(count) || count < 0 || count > 10000) {
    throw new RangeError('count 0 dan 10000 gacha butun son bo‘lishi kerak');
  }
  return Array.from({ length: count }, generate);
}

class FakeNames {
  static firstName(gender) { return pick(names[genderValue(gender)]); }

  static lastName(gender) {
    const surname = pick(surnames);
    return genderValue(gender) === 'female' ? `${surname}a` : surname;
  }

  static fullName(gender) {
    const selected = genderValue(gender);
    return `${this.firstName(selected)} ${this.lastName(selected)}`;
  }

  static random(gender) {
    const selected = genderValue(gender);
    const firstName = this.firstName(selected);
    const lastName = this.lastName(selected);
    return { firstName, lastName, fullName: `${firstName} ${lastName}`, gender: selected };
  }

  static many(count = 10, gender) {
    if (gender !== undefined) genderValue(gender);
    return many(count, () => this.random(gender));
  }

  firstName(gender) { return FakeNames.firstName(gender); }
  lastName(gender) { return FakeNames.lastName(gender); }
  fullName(gender) { return FakeNames.fullName(gender); }
  random(gender) { return FakeNames.random(gender); }
  many(count = 10, gender) { return FakeNames.many(count, gender); }
}

class FakeLocations {
  static region() { return pick(locations).region; }

  static city(region) {
    return pick(this._location(region).cities);
  }

  static _location(region) {
    if (region === undefined) return pick(locations);
    const location = locations.find((item) => item.region === region);
    if (!location) throw new RangeError('Noma’lum hudud. FakeLocations.regions() orqali ro‘yxatni oling');
    return location;
  }

  static regions() { return locations.map((item) => item.region); }

  static random(region) {
    const location = this._location(region);
    const city = pick(location.cities);
    const street = `${pick(streets)} ko‘chasi`;
    const house = randomInt(1, 201);
    return {
      country: 'O‘zbekiston', countryCode: 'UZ', region: location.region,
      city, street, house,
      address: `${location.region}, ${city}, ${street}, ${house}-uy`
    };
  }

  static many(count = 10, region) {
    if (region !== undefined) this._location(region);
    return many(count, () => this.random(region));
  }

  region() { return FakeLocations.region(); }
  city(region) { return FakeLocations.city(region); }
  regions() { return FakeLocations.regions(); }
  random(region) { return FakeLocations.random(region); }
  many(count = 10, region) { return FakeLocations.many(count, region); }
}

// Format uchun namunaviy prefikslar; operator yoki raqam egasi aniqlanmaydi.
const phonePrefixes = Object.freeze(['90', '91', '93', '94', '95', '97', '98', '99']);

class FakePhones {
  static prefixes() { return [...phonePrefixes]; }

  static random(options = {}) {
    if (options === null || typeof options !== 'object' || Array.isArray(options)) {
      throw new TypeError('options obyekt bo‘lishi kerak');
    }
    const { prefix = pick(phonePrefixes), format = 'international' } = options;
    const code = String(prefix);
    if (!phonePrefixes.includes(code)) throw new RangeError('Noma’lum prefiks. FakePhones.prefixes() orqali ro‘yxatni oling');
    if (!['international', 'compact', 'national'].includes(format)) {
      throw new RangeError('format: international, compact yoki national bo‘lishi kerak');
    }
    const digits = String(randomInt(10000000)).padStart(7, '0');
    const national = `${code} ${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5)}`;
    if (format === 'compact') return `+998${code}${digits}`;
    return format === 'national' ? national : `+998 ${national}`;
  }

  static many(count = 10, options = {}) { return many(count, () => this.random(options)); }
  prefixes() { return FakePhones.prefixes(); }
  random(options) { return FakePhones.random(options); }
  many(count = 10, options) { return FakePhones.many(count, options); }
}

module.exports = { FakeNames, FakeLocations, FakePhones };
