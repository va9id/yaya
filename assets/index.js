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

    /*
    const stars = () => {
        let e = document.createElement("div");
        e.setAttribute("class", "star");
        document.body.appendChild(e);
        e.style.left = Math.random() * +innerWidth + "px";

        let size = Math.random() * 12;
        let duration = Math.random() * 3;

        e.style.fontSize = size + "px";
        e.style.animationDuration = 2 + duration + "s";
        setTimeout(function () {
            document.body.removeChild(e);
        }, 5000);
    };

    setInterval(function () {
        stars();
    }, 1000);
    */
};
