const badge = document.querySelectorAll("#badge");


badge.forEach((item) => {
  if (item.getAttribute("value") === "pending") {
    item.setAttribute("class", "card-badge red");
  }

  if (item.getAttribute("value") === "completed") {
    item.setAttribute("class", "card-badge green");
  }
});
