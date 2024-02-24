document.addEventListener("DOMContentLoaded", function() {
    const projectData = [
        
        {
            link: "https://github.com/jenniferfk/bmi-calculator-react.git",
            image: "./pics/bmi-calc-project.png",
            alt: "BMI Calculator Project",
            title: "BMI Calculator",
            description: "Made with React."
        },
        {
            link: "https://github.com/jenniferfk/Exam-management.git",
            image: "./pics/exam-management-project.png",
            alt: "Exam Management System Project",
            title: "Exam Management System",
            description: "Made with Java."
        },
        {
            link: "https://github.com/jenniferfk/shopping-list-withReact.git",
            image: "./pics/shopping-list-project.png",
            alt: "Shopping List Project",
            title: "Shopping List",
            description: "Made with React JS."
        },
        {
            link: "https://github.com/jenniferfk/solar-system.git",
            image: "./pics/solar-system-project.png",
            alt: "Animated Solar System Project",
            title: "Animated Solar System",
            description: "Made with HTML and CSS."
        },
        {
            link: "https://github.com/jenniferfk/loginpage.git",
            image: "./pics/login-bootstrap-project.png",
            alt: "Login With Bootstrap Project",
            title: "Login With Bootstrap",
            description: "Made with HTML and CSS Bootstrap 5."
        }
    ];

    function generateProjectHTML(project) {
        return `
            <div class="projectbigdiv col-md-3 text-center mr-16">
                <a href="${project.link}" class="nolink">
                    <div class="projectdiv calcdiv hover:bg-purple-900 hover:bg-opacity-60 rounded w-full md:w-80 justify-center items-center flex flex-col justify-center items-center text-center">
                        <header><img src="${project.image}" alt="${project.alt}" class="w-60 img-fluid mt-6 rounded-md border-2" /></header>
                        <div class="projparagraph text-base">
                            <h5 class="text-lg">${project.title}<span class="arrowspan">➚</span></h5>
                            <p>${project.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }

    function renderProjects() {
        const projectContainer = document.getElementById('projects');
        let projectRowHTML = '';
        const screenWidth = window.innerWidth;
        const skillsPerRow = screenWidth < 768 ? 1 : 2;
        projectData.forEach((project, index) => {
            if (index % skillsPerRow === 0) {
                projectRowHTML += '<div class="flex justify-center items-center">';
            }
            projectRowHTML += generateProjectHTML(project);
            if ((index + 1) % skillsPerRow === 0 || index === projectData.length - 1) {
                projectRowHTML += '</div>';
            }
        });
        projectContainer.insertAdjacentHTML('beforeend', projectRowHTML);
    }
    renderProjects();
});
