/* 
2024-01-05
Steiber Zolán
SZOFT I/3/E

8.feladat - kerdoiv fuggveny: */

function valaszokatOsszesit (inpArray) {  
  answer_arr = inpArray.map(str => str.toLowerCase())
  osszesites = {}
  
  answer_arr.forEach(e => {
    osszesites[e] = answer_arr.filter(s => {
      return s == e
    }).length
  })
  console.log(osszesites)
  
  for (let key in osszesites) {
    document.getElementById('container').innerHTML+=`
    ${(key)}: ${osszesites[key]} db<br>`
  }
} 

valaszokatOsszesit([
  'Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok',
  'kalkulus iii', 'tavolito es valosagos szamitasok',
  'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III',
  'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK',
  'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok'
  ])