(function () {
    var root = document.querySelector("[data-awards]");
    if (!root) {
        return;
    }

    startCountdown(root);

    var stage = root.querySelector("[data-awards-stage]");
    var empty = root.querySelector("[data-awards-empty]");
    var panels = root.querySelectorAll("[data-awards-panel]");
    var cards = root.querySelectorAll("[data-awards-open]");
    var status = root.querySelector("[data-awards-status]");
    var explore = root.querySelector("[data-awards-explore]");
    var nav = root.querySelector("[data-awards-nav]");
    var ids = [];
    var current = -1;

    cards.forEach(function (card) {
        ids.push(card.getAttribute("data-awards-open"));
    });

    function panelFor(id) {
        return root.querySelector('[data-awards-panel="' + id + '"]');
    }

    function setVideo(panel, active) {
        var frame = panel.querySelector("iframe");
        if (!frame) {
            return;
        }
        var src = frame.getAttribute("data-src");
        if (active && src && frame.getAttribute("src") !== src) {
            frame.setAttribute("src", src);
        }
        if (!active && frame.hasAttribute("src")) {
            frame.removeAttribute("src");
        }
    }

    function show(id, scroll) {
        if (empty) {
            empty.hidden = true;
        }

        panels.forEach(function (panel) {
            var active = panel.getAttribute("data-awards-panel") === id;
            panel.hidden = !active;
            setVideo(panel, active);
        });

        cards.forEach(function (card) {
            var active = card.getAttribute("data-awards-open") === id;
            if (active) {
                card.setAttribute("aria-current", "true");
            } else {
                card.removeAttribute("aria-current");
            }
        });

        current = ids.indexOf(id);
        if (explore) {
            explore.hidden = true;
        }
        if (nav) {
            nav.hidden = false;
        }
        if (status && current >= 0) {
            status.textContent = (current + 1) + " of " + ids.length;
        }

        if (scroll === "top") {
            scrollStageToTop();
        } else if (scroll && stage) {
            stage.scrollIntoView({ block: "nearest" });
        }

        var panel = panelFor(id);
        var heading = panel ? panel.querySelector("h3") : null;
        if (heading) {
            heading.focus({ preventScroll: true });
        }
    }

    function scrollStageToTop() {
        if (!stage) {
            return;
        }
        var header = document.querySelector(".site-header");
        var headerH = header ? header.getBoundingClientRect().height : 0;
        var top = stage.getBoundingClientRect().top + window.scrollY;
        if (top > 40) {
            top -= headerH;
        }
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }

    function step(delta) {
        if (!ids.length) {
            return;
        }
        var next = current < 0
            ? (delta > 0 ? 0 : ids.length - 1)
            : (current + delta + ids.length) % ids.length;
        show(ids[next], "top");
    }

    root.addEventListener("click", function (event) {
        var start = event.target.closest("[data-awards-explore]");
        if (start && root.contains(start) && ids.length) {
            show(ids[0], false);
            return;
        }
        var previous = event.target.closest("[data-awards-prev]");
        if (previous && root.contains(previous)) {
            step(-1);
            return;
        }
        var next = event.target.closest("[data-awards-next]");
        if (next && root.contains(next)) {
            step(1);
            return;
        }
        var open = event.target.closest("[data-awards-open]");
        if (open && root.contains(open)) {
            show(open.getAttribute("data-awards-open"), "top");
        }
    });

    function startCountdown(root) {
        var countdown = root.querySelector("[data-awards-countdown]");
        if (!countdown) {
            return;
        }

        var deadline = Date.parse(countdown.getAttribute("data-awards-countdown"));
        var units = countdown.querySelector("[data-awards-countdown-units]");
        var closed = countdown.querySelector("[data-awards-countdown-closed]");
        var status = countdown.querySelector("[data-awards-countdown-status]");
        var fields = {
            days: countdown.querySelector("[data-awards-countdown-days]"),
            hours: countdown.querySelector("[data-awards-countdown-hours]"),
            minutes: countdown.querySelector("[data-awards-countdown-minutes]"),
            seconds: countdown.querySelector("[data-awards-countdown-seconds]")
        };
        if (!deadline || !units || !fields.days) {
            return;
        }

        var announcedMinute = "";
        var timer = window.setInterval(tick, 1000);
        tick();

        function tick() {
            var remaining = deadline - Date.now();
            if (remaining <= 0) {
                units.hidden = true;
                if (closed) {
                    closed.hidden = false;
                }
                if (status) {
                    status.textContent = "Voting has closed";
                }
                window.clearInterval(timer);
                return;
            }

            var totalSeconds = Math.floor(remaining / 1000);
            var days = Math.floor(totalSeconds / 86400);
            var hours = Math.floor((totalSeconds % 86400) / 3600);
            var minutes = Math.floor((totalSeconds % 3600) / 60);
            var seconds = totalSeconds % 60;

            fields.days.textContent = String(days);
            fields.hours.textContent = pad(hours);
            fields.minutes.textContent = pad(minutes);
            fields.seconds.textContent = pad(seconds);

            var minuteKey = days + ":" + hours + ":" + minutes;
            if (status && minuteKey !== announcedMinute) {
                announcedMinute = minuteKey;
                status.textContent = plural(days, "day") + ", " + plural(hours, "hour") + ", " + plural(minutes, "minute") + " remaining";
            }
        }

        function pad(value) {
            return value < 10 ? "0" + value : String(value);
        }

        function plural(value, word) {
            return value + " " + word + (value === 1 ? "" : "s");
        }
    }
})();
