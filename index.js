let maxWord;
fetch("https://one00x-data-analysis.onrender.com/assignment")
  .then((response) => {
    if (response.ok) {
      console.log("Call Successful.");
      return response.json();
    } else console.error("Call Not Successful");
  })
  .then((data) => {
    console.log(data.sort());
    let count = 0,
      maxCount = 0;

    for (let i = 0; i < 99; i++) {
      if (data[i] === data[i + 1]) {
        count++;
      } else {
        if (maxCount < count) {
          maxCount = count;
          maxWord = data[i - 1];
        }
        count = 0;
      }
    }
    console.log(maxWord);
  });
fetch("https://one00x-data-analysis.onrender.com/assignment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ maxWord }),
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

// x-assignment-id : dfd1ac15-0ca3-4b23-af8b-5a5b44c6c0a2

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://one00x-data-analysis.onrender.com/assignment"
//     );
//     if (!response.ok) {
//       throw new Error("Can't fetch api data");
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
