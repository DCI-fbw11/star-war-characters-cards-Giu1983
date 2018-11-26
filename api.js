//Load Star Wars character
document.getElementById('button').addEventListener('click', loadCharacter);

function loadCharacter() {
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'https://swapi.co/api/people', true);

    xhr.onload = function(){
        if(this.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data.results);
            handleData(data.results);
        }
        else {
            reject (this.status = 404);  
        }
        
    }
    xhr.send();
   
}


function nextButton() {
    if (pageNumber <9) {
      pageNumber++;
      fetchData();
    }
  }
  function button() {
    if (pageNumber > 1) {
      pageNumber--;
      fetchData();
    }
  }
function handleData(data) {
    document.getElementById("demo").innerHTML = ""
    data.forEach(item => {
      // console.log(item.name);
      // let liItem = document.createElement("li");
      //liItem.textContent = item.name;
      //document.getElementById("demo").appendChild(liItem);
      let str = `<div class='card-container'> 
      <h3> name: ${item.name}</h3>
    <h5> homeworld : ${item.homeworld}</h5>
    <h5> height : ${item.height}</h5>
    <h5>hair_color: ${item.hair_color}</h5>
    </div>`;
      document.getElementById("demo").innerHTML += str;
    }); 
  }



  