// create html elements by using DOM
document.body.innerHTML = `

<div id="fetchdata">  
</div>
`;
//select the element to display the results
const displayResult = document.getElementById("fetchdata");

//get data from pokemon api link by using template literal

const getData = async () => {
  try {
    let pokemondata = [];
    let result;
    
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      result = await response.json(); 
          
      displayResult.innerHTML +=`
    <div class="container">
    <br>
      films:${result.data[0].films}<br><br>

      </div>`
      
    
}catch (error) {
    console.log(error);
  }

};

getData();