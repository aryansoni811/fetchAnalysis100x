ttps://one00x-data-analysis.onrender.com/assignment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ post: { maxWord } }),
})
  .then((response) => {
    if (response.ok) {
      return response.json(); // Parse response as JSON
    } else {
      throw new Error("Response posting failed"); // Handle failure
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // Handle error
    console.log(`Error: ${error.message}`);
  });