// Add this global variable to track whether the first user message is sent
let isFirstUserMessageSent = false;
let hasScrolledToExperts = false;

function sendUserMessage(scrollToExperts = true) {
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

  // Scroll to the experts section if specified
  if (scrollToExperts) {
    showExpertsSectionBelowChatbot();
  }
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    sendUserMessage();
  }
}

// Add a new event listener for the chatbox click
document.getElementById("user-input").addEventListener("click", function () {
  // Set scrollToExperts to false when the user clicks on the chatbox
  handleEnterKey({ key: "Click" });
});

// New code for "Try Me" button click event
document.getElementById("tryMeButton").addEventListener("click", function () {
  // Scroll to the "port" section
  const portSection = document.getElementById("port");
  const scrollOptions = {
    top: portSection.offsetTop - 100, // Adjust the value to get the desired position
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});

/////////////////////////////////////////////////////////////////////////////////////////////////
                           /////...BEGIN OF LOGIN.../////
/////////////////////////////////////////////////////////////////////////////////////////////////////


// New event listener for the "Login" button click
document.getElementById("loginButtonNav").addEventListener("click", function () {
  // Get the login box element
  const loginBox = document.getElementById("loginBox");

  // Toggle the display property of the login box
  if (loginBox.style.display === "block") {
    loginBox.style.display = "none";
  } else {
    loginBox.style.display = "block";
  }
});

// Event listener to close the login box when clicking outside of it
document.addEventListener("click", function (event) {
  const loginBox = document.getElementById("loginBox");
  const loginButtonNav = document.getElementById("loginButtonNav");

  // Check if the click target is outside the login box and login button
  if (event.target !== loginBox && event.target !== loginButtonNav) {
    loginBox.style.display = "none";
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
                           /////...END OF LOGIN.../////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Existing event listener for the "Enter" key press
document.getElementById("user-input").addEventListener("keydown", handleEnterKey);

// Add a new event listener for the chatbox click
document.getElementById("user-input").addEventListener("click", function () {
  // Set scrollToExperts to false when the user clicks on the chatbox
  handleEnterKey({ key: "Click" });
});

// New code for "Try Me" button click event
document.getElementById("tryMeButton").addEventListener("click", function () {
  // Scroll to the "port" section
  const portSection = document.getElementById("port");
  const scrollOptions = {
    top: portSection.offsetTop - 100, // Adjust the value to get the desired position
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});



// Rest of the code...
function displayChatbotResponse(response) {
  const chatOutput = document.getElementById("chat-output");
  const chatbotMsgDiv = document.createElement("div");
  chatbotMsgDiv.className = "chat-bubble chatbot typing"; // Add the "typing" class for animation
  chatOutput.appendChild(chatbotMsgDiv);

  // Type the chatbot response text with the typing effect
  typeChatbotResponse(response, chatbotMsgDiv, chatOutput);
}

function typeChatbotResponse(response, chatbotMsgDiv, chatOutput, index = 0) {
  if (index < response.length) {
    chatbotMsgDiv.textContent += response.charAt(index);
    index++;
    setTimeout(() => typeChatbotResponse(response, chatbotMsgDiv, chatOutput, index), 22); // Adjust typing speed (milliseconds)
  } else {
    chatbotMsgDiv.classList.remove("typing"); // Remove the "typing" class when typing is complete
    chatbotMsgDiv.innerHTML = `<p>TioAssist.io: ${response}</p>`; // Replace the text content with the complete response
    // Scroll to the bottom of the chat output to show the latest message
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Call the function to show the experts section below the chatbot section
    showExpertsSectionBelowChatbot();
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



/* experts */

const expertsData = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    expertise: "Python",
    picture: "images/Experts/John Doe.webp",
  },
  {
    name: "Jane Smith",
    profession: "Data Scientist",
    expertise: "Machine Learning",
    picture: "images/Experts/Jane Smith.webp",
  },
  {
    name: "Michael Johnson",
    profession: "Baker",
    expertise: "Pastry",
    picture: "images/Experts/Michael Johnson.webp",
  },
  {
    name: "Emily Williams",
    profession: "Digital Marketer",
    expertise: "Social Media Marketing",
    picture: "images/Experts/Emily Williams.webp",
  },
  {
    name: "Robert Lee",
    profession: "Mechanic",
    expertise: "Automotive Repair",
    picture: "images/Experts/Robert Lee.webp",
  },
  {
    name: "Sarah Adams",
    profession: "Gardener",
    expertise: "Landscape Design",
    picture: "images/Experts/Sarah Adams.webp",
  },
  {
    name: "David Thompson",
    profession: "Musician",
    expertise: "Piano",
    picture: "images/Experts/David Thompson.webp",
  },
  {
    name: "Jennifer Brown",
    profession: "Chef",
    expertise: "French Cuisine",
    picture: "images/Experts/Jennifer Brown.webp",
  },
  {
    name: "William Green",
    profession: "Photographer",
    expertise: "Portrait Photography",
    picture: "images/Experts/William Green.webp",
  },
  {
    name: "Linda Martinez",
    profession: "Artist",
    expertise: "Oil Painting",
    picture: "images/Experts/Linda Martinez.webp",
  },
  // Add more experts here as needed
];
function getRandomExperts() {
  const numberOfExpertsToShow = 3; // You can adjust this number as needed

  // Shuffle the experts data array to introduce randomness
  const shuffledExperts = expertsData.sort(() => Math.random() - 0.5);

  // Select the first `numberOfExpertsToShow` experts
  const selectedExperts = shuffledExperts.slice(0, numberOfExpertsToShow);

  // Get the container where the tiles will be placed
  const expertsTilesContainer = document.getElementById("experts-tiles");

  // Clear any existing tiles to avoid duplication on page refresh
  expertsTilesContainer.innerHTML = '';

  // Generate the HTML for each expert tile and append it to the container
  selectedExperts.forEach((expert) => {
    const tile = `
      <div class="col-md-6 col-lg-4">
        <div class="feature-block expert-tile">
          <img src="${expert.picture}" alt="${expert.name}" class="img-fluid expert-picture">
          <h4 class="mt-4">${expert.name}</h4>
          <p>${expert.profession}</p>
          <p>Expertise: ${expert.expertise}</p>
          <a href="#">View Profile <i class="fas fa-comment" aria-hidden="true"></i></a>
        </div>
      </div>
    `;
    expertsTilesContainer.innerHTML += tile;
  });
}

// Call the function to generate random experts when the page loads
window.addEventListener("load", getRandomExperts);

function isMobileDevice() {
  return window.innerWidth < 768; // Adjust the threshold as needed (768px is a common breakpoint for mobile devices)
}

// Add a function to show the experts section below the chatbot section
function showExpertsSectionBelowChatbot() {
  // Get the chatbot section and experts section elements
  const chatbotSection = document.querySelector(".chatbox");
  const expertsSection = document.getElementById("experts");

  // Show the experts section
  expertsSection.style.display = "block";

  // Position the experts section below the chatbot section
  expertsSection.style.top = chatbotSection.offsetHeight + "px";

  // Scroll to the experts section if not scrolled before
  if (!hasScrolledToExperts) {
    const scrollOptions = {
      top: expertsSection.offsetTop - 230, // Adjust the value to stop a bit earlier
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
    // Set the flag to true after scrolling once
    hasScrolledToExperts = true;
  }
}
    
  history.scrollRestoration = "manual";

  $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
  });