// Function to create thank you cards for an event
function writeCards(names, event) {
    const messages = []; // Create an empty array to hold the messages
    
    for (let i = 0; i < names.length; i++) {
      // Build the thank you message for each name and push it to the messages array
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return messages; // Return the array of messages
  }
  
  // Example usage
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  // Function to count down from any positive integer to zero
function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrement the number
    }
  }
  
  // Example usage
  countDown(10);
  
