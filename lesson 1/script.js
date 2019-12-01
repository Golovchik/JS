"use strict";

let money;
let time;


alert( +"Infinity" ); 
console.log(0 || "" || 2 || undefined || true || falsе);

while(isNaN(money) || typeof money != "number"){
    money = parseInt(prompt("Ваш бюджет на месяц?", 0), 10);
    console.log(money);
    console.log(typeof money);
    if(isNaN(money)){
        alert("Бюджет должен быть числом, введите еще раз!");
    }
    console.log(isNaN(money));
    console.log(typeof money != "number");
} 

time = new Date (prompt("Введите дату в формате YYYY-MM-DD?", "2019-11-27"));

let expenses = {};
let keyExpenses = prompt("Введите обязательную статью расходов в этом месяце", 'Кот');
expenses[keyExpenses] = prompt("Во сколько обойдется?", 0);

let optionalExpenses = {};

let income = [];

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: false
}

alert((appData.budget / 30).toFixed(2));
