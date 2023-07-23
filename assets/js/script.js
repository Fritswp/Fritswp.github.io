// Add this global variable to track whether the first user message is sent
let isFirstUserMessageSent = false;

function handleEnterKey(event) {
  if (event.key === "Enter") {
    sendUserMessage();
  }
}

function sendUserMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
    return; // If the user input is empty, do nothing
  }

  // Clear the input box
  document.getElementById("user-input").value = "";

  // Show the chat output after the first user message is sent
  if (!isFirstUserMessageSent) {
    document.getElementById("chat-output").style.display = "block";
    isFirstUserMessageSent = true;
  }

  // Add user message to the chat output
  const chatOutput = document.getElementById("chat-output");
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "chat-bubble user";
  userMsgDiv.innerHTML = `<p>User: ${userInput}</p>`;
  chatOutput.appendChild(userMsgDiv);

  // Simulate chatbot response (for this example, use static responses)
  const chatbotResponse = getChatbotResponse(userInput);

  // Add chatbot response to the chat output
  const chatbotMsgDiv = document.createElement("div");
  chatbotMsgDiv.className = "chat-bubble chatbot";
  chatbotMsgDiv.innerHTML = `<p>Chatbot: ${chatbotResponse}</p>`;
  chatOutput.appendChild(chatbotMsgDiv);

  // Scroll to the bottom of the chat output to show the latest message
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Function to get chatbot response (for this example, use static responses)
function getChatbotResponse(userInput) {
  // You can implement your own logic here to generate dynamic responses
  // For this demonstration, we'll use simple static responses
  const responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "what's your name": "I am ChatGPT, a friendly chatbot.",
    // Add more static responses here...
    "default": "I'm sorry, but I don't have an answer to that question."
  };

  const lowerCaseInput = userInput.toLowerCase();
  return responses[lowerCaseInput] || responses["default"];
}