const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

document.getElementById("fetchButton").addEventListener("click", () => {
  fetchData()
    .then((message) => {
      document.getElementById("result").textContent = message;
    })
});