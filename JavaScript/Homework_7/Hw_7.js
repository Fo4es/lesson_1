// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //створити пустий масив, наповнити його 10 об'єктами new User(....)
// function  user (id,nameuser,surname,email,phone){
//          this.id = id;
//          this.nameuser = nameuser;
//          this.surname = surname;
//          this.email = email;
//          this.phone = phone;
// }
//
// let user1 = new user(1,"vlad","per","dslglsg.gmail.com",00554334);
// let user2 = new user(5,"maks","pedsfr","dslglsg.gmail.com",00554334);
// let user3 = new user(6,"olya","pesg","dslglsg.gmail.com",00554334);
// let user4 = new user(4,"fort","persdf","dslglsg.gmail.com",00554334);
// let user5 = new user(2,"alla","psfger","dslglsg.gmail.com",00554334);
// let user6 = new user(3,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user7 = new user(7,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user8 = new user(8,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user9 = new user(9,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user10 = new user(10,"kolya","pedsfr","dslglsg.gmail.com",00554334);
//
// let push = function(...user) {
//     let container = [];
//     container.push(...user);
//     return container;
// }
// let Users = push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// //console.log(Users);
//
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filtr = Users.filter(value => value.id %2===0);
// console.log(filtr);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = Users.sort((a,b)=> a.id - b.id);
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//  class  Client {
//     constructor(id,nameuser,surname,email,phone,order) {
//         this.id = id;
//         this.nameuser = nameuser;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let Client1 = new Client(1,"vlad","per","dslglsg.gmail.com",00554334,["ham","eggs","pizza"]);
// let Client2 = new Client(5,"maks","pedsfr","dslglsg.gmail.com",00554334,["flour","bread","pizza"]);
// let Client3 = new Client(6,"olya","pesg","dslglsg.gmail.com",00554334,["ham","salad","pizza","chicken"]);
// let Client4 = new Client(4,"fort","persdf","dslglsg.gmail.com",00554334,["cheese","butter","beef","potato"]);
// let Client5 = new Client(2,"alla","psfger","dslglsg.gmail.com",00554334,["ham","salad","pizza","chicken"]);
// let Client6 = new Client(3,"kolya","pedsfr","dslglsg.gmail.com",00554334,["cheese","butter","beef","potato"]);
// let Client7 = new Client(7,"kolya","pedsfr","dslglsg.gmail.com",00554334,["ham","eggs","pizza"]);
// let Client8 = new Client(8,"kolya","pedsfr","dslglsg.gmail.com",00554334,["rice","salad","pizza","chicken"]);
// let Client9 = new Client(9,"kolya","pedsfr","dslglsg.gmail.com",00554334,["cheese","butter","beef","potato"]);
// let Client10 = new Client(10,"kolya","pedsfr","dslglsg.gmail.com",00554334,["rice","salad","pizza","chicken"]);
//
// let push = function(...Client) {
//     let container = [];
//     container.push(...Client);
//     return container;
// }
// let Clients = push(Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client9,Client10);
// console.log(Clients);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = Clients.sort((a,b)=> a.order.length - b.order.length);
// console.log(sort);
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let Factory = function (model,producer,age,maxspeed,enginecapacity,drivir){
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxspeed = maxspeed;
//     this.enginecapacity =enginecapacity;
//     this.drive =  function () {return `їдемо зі швидкістю ${maxspeed} на годину` };
//     this.info = ()=> `model - ${model}, producer - ${producer}, age - ${age},maxspeed - ${maxspeed},enginecapacity - ${enginecapacity}`;
//     this.increaseMaxSpeed = ((newSpeed)=> this.maxSpeed =  newSpeed);
//     this.changeYear = ((newValue)=> this.age= newValue);
//     this.addDriver = ((driver)=>  this.drivir=driver);
// }
// let driver1 = {
//     name : 'maks',
//     age : 20,
// }
//  car1 = new Factory("x5","bmw",2015,260,249);
// console.log(car1.increaseMaxSpeed(300));
// console.log(car1.changeYear(2020));
// console.log(car1.addDriver(driver1));
// console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//  class  Factory {
//      constructor(model, producer, age, maxspeed, engine,drivir) {
//          this.model = model;
//          this.producer = producer;
//          this.age = age;
//          this.maxspeed = maxspeed;
//          this.engine = engine;
//          this.drive =  function () {return `їдемо зі швидкістю ${maxspeed} на годину` };
//          this.info = ()=> `model - ${model}, producer - ${producer}, age - ${age},maxspeed - ${maxspeed},enginecapacity - ${enginecapacity}`;
//          this.increaseMaxSpeed = ((newSpeed)=> this.maxSpeed =  newSpeed);
//          this.changeYear = ((newValue)=> this.age= newValue);
//          this.addDriver = ((driver)=>  this.drivir=driver);
//      }
//  }
//  let driver1 = {
//     name : 'maks',
//      age : 20,
//  }
//  car1 = new Factory("x5","bmw",2015,260,249);
// console.log(car1.increaseMaxSpeed(300));
// console.log(car1.changeYear(2020));
// console.log(car1.addDriver(driver1));
// console.log(car1);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
