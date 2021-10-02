// forms
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
// form1
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const select = document.getElementById("country");
const city = document.getElementById("city");
const postalCode = document.getElementById("postalCode");
const address = document.getElementById("address");

const checkbox = document.getElementById("filledData");
const select2 = document.getElementById("shippingCountry");
const postalCode2 = document.getElementById("shippingPostalCode");
const address2 = document.getElementById("shippingAddress");
const city2 = document.getElementById("shippingCity");
// form2
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const standart = document.getElementById("standart");
const premium = document.getElementById("premium");
const standartBox = document.getElementById("standartBox");
const premiumBox = document.getElementById("premiumBox");
// form3
const cardCode = document.getElementById("cardCode");
const cardName = document.getElementById("cardName");
const cvc = document.getElementById("cvc");
const date = document.getElementById("date");
// btns
const next1 = document.getElementById("next1");
const prev1 = document.getElementById("prev1");
const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");
const submit = document.getElementById("submit");

const cont = document.querySelector(".container");
const progress = document.getElementById("progress");
const congrats = document.getElementById("congrats");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");

// form1 checking
form1.onchange = function(){
    if(checkbox.checked){
        select2.disabled = true;
        postalCode2.disabled = true;
        address2.disabled = true;
        city2.disabled = true;

        select2.value = select.value;
        postalCode2.value = postalCode.value;
        address2.value = address.value;
        city2.value = city.value;
    } else{
        select2.disabled = false;
        postalCode2.disabled = false;
        address2.disabled = false;
        city2.disabled = false;
    }
}
// next1 checking
next1.addEventListener("click", function(e){
    e.preventDefault();

    checkForm1();
}) 

function checkForm1(){

    firstNameValue = firstName.value.trim();
    lastNameValue = lastName.value.trim();
    selectValue = select.value.trim();
    cityValue = city.value.trim();
    postalCodeValue = postalCode.value.trim();
    addressValue = address.value.trim();
    select2Value = select2.value.trim();
    postalCode2Value = postalCode2.value.trim();
    address2Value = address2.value.trim();
    city2Value = city2.value.trim();

    if(firstNameValue.length < 3){
        firstName.classList.add("error");
    } else{
        firstName.classList.remove("error")
    }

    if(lastNameValue.length < 3){
        lastName.classList.add("error");
    } else{
        lastName.classList.remove("error");
    }

    if(selectValue == ""){
        select.classList.add("error");
    } else {
        select.classList.remove("error");
    }

    if(!validateCity(cityValue)){
        city.classList.add("error");
    } else {
        city.classList.remove("error");
    }

    if(addressValue < 2){
        address.classList.add("error");
    } else {
        address.classList.remove("error");
    }

    if(!validatePostalCode(postalCodeValue)){
        postalCode.classList.add("error");
    } else {
        postalCode.classList.remove("error");
    }

    if(select2Value == ""){
        select2.classList.add("error");
    } else {
        select2.classList.remove("error");
    }

    if(!validatePostalCode(postalCode2Value)){
        postalCode2.classList.add("error");
    } else {
        postalCode2.classList.remove("error");
    }

    if(address2Value < 2){
        address2.classList.add("error");
    } else {
        address2.classList.remove("error");
    }

    if(!validateCity(city2Value)){
        city2.classList.add("error");
    } else {
        city2.classList.remove("error");
    }

    if(!firstName.classList.contains("error") && !lastName.classList.contains("error") && !select.classList.contains("error") && !city.classList.contains("error") && !address.classList.contains("error") && !postalCode.classList.contains("error") && !select2.classList.contains("error") && !postalCode2.classList.contains("error") && !address2.classList.contains("error") && !city2.classList.contains("error")){
        form1.style.left = "-450px";
        form2.style.left = "40px";
        cont.style.height = "430px";
        progress.style.width = "240px";
    }

}
// prev 1
prev1.onclick = function(){
    form1.style.left = "40px";
    form2.style.left = "450px";
    cont.style.height = "720px";
    progress.style.width = "120px";
}


// next2 checking
next2.addEventListener("click", function(e){
    e.preventDefault();

    checkForm2();
}) 

function checkForm2(){

    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    password2Value = password2.value.trim();
    standartValue = standart.checked;
    premiumValue = premium.checked;

    if(!isEmail(emailValue)){
        email.classList.add("error");
    } else{
        email.classList.remove("error")
    }

    if(passwordValue.length < 6){
        password.classList.add("error");
    } else {
        password.classList.remove("error");
    }

    if(password2Value !== passwordValue || password2Value == ""){
        password2.classList.add("error");
    } else  {
        password2.classList.remove("error");
    }

    if(standartValue == false && premiumValue == false){
        standartBox.classList.add("error");
        premiumBox.classList.add("error");
    } else {
        standartBox.classList.remove("error");
        premiumBox.classList.remove("error");
    }

    if(!email.classList.contains("error") && !password.classList.contains("error") && !password2.classList.contains("error") && !standartBox.classList.contains("error") && !premiumBox.classList.contains("error")){
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    }


}
// prev2
prev2.onclick = function(){
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
}
// date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
// card's type checking
cardCode.onkeypress = function(){
    if(cardCode.value[0] == 2){
        cardCode.classList.remove(...cardCode.classList);
        cardCode.classList.add("mir");
    } else if(cardCode.value[0] == 3) {
        cardCode.classList.remove(...cardCode.classList);
        cardCode.classList.add("american");
    } else if(cardCode.value[0] == 4){
        cardCode.classList.remove(...cardCode.classList);
        cardCode.classList.add("visa");
    } else if(cardCode.value[0] == 5){
        cardCode.classList.remove(...cardCode.classList);
        cardCode.classList.add("master");
    } else if(cardCode.value[0] == 6){
        cardCode.classList.remove(...cardCode.classList);
        cardCode.classList.add("maestro");
    } else {
        cardCode.classList.remove(...cardCode.classList);
    }
}
// submit checking
submit.addEventListener("click", function(e){
    e.preventDefault();

    submitForm();
}) 

function submitForm(){
    cardCodeValue = cardCode.value.trim();
    cardNameValue = cardName.value.trim().toUpperCase();
    cvcValue = cvc.value.trim();
    dateValue = date.value.trim();

    if(cardCodeValue.length < 16){
        cardCode.classList.add("error");
    } else {
        cardCode.classList.remove("error");
    }

    if(cardNameValue == ""){
        cardName.classList.add("error");
    } else {
        cardName.classList.remove("error");
    }

    if(cvcValue.length < 3 || cvcValue.length > 4 || cvcValue == ""){
        cvc.classList.add("error");
    } else {
        cvc.classList.remove("error");
    }

    if(dateValue == "" || dateValue < today){
        date.classList.add("error");
    } else {
        date.classList.remove("error");
    }

    if(!cardCode.classList.contains("error") && !cardName.classList.contains("error") && !cvc.classList.contains("error") && !date.classList.contains("error")){
        form3.style.left = "-450px";
        congrats.style.display = "block";
        col1.textContent = col3.textContent = "";
        col2.textContent = "SUCCESS";
    }
}


// card's spaces
const cc = myForm.cardCode;
for (let i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}
// email validation
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// city validation
function validateCity(value) {
    return /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/.test(value);
}
// postal code validation
function validatePostalCode(value){
    const zipCodePattern = /^[0-9]{4,5}(?:-[0-9]{4})?$/i;
    return zipCodePattern.test(value);
}