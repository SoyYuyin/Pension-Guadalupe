

function getlugares(){
  fetch('http://localhost:3000/lugares')
  .then((res) => res.json())
  .then((lugares)=> {
    console.log(lugares);
    let output='';
    lugares.forEach((lugar) =>{
      output += `
      <div class='card'> 
        <img src="bob.png" alt="foto del espacio" />
        <h3>${lugar.lugar}</h3>
        <p>${lugar.descripcion}</p>
        <a href='/signup'>Rentar</a>
      </div>`})
    document.querySelector('.cards-preview').innerHTML = output;
  })
  .catch((err)=>{
    console.log(err);
  })
}

getlugares();

