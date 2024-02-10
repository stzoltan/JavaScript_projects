let estUrl = 'https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/ingatlanok.json'
let katUrl = 'https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/kategoriak.json'


function ujratolt() {
  location.reload();
}

// A szerver tartalmat kilistazo fuggveny -----
document.getElementsByClassName('btn btn-primary')[0].onclick = function () {
  let katArray = [];
  let estArray = [];
  fetch(katUrl)
    .then(res => res.json())
    .then(resJs => {
      katArray = (Object.entries(resJs))
      console.log(katArray)
    })
    

  fetch(estUrl)
    .then(res => res.json())
    .then(resJs => {
      estArray = (Object.entries(resJs))
      console.log(estArray)

      // html table nyitasa -----
      let tableHtml = `
        <button onclick="ujratolt()" type="button" class="btn btn-dark" style="left: 100%">Vissza a kezdő oldalra</button><br><br><br>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Kategória Id</th>
              <th scope="col">Leírás</th>
              <th scope="col">Hírdetés dátuma</th>
              <th scope="col">Kép</th>
            </tr>
          </thead>
          <tbody>
      `;

      // html table sorai for ciklussal -----
      estArray.forEach(element => {
        let kat = katArray.filter(function (elem) {
          return elem[0] == element[1].kategoriaid
        });
        let katMegnevez = kat[0][1].megnevezes
        console.log(katMegnevez);

        tableHtml += `
        <tr>
        <td> ${katMegnevez} </td>
        <td> ${element[1].leiras} </td>
        <td> ${element[1].hirdetesDatuma} </td>
        <td> ${element[1].kepUrl} </td>
        </tr>
      `
      });

      // html table zarasa -----
      tableHtml += `</tbody ></table > `
      document.getElementById('container').innerHTML = tableHtml;

    })
}



// A formot kuldo fuggveny -----
document.getElementsByClassName('btn btn-success')[0].onclick = function () {
  let today = new Date();
  let formattedDate = today.toLocaleDateString('hu', { dateStyle: 'full' });

  let formHtml = `
        < button onclick = "ujratolt()" type = "button" class="btn btn-dark" style = "left: 100%" > Vissza a kezdő oldalra</button > <br><br><br>

          <form>
            <fieldset>
              <legend>Add meg az ingatlan adatait</legend>

              <div class="mb-3">
                <label for="textInput" class="form-label">Rögzítés dátuma</label>
                <input type="text" id="textInput" class="form-control" placeholder="${formattedDate}" disabled>
              </div>

              <div class="mb-3">
                <label for="defaultSelect" class="form-label">Ingatlan Kategória</label>
                <select id="defaultSelect" class="form-select">
                  <option>kategoria 1</option>
                  <option>kategoria 2</option>
                  <option>kategoria 3</option>
                  <option>kategoria 4</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ingatlan leírása</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="fieldsetCheck">
                    <label class="form-check-label" for="fieldsetCheck">
                      Tehermentes ingatlan
                    </label>
                </div>
              </div>

              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02">
                  <label class="input-group-text" for="inputGroupFile02">Upload</label>
              </div>


              <button type="submit" class="btn btn-primary">Submit</button>

            </fieldset>
          </form>
          `
  document.getElementById('container').innerHTML = formHtml;


}
