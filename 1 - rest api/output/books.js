const url = "https://simple-books-api.glitch.me/books";
const response = await fetch(url);
const res = await response.json();
console.log(res);
export {};
