var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.querySelector(".content");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = "0";
      content.style.paddingBottom = "0";
      content.style.transition = "max-height 0.5s ease-out, padding 0.5s ease-out";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "1em";
      content.style.paddingBottom = "1em";
      content.style.transition = "max-height 0.5s ease-in, padding 0.5s ease-in";
    }
  });
}

var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

var roles = [
  "Python / Django",
  "Веб-разработка",
  "Автоматизация процессов"
];
var roleEl = document.getElementById("typed-role");
var roleIndex = 0;
var charIndex = 0;
var deleting = false;

function typeRole() {
  var current = roles[roleIndex];
  if (deleting) {
    charIndex -= 1;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      window.setTimeout(typeRole, 280);
      return;
    }
    window.setTimeout(typeRole, 36);
    return;
  }

  charIndex += 1;
  roleEl.textContent = current.slice(0, charIndex);
  if (charIndex === current.length) {
    deleting = true;
    window.setTimeout(typeRole, 1600);
    return;
  }
  window.setTimeout(typeRole, 72);
}

var profileCode = [
  'class Engineer:',
  '    name = "Алексей Ефимов"',
  '    stack = ["Python", "Django", "JavaScript"]',
  '    field = "автоматизация и веб"',
  '    principle = "доводить задачу до результата"'
].join("\n");

var codeEl = document.getElementById("terminal-code");
var codeIndex = 0;

function typeCode() {
  codeIndex += 1;
  codeEl.textContent = profileCode.slice(0, codeIndex);
  if (codeIndex < profileCode.length) {
    var delay = profileCode[codeIndex - 1] === "\n" ? 180 : 28;
    window.setTimeout(typeCode, delay);
  }
}

if (reduceMotion) {
  roleEl.textContent = roles[0];
  codeEl.textContent = profileCode;
} else {
  typeRole();
  window.setTimeout(typeCode, 400);
}
