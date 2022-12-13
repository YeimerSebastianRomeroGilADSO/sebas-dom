addEventListener("DOMContentLoaded", (e) =>{
    let horaTrabajada = document.querySelector('#horaTrabajada')
    let pago = document.querySelector('#pago')
    horaTrabajada.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let valorHora = 5208.33
        let hora = dataInput.hora
        hora *= valorHora
        pago.innerHTML = 'Su pago es de '+ hora
    })
})

