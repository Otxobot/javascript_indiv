
document.addEventListener("DOMContentLoaded", function() {

    function createFooter() {
        const footer = document.getElementById('footer');

        const p = document.createElement('p');
        p.textContent = '© 2025 SpaceExplorer. All rights reserved.';

        const socialIconsDiv = document.createElement('div');
        socialIconsDiv.classList.add('social-icons');

        const socialLinks = [
            { name: 'Github', href: 'https://github.com/Otxobot' },
            { name: 'Linkedin', href: 'https://www.linkedin.com/in/aiert-basante-b2002431b/' }
        ];

        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.name;
            socialIconsDiv.appendChild(a);
        });

        footer.appendChild(p);
        footer.appendChild(socialIconsDiv);
    }

    createFooter();
});