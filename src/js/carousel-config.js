$(document).ready(function() {
    const carousel = $('#carouselDepoimentos');
    const carouselInner = carousel.find('.carousel-inner');
    // Store the original desktop layout
    const originalContent = carouselInner.html();
    let isMobile = false;

    function setupCarousel() {
        const windowWidth = $(window).width();

        if (windowWidth < 768 && !isMobile) {
            // Change to mobile view
            isMobile = true;
            const testimonials = $(originalContent).find('.col-md-4.d-flex');
            carousel.carousel('dispose');
            carouselInner.empty();

            testimonials.each(function(index) {
                const item = $('<div class="carousel-item"></div>');
                if (index === 0) {
                    item.addClass('active');
                }
                // Center the single item
                const row = $('<div class="row justify-content-center"></div>');
                const col = $('<div class="col-10"></div>').append($(this).clone());
                row.append(col);
                item.append(row);
                carouselInner.append(item);
            });

            carousel.carousel();
        } else if (windowWidth >= 768 && isMobile) {
            // Change back to desktop view
            isMobile = false;
            carousel.carousel('dispose');
            carouselInner.html(originalContent);
            carousel.carousel();
        }
    }

    // Debounced resize event
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setupCarousel, 250);
    });

    // Initial check
    setupCarousel();
     // Set the initial state based on the first check
    isMobile = $(window).width() < 768;
    // Call setupCarousel again to ensure the correct state is set on load
    setupCarousel();
});