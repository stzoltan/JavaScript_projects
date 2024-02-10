let estUrl = 'https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/ingatlanok.json'
let katUrl = 'https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/kategoriak.json'


function ujratolt() {
  location.reload();
}

fetch(estUrl)
  .then(res => res.json())
  .then(res => console.log(res))

fetch(katUrl)
  .then(res => res.json())
  .then(res => console.log(res))


// A szerver tartalmat kilistazo fuggveny -----
document.getElementsByClassName('btn btn-primary')[0].onclick = function () {

  let estates = new XMLHttpRequest;
  
  estates.onreadystatechange = function () {
    if(estates.readyState === 4 && estates.status === 200) {
      let posts = JSON.parse(estates.responseText);
      let postsNew = Object.values(posts);
      
      let tableHtml = `
      <button onclick="ujratolt()" type="button" class="btn btn-dark" style="left: 100%">Vissza a kezdő oldalra</button><br><br><br>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Leírás</th>
            <th scope="col">Hírdetés dátuma</th>
            <th scope="col">Fénykép/th>
          </tr>
        </thead>
       <tbody>
      `;
    
      for(let post of postsNew) {
        tableHtml += `
        <tr>
          <td>${post.leiras}</td>
          <td>${post.hirdetesDatuma}</td>
          <td>${post.kepUrl}</td>
        </tr>
       `
      };
    
      tableHtml += `</tbody></table>`
      document.getElementById('container').innerHTML = tableHtml;
    }
  }

  estates.open('GET', estUrl);
  estates.send();
}



// A formot kuldo fuggveny -----
document.getElementsByClassName('btn btn-success')[0].onclick = function () {
  let today = new Date();
  let formattedDate = today.toLocaleDateString('hu', {dateStyle: 'full'});

  let formHtml = `
  <button onclick="ujratolt()" type="button" class="btn btn-dark" style="left: 100%">Vissza a kezdő oldalra</button><br><br><br>
  
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
