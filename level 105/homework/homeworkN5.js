const promise = new Promise((resolve, reject) => {
  resolve(5);
});

promise
  .then((number) => {
    return number * 2;
  })
  .then((number) => {
    return number * 2;
  })
  .then((number) => {
    return number * 2;
  })
  .then((resoult) => {
    console.log(resoult);
  })