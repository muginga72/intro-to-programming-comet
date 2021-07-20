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
let skills = ["GitHub", "Planning", "Security", "Systems", "Protocols", "Technical", "Network", "Operation", "Technology",
"Monitoring", "Vulnerability", "Management", "Database", "Debugging", "JavaScript", "C",
"Python", "Shell", "Power Shell", "HTML", "Kubernetes", "Google Cloud", "Virtual Machines",
"VPN", "VPC", "Linux", "Windows", "SQL", "Storage"];

// Create List of Skills
let skillsSection = document.querySelector('#skills');
// Create ul element and set attributes
let skillsList = skillsSection.getElementsByTagName('ul')[0];
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li'); // Create li element
  skill.innerText = skills[i]; // Assignning text to li using array value
  skillsList.appendChild(skill); // Append li to ul
}