window.onload = () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            // Toggle aria-expanded attribute
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);

            // Toggle aria-hidden attribute on the associated panel
            const panel = document.getElementById(this.getAttribute('aria-controls'));
            panel.setAttribute('aria-hidden', isExpanded);

            // Toggle panel visibility
            if (isExpanded) {
                panel.style.maxHeight = '0';
            } else {
                panel.style.maxHeight = '500px';
            }
        });
    });
}

