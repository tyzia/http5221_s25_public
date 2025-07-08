function toggle(button) {
    const currentLabel = button.getAttribute('aria-label');

    if (currentLabel === 'Expand') {
        button.setAttribute('aria-label', 'Collapse');
        button.innerHTML = '>';
    } else if (currentLabel === 'Collapse') {
        button.setAttribute('aria-label', 'Expand');
        button.innerHTML = '<';
    }
}
