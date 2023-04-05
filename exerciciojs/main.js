const form = document.getElementById('form-valores');

function comparar(a,b){

    if (b>a){
        return true;
    }
    else {
        return false;
    }
}

form.addEventListener ('submit', function(e) {
    e.preventDefault();

const valorA = document.getElementById('numero1');
const valorB = document.getElementById('numero2');


    if (!comparar (valorA.value, valorB.value)) {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        valorA.value = '';
        valorB.value = '';
    }
    else{
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        valorA.value = '';
        valorB.value = '';
    }
}
)

const inputs = document.getElementById('numero1');
inputs.addEventListener('focus', function(e) {
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
    });

    const inputs2 = document.getElementById('numero2');
inputs2.addEventListener('focus', function(e) {
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
    });
