let  pvi, pvn, pmn, san=0, bonus, bonusM=0;

let pv = 0, mana = 0;
let pvmod=0, pmmod=0 ,sanmod=0;

let bonusV=0, bonusVI=0


// atriMana é o atributo pra somar com a mana. Exemplo mana+car, mana+sab
// 0 = nenhum 1= int, 2= sab, 3=car
let atriMana


// >>>>>>>>>>>>>>>>>>>>>>>> CÓDIGO ADICIONADO (INÍCIO) <<<<<<<<<<<<<<<<<<<<<<<<
// Chave usada para guardar os dados no localStorage do navegador
const CHAVE_STORAGE = "rpgCalcDados";

// Salva no localStorage tudo que é preciso para restaurar a ficha depois
function salvarDados(){
    const dados = {
        classe: document.getElementById("classe") ? document.getElementById("classe").value : "",
        raca: document.getElementById("raca") ? document.getElementById("raca").value : "",
        nivel: document.getElementById("nivel") ? document.getElementById("nivel").value : "",
        for_: document.getElementById("for") ? document.getElementById("for").value : "",
        des: document.getElementById("des") ? document.getElementById("des").value : "",
        cons: document.getElementById("cons") ? document.getElementById("cons").value : "",
        int_: document.getElementById("int") ? document.getElementById("int").value : "",
        sab: document.getElementById("sab") ? document.getElementById("sab").value : "",
        car: document.getElementById("car") ? document.getElementById("car").value : "",
        pvi, pvn, pmn, atriMana,
        bonus, bonusM, bonusV, bonusVI,
        pv, mana, san,
        pvmod, pmmod, sanmod
    };
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(dados));
}

// Carrega do localStorage e devolve os dados salvos (ou null se não houver nada salvo)
function carregarDados(){
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
    if(!dadosSalvos){ return null; }
    return JSON.parse(dadosSalvos);
}

// Aplica os dados salvos nos campos da tela e nas variáveis do jogo
function restaurarDados(){
    const dados = carregarDados();
    if(!dados){ return; }

    if(document.getElementById("classe")) document.getElementById("classe").value = dados.classe;
    if(document.getElementById("raca")) document.getElementById("raca").value = dados.raca;
    if(document.getElementById("nivel")) document.getElementById("nivel").value = dados.nivel;
    if(document.getElementById("for")) document.getElementById("for").value = dados.for_;
    if(document.getElementById("des")) document.getElementById("des").value = dados.des;
    if(document.getElementById("cons")) document.getElementById("cons").value = dados.cons;
    if(document.getElementById("int")) document.getElementById("int").value = dados.int_;
    if(document.getElementById("sab")) document.getElementById("sab").value = dados.sab;
    if(document.getElementById("car")) document.getElementById("car").value = dados.car;

    pvi = dados.pvi; pvn = dados.pvn; pmn = dados.pmn; atriMana = dados.atriMana;
    bonus = dados.bonus; bonusM = dados.bonusM; bonusV = dados.bonusV; bonusVI = dados.bonusVI;
    pv = dados.pv; mana = dados.mana; san = dados.san;
    pvmod = dados.pvmod; pmmod = dados.pmmod; sanmod = dados.sanmod;

    if(pv !== undefined && document.getElementById("PV")){
        document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
        document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
        document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    }
}

// Assim que a página carregar, tenta restaurar os dados salvos
document.addEventListener("DOMContentLoaded", restaurarDados);
// >>>>>>>>>>>>>>>>>>>>>>>>> CÓDIGO ADICIONADO (FIM) <<<<<<<<<<<<<<<<<<<<<<<<<<


