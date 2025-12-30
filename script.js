function submitDOB() {
  const dob = document.getElementById("dob").value;

  if (!dob) {
    alert("Please enter your Date of Birth");
    return;
  }

  fetch("/save-dob", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ dob })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("popup").style.display = "flex";
  })
  .catch(() => {
    alert("Error saving DOB");
  });
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
