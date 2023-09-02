import { AuthErrorCodes } from 'firebase/auth';

export const emailInput = document.getElementById('input-user-Email').value;
export const passwordInput = document.getElementById('input-user-Password').value;

export const emailInputReg = document.getElementById('input-Email').value;
export const passwordInputReg = document.getElementById('input-Password').value

export const requestNewPassword = document.getElementById('request-NewPassword').value;


export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#btnLogout')

export const btnNewPassword = document.querySelector('#forgotpasswordbtn')

export const googlelogin = document.querySelector('#google-login')
export const facebooklogin = document.querySelector('#facebook-login')

export const divAuthState = document.querySelector('#divAuthState')

export const lblAuthState = document.querySelector('#lblAuthState')
export const lblAuthStateReg = document.getElementById('lblAuthStateReg')
export const lblAuthStatePassword = document.getElementById('lblAuthStatePassword')


export const divLoginError = document.getElementById('errorContainer');
export const divLoginErrorReg = document.getElementById('errorContainerReg');
export const divLoginErrorPassword = document.getElementById('errorContainerPassword');

export const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
export const lblLoginErrorMessageReg = document.getElementById('lblLoginErrorMessageReg');
export const lblLoginErrorMessagePassword = document.getElementById('lblLoginErrorMessagePassword');

export const closeEmailBox = () => {
  const signupBox = document.getElementById('emailBox');
  emailBox.style.display = 'none';
};


// Login

export const hideLoginError = () => {
  lblLoginErrorMessage.innerHTML = ''
}

export const hideRegistrationState = () => {
  lblAuthState.innerHTML = '';
}

export const showLoginError = (error) => {
  
 
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Invalid password.`;
  } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
    lblLoginErrorMessage.innerHTML = `Invalid email address. Please use a valid email.`;
  } else {
    lblLoginErrorMessage.innerHTML = `Please use a valid password and email adress`;
  }
};

export const showLoginState = (user) => {
  closeEmailBox(); // Close the signup box
};


// PASSWORD //


export const hideLoginErrorPassword = () => {
  lblLoginErrorMessagePassword.innerHTML = ''
}

export const hideRegistrationStatePassword = () => {
  lblAuthStatePassword.innerHTML = '';
}

export const showLoginErrorPassword = (error) => {
  

  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessagePassword.innerHTML = `Invalid password.`;
  } else {
    lblLoginErrorMessagePassword.innerHTML = `Please use a valid email adress`;
  }
};

export const showPasswordSubmit = (email) => {
  lblAuthStatePassword.innerHTML = `New password request sent to ${email}`;
}



  

// REGISTRATION//

export const hideLoginErrorReg = () => {
  lblLoginErrorMessageReg.innerHTML = ''
}

export const hideRegistrationStateReg = () => {
  lblAuthStateReg.innerHTML = '';
}

export const showLoginErrorReg = (error) => {
  
 
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessageReg.innerHTML = `Password must be at least six symbols.`;
  } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
    lblLoginErrorMessageReg.innerHTML = `Invalid email address. Please use a valid email.`;
  } else if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    lblLoginErrorMessageReg.innerHTML = `Email already in use.`;
  } else {
    lblLoginErrorMessageReg.innerHTML = `Please use a valid password and email adress`;
  }
};


export const showRegistrationState = (user) => {
  lblAuthStateReg.innerHTML = `Registration successful for ${user.email}`;
}


