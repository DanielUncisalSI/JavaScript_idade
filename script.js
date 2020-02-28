function limpar(){
    var h = document.getElementById('masc').checked = false;
    var m = document.getElementById('fem').checked = false;  
     var pai = document.getElementById('foto');
     pai.removeAttribute('src');        
    }

function radioM(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(Number(fAno.value.length) == 0 || Number(fAno.value) > ano){
        alert("[ERRO] verifique os dados e tente novamente ");
    }else{
        var idade = ano - Number(fAno.value); 
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(idade >=0 && idade < 10){
            //criança
            genero = 'criança';
            img.setAttribute('src','criancaM.jpg');
        }else if (idade < 21){
            //jovem
            genero = 'jovem';
            img.setAttribute('src','jovemM.jpg');
        }else if (idade < 50){
            //adulto
            genero = 'adulta';
            img.setAttribute('src','adultoM.jpg');
        }else{
            //idoso
            genero = 'idosa';
            img.setAttribute('src','velha.jpg');
        }

       res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`;
       res.appendChild(img);
    }
    
}


function radioH(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(Number(fAno.value.length) == 0 || Number(fAno.value) > ano){
        alert("[ERRO] verifique os dados e tente novamente ");
    }else{
        var genero = '';
        var idade = ano - Number(fAno.value); 
        var genero = 'Homem';
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    if(idade >=0 && idade < 10){
        //criança
        genero = 'criança';
        img.setAttribute('src','criancaH.jpg');
    }else if (idade < 21){
        //jovem
        genero = 'jovem';
        img.setAttribute('src','jovemH.jpg');
    }else if (idade < 50){
        //adulto
        genero = 'adulto';
        img.setAttribute('src','adultoH.jpg');
    }else{
        //idoso
        genero = 'idoso';
        img.setAttribute('src','velho.jpg');
    }

       res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`;
       res.appendChild(img);
    }
}

