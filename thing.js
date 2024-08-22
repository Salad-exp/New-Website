document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('landing').style.display = 'none';
        document.querySelectorAll('.content > section').forEach(section => {
            section.style.opacity = 1;
        });
    }, 2000); 
    const homeTab = document.querySelector('nav ul li a[href="#home"]');
    const homeSection = document.querySelector('#home');
    homeTab.classList.add('active');
    homeSection.style.display = 'block';
    document.querySelectorAll('#features, #showcase, #download').forEach(section => {
        section.style.display = 'none';
    });

    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content > section');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));
            
            sections.forEach(section => {
                section.style.display = 'none';
            });

            tabs.forEach(link => {
                link.classList.remove('active');
            });

            target.style.display = 'block';
            tab.classList.add('active');
        });
    });
});
