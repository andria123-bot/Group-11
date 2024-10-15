// const fetchPromise = fetch("")


// fetchPromise.then((response) => {
//   return response.json
// }).then((data) => {
//   console.log(data)
// });

const promise = new Promise((resolve, reject) => {
  const isGettingBook = false; // თუ false არის მაშინ გაეშვება ერორის ფუნქცია ანუ else 
  if (isGettingBook) {
    resolve("Thank you for the book!"); // თუ მომიტანა მაშინ მადლობა
  } else {
    reject("rato ar momitane wigni ginda yurebi dagaxio?"); // თუ არადა ყურებს დავახევ D:
  }
});

promise.then((resoult) => console.log("Fullfiled", resoult)) // იშვება მაშინ როდესაც პირობა წარმატებით დასრულდა Fullfiled
        .catch((error) => console.log("Rejected", error)); // იშვება მაშინ როდესაც პირობა წარუმატებლობით დასწურლდა Rejected