var poluprecnik = parseInt(prompt("UNESITE POLUPREČNIK: "));
var visina = parseInt(prompt("UNESITE VISINU VALJKA: "));
var Pi = 3.14;
var zapremina = parseInt(poluprecnik) * parseInt(poluprecnik) * Pi * parseInt(visina);
alert("ZAPREMINA VALJKA IZNOSI: " + zapremina);

console.log(typeof poluprecnik);
console.log(typeof visina);