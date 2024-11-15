const list = [
  "Item 1 Alex",
  "Item 2 Olga",
  "Item 3",
  "Item 4 Anton",
  "Item 5 HTML",
  "Item 6 CSS",
  "Item 7 JS",
  "Item 8",
  "Item 9",
  "Item 10",
];
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");


function showList(list) {
  searchList.innerHTML = list
    .map((item) => `<li class="search__item">${item}</li>`)
    .join("");    
}

showList(list);

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchValue)
  );
  showList(filteredList);
});
