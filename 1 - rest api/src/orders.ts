const url = "https://simple-books-api.glitch.me/orders";
const orders=await fetch(url,{
    headers:{
        Authorization: `Bearer c8ae68354737c06618660b7960b088d28cca649e4452a464935866be8ccbedc2`
    }
});
  const res =await orders.json();
  console.log(res);

