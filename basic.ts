var number = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < number.length; i++) {

	for (var x = 1; x <= 10; x++) {

		let result = x * number[i];
		document.write(x " X " number[i] " = " result '<br>');
	}    
	document.write("<br>")  
   
}


/*var funcs = [];
for (var i = 1; i <= 10; i++) {
	
   let y = i;
   funcs.push(function() {
       document.write(y);

   })
}
funcs.forEach(function(func) {

   for (var i = 0; i < funcs.length; i++) {
	for (var x = 1; x <= 10; x++) {

		let result = x * funcs[i];
		document.write(x " X " funcs[i] " = " result '<br>');
	}    
	document.write("<br>") 
   	
   }
});*/
