
function validateForm() {

  let nameField = document.getElementById("name");
  let phoneField = document.getElementById("phone");
  let emailField = document.getElementById("email");
  
  if (nameField.value.trim() === "") {

    showError(nameField, "Name is required");

    return false;
  }
  
  
  let phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneField.value)) {

    showError(phoneField, "Please enter a 10-digit phone number");

    return false;
  }
  
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailField.value)) {

    showError(emailField, "Please enter a valid email address");

    return false;
  }
  
  return true;
}

function showError(field, message) {

  let errorSpan = field.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
  
  field.style.borderColor = "red";
  field.style.backgroundColor = "#fdd";
  
  field.focus();
}
