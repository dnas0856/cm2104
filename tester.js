 
const key = "aa62252b36e62f2afa79ad99e6da043eb90e2da4 ";
//note: callback should be in global scope
function getData(s) {
console.log(s);
}
window.onload = runThis;




function runThis() {

const submit = document.getElementById('submit');
const search = document.getElementById('search');
submit.addEventListener('click', clickThis);

function clickThis() {
let ans = search.value;
const jsonpScript = document.createElement('script');
jsonpScript.src = `https://www.giantbomb.com/api/search/?api_key=${key}&format=jsonp&json_callback=getData&query=${ans}&resources=game`;
document.head.appendChild(jsonpScript);
}

}
