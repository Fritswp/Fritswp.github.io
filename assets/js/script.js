// Add this global variable to track whether the first user message is sent
let isFirstUserMessageSent = false;

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

  // Create user message bubble
  const chatOutput = document.getElementById("chat-output");
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "chat-bubble user";
  userMsgDiv.innerHTML = `<p>You: ${userInput}</p>`;

  // Append the new user message to the chat output
  chatOutput.appendChild(userMsgDiv);

  // Scroll to the bottom of the chat output to show the latest message
  chatOutput.scrollTop = chatOutput.scrollHeight;

  // Simulate thinking (typing) effect for the chatbot response
  setTimeout(() => {
    const chatbotResponse = getChatbotResponse(userInput);
    displayChatbotResponse(chatbotResponse);
  }, 400); // Delay before the chatbot starts typing (milliseconds)
}

function displayChatbotResponse(response) {
  const chatOutput = document.getElementById("chat-output");
  const chatbotMsgDiv = document.createElement("div");
  chatbotMsgDiv.className = "chat-bubble chatbot typing"; // Add the "typing" class for animation
  chatOutput.appendChild(chatbotMsgDiv);

  // Type the chatbot response text with the typing effect
  typeChatbotResponse(response, chatbotMsgDiv);
}

function typeChatbotResponse(response, chatbotMsgDiv, index = 0) {
  if (index < response.length) {
    chatbotMsgDiv.textContent += response.charAt(index);
    index++;
    setTimeout(() => typeChatbotResponse(response, chatbotMsgDiv, index), 22); // Adjust typing speed (milliseconds)
  } else {
    chatbotMsgDiv.classList.remove("typing"); // Remove the "typing" class when typing is complete
    chatbotMsgDiv.innerHTML = `<p>TioAssist.io: ${response}</p>`; // Replace the text content with the complete response
    // Scroll to the bottom of the chat output to show the latest message
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    sendUserMessage();
  }
}

// Function to get chatbot response (for this example, use static responses)
function getChatbotResponse(userInput) {
  // You can implement your own logic here to generate dynamic responses
  // For this demonstration, we'll use simple static responses
  const responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "what's your name": "I am TioAssist.io, a friendly chatbot.",
    // Add more static responses here...
    "default": "I'm sorry, but I don't have an answer to that question."
  };

  const lowerCaseInput = userInput.toLowerCase();
  return responses[lowerCaseInput] || responses["default"];
}
