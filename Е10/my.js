var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.querySelector(".content");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = '0';
      content.style.paddingBottom = '0';
      content.style.transition = "max-height 0.5s ease-out, padding 0.5s ease-out";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = '1em';  // Возвращаем padding
      content.style.paddingBottom = '1em';  // Возвращаем padding
      content.style.transition = "max-height 0.5s ease-in, padding 0.5s ease-in";
    }
  });
}

document.querySelectorAll('.skill-level').forEach(skill => {
  skill.style.transition = 'width 1s';
});