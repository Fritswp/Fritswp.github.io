<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
@@ -1,3 +1,29 @@
//login box//
const loginButton = document.getElementById('loginButtonNav');
const loginBox = document.getElementById('loginBox');

// Hide the login box when the page loads
loginBox.style.display = 'none';

loginButton.addEventListener('click', (event) => {
  // Prevent the default behavior of the button (e.g., form submission)
  event.preventDefault();

  // Toggle the visibility of the login box when the button is clicked
  if (loginBox.style.display === 'none') {
    loginBox.style.display = 'block';
  } else {
    loginBox.style.display = 'none';
  }
});

// No need to change the window click event handler
window.addEventListener('click', (event) => {
  if (!loginBox.contains(event.target) && event.target !== loginButton) {
    loginBox.style.display = 'none';
  }
});

=======
>>>>>>> parent of 5006685 (Stable Pre-Greek)
=======
>>>>>>> parent of 5006685 (Stable Pre-Greek)
=======
>>>>>>> parent of 5006685 (Stable Pre-Greek)
// Add this global variable to track whether the first user message is sent
let isFirstUserMessageSent = false;
let hasScrolledToExperts = false;
@ -241,4 +267,133 @@ function showExpertsSectionBelowChatbot() {

  $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  });
  });



  /* !-- G to chate  -- */

  document.addEventListener("DOMContentLoaded", function () {
    const tryMeButton = document.getElementById("tryMeButton");
    tryMeButton.addEventListener("click", function () {
      const servicesSection = document.getElementById("port");
      const offsetTop = servicesSection.getBoundingClientRect().top;
      const navbarHeight = /* Replace this value with the height of your fixed navbar, if any */ 0;
      const paddingTop = 50; // Increase the paddingTop value to add more space
      const scrollPosition = offsetTop + window.scrollY - navbarHeight - paddingTop;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    });
  });

// Function to send user message and receive chatbot response
  function sendUserMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
      return; // If the user input is empty, do nothing
    }

    // Clear the input box
    document.getElementById("user-input").value = "";

    // Add user message to the chat output
    const chatOutput = document.getElementById("chat-output");
    chatOutput.innerHTML += `
      <div class="chat-bubble user">
        <p>
          User: ${userInput}
        </p>
      </div>
    `;

    // Simulate chatbot response (for this example, use static responses)
    const chatbotResponse = getChatbotResponse(userInput);

    // Add chatbot response to the chat output
    chatOutput.innerHTML += `
      <div class="chat-bubble chatbot">
        <p>
          Chatbot: ${chatbotResponse}
        </p>
      </div>
    `;

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

  /* Chatbot-Script */

// Function to send user message and receive chatbot response
function sendUserMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
    return; // If the user input is empty, do nothing
  }

  // Clear the input box
  document.getElementById("user-input").value = "";

  // Add user message to the chat output
  const chatOutput = document.getElementById("chat-output");
  chatOutput.innerHTML += `
    <div class="chat-bubble user">
      <p>
        User: ${userInput}
      </p>
    </div>
  `;

  // Simulate chatbot response (for this example, use static responses)
  const chatbotResponse = getChatbotResponse(userInput);

  // Add chatbot response to the chat output
  chatOutput.innerHTML += `
    <div class="chat-bubble chatbot">
      <p>
        Chatbot: ${chatbotResponse}
      </p>
    </div>
  `;

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


=======
  });
>>>>>>> parent of 5006685 (Stable Pre-Greek)
=======
  });
>>>>>>> parent of 5006685 (Stable Pre-Greek)
=======
  });
>>>>>>> parent of 5006685 (Stable Pre-Greek)
