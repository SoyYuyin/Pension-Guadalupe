

function getSpaces(){
  fetch('http://localhost:3000/spaces')
  .then((res) => res.json())
  .then((spaces)=> {
    console.log(spaces);
    let output='';
    spaces.forEach((space) =>{
      output += `
      <div class='card'> 
        <img src="bob.png" alt="foto del espacio" />
        <h3>${space.space}</h3>
        <p>${space.details}</p>
        <p><strong>$${space.price}.00</strong></p>
        <a href='/signup'>Rentar</a>
      </div>`})
    document.querySelector('.cards-preview').innerHTML = output;
  })
  .catch((err)=>{
    console.log(err);
  })
}

getSpaces();

