let radioBtns = document.querySelectorAll('input[name="fruit"]');
let result = document.getElementById('result');

let findSelected =()=> {
    let selected = document.querySelector('input[name="fruit"]:checked').value;
    result.textContent = `Value of selected radio button: ${selected}`;
    console.log(selected);
}
