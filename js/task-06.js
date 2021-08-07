
const inputVal = document.getElementById('validation-input');
const totalLength = inputVal.getAttribute('data-length');
const inTotalLength = parseInt(totalLength, 10);

inputVal.oninput = function(){
    if(inputVal.value.length === inTotalLength){
        inputVal.classList.remove('invalid');
        inputVal.classList.add('valid');
    }
    if(inputVal.value.length === 0){
        inputVal.classList.remove('valid');
        inputVal.classList.remove('invalid');
    }
    if(inputVal.value.length !== inTotalLength && inputVal.value.length !==0){
        inputVal.classList.add('invalid');
    }
};