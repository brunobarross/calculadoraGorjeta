document.addEventListener('DOMContentLoaded', () => {
    let inptValorConta = document.querySelector('#bill');

    let btnPorcentagem = document.querySelectorAll('.button__tip');

    let inptPessoas = document.querySelector('#peoples');


    btnPorcentagem.forEach((botoes) => {
        botoes.addEventListener('click', calculoPorcentagem);
        console.log(botoes.value)
    })


    function calculoPorcentagem(event) {
        let valorConta = Number(inptValorConta.value);
        let qtdPessoas = Number(inptPessoas.value);
        let valorBotao = Number(this.value);
        inptPessoas.nextElementSibling.innerHTML = "";

        /*CASO VALOR SEJA IGUAL A ZERO OU VAZIO*/
        if (valorConta == 0 || qtdPessoas == 0) {
            console.log('error')
            document.body.classList.add('error');
            inptPessoas.nextElementSibling.innerHTML = "os valores não pode ser igual a zero";
        } else {
            document.body.classList.remove('error');
            let valorGorjeta = (valorBotao * valorConta) / 100;
            let divisaoPessoas = Number((valorConta + valorGorjeta) / qtdPessoas);
            const tipInfo = document.querySelector('#valorGorjeta');
            const valorDivido = document.querySelector('#valorTotal');
            const btnReset = document.querySelector('.btnReset');

            /* MOSTRA NA TELA DE LCD*/

            function mostrarLCD() {
                tipInfo.innerHTML = `$${valorGorjeta}`;
                valorDivido.innerHTML = `$${divisaoPessoas}`;
            }


            /* RESET */
            btnReset.addEventListener('click', (event)=>{
                tipInfo.innerHTML = '$0';
                valorDivido.innerHTML = '$0';
                inptValorConta.focus();
                inptValorConta.value ="";
                inptPessoas.value ="";
                
                
                

            });


            mostrarLCD();

        }

    }




})





