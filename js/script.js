document.addEventListener('DOMContentLoaded', function () {
    // Initialize Carousel 1
    new Splide('#carousel-ads', {
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        type: 'loop',
        autoplay: true,
    }).mount();
  
    // Initialize Carousel 2
    new Splide('#carousel-goods', {
        arrows: true,
        pagination: false,
        // gap: "1rem",
        perPage: 6,
        breakpoints: {
            1200: {
                perPage: 5
            },
            992: {
                perPage: 4
            },
            768: {
                perPage: 3
            },
            576: {
                perPage: 2
            },
            320: {
                perPage: 1
            },
          },
        focus: 0,
        omitEnd: true
    }).mount();

    new Splide('#carousel-goods2', {
        arrows: true,
        pagination: false,
        // gap: "1rem",
        perPage: 6,
        breakpoints: {
            1200: {
                perPage: 5
            },
            992: {
                perPage: 4
            },
            768: {
                perPage: 3
            },
            576: {
                perPage: 2
            },
            320: {
                perPage: 1
            },
          },
        focus: 0,
        omitEnd: true
    }).mount();

    new Splide('#carousel-goods3', {
        arrows: true,
        pagination: false,
        // gap: "1rem",
        perPage: 6,
        breakpoints: {
            1200: {
                perPage: 5
            },
            992: {
                perPage: 4
            },
            768: {
                perPage: 3
            },
            576: {
                perPage: 2
            },
            320: {
                perPage: 1
            },
          },
        focus: 0,
        omitEnd: true
    }).mount();

    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options for a specific gallery
    });

    
      
      
  });
  
