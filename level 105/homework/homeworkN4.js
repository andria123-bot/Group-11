const promise = new Promise((resolve, reject) => {
  const randomOutput = Math.floor(Math.random());
  if(randomOutput === 1){
    resolve("Success!");
  }else{
    resolve("Error!");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })