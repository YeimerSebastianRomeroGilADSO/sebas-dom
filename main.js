addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector('#proceso');
    let total = document.querySelector('#sueldoTotal')
    let ventasPorc = 0;
    let sueldoTotal = 0;

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let sueldoBase = Number(dataInput.sueldoBase)
        let ventaUno = Number(dataInput.ventaUno)
        let ventaDos = Number(dataInput.ventaDos)
        let ventaTres = Number(dataInput.ventaTres)
        total = dataInput.enviar
        ventasPorc= (ventaUno+ventaDos+ventaTres)*0.10
        sueldoTotal = sueldoBase+ventasPorc
        console.log(sueldoTotal)
        enviarUno.innerHTML = 'Su parte por comisiones de ventas realizadas es de ' + ventasPorc
        enviarDos.innerHTML = 'Su sueldo toial es de ' + sueldoTotal

    })
})