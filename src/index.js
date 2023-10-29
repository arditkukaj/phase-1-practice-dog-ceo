console.log('%c HI', 'color: firebrick')
let breed = [];
//challenge 1
function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImg(json))
  }
  
  function renderImg(images) {
    const loc = document.querySelector('#dog-image-container')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      loc.appendChild(img)
    });
  }


//challenge 2
function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        breedUpdate(breeds);
        breedFilter();
      });
  }

function breedUpdate(){
    let ul = document.querySelector("#dog-breeds")
    breedUL(ul);
    breeds.forEach(breed => addBreed(breed));
}

function breedUL(element){
    let child = element.lastElementChild;
    while(child) {
        element.removeChild(child);
        child = element.lastElementChild;

    }
}

function breedsDrop() {
    dropdown.addEventListener("change", event => {

        const letter = event.target.value
      
      
        const filteredBreeds = breedList.filter(function(breed) {
          return breed.startsWith(letter)
        })
    
        dogList.innerHTML = ''
      
    
        filteredBreeds.forEach(function(breed) {
          renderBreed(breed)
        })
        console.log(filteredBreeds)
      
        dogList.querySelectorAll("li").forEach(li => {
          // check if it starts with the letter
         if (!li.textContent.startsWith(letter)) {
            // hide it!
           li.style.display = "none"
        } else {
          li.style.display = ""
          }
       })
      })
    
    }
function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', (e)=> { e.target.style.backgroundColor = 'green'; e.target.style.color = 'white';});
  }

  

  document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    loadBreeds();
  })
