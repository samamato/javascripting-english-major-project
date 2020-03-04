/*
let tipCalculator;
tipCalculator = function(multiVariable, divVariable) {
  let multiTotal;
  let divTotal;
  if(tipAmount < 1){
    multiTotal = total * tipAmount;
    $("#response").html("Your tip is $" + multiTotal);}else{
      divTotal = total % tipAmount;
      $("#response").html("Your tip is $" + divTotal);
    }
  };
let tipAmount;
tipAmount = 0.2;
let total;
total = 50;
tipCalculator();

let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
*/
/*
let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();
*/
/*
let turtles, sortedTurtles, reversedTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
reversedTurtles = turtles.reverse();
turtleNames = turtles.join(" ");
turtles.push("Splinter");
turtles.pop();
*/
let animal;
animal = ["dog", "cat", "bird", "hamster", "rat"];
let lastanimal=animal.pop();
$("#response").html(lastanimal);
