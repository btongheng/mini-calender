const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();

let mo = month[d.getMonth()];
let ye = d.getFullYear();
let wday = weekday[d.getDay()]
let ddate = d.getDate();

document.getElementById("month").innerHTML = mo;
document.getElementById("year").innerHTML = ye;
document.getElementById("date").innerHTML = ddate;
document.getElementById("day").innerHTML = wday;

