// SCRIPT START -------------------------------------------------------------
// INDITO FUGGVENY ----------------------------------------------------------
function start(){
    document.getElementsByTagName('body')[0].style.backgroundColor = ("brown");
    document.getElementsByClassName('container')[0].innerHTML = ("");
    fejlecHivo();
    uj();
    adatTablaHivo();
} 



// ADAT TAROLO OBJEKTUM -----------------------------------------------------
var adatTabla = {
        parameterek:{  // objectum 2 db tombbel, a megjeleniteshez es a beolvasashoz
            kulcs: ["termek", "gyarto", "darab", "ar"],
            megjelenit: ["Termék", "Gyártó", "Darab", "Ár"]
        },
        adatsorok: [
            {id:1, termek:"gyufa", gyarto:"Aldi", darab: "10", ar:"10"},
            {id:2, termek:"sodium chloride", gyarto:"Molar", darab: "5", ar:"2000"},
            {id:3, termek:"elemlámpa", gyarto:"Superfire", darab: "1", ar:"2000"}
        ]
} 



// UJ ADATSOR HOZZADO FUGGVENY -----------------------------------------------
function uj(){
    let sor = document.createElement('div');
    sor.className =('row'); // 'ROW' !
    sor.classList.add("my-2", "border", "d-flex"); // SOR FORMAZASA
    
    for (let c of adatTabla.parameterek.kulcs){
        let cella = document.createElement('div');
        cella.className = ("col-2"); // "COL-2"!
        cella.classList.add("m-1", "border", "d-flex"); // BEVITELI CELLA FORMAZASA
        cella.innerHTML = ( // BEVITELI MEZO FORMAZASA
            `<input class="uj${c}" type="text" style="width: 100%" class="form-control">`); // INPUT
        sor.appendChild(cella);
    }
    let cella = document.createElement('div');
    cella.className = ("col-2"); // "COL-2"!
    cella.classList.add("ms-5", "m-1", "border", "d-flex"); // GOMB CELLA FORMAZASA
    cella.innerHTML = ( // GOMB FORMAZASA
        `<button type="button" style="width: 100%" onclick="hozzaad()" class="btn btn-primary">Hozzáad</button>`);
    sor.appendChild(cella); // vegul a HOZZAFUZESEK
    document.getElementsByClassName('container')[0].appendChild(sor);
}



// FEJLEC BETOLTO FUGGVENY --------------------------------------------------
function fejlecHivo(){ 
    let fejlec = document.createElement('div'); // FEJLEC LETREHOZASA
    fejlec.className = ("row"); // "ROW"!
    fejlec.classList.add( // FEJLEC FORMAZASA
        "text-light", "text-center", "fs-5", "fw-bold",
        "mb-4", "bg-dark", "border", "d-flex"
        ); 
    for (let c of adatTabla.parameterek.megjelenit) {
        let cim = document.createElement('div'); // oszlop CIMEK LETREHOZASA
        cim.className = ("col-2"); // "COL-2"
        cim.classList.add("m-1", "border", "d-flex"); // oszlop CIMEK FORMAZASA
        cim.innerHTML = (`${c}`);
        fejlec.appendChild(cim);
    }
    let cim = document.createElement('div'); // + 1 oszlop CIM A 'Műveletek' -nek
    cim.className = ("col-2"); // "COL-2"!
    cim.classList.add("ms-5", "m-1", "border"); // 'Műveletek' FORMAZASA
    cim.innerHTML = (`Műveletek`); 
    fejlec.appendChild(cim); // vegul a HOZZAFUZESEK
    document.getElementsByClassName('container')[0].appendChild(fejlec);
} 



// ADAT BETOLTO FUGGVENY -----------------------------------------------------
function adatTablaHivo() {
    for (let s of adatTabla.adatsorok) { // SOROK LETREHOZASA
        let sor = document.createElement('div');
        sor.className = ("row"); // 'ROW' !
        sor.classList.add("my-2", "border", "d-flex"); // SOROK FORMAZASA
        
        for (let c of adatTabla.parameterek.kulcs) { // sorbeli CELLA LETREHOZASA
            let cella = document.createElement('div');
            cella.className = ("col-2"); // "COL-2"!
            cella.classList.add("m-1", "border", "d-flex"); // BEVITELI CELLA FORMAZASA
            cella.innerHTML = ( // BEVITELI MEZO FORMAZASA
                `<input class="${s.id}${c}" type="text" style="width: 100%" value="${s[c]}" class="form-control">`); // INPUT
            sor.appendChild(cella);
        }  
        let cella = document.createElement('div'); // + 1 sorbeli CELLA A GOMBOKNAK
        cella.className = ("col-2"); // "COL-2"!
        cella.classList.add("ms-5", "m-1", "border", "d-flex"); // GOMB CELLA FORMAZASA
        cella.innerHTML =( // GOMBOK FORMAZASA
        `<button type="button" style="width: 50%" onclick="szerkeszt(${s.id})" class="btn btn-warning">Szerkeszt</button>
        <button type="button" style="width: 50%" onclick="torol(${s.id})" class="btn btn-dark">Töröl</button>
        `);
        sor.appendChild(cella); // vegul a HOZZAFUZESEK
        document.getElementsByClassName('container')[0].appendChild(sor);
    }
}



// MUVELETI FUGGVENYEK ------------------------------------------------------
function szerkeszt(id){ // SZERKESZTO FUGGVENY-----------
    adatsor = adatTabla.adatsorok.find(
        s => s.id === id);
        // function (s) {return s.id == id}
        
    for(let c of adatTabla.parameterek.kulcs){
        adatsor[c]=document.getElementsByClassName(`${adatsor.id}${c}`)[0].value 
    };
    console.log(adatsor);
    start();
}



function torol(id){ // DELETE FUGGVENY -------------------
    console.log('torlendo tetel: ', id);
    
    index = adatTabla.adatsorok.findIndex( // HEUREKA
        s => s.id === id);
    adatTabla.adatsorok.splice(index, 1) // index-tol indulva 1 elem splice (csak az index)
    
    console.log('torlendo indexe: ', index)
    start();
}



function hozzaad(){ // HOZZAADO FUGGVENY -----------------
    let adatsor = {};
    adatsor.id = Number(adatTabla.adatsorok.length)+1;
    for (let a of adatTabla.parameterek.kulcs){
        adatsor[a] = document.getElementsByClassName(`uj${a}`)[0].value;
        document.getElementsByClassName(`uj${a}`)[0].value = "";
    }
    adatTabla.adatsorok.push(adatsor);
    console.log(adatTabla.adatsorok)
    start();
}
// SCRIPT END ------------------------------------------------------------------

start();


       
    


