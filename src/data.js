'use strict';

const names = {
  male: ['Otabek', 'Aziz', 'Jasur', 'Sardor', 'Bekzod', 'Shahzod', 'Diyor', 'Bobur', 'Temur', 'Ulug‘bek', 'Alisher', 'Abdulloh', 'Muhammad', 'Akmal', 'Anvar', 'Asadbek', 'Farrux', 'Jamshid', 'Davron', 'Dilshod', 'Sherzod', 'Rustam', 'Sanjar', 'Oybek', 'Nodir', 'Islom', 'Ibrohim', 'Yusuf', 'Shavkat', 'Zafar'],
  female: ['Malika', 'Madina', 'Sevara', 'Shahnoza', 'Dilnoza', 'Gulnoza', 'Zilola', 'Nilufar', 'Mohira', 'Aziza', 'Nargiza', 'Shahzoda', 'Munisa', 'Zarina', 'Durdona', 'Shirin', 'Lola', 'Rayhona', 'Maftuna', 'Farangiz', 'Nigora', 'Umida', 'Saida', 'Sabina', 'Muslima', 'Fotima', 'Zuhra', 'Gulbahor', 'Oydin', 'Nodira']
};

const surnames = ['Hasanov', 'Karimov', 'Aliyev', 'Tursunov', 'Abdullayev', 'Rahimov', 'Ismoilov', 'Usmonov', 'Yusupov', 'Ahmedov', 'Rasulov', 'Qodirov', 'Sobirov', 'Nazarov', 'Ergashev', 'Mirzayev', 'Saidov', 'Sharipov', 'Olimov', 'Akbarov', 'Murodov', 'Sultonov', 'Xolmatov', 'Ortiqov', 'Hamroyev', 'Nabiyev', 'To‘xtayev', 'Xudoyberdiyev', 'Salimov', 'Raufov'];

// Har bir shahar o'z hududi bilan saqlanadi: tasodifiy tanlash bog'lanishni buzmaydi.
const locations = [
  { region: 'Toshkent shahri', cities: ['Toshkent'] },
  { region: 'Toshkent viloyati', cities: ['Chirchiq', 'Angren', 'Olmaliq', 'Nurafshon'] },
  { region: 'Andijon viloyati', cities: ['Andijon', 'Asaka', 'Xonobod'] },
  { region: 'Buxoro viloyati', cities: ['Buxoro', 'Kogon', 'G‘ijduvon'] },
  { region: 'Farg‘ona viloyati', cities: ['Farg‘ona', 'Qo‘qon', 'Marg‘ilon'] },
  { region: 'Jizzax viloyati', cities: ['Jizzax', 'Gagarin', 'Do‘stlik'] },
  { region: 'Namangan viloyati', cities: ['Namangan', 'Chust', 'Chortoq'] },
  { region: 'Navoiy viloyati', cities: ['Navoiy', 'Zarafshon', 'Uchquduq'] },
  { region: 'Qashqadaryo viloyati', cities: ['Qarshi', 'Shahrisabz', 'Kitob'] },
  { region: 'Samarqand viloyati', cities: ['Samarqand', 'Kattaqo‘rg‘on', 'Urgut'] },
  { region: 'Sirdaryo viloyati', cities: ['Guliston', 'Yangiyer', 'Shirin'] },
  { region: 'Surxondaryo viloyati', cities: ['Termiz', 'Denov', 'Sherobod'] },
  { region: 'Xorazm viloyati', cities: ['Urganch', 'Xiva', 'Pitnak'] },
  { region: 'Qoraqalpog‘iston Respublikasi', cities: ['Nukus', 'To‘rtko‘l', 'Beruniy'] }
];

const streets = ['Amir Temur', 'Alisher Navoiy', 'Mustaqillik', 'Istiqlol', 'Buyuk Ipak Yo‘li', 'Bunyodkor', 'Bog‘bon', 'Guliston', 'Navro‘z', 'Yangi Hayot'];

module.exports = { names, surnames, locations, streets };
