// Add Footer and Copyright Element
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

// Set the inner HTML of your copyright element to display: name & Year.
copyright.innerHTML = "&copy; Laurindo Muginga " + thisYear;
// Append the copyright element to the footer
footer.appendChild(copyright);

// Add Skills Section into web
let skills = ["GitHub", "JavaScript", "CSS", "C", "Python", "Shell", 
  "HTML", "Kubernetes", "Google Cloud", "SQL"];

// Create List of Skills
let skillsSection = document.querySelector('#skills');
// Create ul element and set attributes
let skillsList = skillsSection.getElementsByTagName('ul')[0];
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li'); // Create li element
  skill.innerText = skills[i]; // Assignning text to li using array value
  skillsList.appendChild(skill); // Append li to ul
}
// Handler messages form user interation.
let messageForm = document.querySelector('form');
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.querySelector('input[name="name"]');
  let email = document.querySelector('input[name="email"]');
  let message = document.querySelector('textarea[name="message"]');
 
  // log the three variables: name, email and message.
  console.log({
    name,
    email,
    message,
  });

  // Handler messages form user interation.
  let messageSection = document.querySelector('#messages');
  let messageList = messageSection.querySelector('ul');
  let newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto: ${email.value}"> ${name.value}</a> wrote: <span> ${message.value} </span>`;

  let removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.type = 'button';

  // Set event listener to handle the "click" event.
  removeButton.addEventListener('click', (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });

  // Hide Message Section if empty
  const hideList = document.createElement('button');
  hideList.innerHTML = 'hide';
  hideList.setAttribute('type', 'button');
  
  hideList.addEventListener('click', (e) => {
    const messages = e.target.parentNode;
    hideList.textContent = 'hide';
    if(massegeList.innerHTML.trim() == false) {
      const messageSection = document.getElementsById('#messages');
      messageSection.style.display = 'none';
    }
  });
  newMessage.appendChild(removeButton);

  // add "edit" button after messagewas submitted
  const editSaveButton = document.createElement('button');
  editSaveButton.innerHTML = 'edit';
  editSaveButton.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    if(editSaveButton.innerHTML == 'edit') {
      makeMessageEditable(li);
      editSaveButton.innerHTML = 'save';
    } else {
      saveEditedMessage(li);
      editSaveButton.innerHTML = 'edit';
    }
  });
  newMessage.appendChild(editSaveButton);
  messageList.appendChild(newMessage);
  messageForm.reset();

// Refactoring the code 
function makeMessageEditable(li) {
  // swap out the <span> element for an <input> element
  const message = li.querySelector('span');
  const input = document.createElement('input');
  input.value = message.innerHTML;
  li.replaceChild(input, message);
}
function saveEditedMessage(li) {
  // swap the <input> element back to a <span> element.
  const input = li.querySelector('input');
  const message = document.createElement('span');
  message.innerHTML = input.value;
  li.replaceChild(message, input);
}
});