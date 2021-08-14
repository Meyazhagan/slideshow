// // console.log("hello");

// // ("https://picsum.photos/id/1/600/400");

// // setInterval(() => {
// //   let i = Math.floor(Math.random() * 10) + 1;
// //   const img = document.querySelector("#image");
// //   img.src = `https://picsum.photos/id/${i}/600/400`;
// // }, 1000);

function createImages() {
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  imageContainer.addEventListener("mouseover", pause);
  imageContainer.addEventListener("mouseout", resume);
  for (let i = 684; i < 697; i++) {
    imageContainer.innerHTML += `<div class="slide" style="display:none;">
    <img class="image" src="https://picsum.photos/id/${i}/600/400" alt="">
    </div>
  `;
  }
  imageContainer.innerHTML += `<a class="prev" onclick="move(-1)">&#10094;</a>
  <a class="next" onclick="move(1)">&#10095;</a>`;
  document.querySelector(".main-container").append(imageContainer);
}

createImages();
let current = 0;
const slides = document.querySelectorAll(".slide");
let interval;
startShow();

function move(n) {
  current += n;
  update(n);
}

function startShow() {
  interval = setInterval(() => {
    current++;
    update(1);
  }, 1000 * 3);
}

function stopShow() {
  clearInterval(interval);
}

function pause() {
  stopShow();
}
function resume() {
  startShow();
}

function update(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (current >= slides.length) current = 0;
  if (current < 0) current = slides.length - 1;

  if (n == 1) slides[current].className = "slide animate-right";
  if (n == -1) slides[current].className = "slide animate-left";
  slides[current].style.display = "block";
}
