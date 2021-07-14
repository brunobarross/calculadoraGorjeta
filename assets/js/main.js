document.addEventListener('DOMContentLoaded', ()=>{
    const valorConta = document.querySelector('#bill');

    valorConta.addEventListener('change', mostrarNoLCD);

    const btnPorcentagem = document.querySelectorAll('.button__tip');

    btnPorcentagem.forEach((valor)=>{
        valor.addEventListener('click', calculoPorcentagem);
    })
    

    function calculoPorcentagem(event){
        let btnValor = this.value;
        btnValor = btnValor * 100;
        console.log(btnValor)
    }


    function mostrarNoLCD(event){
        let valorGorjeta = document.querySelector('#valorGorjeta');
        valorGorjeta.innerHTML = valorConta.value;

    }
   
    
})

