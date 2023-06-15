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

