 const dogHolder = document.querySelector('.dogs')

fetch('http://localhost:3000/Dogs')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(dogToDom);
    })

function dogToDom(data){

    const dogContainer = document.createElement('div')
    dogContainer.className = 'dog-container'
    dogContainer.dataset.breed = data.Breed

    const imageTag = document.createElement('img')
    imageTag.src = data.image

    dogContainer.style.height = 400
    dogContainer.style.width = 400

    const button = document.createElement('button')

    button.innerHTML = "💖 🐕"
    button.dataset.clickCount = 0;

    button.addEventListener ('click', () => {
        button.dataset.clickCount = Number(button.dataset.clickCount) + 1;
        button.textContent = `💖 🐕: ${button.dataset.clickCount}`;
      })

    dogContainer.append(imageTag, button)
    dogHolder.append(dogContainer)
  }

const catButton = document.getElementById('cat')
const emojiList = document.querySelector('#cat-pic')

catButton.addEventListener('click', () => renderEmoji('🐈‍⬛'))

function renderEmoji(emoji){
  const deleteCat = document.createElement('button')

  const ul = document.createElement('ul')
  ul.innerHTML = emoji
  deleteCat.textContent = 'delete'

  ul.appendChild(deleteCat)
  emojiList.appendChild(ul)

  deleteCat.addEventListener('click', () => deleteCat.parentElement.remove())
}

const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByBreed');
      const searchTerm = input.value;
      const numberOfDogs = dogHolder.children.length;

      for (let index = 0; index < numberOfDogs; index++) {
        const dogDomElement = dogHolder.children[index];
        const breed = dogDomElement.dataset.breed;
        const indexOfSearchTerm = breed.toLowerCase().search(searchTerm.toLowerCase())
        console.log(breed);
        console.log(indexOfSearchTerm);

        if (indexOfSearchTerm >= 0) {
          dogDomElement.style.display = "block";
        } else {
          dogDomElement.style.display = "none";
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);