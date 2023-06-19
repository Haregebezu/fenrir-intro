const today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement('p');
footer.appendChild(copyright);
copyright.innerHTML = "\u00A9 " + thisYear;
var skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Version control(Git)",
    "Browser Developer Tools",
    "Debugging and Troubleshooting",
    "Responsive web Design"
];
var skillsSection = document.querySelector("#skills");
var skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill); 
}
// DOM Selection
const messageForm = document.forms.leave_message;
// Event Listener
messageForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default refreshing behavior of the "submit" event

    // Retrieve form field values
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log form field values
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);
    messageForm.reset();
});

// User data
const userData = [
    { usersName: 'Elliot', usersEmail: 'elliot@example.com', usersMessage: 'wrote:hello world' },
    { usersName: 'Tom', usersEmail: 'grace@example.com', usersMessage: 'wrote:what am I doing here' },
    { usersName: 'Lori', usersEmail: 'oliver@example.com', usersMessage: 'wrote:good work!' }
];
// Select the #messages section by id
const messageSection = document.querySelector('#messages');

// Query the messageSection to find the <ul> element
if (messageSection) {
    const messageList = messageSection.querySelector('ul');

    // Create and append new message elements
    userData.forEach(user => {
        const { usersName, usersEmail, usersMessage } = user;
        // Create a new list item element
        const newMessage = document.createElement('li');
        // Set the inner HTML of the newMessage element
        newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
    `;
        // Append newMessage to messageList
        if (messageList) {
            messageList.appendChild(newMessage);
        }
    
        // Create a new <button> element
        const removeButton = document.createElement('button');
        removeButton.innerText = "remove";
        removeButton.type = 'button';
        // Add event listener to the removeButton
        removeButton.addEventListener('click', function () {
            const entry = removeButton.parentNode;
            if (entry) {
                entry.remove();
            }
        });
        // Append the removeButton to the newMessage element
        newMessage.appendChild(removeButton);
        // Append newMessage to messageList
        if (messageList) {
            messageList.appendChild(newMessage);
        }
    });
}


    

