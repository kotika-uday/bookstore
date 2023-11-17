//  validating email //
// const emailregx=/^[a-z 0-9]+@[a-z]+\.[a-z]{2,3}$/;

// function validateeEmail(email){
//     return emailregx.test(email);
// }
// const sample='example@email.com';
// if(validateeEmail(sample)){
//     console.log('email is valid');
// }
// else{
//     console.log('email is  not valid');
// }

// validate email without regular expression

// const validator = require('validator');

// function validateEmail(email) {
//   return validator.isEmail(email);
// }

// // Example usage
// const emailToValidate = "example@email.com";
// if (validateEmail(emailToValidate)) {
//   console.log("Email is valid");
// } else {
//   console.log("Email is not valid");
// }


// number validation
// function validateAndSubmit() {
//     // Get the contact number from the input field
//     const contactNumber = document.getElementById('contactNumber').value;

//     // Define the regular expression for a US phone number
//     const regex = /^\d{3}-\d{3}-\d{4}$/;

//     // Test the contact number against the regular expression
//     if (regex.test(contactNumber)) {
//       // If the contact number is valid, submit the form (or perform other actions)
//       document.getElementById('error-message').innerText = 'number is valid';
//       document.getElementById('contactForm').submit();
//     } else {
//       // If the contact number is not valid, display an error message
//       document.getElementById('error-message').innerText = 'Invalid contact number format. Please use ###-###-####.';
//     }
//   }


// function validateContactNumber(contactNumber) {
//   // Define the regular expression for a US phone number
//   const regex = /^\d{3}-\d{3}-\d{4}$/;

//   // Test the contact number against the regular expression
//   return regex.test(contactNumber);
// }

// // Example usage
// const contactNumberToValidate = "555-123-4567";
// if (validateContactNumber(contactNumberToValidate)) {
//   console.log("Contact number is valid");
// } else {
//   console.log("Contact number is not valid");
// }
