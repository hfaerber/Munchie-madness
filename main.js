var addSnackButton = document.querySelector('.add-snack-button');
var grocerySection = 	document.querySelector('.grocery-list');
var snackInputField = document.querySelector('.snack-input');
var descInputField = document.querySelector('.desc-input');
var form = document.querySelector('.form');

addSnackButton.addEventListener('click', createCard);
grocerySection.addEventListener('click', removeCard);
// form.addEventListener('input', checkifEmpty);

function createCard(event) {
	event.preventDefault();
  grocerySection.insertAdjacentHTML('afterbegin',
    `<section class="grocery-list"><div class="card"><input type="text"
    class="newHeader" value="${snackInputField.value}"></input>
    <input type="textarea" class="newDesc" value="${descInputField.value}">
    </input>
    <button type="button" class="delete">x</button></div></section>`);
};

function removeCard(event) {
  // console.log(event);
  if (event.target.classList.contains('delete')) {
  event.target.parentNode.remove();
  }
};

snackInputField.addEventListener('input', toggleButton);
descInputField.addEventListener('input', toggleButton);

function toggleButton() {
  if (snackInputField.value === "" || descInputField.value === "") {
    disableButton();
  } else {
		enableButton();
	}
};

function disableButton() {
  addSnackButton.classList.add('disabled-button');
  addSnackButton.disabled = true;
};

function enableButton() {
  addSnackButton.classList.remove('disabled-button');
  addSnackButton.disabled = false;
};

//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM
//Iteration 3
//User can edit the name of the snack OR its description by clicking
// on the particular field on the CARD!
//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled

// function createCard(event) {
// 	event.preventDefault();
//   var newCard = document.createElement('div');
//   var cardHeader = document.createElement('input');
//   cardHeader.type = 'text';
//   cardHeader.className = 'newHeader';
//   cardHeader.innerText = snackInputField.value;
//   var cardDesc = document.createElement('input');
//   cardDesc.type = 'textarea';
//   cardDesc.className = 'newDesc';
//   cardDesc.innerText = descInputField.value;
//   newCard.className = 'card';
//   var deleteButton = document.createElement('button');
//   deleteButton.className = 'delete';
//   deleteButton.innerText = 'x';
// 	newCard.appendChild(cardHeader);
//   newCard.appendChild(cardDesc);
//   newCard.appendChild(deleteButton);
//   grocerySection.appendChild(newCard);
// };
