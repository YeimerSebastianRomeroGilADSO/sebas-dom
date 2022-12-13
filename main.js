addEventListener("DOMContentLoaded", (e) =>{
    let validar = document.querySelector('#validacion')
    let form = document.querySelector('#numeroPerfecto')
    let acum = 0;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let  dataInput = Object.fromEntries(new FormData(e.target))
        let  num = dataInput.number 
        for(let i=1; i <= num / 2; i++){
            if (num % i == 0){
                acum +=i;
            }
        }
            if (acum !=0 && acum == num){
                validar.innerHTML = 'Es un numero perfecto'
        }
            else {
                    validar.innerHTML = 'No es un numero perfecto'
        }
    })
})  