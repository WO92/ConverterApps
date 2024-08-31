/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("btnconvert")
const reSult = document.getElementById("result")


convertBtn.addEventListener("click",function (){
    lengthConvert(inputEl.value)
    volumeConvert(inputEl.value)
    massConvert(inputEl.value)
})
function lengthConvert(arg){
    const a = (3.281 * arg).toFixed(3);
    const b = (arg/3.281).toFixed(3);
    reSult.innerHTML = `${arg} meters = ${a} feet | ${arg} feet = ${b} meters`
    
    
}
function volumeConvert(arg){
    const a = (0.264 * arg).toFixed(3);
    const b = (arg/0.264).toFixed(3);
    reSult.innerHTML = `${arg} liters = ${a} gallons | ${arg} gallons = ${b} liters`
    
}
function massConvert(arg){
    const a = (2.204 * arg).toFixed(3);
    const b = (arg/2.204).toFixed(3);
    reSult.innerHTML = `${arg} kilos = ${a} pounds | ${arg} pounds = ${b} kilos`
    
}

