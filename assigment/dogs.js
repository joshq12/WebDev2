console.log("dogs.js loaded");
// Dataset (5 objects, 5+ properties)
const dogBreeds = [
    {
        name: "Golden Retriever",
        origin: "Scotland",
        lifespan: 12,
        size: "Large",
        friendliness: 9,
        image: "images/Golden-retriever.jpg"
    },
    
{
        name: "German Shepherd",
        origin: "Germany",
        lifespan: 11,
        size: "Large",
        friendliness: 8,
        image: "images/German-shepherd.jpg"
    },

 {
        name: "Poodle",
        origin: "France",
        lifespan: 14,
        size: "Medium",
        friendliness: 8,
        image: "images/Poodle.jpg"
    },
{
        name: "Great Dane",
        origin: "Germany",
        lifespan: 8,
        size: "Giant",
        friendliness: 7,
        image: "images/Great-dane.jpg"
    },
    {
        name: "Pug",
        origin: "France",
        lifespan: 12,
        size: "Small",
        friendliness: 9,
        image: "images/Pug.jpg"
    },
    {
        name: "Dobermen",
        origin: "Germany",
        lifespan: 10,
        size: "Large",
        friendliness: 8,
        image: "images/Dobermen.jpg"
    }
];


// =======================
// Local Storage
// =======================
if (!localStorage.getItem("dogs")) {
  localStorage.setItem("dogs", JSON.stringify(dogBreeds));
}

let dogs = JSON.parse(localStorage.getItem("dogs"));


// =======================
// Display (HANDLEBARS)
// =======================
function displayDogs(filteredDogs = dogs) {
  const source = document.getElementById("dog-template").innerHTML;
  const template = Handlebars.compile(source);

  document.getElementById("dog-container").innerHTML =
    template({ dogs: filteredDogs });

  calculateAverageLifespan();
}

// =======================
// SORT 
// =======================


// =======================
// SEARCH 
// =======================


function applyFilters() {
  const nameInput = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const minFriendliness =
    document.getElementById("friendlinessFilter").value;

  const cards = document.querySelectorAll("#dog-container .card");

  cards.forEach(card => {
    const dogName = card.dataset.name.toLowerCase();
    const friendliness = Number(card.dataset.friendliness);

    const matchesName = dogName.includes(nameInput);
    const matchesFriendliness =
      minFriendliness === "" || friendliness >= minFriendliness;

    if (matchesName && matchesFriendliness) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// =======================
// DELETE 
// =======================
function deleteDog(name) {
  dogs = dogs.filter(dog => dog.name !== name);
  localStorage.setItem("dogs", JSON.stringify(dogs));
  displayDogs();
}

// =======================
// ADD DOG ✅
// =======================
document.getElementById("dogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newDog = {
    name: name.value,
    origin: origin.value,
    lifespan: Number(lifespan.value),
    size: size.value,
    friendliness: Number(friendliness.value),
    image: image.value
  };

  dogs.push(newDog);
  localStorage.setItem("dogs", JSON.stringify(dogs));
  displayDogs();
  this.reset();
});

// =======================
// CALCULATED FEATURE ✅
// =======================
function calculateAverageLifespan() {
  const total = dogs.reduce((sum, dog) => sum + dog.lifespan, 0);
  document.getElementById("average").textContent =
    `📊 Average Lifespan: ${(total / dogs.length).toFixed(1)} years`;
}

// =======================
// INITIAL LOAD
// =======================
displayDogs();

// =======================
// IMAGE GALLERY LIGHTBOX
// =======================

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  lightboxImage.src = src;
  lightbox.style.display = "flex";
}


function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


document.querySelectorAll(".uniform-image").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.add("clicked");

    setTimeout(() => {
      img.classList.remove("clicked");
    }, 300);
  });
});
/*----------------------------------------------
Attach events to sorting buttons
------------------------------------------------*/
document.getElementById("sortAsc").addEventListener("click", () => {
  sortBreeds("asc");
});

document.getElementById("sortDesc").addEventListener("click", () => {
  sortBreeds("desc");
});

document
  .getElementById("sortAsc")
  .addEventListener("click", () => sortBreeds("asc"));


