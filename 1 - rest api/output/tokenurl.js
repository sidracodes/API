const createTokenUrl = "https://simple-books-api.glitch.me/api-clients";
const token = await fetch(createTokenUrl, {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        clientName: "eman",
        clientEmail: "eman@gmail.com"
    })
});
const res = await token.json();
console.log(token.status);
console.log(res);
export {};
