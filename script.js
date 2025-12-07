(() => {
    const select = (q, ctx = document) => ctx.querySelector(q);
    const selectAll = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getSlug = (href) => {
        if (!href) return "";
        const cleaned = href.split("#")[0].split("/").pop() || href;
        return cleaned.replace(".html", "").toLowerCase() || "index";
    };

    const getCSSVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    function setupBackToTop() {
        const btn = document.createElement("button");
        btn.className = "back-to-top";
        btn.setAttribute("aria-label", "Back to top");
        btn.innerHTML = "↑";
        document.body.appendChild(btn);

        const toggle = () => {
            if (window.scrollY > 260) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }
        };

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        document.addEventListener("scroll", toggle, { passive: true });
        toggle();
    }

    function setupNavHighlight() {
        const navLinks = selectAll(".navbar a");
        if (!navLinks.length) return;

        const pageSlug = getSlug(window.location.pathname.split("/").pop());
        const sections = selectAll(".section");

        sections.forEach((section, idx) => {
            if (!section.dataset.navSlug) section.dataset.navSlug = pageSlug;
            if (!section.id) section.id = `${section.dataset.navSlug}-${idx + 1}`;
        });

        const setActive = (slug) => {
            navLinks.forEach((link) => {
                const linkSlug = getSlug(link.getAttribute("href"));
                link.classList.toggle("nav-active", linkSlug === slug);
            });
        };

        setActive(pageSlug);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (!visible) return;
                const slug = visible.target.dataset.navSlug || pageSlug;
                setActive(slug);
            },
            { threshold: [0.35, 0.6] }
        );

        sections.forEach((section) => observer.observe(section));
    }

    function setupSourcesSearch() {
        selectAll(".sources").forEach((sources) => {
            const list = select("ul", sources);
            if (!list || sources.querySelector(".sources-search")) return;

            const wrapper = document.createElement("div");
            wrapper.className = "sources-search";
            const input = document.createElement("input");
            input.type = "search";
            input.placeholder = "Filter sources...";
            wrapper.appendChild(input);
            list.parentNode.insertBefore(wrapper, list);

            const items = selectAll("li", list);
            input.addEventListener("input", () => {
                const term = input.value.trim().toLowerCase();
                items.forEach((item) => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(term) ? "" : "none";
                });
            });
        });
    }

    function setupCounters() {
        const counters = selectAll(".stat-number[data-target]");
        if (!counters.length) return;

        const animate = (el) => {
            const target = parseFloat(el.dataset.target);
            const prefix = el.dataset.prefix || "";
            const suffix = el.dataset.suffix || "";
            const decimals = target % 1 !== 0 ? 1 : 0;
            const duration = 1400 + Math.min(target * 8, 1000);
            const start = performance.now();
            const easeOut = (t) => 1 - Math.pow(1 - t, 3);

            const update = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = target * easeOut(progress);
                el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.dataset.counted = "true";
                }
            };

            if (prefersReducedMotion) {
                el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
                el.dataset.counted = "true";
                return;
            }

            requestAnimationFrame(update);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.dataset.counted !== "true") {
                        animate(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
        );

        counters.forEach((counter) => observer.observe(counter));
    }

    function setupCharts() {
        const canvases = selectAll("[data-chart]");
        if (!canvases.length) return;
        const ensureChart = () =>
            new Promise((resolve, reject) => {
                if (window.Chart) return resolve();
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js";
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });

        ensureChart()
            .then(() => {
                const palette = {
                    orange: getCSSVar("--utsa-orange") || "#f15a22",
                    blue: getCSSVar("--utsa-blue") || "#0c2340",
                    frost: "rgba(255,255,255,0.8)",
                    grid: "rgba(255,255,255,0.12)"
                };

                const baseOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: palette.frost } },
                        tooltip: { titleColor: "#0c0f18", bodyColor: "#0c0f18", backgroundColor: "#ffffff" }
                    },
                    scales: {
                        x: { grid: { color: palette.grid }, ticks: { color: palette.frost } },
                        y: { grid: { color: palette.grid }, ticks: { color: palette.frost } }
                    }
                };

                const configs = {
                    researchChart: {
                        type: "bar",
                        data: {
                            labels: ["UTSA (pre)", "UT Health (pre)", "Unified"],
                            datasets: [
                                {
                                    label: "Research Expenditures ($M)",
                                    data: [152, 413, 486],
                                    backgroundColor: [palette.blue, palette.orange, "#5fa8e6"],
                                    borderRadius: 8
                                }
                            ]
                        },
                        options: {
                            ...baseOptions,
                            plugins: { ...baseOptions.plugins, legend: { display: false } }
                        }
                    },
                    workforceChart: {
                        type: "line",
                        data: {
                            labels: ["UTSA", "UT Health", "Unified"],
                            datasets: [
                                {
                                    label: "Employees",
                                    data: [7000, 8700, 17000],
                                    borderColor: palette.orange,
                                    backgroundColor: "rgba(241,90,34,0.25)",
                                    tension: 0.35,
                                    borderWidth: 3,
                                    pointRadius: 4
                                },
                                {
                                    label: "Students",
                                    data: [34000, 4300, 38300],
                                    borderColor: palette.blue,
                                    backgroundColor: "rgba(12,35,64,0.25)",
                                    tension: 0.35,
                                    borderWidth: 3,
                                    pointRadius: 4
                                }
                            ]
                        },
                        options: baseOptions
                    },
                    fundingPie: {
                        type: "doughnut",
                        data: {
                            labels: ["UTSA baseline", "UT Health baseline"],
                            datasets: [
                                {
                                    label: "Research Share ($M)",
                                    data: [152, 413],
                                    backgroundColor: [palette.blue, palette.orange],
                                    hoverOffset: 6
                                }
                            ]
                        },
                        options: {
                            ...baseOptions,
                            cutout: "62%",
                            scales: {}
                        }
                    }
                };

                canvases.forEach((canvas) => {
                    const cfg = configs[canvas.id];
                    if (!cfg) return;
                    new Chart(canvas.getContext("2d"), cfg);
                });
            })
            .catch(() => console.warn("Chart.js failed to load"));
    }

    function setupCollapsibles() {
        selectAll("[data-collapsible] .collapsible").forEach((wrap) => {
            const toggle = select(".collapsible-toggle", wrap);
            const content = select(".collapsible-content", wrap);
            if (!toggle || !content) return;

            const setOpen = (open) => {
                content.classList.toggle("open", open);
                content.style.maxHeight = open ? `${content.scrollHeight}px` : "0px";
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            };

            setOpen(false);

            toggle.addEventListener("click", () => {
                const isOpen = content.classList.contains("open");
                setOpen(!isOpen);
            });
        });
    }

    function init() {
        setupBackToTop();
        setupNavHighlight();
        setupSourcesSearch();
        setupCounters();
        setupCharts();
        setupCollapsibles();
    }

    document.addEventListener("DOMContentLoaded", init);
})();
