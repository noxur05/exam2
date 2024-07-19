document.addEventListener('DOMContentLoaded', function () {
    // Initialize Carousel 1
    new Splide('.splide', {
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
        omitEnd: true
    }).mount();
      
  });
  
