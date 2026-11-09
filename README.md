# uzbek-datas

Node.js uchun o‘zbekcha tasodifiy test ma’lumotlari: ism-familiya, O‘zbekiston hududlari va manzillar, telefon raqamlari. Tashqi kutubxona talab qilmaydi. Node.js **18+** kerak.

## O‘rnatish

GitHub repository orqali:

```bash
npm install github:otabek-hasanov/uzbek-datas
```

Yoki kodni yuklab, namunani ishga tushiring:

```bash
git clone https://github.com/otabek-hasanov/uzbek-datas.git
cd uzbek-datas
npm run example
npm test
```

## Foydalanish

```js
const { FakeNames, FakeLocations, FakePhones } = require('uzbek-datas');

const person = {
  ...FakeNames.random(),
  phone: FakePhones.random(),
  location: FakeLocations.random()
};

console.log(person);
```

Natija namunasi (har chaqiruvda o‘zgaradi):

```js
{
  firstName: 'Otabek',
  lastName: 'Hasanov',
  fullName: 'Otabek Hasanov',
  gender: 'male',
  phone: '+998 90 123 45 67',
  location: {
    country: 'O‘zbekiston',
    countryCode: 'UZ',
    region: 'Samarqand viloyati',
    city: 'Samarqand',
    street: 'Amir Temur ko‘chasi',
    house: 25,
    address: 'Samarqand viloyati, Samarqand, Amir Temur ko‘chasi, 25-uy'
  }
}
```

ES modules bilan:

```js
import { FakeNames, FakeLocations, FakePhones } from 'uzbek-datas';
console.log(FakeNames.fullName());
```

## FakeNames

60 ta ism va 30 ta asosiy familiyadan tanlaydi. `gender` qiymati `male` yoki `female`; berilmasa, tasodifiy tanlanadi. Ayollar familiyasiga `a` qo‘shiladi: `Hasanov` → `Hasanova`. `random()` va `fullName()` ichida ism hamda familiya bitta jinsga mos tanlanadi.

```js
FakeNames.firstName();             // 'Jasur'
FakeNames.firstName('female');     // 'Malika'
FakeNames.lastName('female');      // 'Karimova'
FakeNames.fullName('male');        // 'Bekzod Aliyev'
FakeNames.random();                // { firstName, lastName, fullName, gender }
FakeNames.many(5);                 // 5 ta obyekt
FakeNames.many(5, 'female');        // 5 ta ayol ism-familiyasi
```

## FakeLocations

12 ta viloyat, Toshkent shahri va Qoraqalpog‘iston Respublikasidan tanlaydi. Shahar tegishli hududdan olinadi. Ko‘cha va uy raqami sun’iy yaratiladi; manzilning mavjudligi kafolatlanmaydi.

```js
FakeLocations.regions();                    // barcha 14 ta hudud nomi
FakeLocations.region();                     // tasodifiy hudud
FakeLocations.city();                       // tasodifiy shahar
FakeLocations.city('Toshkent viloyati');     // masalan, 'Chirchiq'
FakeLocations.random();                     // to‘liq manzil obyekti
FakeLocations.random('Xorazm viloyati');     // shu hududdagi manzil
FakeLocations.many(5, 'Samarqand viloyati');
```

Hudud nomini `regions()` qaytargan ko‘rinishda aniq kiriting, shu jumladan `‘` belgisi bilan.

## FakePhones

`+998` kodi va 7 ta tasodifiy abonent raqami bilan telefon yaratadi. Prefikslar format namunasi uchun berilgan; operator aniqlanmaydi.

```js
FakePhones.prefixes();                         // ['90', '91', '93', '94', '95', '97', '98', '99']
FakePhones.random();                           // '+998 93 123 45 67'
FakePhones.random({ prefix: '90' });            // '+998 90 123 45 67'
FakePhones.random({ format: 'compact' });       // '+998931234567'
FakePhones.random({ format: 'national' });      // '93 123 45 67'
FakePhones.many(5, { prefix: '97', format: 'compact' });
```

Raqamlar test uchun yaratiladi, ammo tasodifan haqiqiy abonent raqamiga mos kelishi mumkin. Ularni SMS yoki qo‘ng‘iroq yuborish uchun ishlatmang.

## Klass nusxasi bilan

Barcha ochiq generator metodlari `new` bilan ham ishlaydi:

```js
const names = new FakeNames();
const locations = new FakeLocations();
const phones = new FakePhones();

console.log(names.fullName());
console.log(locations.random());
console.log(phones.random());
```

## Cheklovlar

- `many(count)` uchun `count` 0–10000 oralig‘idagi butun son; standart qiymat 10.
- Noto‘g‘ri jins, hudud, prefiks yoki format xato chiqaradi.
- Ma’lumotlar takrorlanishi mumkin; noyoblik kafolatlanmaydi.
- Tasodifiy tanlash Node.js `crypto.randomInt()` orqali bajariladi; seed sozlamasi yo‘q.
- Paket npm registry’ga nashr qilinmagan; GitHub orqali o‘rnating.

## Litsenziya

[MIT](LICENSE)
