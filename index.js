const sidebarLinks = document.querySelectorAll('aside .sidebar a:not(.resume)');

sidebarLinks.forEach(item => {
    item.addEventListener('click', () => {
        sidebarLinks.forEach(i => {
            i.classList.remove('active');
        })

        item.classList.add('active')
    })
});