//Using axios get to get data from a fake api
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(console.log("Success"));

//using axios get to get data using async aeait
async function fetchUserData() {
  try {
    const rawData = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(rawData.data);
  } catch (err) {
    console.log("Error in here bruh !");
  }
}

fetchUserData();
