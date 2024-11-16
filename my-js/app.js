

function fahrenheitInput() {
    const input = document.getElementById("fahrenheit-input").value;
    let fahrenheit = input * 9/5 + 32;
    document.getElementById("fahrenheit-result").textContent = fahrenheit + " Fahrenheit";
};

function celsiusInput() {
    const inputCl = document.getElementById("celsius-input").value;
    let celsiusMy = (inputCl - 32) * 5 / 9;
    document.getElementById("celsius-result").textContent = celsiusMy + " Celsius";
};


// function btnType() {
//     const typeInput = document.getElementById("type-of").value;
//     const inputValue = isNaN(typeInput) ? "string" : "number";
//     document.getElementById("type-result").textContent = `${inputValue}`;
// };



function calculate(operation) {
    const num1 = parseFloat(document.getElementById("number-input").value);
    const num2 = parseFloat(document.getElementById("number-input2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }
    }
    document.getElementById("plus-result").innerText = "Result: " + result;
}


// function calculate(operation) {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
//     let result;

//     if (isNaN(num1) || isNaN(num2)) {
//         result = "Please enter valid numbers";
//     } else {
//         switch (operation) {
//             case 'add':
//                 result = num1 + num2;
//                 break;
//             case 'subtract':
//                 result = num1 - num2;
//                 break;
//             case 'multiply':
//                 result = num1 * num2;
//                 break;
//             case 'divide':
//                 result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//                 break;
//             default:
//                 result = "Invalid operation";
//         }
//     }

//     document.getElementById("result").innerText = "Result: " + result;
// }











// script.js

function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
  }
  



















// script.js

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
  }
  
  function toggleSubmenu(event, submenuId) {
    event.preventDefault(); // Prevent the default link behavior
    
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
  