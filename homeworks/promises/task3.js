async function sendGetRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getTodo() {
  return await sendGetRequest("https://jsonplaceholder.typicode.com/todos/1");
}

async function getUser() {
  return await sendGetRequest("https://jsonplaceholder.typicode.com/users/1");
}

async function runAll() {
  try {
    const allPromises = await Promise.all([getTodo(), getUser()]);
    console.log("All promises", allPromises);
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    const racePromises = await Promise.race([getTodo(), getUser()]);
    console.log("Race promises", racePromises);
  } catch (error) {
    console.error("Error:", error);
  }
}
runAll();
