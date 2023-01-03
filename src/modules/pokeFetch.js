const fetchData = async () => {
    const pokeChar = 
    [
      {
        'id': 0,
        'url': 'https://pokeapi.co/api/v2/pokemon/ivysaur'
      },
      {
        'id': 1,
        'url': 'https://pokeapi.co/api/v2/pokemon/squirtle'
      },
      {
        'id': 2,
        'url': 'https://pokeapi.co/api/v2/pokemon/wartortle'
      },
      {
        'id': 3,
        'url': 'https://pokeapi.co/api/v2/pokemon/blastoise'
      },
      {
        'id': 4,
        'url': 'https://pokeapi.co/api/v2/pokemon/charmander'
      },
      {
        'id': 5,
        'url': 'https://pokeapi.co/api/v2/pokemon/charmeleon'
      },
      {
        'id': 6,
        'url': 'https://pokeapi.co/api/v2/pokemon/venusaur'
      },
      {
        'id': 7,
        'url': 'https://pokeapi.co/api/v2/pokemon/charizard'
      },
      {
        'id': 8,
        'url': 'https://pokeapi.co/api/v2/pokemon/caterpie'
      },
    ]

    pokeChar.forEach(el => {

      const divCard = document.createElement('div');
      divCard.classList.add('card');
      divCard.classList.add('m-4');

      fetch(el.url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.name, data.sprites.front_shiny);
            let output = '';

            output +=
            `
            
            <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
              <div class="card-body">
                <div class="card-title d-flex justify-content-between">
                    <h5 class="card-title">${data.name}</h5>
                    <h5 class="card-title"><i class="fa-regular fa-heart p-2"></i><span class="px-2">5</span>Likes</h5>
                </div>
                <div class="mx-auto d-grid">
                    <a href="#" class="btn btn-primary mt-4">Comments</a>
                    <a href="#" class="btn btn-primary mt-4">Reservations</a>
                </div>
              </div>
         `;
          divCard.innerHTML = output;

          document.getElementById('cards').appendChild(divCard);
    });

    })

  }
  
  export default fetchData