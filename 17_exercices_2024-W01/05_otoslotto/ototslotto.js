/* 
2024-01-05
Steiber Zolán
SZOFT I/3/E

5.feladat - otoslotto: */

function otoslotto () { 
  otosTomb = []
  while (i = otosTomb.length < 5) {
    let n = Math.floor(Math.random()*90)+1
    if (!otosTomb.includes(n)) {
      otosTomb.push(n)
    }}
  otosTomb.sort((a, b) => {
    return a - b;
  })

  console.log(otosTomb)
  document.getElementById('container').innerHTML=`${otosTomb}`
}

otoslotto()