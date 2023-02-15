VMasker(document.querySelector("#altura")).maskPattern("9.99");


let btnCalcular = document.querySelector('#btn-calcular');

let btnLimpar = document.querySelector('#btn-limpar');


function calcular(event){
    event.preventDefault();

    let resultado = document.querySelector('#resultado');
    let tabela  = document.querySelector('#tabela');
    let altura = parseFloat(document.querySelector( '#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let imc = peso/(altura*altura)|| 0;
    
    resultado.innerHTML = 'O seu IMC é' + imc.toFixed(2);


    const elements = document.querySelectorAll('table.bg-warning');

elements.forEach((element) => {
  element.classList.remove('bg-warning');
  element.classList.remove('text-primary');
});


    if(imc <18.5){
       let linha = document.querySelector('#result_calc_0');
       linha.classList.add('bg-warning');
       linha.classList.add('text-primary');

    }


    if(imc >= 18.5 && imc <= 24.9){
        let linha = document.querySelector('#result_calc_1');
        linha.classList.add('bg-warning');
        linha.classList.add('text-primary');
 
     }



     if(imc >= 25.0 && imc <= 29.9){
        let linha = document.querySelector('#result_calc_2');
        linha.classList.add('bg-warning');
        linha.classList.add('text-primary');
 
     }


     if(imc >= 30.0 && imc <= 39.9){
        let linha = document.querySelector('#result_calc_3');
        linha.classList.add('bg-warning');
        linha.classList.add('text-primary');
 
     }

     if(imc >= 40.0 && imc ){
        let linha = document.querySelector('#result_calc_4');
        linha.classList.add('bg-warning');
        linha.classList.add('text-primary');
 
     }





    resultado.style.display = 'block';

    tabela.style.display = 'table';

    

}


    function limpar(evnt){
        event.preventDefault();

        let resultado = document.querySelector('#resultado');
        let tabela  = document.querySelector('#tabela');
    
    
        resultado.style.display = 'none';
    
        tabela.style.display = 'none';
        altura.value='';
        peso.value='';
    
}











btnCalcular.addEventListener('click',calcular);
btnLimpar.addEventListener('click',limpar); 
