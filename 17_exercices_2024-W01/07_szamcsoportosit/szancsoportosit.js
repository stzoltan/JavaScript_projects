/* 
2024-01-05
Steiber Zolán
SZOFT I/3/E

7.feladat - szamok csoportositasa: */

function szamokatCsoportosit (str) { 
  let string_arr = str.split(';')
  
  if (string_arr[0] == '' ) {
    console.log(`Nem adtál meg számot!`)
  } else {
    let numbers_arr = string_arr.map(Number)
    let numbers_obj = {}
    
    numbers_obj['pozitiv'] = numbers_arr.filter( n => { return n > 0 })
    numbers_obj['negativ'] = numbers_arr.filter( n => { return n < 0 })
    numbers_obj['nulla'] = numbers_arr.filter( n => { return !n > 0 || !n < 0 })
    // valami miatt a ( n => { return n = 0 }) nem mukodik, uresen adja vissza: [] ???
    
    console.log(numbers_obj)
    document.getElementById('container').innerHTML=`
    Pozitív számok: ${numbers_obj.pozitiv} <br><br>
    Negatív számok: ${numbers_obj.negativ} <br><br>
    Nullák kiírva: ${numbers_obj.nulla}
    `
  } 
}

szamokatCsoportosit('1;-9;-8;0;2;1;-8;1;0.9')