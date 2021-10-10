
// let isMarried = false;
// if (isMarried === true) { 
// console.log("Яне буду с Вами знакомиться!");
// } else {
//     console.log("Привет меня зовут Иван!");
// }


// let age = 45;
// if ( age < 3) {
//     console.log("Hi, baby");
// } else if (age < 18) {
//     console.log("Hello");
// } else if (age < 100) {
//     console.log("Good morning!");
// } else {
//     console.log(" What a amazing age!");
// }


// let password = false;
// if (password === true) {
//     console.log("Acces enied");
// } else {
//     console.log("Acces denied");
// }
// //SHORT WAY ternarnyi operator
// let password = 1234;
// password ===1234 ? console.log("Acces open") : console.log("acces denied");




//first assigment

// let lang = hjk;
// if (lang === ky) {
//     console.log("Саламатсызбы");
// } else if (lang = ru) {
//     console.log(" Здравствуйте");
// } else {
//     console.log("Я не знаю такого языка");
// }
//second assigmnet

// let sym = "abcde";
// if (sym.charAt("0") === "a") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

//third assigment
// let num = "1(345";
// if (num.slice(0, 3) === "123") {
//     console.log("Yes");
// } else {
//     console.log(" No");
// }



      //HW 1
// let num = prompt("Введите число:");
// if (num%2===0) {
//   document.write("четное <br>");
// }else{
//   document.write("нечетное <br>");
// }

    
      //HW 2  
    
// let month = prompt("Напишите месяц?");
// if (month.toLowerCase === "декабрь") {
//     alert("Это зима");
// } else {
//     alert("Error");
// }
    
    //Version 2


// let month = prompt("enter the name of the month");
// if (month ==="january"){
//     document.write("Winter <br>");
// }else if (month==="february"){
//     document.write("Winter <br>");
// }else if (month==="december"){
//     document.write("Winter <br>");
// }else if (month==="march"){
//     document.write("Spring <br>");
// }else if (month==="april"){
//     document.write("Spring <br>");
// }else if (month==="may"){
//     document.write("Spring <br>");
// }else if (month==="june"){
//     document.write("Summer <br>");
// }else if (month==="july"){
//     document.write("Summer <br>");
// }else if (month==="august"){
//     document.write("Summer <br>");
// }else if (month==="september"){
//     document.write("Autumn <br>");
// }else if (month==="october"){
//     document.write("Autumn <br>");
// }else if (month==="november"){
//     document.write("Autumn <br>");
// } else {
//     alert("Error");
//  }




       //HW 3
    
let zodiak = prompt("В каком году вы родились?");
let cycle = 12;

if (zodiak % cycle === 0) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Обезьяна");
} else if (zodiak % cycle === 1) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Петух");
} else if (zodiak % cycle === 2) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Собака");
} else if (zodiak % cycle === 3) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Свинья");
} else if (zodiak % cycle === 4) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Крыса");
} else if (zodiak % cycle === 5) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Бык");
} else if (zodiak % cycle === 6) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Тигр");
} else if (zodiak % cycle === 7) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Кролик");
} else if (zodiak % cycle === 8) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Дракон");
} else if (zodiak % cycle === 9) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Змея");
} else if (zodiak % cycle === 10) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Лощадь");
} else if (zodiak % cycle === 11) {
    document.write("Ваш знак зодиака по китайскому гороскопу: Коза");

} else {
    alert("Год рождения введен неправильно");
}
