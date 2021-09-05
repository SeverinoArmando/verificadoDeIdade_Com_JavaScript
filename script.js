function verificar(){
    
    const data = new Date();

    var ano = data.getFullYear();
    var formAno = document.getElementById("ano")
    var resul = document.getElementById("res")
 
    if(Number(formAno.value.length) === 0 || Number(formAno.value) > ano){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{

        var sexo = document.getElementsByName('sexo');

        var idade = ano - Number(formAno.value)
        //variavel de interaco do genero escolhido
        var genero = ''
        //criaindo elemento img html com js
        var img = document.getElementById('foto')

        //Fazendo as condicoes
        if(sexo[0].checked){
            //criando condicao para idade, if composto
            genero = 'Homem'
            if(idade >=0 && idade <12){
                
                //crianca
                img.src='./_imagem/menino.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos um Menino com ${idade} anos`
            }else if(idade<21){
                //jovem
                img.src='./_imagem/jovem.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos um Jovem com ${idade} anos`
            }else if(idade<50){
                //aduto
                img.src='./_imagem/senhor.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos um Adulto com ${idade} anos`
            }else{
                //idoso
                img.src='./_imagem/adulto.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos um Sennhor com ${idade} anos`
            }
        }else if(sexo[1]){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                //crianca
                img.src='./_imagem/crianca.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos uma Menina com ${idade} anos`
            }else if(idade < 21){
                //jovem
                img.src='./_imagem/jovemMulher.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos uma Jovem com ${idade} anos`
            }else if(idade < 50){
                //adulto
                img.src='./_imagem/senhora.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos uma Adulta com ${idade} anos`
            }else{
                //idoso
                img.src='./_imagem/velha.jpg'
                resul.style.textAlign = 'center'
                resul.innerHTML = `Detectamos uma Senhora com ${idade} anos`
            }
        }
        // resul.style.textAlign = 'center'
        // resul.innerHTML = `Detectamos ${genero} com ${idade} anos`

        // resul.innerHTML = `Idade Calculada: ${idade}`
    }
}