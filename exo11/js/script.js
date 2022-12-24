
function factorielle(n) {
  if(n==0) return 1;
  else return n*factorielle(n-1);
}
var k= prompt("valeur du nombre");
var p = factorielle(k);
console.log("factorielle de " + k + " est " + p);