// Open and Close Form 
const openButton = document.getElementById("openForm");
  const modal = document.getElementById("myModal");
  const closeButton = modal.querySelector("#btnDong");

  openButton.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

// Inputs display based on Selections 
function showInputs() {
    var categoryDropdown = document.getElementById("categoryDropdown");
    var inputsContainer = document.getElementById("inputsContainer");

    inputsContainer.innerHTML = ""; // Clear previous inputs

    var selectedCategory = categoryDropdown.value;

    if (selectedCategory === "student") {
      createInput("Math");
      createInput("Physics");
      createInput("Chem");
    } else if (selectedCategory === "employee") {
      createInput("DaysWorked");
      createInput("SalaryRate");
    } else if (selectedCategory === "client") {
      createInput("Company");
      createInput("ReceiptValue");
      createRating("Rating");
    }
  }

  function createInput(labelText) {
    var inputGroup = document.createElement("div");
    inputGroup.className = "form-group";

    var label = document.createElement("label");
    label.innerHTML = labelText + ": ";
    label.style.fontWeight = "bold";

    var input = document.createElement("input");
    input.type = "text";
    input.id = labelText;
    input.className = "form-control";
    input.name = labelText.toLowerCase();

    label.appendChild(input);
    inputGroup.appendChild(label);
    inputsContainer.appendChild(inputGroup);
  }

  // rating input 
  function createRating(labelText) {
    var inputGroup = document.createElement("div");
    inputGroup.className = "form-group";
  
    var label = document.createElement("label");
    label.innerHTML = labelText + ": ";
    label.style.fontWeight = "bold";
  
    var input = document.createElement("select");
    input.id = "categoryDropdown";
    input.className = "form-control";
  
    var option1 = document.createElement("option");
    option1.value = "1";
    option1.innerHTML = '*';
  
    var option2 = document.createElement("option");
    option2.value = "2";
    option2.innerHTML =
      '**';
  
    var option3 = document.createElement("option");
    option3.value = "3";
    option3.innerHTML =
      '***';
  
    input.appendChild(option1);
    input.appendChild(option2);
    input.appendChild(option3);
  
    label.appendChild(input);
    inputGroup.appendChild(label);
    inputsContainer.appendChild(inputGroup);
  }