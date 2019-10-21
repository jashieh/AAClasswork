
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const arr = [];
  Object.keys(dogs).forEach( (dog) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogs[dog];

    li.classList.add('dog-link');
    li.append(a);
    arr.push(li);
  });
  return arr;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  let ul = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach( el => { ul.append(el); } );
}

function handleEnter() {
  const dogs = document.getElementsByClassName('drop-down-dog-list');
  Array.from(dogs).forEach( (el) => el.classList.add('open'));
}

function handleLeave() {
  const dogs = document.getElementsByClassName('drop-down-dog-list');
  Array.from(dogs).forEach((el) => el.classList.remove('open'));
}

attachDogLinks();

let list = document.querySelector('.drop-down-dog-nav');
list.addEventListener('mouseenter',handleEnter);
list.addEventListener('mouseleave', handleLeave);


