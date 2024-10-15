const promise = new Promise((resolve, reject) => {
  resolve("Hello Promise!");
});

promise.then((result) => {
  console.log(result);
});
