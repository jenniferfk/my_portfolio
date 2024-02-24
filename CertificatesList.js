const certificateData = [
    {
        link: "https://coursera.org/verify/XBSMMG8HQYT2",
        image: "./pics/react-certif.jpg",
        title:"React Basics",
        issuer:"Meta",
        desc:"Completed it in April 2023. <br/>It provided me with React Basics knowledge which is what I am using for this website. It covered react hooks, react components, props, events, class and many more react related chapters. Working on taking the react advanced certificate.",
        alt: "React Certificate"
    },
    {
        link: "https://coursera.org/verify/MRJ8CHVWZJKE",
        image: "./pics/responsive-web-design-certif.jpg",
        title:"Responsive Web Design",
        issuer:"University of London",
        desc:"Completed in March 2023.<br/>I learned how to create web page designs that adjust to various screen sizes by utilizing responsive grid layouts. Did some projects with Bootstrap 5",
        alt: "Responsive Web Design Certificate"
    },
    {
        link: "https://coursera.org/verify/QPLN648KZN64",
        image: "./pics/versioncontrol-certif.jpg",
        title:"Version Control",
        issuer:"Meta",
        desc:"Completed in August 2023. <br/>I acquired the skills to utilize a GitHub repository effectively, establish a GitHub repository, implement version control systems, and efficiently navigate and configure settings via the command line.",
        alt: "Version Control Certificate"
    }
];
document.addEventListener("DOMContentLoaded", function(){
    function generateCertificateHTML(certificate) {
        return `
            <a href="${certificate.link}" class="nolink">
                <div class="certifdiv flex hover:bg-purple-900 hover:bg-opacity-60 rounded mb-10">
                    <div class="w-2/5 flex justify-center">
                        <header><img src="${certificate.image}" alt="${certificate.alt}" class="w-40 h-auto rounded-md border-2"/></header>
                    </div>
                    <div class="w-4/5">
                        <div class="paragraph text-lg w-2/3">
                            <h5 class=" text-lg">${certificate.title} ━ ${certificate.issuer} <span class="arrowspan">➚</span> </h5>
                            ${certificate.desc}
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    function renderCertificates() {
        const certificateContainer = document.getElementById('certificates');

        certificateData.forEach(certificate => {
            certificateContainer.insertAdjacentHTML('beforeend', generateCertificateHTML(certificate));
        });
    }

    renderCertificates();
})