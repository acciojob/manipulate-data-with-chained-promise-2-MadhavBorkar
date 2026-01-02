//your JS code here. If required.
function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initial promise: resolves after 3 seconds with the array
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    .then((numbers) => {
      // First transformation: filter even numbers
      const evenNumbers = numbers.filter((num) => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Second transformation: multiply by 2
      const multipliedNumbers = evenNumbers.map((num) => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = multipliedNumbers.join(",");
          resolve(multipliedNumbers);
        }, 2000);
      });
    });
}

// Invoke the function when the page loads
manipulateArray();
