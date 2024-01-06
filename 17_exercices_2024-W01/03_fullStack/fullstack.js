/* 
2024-01-05
Steiber Zolán
SZOFT I/3/E

3.feladat - full stack: */

function fullStack (in1, in2) { 
  let front = in1.split(';')
  let back = in2.split(';')
  let fullstack = front.filter( f => {
    return back.includes(f)
  })
  
  console.log(fullstack)
  document.getElementById('container').innerHTML=`${fullstack}`
}

fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter')