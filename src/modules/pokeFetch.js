const fetchData = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(pokeUrl)
      .then((response) => response.json())
      .then((data) => {
       
        console.log(data);

  });
}
  
  export default fetchData