document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const addLoadedClasses = () => {
        const scrollTop = document.documentElement.scrollTop;

        if(scrollTop > 500) {
            document.body.classList.add('features-loaded');
        }

        if(scrollTop > 1000) {
            document.body.classList.add('faq-loaded');
        }

        if(scrollTop > 1200) {
            document.body.classList.add('test-loaded');
        }
    };

    window.addEventListener('scroll', addLoadedClasses);
    setTimeout(() => {
        addLoadedClasses();
    }, 1000);
});
