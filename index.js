onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
    const createFooter = () => {
        var footer = document.createElement('footer');
        footer.textContent = "Je t'aime";
        document.body.parentNode.insertBefore(footer, document.body.nextSibling);
        setTimeout(function () {
            footer.style.opacity = 1;
            footer.style.transform = 'translate(-50%, 0)';
        }, 100);
    };
    setTimeout(createFooter, 3750)
};
