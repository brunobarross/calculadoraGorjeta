document.addEventListener('DOMContentLoaded', () => {
    let inptValorConta = document.querySelector('#bill');

    let btnPorcentagem = document.querySelectorAll('.button__tip');

    let inptPessoas = document.querySelector('#peoples');


    btnPorcentagem.forEach((botoes) => {
        botoes.addEventListener('click', calculoPorcentagem);
        console.log(botoes.value)
    })


    function calculoPorcentagem(event) {
        const valorConta = Number(inptValorConta.value);
        const qtdPessoas = Number(inptPessoas.value);
        const valorBotao = Number(this.value);

        if (valorConta <= 0 || qtdPessoas <= 0) {
            console.log('error')
            document.body.classList.add('error');
            inptValorConta.nextElementSibling.innerHTML = "todos os campos devem estar preenchidos";
            inptPessoas.nextElementSibling.innerHTML = "todos os campos devem estar preenchidos";
        } else {

            let calculo = (valorConta * valorBotao) / 100;

            let divisaoPessoas = Number(Math.round(calculo / qtdPessoas));

            function mostrarLCD() {
                const tipInfo = document.querySelector('#valorGorjeta');
                const valorDivido = document.querySelector('#valorTotal');
                tipInfo.innerHTML = `$${calculo}`;
                valorDivido.innerHTML = `$${divisaoPessoas}`;
            }


            mostrarLCD();

        }

    }




})





