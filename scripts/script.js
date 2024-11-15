const options = {
  method: "GET",
  url: "https://any-anime.p.rapidapi.com/v1/anime/png/10",
  headers: {
    "x-rapidapi-key": "c479092a7cmsh265d0cc11e56cb0p1e04adjsn133222408072",
    "x-rapidapi-host": "any-anime.p.rapidapi.com",
  },
};

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

window.onload = writeDataToLocalStorage();
showSlider();

const firstImg = document.querySelectorAll(".slider__item")[0];
let sliderGapValue = +getComputedStyle(slider).gap.replace("px", "");
let firstImgWidth = firstImg.clientWidth + sliderGapValue;
let scrollCoord = slider.clientWidth;

showHideBtns(scrollCoord);

prevBtn.addEventListener("click", () => scrollSlider(prevBtn.id));
nextBtn.addEventListener("click", () => scrollSlider(nextBtn.id));

//------------------------------------------------------------------------------------

function showHideBtns(scrollCoord = firstImgWidth) {
  let clientWidth = slider.clientWidth;
  if (scrollCoord <= clientWidth) {
    prevBtn.setAttribute("disabled", true);
    nextBtn.removeAttribute("disabled");
  } else if (scrollCoord >= slider.scrollWidth) {
    // Проверяем, находится ли слайдер в конце
    nextBtn.setAttribute("disabled", true);
    prevBtn.removeAttribute("disabled");
  } else {
    // Если слайдер не в начале и не в конце, обе кнопки активны
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  }
}

function scrollSlider(btnId) {
  slider.scrollBy({
    left: btnId === "next" ? firstImgWidth : -firstImgWidth,
    behavior: "smooth",
  });
  scrollCoord += btnId === "next" ? firstImgWidth : -firstImgWidth;
  showHideBtns(scrollCoord);
}

async function getData() {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function writeDataToLocalStorage() {
  let images = getDataFromLocalStorage();
  if (!images) {
    getData().then((data) => {
      localStorage.setItem("images", JSON.stringify(data));
    });
  }
}

function getDataFromLocalStorage() {
  let images = localStorage.getItem("images");
  if (images) {
    images = JSON.parse(images);
  }
  return images;
}

function showSlider() {
  const images = getDataFromLocalStorage().images;
  let imagesTemplate = images
    .map((image) => {
      return `<article class="slider__item">
              <img src="${image}" alt="" class="slider__item-img" />
              <p class="slider__item-title">
                Lorem, ipsum dolor.
              </p>
            <p class="slider__item-description">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>`;
    })
    .join(" ");
  slider.innerHTML = imagesTemplate;
}
