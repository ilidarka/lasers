let closeButton = document.querySelector(".closeButton");
let successPopup = document.querySelector(".successPopup");
let leaveRequestButton = document.querySelector(".leaveRequestButton");
let errorMessage = document.querySelector(".errorMessage");

leaveRequestButton.addEventListener("click", (elem) => {
    let rightContainerInputFirst = document.querySelector(".rightContainerInputFirst").value;
    let rightContainerInputSecond = document.querySelector(".rightContainerInputSecond").value;
    let rightContainerInputThird = document.querySelector(".rightContainerInputThird").value;
    if(rightContainerInputFirst == "" 
        && rightContainerInputSecond == ""
            && rightContainerInputThird == "") {
        errorMessage.classList.add("showErrorMessage");
    }
    else {
        errorMessage.classList.remove("showErrorMessage");

    }
});

closeButton.addEventListener("click", (elem) => {
    successPopup.classList.toggle("showSuccessPopup");
});