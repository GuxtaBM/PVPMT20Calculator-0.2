
let  pvi, pvn, pmn, san=0, bonus, bonusM=0;

let pv = 0, mana = 0;
let pvmod=0, pmmod=0 ,sanmod=0;

let bonusV=0, bonusVI=0




// Selecionar Classe, mudando assim o pv inicial, pv por nivel e a mana
document.getElementById("classe").addEventListener('change', function(){
    const escolha = this.value;

switch (escolha) {
        case "arcb": case "arcf": case "arcm":
            pvi = 8; pvn = 2; pmn = 6; break;
        case "barb":
            pvi = 24; pvn = 6; pmn = 3; break;
        case "bardo": case "fra": case "lad": case "tre":
            pvi = 12; pvn = 3; pmn = 4; break;
        case "bucaneiro": case "mir":
            pvi = 16; pvn = 4; pmn = 3; break;
        case "cav": case "gue": case "lut": case "pal": case "samurai":
            pvi = 20; pvn = 5; pmn = 3; break;
        case "cle":
            pvi = 16; pvn = 4; pmn = 5; break;
        case "inv":
            pvi = 12; pvn = 4; pmn = 4; break;
        default: // cac, dru, mis, nob
            pvi = 16; pvn = 4; pmn = 4; break;
    }
});






//funcao para clicar e executar o calculo
document.getElementById("calcular").onclick = function calculo(){

    const nivel = Number(document.getElementById("nivel").value)
//atributos
    const forc = Number(document.getElementById("for").value)
    const des = Number(document.getElementById("des").value)
    let cons = Number(document.getElementById("cons").value)
    let int = Number(document.getElementById("int").value)
    let sab = Number(document.getElementById("sab").value)
    const car = Number(document.getElementById("car").value)
 
    bonus = 0;
    bonusM = 0;
    bonusVI = 0
    bonusV = 0


//Raças
    const raca = document.getElementById("raca").value

    switch(raca) {
        case "anao":
            bonusVI = 3;
            bonusV = 1;
            break;
        case "elfo":
            bonus = 1;
            break;
        case "mE":
           bonusM = Math.floor(nivel / 2);
            break;
        
}


    if(cons<=0){
        cons =1
    }
    if(sab<=0){
        sab =1
    }
    if(int<=0){
        int =1
    }

    
    //Se nenhuma classe for selecionada o pv inicial será nulo, assim não dando para executar o calculo dando o aviso:
    if(!pvi){
        document.getElementById("Cla").style.display = 'block';
        document.getElementById("Cla").style.color = 'red'
    }
    else{document.getElementById("Cla").style.display = 'none'

    pv = pvi+bonusVI+(cons+pvn+bonusV)*nivel;
    mana = (pmn+bonus)*nivel+bonusM;
    san= nivel*(3+sab+int);


    sanmod=san;
    pvmod=pv;
    pmmod=mana;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`

    
    }
     
}

const sub10pv = document.getElementById("sub10pv")
const subpv = document.getElementById("subpv")
const addpv = document.getElementById("addpv")
const add10pv = document.getElementById("add10pv")
const fullL= document.getElementById("fullL")


const sub10pm = document.getElementById("sub10pm")
const subpm = document.getElementById("subpm")
const addpm = document.getElementById("addpm")
const fullM = document.getElementById("fullM")
const add10pm = document.getElementById("add10pm")

const sub10san = document.getElementById("sub10san")
const subsan = document.getElementById("subsan")
const addsan = document.getElementById("addsan")
const fsan = document.getElementById("fsan")
const add10san = document.getElementById("add10san")

// PV mais menos e full life
sub10pv.onclick = function(){

    pvmod = pvmod-5

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
subpv.onclick = function(){

    pvmod--

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
addpv.onclick = function(){

    pvmod++
    if(pvmod>pv){pvmod=pv}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
add10pv.onclick = function(){

    pvmod=pvmod+5
    if(pvmod>pv){pvmod=pv}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}

fullL.onclick = function(){

    pvmod=pv;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`

}

// PM mais menos e full pm


sub10pm.onclick = function(){

    pmmod = pmmod-5

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}

subpm.onclick = function(){

    pmmod--

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}` 
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`


}
addpm.onclick = function(){

    pmmod++
    if(pmmod>mana){pmmod=mana}


    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`

}

add10pm.onclick = function(){

    pmmod=pmmod+5
    if(pmmod>pm){pmmod=pm}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}

fullM.onclick = function(){

    pmmod=mana;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}


//sanidade mais menos e full sanidade

sub10san.onclick = function(){

    sanmod = sanmod-5

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
subsan.onclick = function(){

    sanmod--

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
addsan.onclick = function(){

    sanmod++
    if(sanmod>san){sanmod=san}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    
}
add10san.onclick = function(){

    sanmod = sanmod+5
    if(sanmod>san){sanmod=san}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
}
fsan.onclick = function(){

    sanmod=san;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`

};

