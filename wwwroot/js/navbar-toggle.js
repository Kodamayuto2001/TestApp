(function () {
    "use strict";

    var toggles = document.querySelectorAll(".navbar-toggler[aria-controls]");
    Array.prototype.forEach.call(toggles, function (toggle) {
        var target = document.getElementById(toggle.getAttribute("aria-controls"));
        if (!target) {
            return;
        }

        toggle.addEventListener("click", function () {
            var expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            target.classList.toggle("show", !expanded);
        });
    });
}());
