let food: Array<string> = ["Pizza", "Schnitzel", "Döner"];


var div3 = document.getElementById("nr");
var div = document.getElementById("food");
var div2 = document.getElementById("price");

/*for (var i = 0; i < food.length; i++) {

	let show: any = food[i];
}*/

food.forEach(function(value) {

  	var test = document.createElement('p');

	div.appendChild(test);


	test.innerHTML += value;

});


var price = {a: 8.99, b: 6.50, c: 4};
for (let prop in price) {
   var test = document.createElement('p');

	div2.appendChild(test);


	test.innerHTML += price[prop];
}


var nr = [1,2,3]
for (var value of nr) {
    var test = document.createElement('p');

	div3.appendChild(test);


	test.innerHTML += "Nr."+ value
}






