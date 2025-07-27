const shareButton = document.getElementById("share-button");
const profileDisplay = document.getElementById("profile-display");

function toggleShareInfo() {
  if (profileDisplay.classList.contains("share-info")) {
    profileDisplay.classList.remove("share-info");
    profileDisplay.classList.add("profile-display");
    shareButton.classList.add("active");
  } else {
    profileDisplay.classList.add("share-info");
    shareButton.classList.remove("active");
    profileDisplay.classList.remove("profile-display");
  }

  /*profileDisplay.hidden = !profileDisplay.hidden;
    shareButton.classList.toggle('active');*/
}

shareButton.addEventListener("click", toggleShareInfo);
