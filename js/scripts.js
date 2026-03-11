// LANDING PAGE
$(document).ready(function () {
    $('#enterBtn').on('click', function () {
        $('#landingContent').addClass('fade-out');
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 1000); // match fade-out duration
    });

    $('#imageModal').on('show.bs.modal', function (e) {
        const imgSrc = $(e.relatedTarget).data('img-src') || $(e.relatedTarget).find('img').attr('src');
        $('#modalImage').attr('src', imgSrc);
    });

    // // Optional Pure Java Code for modal
    // document.getElementById('imageModal').addEventListener('show.bs.modal', function (e) {
    //     const trigger = e.relatedTarget;
    //     const imgSrc = trigger.getAttribute('data-img-src');
    //     document.getElementById('modalImage').src = imgSrc;
    // });
});


// MAIN CONTENT

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

const today = new Date();
    const formattedDate = today.toDateString();
    document.getElementById("date").textContent = formattedDate;