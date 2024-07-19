document.addEventListener('DOMContentLoaded', function () {
    // Initialize Carousel 1
    new Splide('#carousel-goods', {
        arrows: true,
        gap: "1.5rem",
        pagination: false,
        // gap: "1rem",
        perPage: 3,
        breakpoints: {
            1200: {
                perPage: 3
            },
            768: {
                perPage: 2
            },
            320: {
                perPage: 1
            },
          },
        focus: 0,
        omitEnd: true,
    }).mount();

    new Splide('#carousel-info', {
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        type: 'loop',
        autoplay: true,
    }).mount();
      
  });
  
