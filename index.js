
let  pvi, pvn, pmn, sann, bonus;


// Selecionar Classe, mudando assim o pv inicial, pv por nivel e a mana
document.getElementById("classe").addEventListener('change', function(){
    const escolha = this.value;


    if(escolha === "arcb"){

        pvi = 8;
        pvn = 2;
        pmn = 6;

    }
    else if(escolha === "arcf"){

        pvi = 8;
        pvn = 2;
        pmn = 6; 

    }
    else if(escolha === "arcm"){

        pvi = 8;
        pvn = 2;
        pmn = 6;

    }
    else if(escolha ==="barb"){

        pvi = 24;
        pvn = 6;
        pmn = 3;
    }
    else if(escolha ==="bardo"){

        pvi = 12;
        pvn = 3;
        pmn = 4;
    }
    else if(escolha ==="bucaneiro"){

        pvi = 16;
        pvn = 4;
        pmn = 3;
    }
    else if(escolha ==="cac"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }  
    else if(escolha ==="cav"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
     else if(escolha ==="cle"){

        pvi = 16;
        pvn = 4;
        pmn = 5;
    }     
     
    else if(escolha ==="dru"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }
    else if(escolha ==="fra"){

        pvi = 12;
        pvn = 3;
        pmn = 6;
    }
    else if(escolha ==="gue"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha ==="inv"){

        pvi = 12;
        pvn = 4;
        pmn = 4;
     }
    else if(escolha ==="lad"){

        pvi = 12;
        pvn = 3;
        pmn = 4;
    }
    else if(escolha ==="mir"){

        pvi = 16;
        pvn = 4;
        pmn = 3;
    }
    else if(escolha ==="mis"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }
    
    else if(escolha ==="lut"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha ==="nob"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }
    else if(escolha ==="pal"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha ==="samurai"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha==="nada"){
        
        pvi = 0

    }
  

});


//funcao para clicar e executar o calculo
document.getElementById("calcular").onclick = function calculo(){

    const nivel = Number(document.getElementById("nivel").value)

    const forc = Number(document.getElementById("for").value)
    const des = Number(document.getElementById("des").value)
    let cons = Number(document.getElementById("cons").value)
    const int = Number(document.getElementById("int").value)
    const sab = Number(document.getElementById("sab").value)
    const car = Number(document.getElementById("car").value)


    //elfo ganha +1 de PM por nivel
    const elfo = (document.getElementById("elfo").checked);
        if(elfo==true){bonus=1}
        else{bonus=0}



    if(cons<=0){
        cons =1
    }

    //Se nenhuma classe for selecionada o pv inicial será nulo, assim não dando para executar o calculo dando o aviso:
    if(!pvi){
        document.getElementById("Cla").style.display = 'block';
        document.getElementById("Cla").style.color = 'red'
    }
    else{document.getElementById("Cla").style.display = 'none'

    let pv = pvi+(cons+pvn)*nivel;
    let mana = (pmn+bonus) * nivel;


    document.getElementById("PV").textContent = `PM: ${pv}`
    document.getElementById("PM").textContent = `PM: ${mana}`

    } 
}



