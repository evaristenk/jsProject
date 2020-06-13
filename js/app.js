const myForm = document.querySelector('.my-form');
const fistNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const dobInput = document.querySelector('#dob');
const emailInput = document.querySelector('#email');
const telInput = document.querySelector('#tel');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
e.preventDefault();
if(fistNameInput.value === "" || lastNameInput.value === "" || dobInput.value === "" || emailInput.value === "" || telInput.value === ""){
msg.classList.add('error');
msg.innerHTML = 'Please Enter All Fields!';
setTimeout(() =>msg.remove(), 3000);
}else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${fistNameInput.value} : ${lastNameInput.value} : ${dobInput.value} : ${emailInput.value} : ${telInput.value}`));
    userList.appendChild(li);
    const odd = document.querySelectorAll('li:nth-child(odd)');
    const even = document.querySelectorAll('li:nth-child(even)');
    for(var i = 0; i < odd.length;i++){
        odd[i].style.backgroundColor = '#f4f4f4';
        even[i].style.backgroundColor = 'coral';
        
    }
    //Clear the fields
    fistNameInput.value = "";
    lastNameInput.value = "";
    dobInput.value = "";
    emailInput.value = "";
    telInput.value = "";
}
}