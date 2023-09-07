
let buttonSearch = document.getElementById('btnBuscar');
let conteiner = document.getElementById('contenedor');
const URL = "https://images-api.nasa.gov/" + "search?q=";
buttonSearch.addEventListener('click', () => {
    let searchValue = document.getElementById('inputBuscar').value;
    let URLPlus = URL + searchValue;
    fetch(URLPlus)
        .then(Response => Response.json())
        .then(ResponseData => {
            let data = ResponseData;
           conteiner.innerHTML = ``
            showResultsCard(data);

        })


});

function showResultsCard(data) {
let items =  data.collection.items ;
   items.forEach(Element => {
        conteiner.innerHTML +=
        ` <div class="card">
        <img class="card-img-top" src="${Element.links[0].href}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${Element.data[0].title}</h5>
          <div class="textDescription">
          <p class="card-text">${Element.data[0].description}</p>
          </div>
          <p class="date">${Element.data[0].date_created}</p>
        </div>
      </div>`
        
    });

}