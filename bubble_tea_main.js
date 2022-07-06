var myToppings = [];

var tea = document.getElementById("Tea").value;
var mTea = document.getElementById("MilkTea").value;

function addToppings(){
	var add = document.getElementById("Toppings").value;
	var count=0;
	if (myToppings.length==0)
		myToppings.push(add);
	else{
		for(var i=0; i<myToppings.length; i++){
			if (myToppings[i] != add)
				count++;
		}
		if (count == myToppings.length)
			myToppings.push(add);
	}
	displayToppings();
}
function removeToppings(){
	myToppings=[];
	displayToppings();
}
function displayToppings(){
	var result = "<ul>";
	for (var i = 0; i<myToppings.length; i++){
		result += "<li>" + myToppings[i] + "</li>";
	}
	result += "</ul>"
	document.getElementById("displayToppings").innerHTML=result;
}
function calculateSingleCost(singleDrink){
	var cost=0;
	if(singleDrink.teaSelect == "Black")
		cost+= 2.50;
	if(singleDrink.teaSelect == "Green")
		cost+= 3.00
	if(singleDrink.teaSelect == "Red")
		cost+= 3.50
	for(var i = 0; i<singleDrink.myToppingsSelect.length; i++){
		if (singleDrink.myToppingsSelect[i] == "Grass Jelly")
			cost+= 0.5;
		else if (singleDrink.myToppingsSelect[i] == "Coconut")
			cost+= 0.75;
		else if (singleDrink.myToppingsSelect[i] == "Pearls")
			cost+= 0.50;
		else if (singleDrink.myToppingsSelect[i] == "Mango Stars")
			cost+= 1.0;
	}
	if(singleDrink.mTeaSelect == "Yes")
		cost+= 1.0;
	return cost;
}

function bubbleTeaDrink(teaSelect, mTeaSelect, myToppingsSelect){
	this.teaSelect = teaSelect.slice();
	this.mTeaSelect = mTeaSelect.slice();
	this.myToppingsSelect = myToppingsSelect.slice();
}

var bbtObject = new BubbleTeaDrink(tea, mTea, myToppings);

function calculateCost(bbtObject){
	var totalCost = 0;
	for(var i=0; i< bbtObject.length; i++){
		if(bbtObject[i].teaSelect == "Black")
			totalCost += 2.50;
		else if(bbtObject[i].teaSelect == "Green")
			totalCost += 3.00
		else if(bbtObject[i].teaSelect == "Red")
			ctotalCost += 3.50
		for (var j=0; j<bbtObject[i].myToppingsSelect.length; j++){
			if (bbtObject[i].myToppingsSelect[j] == "Grass Jelly")
				totalCost += 0.5;
			if (bbtObject[i].myToppingsSelect[j] == "Coconut")
				totalCost += 0.75;
			if (bbtObject[i].myToppingsSelect[j] == "Pearls")
				totalCost += 0.50;
			if (bbtObject[i].myToppingsSelect[j] == "Mango Stars")
				totalCost += 1.0;
		}
		if(bbtObject[i].mTeaSelect == "Yes")
			totalCost += 1.0;
	}
	return totalCost;
}

var myDrinkOrder = [];

function addDrink(){
	var tea = document.getElementById("Tea").value;
	var mTea = document.getElementById("MilkTea").value;
	myDrinkOrder.push(new BubbleTeaDrink(tea, mTea, myToppings));
	displayDrinks();
}

function removeDrink(){
	myDrinkOrder.pop();
	displayDrinks();
}
function resetOrder(){
	myDrinkOrder=[];
	document.getElementById("displayDrinks").innerHTML="";
}
function displayDrinks(){
	var drinks = "<tr><th>#</th><th>Tea</th><th>Milk</th><th>Toppings</th><th>Cost</th></tr>";
	for (var i = 0; i<myDrinkOrder.length; i++){
		drinks +="<tr><td>"+"Drink "+(i+1)+"</td><td>"+myDrinkOrder[i].teaSelect+"</td><td>"+myDrinkOrder[i].mTeaSelect+"</td><td>"+myDrinkOrder[i].myToppingsSelect+"</td><td>$"+calculateSingleCost(myDrinkOrder[i])+"</td></tr>";
	}
	drinks += "<tr><td>"+"</td><td>"+"<td>Total<td>"+"</td><td>$"+calculateCost(myDrinkOrder)+"</td></tr>"
	document.getElementById("displayDrinks").innerHTML=drinks;
}
