
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const moreInfo = document.getElementById("moreInfo");

    // Safety check (prevents silent failure)
    if (!toggleButton || !moreInfo) {
      
        return;
    }

    toggleButton.addEventListener("click", function () {
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            moreInfo.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });
});
