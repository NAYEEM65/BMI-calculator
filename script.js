
const bmiBtn = document.getElementById('bmiBtn');
bmiBtn.addEventListener('click', () => {
    const inputHeight = document.getElementById('inputHeight');
    const height = parseFloat(inputHeight.value);
    if(height <= 0){
        alert('Please Enter a Valid Height')
    }
    inputHeight.value = height;


    const inputWeight = document.getElementById('inputWeight');
    const weight = parseFloat(inputWeight.value);
    if(weight <= 0){
        alert('Please Enter a Valid Height')
    }
    inputWeight.value = weight;

    const result = document.getElementById('result');
    if(height > 0 && weight > 0){
        const newResult = weight/(height*height);
        result.innerText = newResult;
        result.style.color = "black";
    }
    else{
        const newError = "Your Height or Weight is incorrect";
        result.innerText = newError;
        result.style.color = "red";
    }

    result.style.display = "block";
})