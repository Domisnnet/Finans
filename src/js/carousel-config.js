$(function() {
    var $carousel = $('#carouselDepoimentos');
    var originalCarouselHTML = $carousel.find('.carousel-inner').html();
    var isMobile;

    function toggleCarouselView() {
        var newIsMobile = $(window).innerWidth() < 768;

        // Apenas executa se o estado mudar
        if (isMobile === newIsMobile) {
            return;
        }
        isMobile = newIsMobile;

        // Destrói a instância do carrossel para evitar bugs
        $carousel.carousel('dispose');
        
        if (isMobile) {
            // Visualização Mobile: 1 depoimento por slide
            var $testimonials = $(originalCarouselHTML).find('.col-md-4');
            var $carouselInner = $carousel.find('.carousel-inner');
            $carouselInner.empty();

            $testimonials.each(function(index) {
                var $newSlide = $('<div>').addClass('carousel-item');
                if (index === 0) {
                    $newSlide.addClass('active');
                }
                // Adiciona o card de depoimento diretamente ao novo slide
                $newSlide.append($(this).clone());
                $carouselInner.append($newSlide);
            });

        } else {
            // Visualização Desktop/Tablet: restaura os slides originais com 3 depoimentos
            $carousel.find('.carousel-inner').html(originalCarouselHTML);
        }

        // Reinicializa o carrossel com a nova estrutura
        $carousel.carousel({
            interval: 5000, // Define um intervalo, se desejado
            pause: 'hover'
        });
    }

    // Configuração inicial
    toggleCarouselView();

    // Lida com o redimensionamento da janela
    var resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(toggleCarouselView, 200);
    });
});
