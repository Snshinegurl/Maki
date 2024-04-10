function zoomIn(element) {
    if (!element.classList.contains("zoomed")) {
        element.classList.add("zoomed");
    } else {
        element.classList.remove("zoomed");
    }
}
