
function somme(n) {
  var sum=0
  for(var i=1;i<=n;i++) {
    sum += i
  }
  return sum
}
var k= Number(prompt("valeur du nombre"))
var z = somme(k)
console.log(z)