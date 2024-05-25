onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    /*
    var h1Element = document.createElement("h1");
    h1Element.textContent = "Love you";
    document.body.appendChild(h1Element);
    */
    const createFooter = () => {
        var footer = document.createElement('footer');
        footer.textContent = 'Love you';
        document.body.parentNode.insertBefore(footer, document.body.nextSibling);
        setTimeout(function () {
            footer.style.opacity = 1;
            footer.style.transform = 'translate(-50%, 0)';
        }, 100);
    };
    setTimeout(createFooter, 3750)
};
