const today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement('p');
footer.appendChild(copyright);
copyright.innerHTML = "\u00A9 " + thisYear;
var skillsSection = document.querySelector("#skills");
var skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill); 
}
// DOM Selection
const messageForm = document.forms.leave_message;
// Select the #messages section by id
const messageSection = document.querySelector('#messages');
// Query the messageSection to find the <ul> element
const messageList = messageSection .querySelector('ul');

// Event Listener
messageForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default refreshing behavior of the "submit" event

    // Retrieve form field values using destructuring assignment
    const { usersName: { value: usersName }, usersEmail: { value: usersEmail }, usersMessage: { value: usersMessage } } = event.target;

    // Add "wrote:" prefix to the message
    const formattedMessage = `wrote: ${usersMessage}`;

    // Log form field values
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', formattedMessage);

    // Create a new list item element
    const newMessage = document.createElement('li');
    // Set the inner HTML of the newMessage element
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${formattedMessage}</span>
    `;
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

    messageForm.reset();
});

