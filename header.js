document.addEventListener("DOMContentLoaded", function() {
    fetch("/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("site-header").innerHTML = data;

            const menuBtn = document.querySelector('.menu-btn');
            const menu = document.getElementById('popoutMenu');
            const overlay = document.getElementById('overlay');

            menuBtn.addEventListener('click', function() {
                menu.classList.toggle('active');
                overlay.classList.toggle('active');
                menuBtn.classList.toggle('active');
            });

            overlay.addEventListener('click', function() {
                menu.classList.remove('active');
                overlay.classList.remove('active');
                menuBtn.classList.remove('active');
            });

            document.querySelectorAll('.menu-item').forEach(item => {
                item.addEventListener('click', function() {
                    menu.classList.remove('active');
                    overlay.classList.remove('active');
                    menuBtn.classList.remove('active');
                });
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    menu.classList.remove('active');
                    overlay.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
            });
        });
});
