// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = new Object();
const secondUser = new Object();

firstUser.name = 'Monica';
firstUser.gender = 'Female';
firstUser.age = 17;
firstUser.email = 'monica@dingdong.com';
firstUser.favoriteColor = new Set();
firstUser.favoriteColor.add("Yellow");
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");
firstUser.isHavePet = "Yes";
firstUser.education = new Object();
firstUser.education.sd = new Map();
firstUser.education.sd.set('name', 'SD 01');
firstUser.education.sd.set('city', 'Jakarta');
firstUser.education.sd.set('graduate', '2016');
firstUser.education.smp = new Map();
firstUser.education.smp.set('name', 'SMP 02');
firstUser.education.smp.set('city', 'Jakarta');
firstUser.education.smp.set('graduate', '2019');
firstUser.education.sma = new Map();
firstUser.education.sma.set('name', 'SMA 03');
firstUser.education.sma.set('city', 'Tangerang');
firstUser.favoriteRestaurant = new Set();
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tempura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Sushi");

secondUser.name = 'Wendy';
secondUser.gender = 'Male';
secondUser.age = 23;
secondUser.email = 'wendy@dingdong.com';
secondUser.favoriteColor = new Set();
secondUser.favoriteColor.add("Blue");
secondUser.favoriteColor.add("Black");
secondUser.favoriteColor.add("Grey");
secondUser.isHavePet = "No";
secondUser.education = new Object();
secondUser.education.sd = new Map();
secondUser.education.sd.set('name', 'SD 02');
secondUser.education.sd.set('city', 'Jakarta');
secondUser.education.sd.set('graduate', '2010');
secondUser.education.smp = new Map();
secondUser.education.smp.set('name', 'SMP 03');
secondUser.education.smp.set('city', 'Bogor');
secondUser.education.smp.set('graduate', '2013');
secondUser.education.sma = new Map();
secondUser.education.sma.set('name', 'SMA 01');
secondUser.education.sma.set('city', 'Surabaya');
secondUser.education.sma.set('graduate', '2016');
secondUser.education.uni = new Map();
secondUser.education.uni.set('name', 'Universitas Maju');
secondUser.education.uni.set('city', 'Tangerang');
secondUser.favoriteRestaurant = new Set();
secondUser.favoriteRestaurant.add("Tempura");
secondUser.favoriteRestaurant.add("Bento");
secondUser.favoriteRestaurant.add("Sushi");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Padang");
secondUser.favoriteRestaurant.add("Katsu");
secondUser.favoriteRestaurant.add("Geprek");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};