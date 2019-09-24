// array with objects to store the snack item and associated price
var snacks = [
    {name: "Snickers", price: 1.25},
    {name: "Popcorn", price: 1.00},
    {name: "Chewing Gum", price: 0.25},
    {name: "Nuts", price: 0.50},
    {name: "Cookies", price: 1.70},
    {name: "Cup Noodles", price: 2.25}
];

// global variables
var nickel = 0.05;
var dime = 0.10;
var quarter = 0.25;
var dollar = 1.00;
var moneyStored = 0;


// function to display what snacks are in the vending machine
var displaySnacks = function (items) {
    for(var i=0; i<items.length; i++) {
        var menuItem = items[i];
        console.log(menuItem.name + ' $' + menuItem.price) 
     }
};
displaySnacks(snacks);

//function to store value of each piece of money entered into the vending machine
var moneyInput = function(item) {

    if (item == nickel) {
        moneyStored += 0.05;
    };
    if (item == dime) {
        moneyStored += 0.10;
    };
    if (item == quarter) {
        moneyStored += 0.25;
    };
    if (item == dollar) {
        moneyStored += 1.00;
    };
    return moneyStored;
};

//money input
console.log(moneyInput(dollar));
console.log(moneyInput(dollar));

//vending function
//need to return change
//don't return selection if not equal to item

var itemSelected = function(item) { //"item" is the unknown, aka what the person is trying to buy
    if (item == null) {
        console.log("Your money, $",moneyStored, "will be returned.")
    } else
    for (var i=0; i<snacks.length; i++) {
        var selection = snacks[i];  //creating variable that pulls information from snacks array above
        if (selection.name == item && selection.price <= moneyStored) {
            console.log("You get: ", selection.name);
            if (moneyStored > selection.price) {  //if statement to return change
                console.log("And your change is... $", moneyStored-selection.price);
            }
        }
        else if (selection.name == item && selection.price >= moneyStored) {  //error message if person needs more money for snack
            console.log("You need more money, sucka!")
        }
    }
}

//itemSelected();
itemSelected("Snickers");
//itemSelected("Chewing Gum");
//itemSelected("Nuts");
//itemSelected("Cup Noodles");
//itemSelected("Cookies");
//itemSelected("Popcorn");
