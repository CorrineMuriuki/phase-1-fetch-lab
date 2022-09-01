
  // To pass the tests, don't forget to return your fetch!
  //include a featch request to the Game of Thrones API
  //The returned response should be converted to JSON
  //Then, call the second function, renderBooks()
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}
function renderBooks(json) {
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})}
