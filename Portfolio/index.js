function clickLinkA(x) {
  let items = document.querySelectorAll(".link.active");

  if (items.length) {
    items[0].className = "link";
  }

  x.className = "link active";
}