// Selecionar Classe, mudando assim o pv inicial, pv por nivel e a mana
document.getElementById("classe").addEventListener('change', function(){
    const escolha = this.value;

switch (escolha) {
        case "arcb": case "arcm":
            pvi = 8; pvn = 2; pmn = 6; atriMana=1; break;
        case "arcf":
            pvi = 8; pvn = 2; pmn = 6; atriMana=3; break;    
        case "barb":
            pvi = 24; pvn = 6; pmn = 3; atriMana=0; break;
        case  "lad": case "tre":
            pvi = 12; pvn = 3; pmn = 4; atriMana=0;
        case "bardo":
            pvi = 12; pvn = 3; pmn = 4; atriMana=3; break;
        case "fra":
            pvi = 12; pvn = 3; pmn = 4; atriMana=2; break;
        case "bucaneiro": case "mir":
            pvi = 16; pvn = 4; pmn = 3; atriMana=0; break;
        case "cav": case "gue": case "lut": case "pal": case "samurai":
            pvi = 20; pvn = 5; pmn = 3; atriMana=0; break;
        case "cle":
            pvi = 16; pvn = 4; pmn = 5; atriMana=2; break;
        case "dru": case "mis": 
            pvi = 16; pvn = 4; pmn = 4; atriMana=2; break;
        case "inv":
            pvi = 12; pvn = 4; pmn = 4; atriMana=0;break;
        default: // cac, nob
            pvi = 16; pvn = 4; pmn = 4; atriMana=0; break;

            
    }
    salvarDados(); 
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
            bonusVI = bonusVI+3;
            bonusV = bonusV + 1;
            break;
        case "elfo":
            bonus = bonus+1;
            break;
        case "mE":
           bonusM = bonusM+Math.floor(nivel / 2);
            break;
        
}


   
    // 0 = nenhum 1= int, 2= sab, 3=car
    if(atriMana===1){
        bonusM=bonusM+int
    }
    if(atriMana===2){
        bonusM=bonusM+sab 
    }
    if(atriMana===3){
        bonusM=bonusM+car
    }
    if(atriMana===0){
        bonusM=bonusM+0
    }

    
    //Se nenhuma classe for selecionada o pv inicial será nulo, assim não dando para executar o calculo dando o aviso:
    if(!pvi){
        document.getElementById("Cla").style.display = 'block';
        document.getElementById("Cla").style.color = 'red'
    }
    else{document.getElementById("Cla").style.display = 'none'

    pv = pvi+bonusVI+(cons+pvn+bonusV)*nivel;
    mana = (pmn+bonus)*nivel+bonusM;
    san= nivel*(5+sab+int);


    sanmod=san;
    pvmod=pv;
    pmmod=mana;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); // <<< LINHA ADICIONADA: salva o resultado do cálculo
    
    
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
    salvarDados(); 
}
subpv.onclick = function(){

    pvmod--

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}
addpv.onclick = function(){

    pvmod++
    if(pvmod>pv){pvmod=pv}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}
add10pv.onclick = function(){

    pvmod=pvmod+5
    if(pvmod>pv){pvmod=pv}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}

fullL.onclick = function(){

    pvmod=pv;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 

}

// PM mais menos e full pm


sub10pm.onclick = function(){

    pmmod = pmmod-5
    if(pmmod<0){pmmod=0}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}

subpm.onclick = function(){

    pmmod--
    if(pmmod<0){pmmod=0}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}` 
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 


}
addpm.onclick = function(){

    pmmod++
    if(pmmod>mana){pmmod=mana}


    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 

}

add10pm.onclick = function(){

    pmmod=pmmod+5
    if(pmmod>mana){pmmod=mana}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}

fullM.onclick = function(){

    pmmod=mana;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados();  
}


//sanidade mais menos e full sanidade

sub10san.onclick = function(){

    sanmod = sanmod-5
    if(sanmod<0){sanmod=0}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}
subsan.onclick = function(){

    sanmod--
    if(sanmod<0){sanmod=0}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}
addsan.onclick = function(){

    sanmod++
    if(sanmod>san){sanmod=san}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
    
}
add10san.onclick = function(){

    sanmod = sanmod+5
    if(sanmod>san){sanmod=san}

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 
}
fsan.onclick = function(){

    sanmod=san;

    document.getElementById("PV").textContent = `PV: ${pvmod}/${pv}`
    document.getElementById("PM").textContent = `PM: ${pmmod}/${mana}`
    document.getElementById("SAN").textContent = `SAN: ${sanmod}/${san}`
    salvarDados(); 

};
