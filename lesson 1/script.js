"use strict";

let money;
let time;


/* alert( +"Infinity" ); 
console.log(0 || "" || 2 || undefined || true || falsе);

while(isNaN(money) || typeof money != "number"){
    money = +parseInt(prompt("Ваш бюджет на месяц?", 0), 10);
    console.log(money);
    console.log(typeof money);
    if(isNaN(money)){
        alert("Бюджет должен быть числом, введите еще раз!");
    }
    console.log(isNaN(money));
    console.log(typeof money != "number");
} 
 */
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
    savings: false,
    chooseIncome: function () {
        let items = prompt("Что принесет доход? Перечислите через запятую.",'')
        appData.income = items.split(',');
        appData.income.push(prompt("Может еще что?",""));
        appData.income.sort();
       
        appData.income.forEach(function(item,index,arr){
            console.log("" + item + " / " + index + " / " + arr);
        })

        for(const key in appData){
            console.log("for in =" + key); 
        }
    }
}

//appData.chooseIncome();
/* appData.moneyPerDay = (appData.budget / 30).toFixed(2);
alert(appData.moneyPerDay);

for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", ''); 

        if( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) !=null
            && a != "" && b != "" && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
        } else{
           i--;
           console.log("No done");
        } 
}

let i = 0;
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", ''); 

    if( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) !=null
        && a != "" && b != "" && a.length < 50){
            i++;
            console.log("done");
            appData.expenses[a] = b;
    } else{
       console.log("No done");
    } 
}

let i = 0;
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", ''); 

    if( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) !=null
        && a != "" && b != "" && a.length < 50){
            i++;
            console.log("done");
            appData.expenses[a] = b;
    } else{
       console.log("No done");
    } 
} */


