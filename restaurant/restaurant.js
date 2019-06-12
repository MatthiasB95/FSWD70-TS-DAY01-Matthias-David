var food = ["Pizza", "Schnitzel", "Döner"];
var div = document.getElementById("2");
var div2 = document.getElementById("3");
var div3 = document.getElementById("1");
food.forEach(function (value) {
    var test = document.createElement('p');
    div.appendChild(test);
    test.innerHTML += value;
});
var price = { a: 8.99, b: 6.50, c: 4 };
for (var prop in price) {
    var test = document.createElement('p');
    div2.appendChild(test);
    test.innerHTML += price[prop];
}
var nr = [1, 2, 3];
for (var _i = 0, nr_1 = nr; _i < nr_1.length; _i++) {
    var value = nr_1[_i];
    var test = document.createElement('p');
    div3.appendChild(test);
    test.innerHTML += "Nr." + value;
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
