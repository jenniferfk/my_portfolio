const skills = [
    "Java",
    "HTML/CSS/JavaScript",
    "React JS",
    "Angular",
    "PHP",
    "SQL (DDL, DCL, DQL, PL/SQL)",
    "Time Management",
    "Teamwork"
];

document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.querySelector('.skillsContainer');
    let skillRow;

    skills.forEach((skill, index) => {
        if (index % 3 === 0) {
            skillRow = document.createElement('div');
            skillRow.classList.add('skill-row');
            skillsContainer.appendChild(skillRow);
        }
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('mx-2', 'my-1', 'p-2', 'bg-purple-500', 'text-white', 'rounded-full', 'text-center')
        skillDiv.textContent = skill;
        skillDiv.classList.add('skill');
        skillRow.appendChild(skillDiv);
    });
});