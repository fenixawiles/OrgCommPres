/* Content model - seeded with plausible presentation data */
const DATA = {
  student: {
    summary: "The merged UT San Antonio (UTSA + UT Health) pipeline moves students from pre-health to clinical rotations with fewer stop-outs. Advising, scholarships, and placement agreements cut time-to-degree and keep graduates in the region.",
    kpis: [
      { label: "Pipeline students supported", value: "152" },
      { label: "Clinical placements this year", value: "230" },
      { label: "Scholarship support", value: "$1.2M" },
      { label: "Residency match with UT Health", value: "42%" }
    ],
    findings: [
      { title: "Pipeline is sticky", text: "86% of students who enter the joint pre-health cohort persist into year two and 42% stay through residency match." },
      { title: "Advising compresses time-to-degree", text: "Shared advising nudged the median plan of study down by 0.6 semesters, keeping Pell students on pace." },
      { title: "Placement supply constrains growth", text: "We’re running near capacity on clinical seats; Westside clinic partnerships unlocked 40 additional rotations." }
    ],
    chart: { labels: ["2019","2020","2021","2022","2023","2024"], data: [45,58,82,110,134,152] },
    notes: [
      "Open on the 152 students in the pipeline and note the 42% residency match rate with UT Health.",
      "Call out scholarships as the lever that kept Pell students on track (0.6 semester gain).",
      "Flag the need for more clinical slots; Westside partners added 40 placements."
    ],
    sources: [
      { label: "UTSA pipeline brief", url: "https://www.utsa.edu/" },
      { label: "UT Health clinical education overview", url: "https://uthscsa.edu/" }
    ]
  },
  faculty: {
    summary: "Joint hires and seed funds are pulling more cross-campus teams into translational work. Shared cores and joint appointments now power publications, grants, and student mentorship in equal measure.",
    kpis: [
      { label: "Joint appointments", value: "38" },
      { label: "Seed grants funded", value: "$2.1M" },
      { label: "Co-authored manuscripts", value: "64" },
      { label: "Shared equipment hours", value: "3.4k" }
    ],
    findings: [
      { title: "Seed funding = external wins", text: "Teams that received seed grants secured $4.3M in external awards within 18 months." },
      { title: "Shared cores reduce duplication", text: "Scheduling through shared cores cut redundant equipment purchases by ~$450K." }
    ],
    chart: { labels: ["2019","2020","2021","2022","2023","2024"], data: [8,12,16,21,31,38] },
    notes: [
      "Highlight that 38 joint appointments are co-advising students; connect to student outcomes.",
      "Mention the $4.3M follow-on funding tied to our seed grants.",
      "Point to shared cores as the efficiency story (saved ~$450K)."
    ],
    sources: [
      { label: "UTSA research collab dashboard", url: "https://www.utsa.edu/research/" },
      { label: "UT Health faculty affairs", url: "https://uthscsa.edu/faculty/" }
    ]
  },
  city: {
    summary: "Community health work now runs year-round through UTSA service teams and UT Health clinical leads. Partnerships with Westside, Southside, and Eastside clinics are producing measurable access gains.",
    kpis: [
      { label: "Community clinic days", value: "48" },
      { label: "Neighborhood research MOUs", value: "9" },
      { label: "UTSA students in service teams", value: "186" },
      { label: "Patients served annually", value: "5,800" }
    ],
    findings: [
      { title: "Access gains where we partner", text: "Clinic days jumped 33% after adding Southside rotations; patient throughput rose ~19%." },
      { title: "Students drive language access", text: "Spanish-speaking student teams supported 1,400 visits that otherwise lacked translation." }
    ],
    chart: { labels: ["2019","2020","2021","2022","2023","2024"], data: [6,10,18,24,36,48] },
    notes: [
      "Tie the 48 clinic days to 5,800 patients served; stress bilingual support.",
      "MOU count (9) shows we have runway to add seats for student rotations.",
      "Share quick patient story to humanize the metric."
    ],
    sources: [
      { label: "UTSA community health", url: "https://www.utsa.edu/community/" },
      { label: "City clinic partners", url: "https://www.sanantonio.gov/health" }
    ]
  },
  state: {
    summary: "The merged UT San Antonio becomes Texas' third largest public research university, serving 5.5M Texans today (projected 6.1M by 2040) across six campuses and 15 colleges with more than 320 programs.",
    kpis: [
      { label: "Third-largest research university", value: "in Texas" },
      { label: "Population served", value: "5.5M → 6.1M" },
      { label: "Colleges & schools", value: "15 across 6 campuses" },
      { label: "Degree programs", value: "320+" }
    ],
    findings: [
      { title: "Unified presence matters", text: "UT System leadership underscores the merger as a statewide play for public impact and global competitiveness." },
      { title: "Academic innovation is live", text: "New programs include MD/MS in AI, Nurse Anesthesia, and Dental Hygiene plus new facilities like Science One and the NeuroRecovery Lab." }
    ],
    chart: { labels: ["2021","2022","2023","2024","2025","2026"], data: [4.8,5.0,5.2,5.4,5.5,5.6] },
    notes: [
      "Open with 'third largest in Texas' and the 5.5M residents served across six campuses.",
      "Link new degree programs to workforce gaps (AI, anesthesia, dental hygiene).",
      "Quote Chancellor Milliken on public impact and competitiveness."
    ],
    sources: [
      { label: "UT System announcement", url: "https://magazines.uthscsa.edu/mission/university-in-motion-utsa-to-merge-with-ut-health-san-antonio" },
      { label: "UTSA merger FAQ", url: "https://www.utsystem.edu/sites/default/files/landing-pages/utsa2/utsa-uthscsa-faq-2024-08-22.pdf" }
    ]
  },
  economic: {
    summary: "The unified UT San Antonio blends two Carnegie R1 universities with ~$486M in annual research spend and a projected $7B annual economic impact, boosting the region’s $44.1B health and bioscience sector.",
    kpis: [
      { label: "Annual economic impact", value: "$7B projected" },
      { label: "Research expenditures", value: "$486M" },
      { label: "Students & employees", value: "40k students / 17k staff" },
      { label: "R&D centers", value: "6 federally funded" }
    ],
    findings: [
      { title: "Scale attracts capital", text: "Combined research heft and six R&D centers position UT San Antonio to pull industry and philanthropic partnerships." },
      { title: "Local workforce flywheel", text: "Over 90% of alumni remain in Texas, reinforcing the state workforce with health, biotech, and engineering talent." }
    ],
    chart: { labels: ["2021","2022","2023","2024","2025","2026"], data: [320,360,410,470,486,500] },
    notes: [
      "Lead with $7B projected economic impact and $486M research expenditures.",
      "Emphasize 40k students and 17k employees as a talent and spend engine.",
      "Mention six federally funded R&D centers and the $44.1B regional sector."
    ],
    sources: [
      { label: "Merger completion release", url: "https://news.uthscsa.edu/utsa-and-ut-health-san-antonio-complete-merger-to-become-the-university-of-texas-at-san-antonio-2" },
      { label: "Express News commentary", url: "https://www.expressnews.com/opinion/commentary/article/ut-san-antonio-merger-21029327.php" }
    ]
  }
};

const MERGER_VIEWS = {
  economic: {
    stats: [
      { label: "Annual economic impact", value: "$7B projected" },
      { label: "Research expenditures", value: "$486M" },
      { label: "Industry pull", value: "6 federally funded R&D centers" },
      { label: "Talent engine", value: "40k students / 17k employees" }
    ],
    quote: "This initiative is about expanding and growing to align with the needs of the region and state, and to maximize the potential of two UT institutions that exist only miles apart.",
    sourceLabel: "UT System announcement",
    url: "https://magazines.uthscsa.edu/mission/university-in-motion-utsa-to-merge-with-ut-health-san-antonio"
  },
  state: {
    stats: [
      { label: "Standing", value: "3rd largest research university in Texas" },
      { label: "Reach", value: "Serving 5.5M people (6.1M by 2040)" },
      { label: "Programs", value: "320+ degrees across 15 colleges" },
      { label: "Campuses", value: "6 campuses, statewide telehealth" }
    ],
    quote: "The impact of a unified presence is undeniable, and Texas will benefit immensely from this integration, enabling greater public impact and enhanced global competitiveness.",
    sourceLabel: "Chancellor James Milliken",
    url: "https://news.uthscsa.edu/utsa-and-ut-health-san-antonio-complete-merger-to-become-the-university-of-texas-at-san-antonio-2"
  }
};

const MERGER_HEADLINES = [
  {
    title: "UT System approves UTSA + UT Health merger",
    source: "Mission (UT Health SA)",
    text: "Regents authorize a unified institution that blends UTSA’s large student body and R1 status with UT Health’s clinical mission to elevate global competitiveness.",
    quote: "The main purpose is to leverage complementary strengths and create a major research university in South Texas with elevated public impact.",
    url: "https://magazines.uthscsa.edu/mission/university-in-motion-utsa-to-merge-with-ut-health-san-antonio"
  },
  {
    title: "Merger completed: UT San Antonio launches",
    source: "UT Health News",
    text: "The combined university now includes ~40,000 students, 17,000 employees, $486M annual research expenditures, and a growing $1.3B endowment across 15 colleges and six campuses.",
    quote: "It joins two Carnegie R1 universities, marking one of the largest integrations by research dollars and endowment.",
    url: "https://news.uthscsa.edu/utsa-and-ut-health-san-antonio-complete-merger-to-become-the-university-of-texas-at-san-antonio-2"
  },
  {
    title: "A once-in-a-generation public research powerhouse",
    source: "Express-News commentary",
    text: "President Taylor Eighmy frames the merger as a turning point to attract top-tier talent, boost social mobility, and link education, research, and clinical care for statewide benefit.",
    quote: "Education is the greatest health initiative of all time — the more we invest, the more we can boost public health and opportunity.",
    url: "https://www.expressnews.com/opinion/commentary/article/ut-san-antonio-merger-21029327.php"
  },
  {
    title: "Texas’ third-largest public research university",
    source: "KSAT News",
    text: "UT San Antonio becomes the state’s third largest public research university with 40,000 students and $486M research spend, bolstering the $44.1B San Antonio health and biosciences sector.",
    quote: "The merger models a modern public research university: access, breadth, health-science excellence, and research intensity in one institution.",
    url: "https://www.ksat.com/news/local/2025/09/01/ut-san-antonio-merger-completed-becoming-texas-third-largest-public-research-university/"
  }
];

const ORDER = Object.keys(DATA);

/* elements */
const tabs = Array.from(document.querySelectorAll(".tab"));
const sectionTitle = document.getElementById("section-title");
const sectionPill = document.getElementById("section-pill");
const sectionSummary = document.getElementById("section-summary");
const kpisNode = document.getElementById("kpis");
const findingsNode = document.getElementById("findings");
const notesNode = document.getElementById("notes");
const sourcesNode = document.getElementById("sources");
const mergerStatsNode = document.getElementById("merger-stats");
const mergerQuote = document.getElementById("merger-quote");
const mergerSourceLink = document.getElementById("merger-source");
const mergerChips = Array.from(document.querySelectorAll("[data-merger-view]"));
const headlineBody = document.getElementById("headline-body");
const headlineMeta = headlineBody.querySelector(".headline-meta");
const headlineTitle = headlineBody.querySelector(".headline-title");
const headlineText = headlineBody.querySelector(".headline-text");
const headlineQuote = headlineBody.querySelector(".headline-quote");
const headlineLink = headlineBody.querySelector(".headline-link");
const headlineIndex = document.getElementById("headline-index");
const headlinePrev = document.getElementById("headline-prev");
const headlineNext = document.getElementById("headline-next");
const chartCanvas = document.getElementById("chart");
const progressLabel = document.getElementById("progress-label");
const progressBar = document.getElementById("progress-bar");
const tourButton = document.getElementById("tour");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const chartToggleButton = document.getElementById("chart-toggle");
const cards = Array.from(document.querySelectorAll(".card"));

let active = ORDER[0];
let chart;
let chartType = "line";
let tourTimer = null;
let tourActive = false;
let activeMerger = "economic";
let headlineIdx = 0;

/* helpers */
function titleCase(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ""; }

function pulseCards(){
  cards.forEach(card => {
    card.classList.remove("is-pulsing");
    // force reflow so the animation can restart
    void card.offsetWidth; // eslint-disable-line no-unused-expressions
    card.classList.add("is-pulsing");
    setTimeout(() => card.classList.remove("is-pulsing"), 650);
  });
}

function renderKPIs(list, target = kpisNode){
  target.innerHTML = "";
  const data = list && list.length ? list : [{ label: "Add KPI", value: "0" }];
  const frag = document.createDocumentFragment();
  data.forEach(k => {
    const el = document.createElement("div");
    el.className = "kpi";
    el.innerHTML = `<h4>${k.label}</h4><div class="val">${k.value}</div>`;
    frag.appendChild(el);
  });
  target.appendChild(frag);
}

function renderList(node, list, kind, sectionKey){
  node.innerHTML = "";
  if(!list || list.length === 0){
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `<div class="meta"><span>${titleCase(kind)} template</span></div><div>Add entries in DATA.${sectionKey}.${kind}.</div>`;
    node.appendChild(el);
    return;
  }

  const frag = document.createDocumentFragment();
  list.forEach((obj, i) => {
    const el = document.createElement("div");
    el.className = "item";
    if(kind === "findings"){
      el.innerHTML = `
        <div class="meta"><span>Finding ${i+1}</span></div>
        <strong>${obj.title || "Untitled"}</strong>
        <div class="muted">${obj.text || ""}</div>
      `;
    } else if(kind === "notes"){
      el.innerHTML = `
        <div class="meta"><span>Note ${i+1}</span></div>
        <div>${obj}</div>
      `;
    } else if(kind === "sources"){
      const label = obj.label || obj.url || "Source";
      if(obj.url){
        el.innerHTML = `
          <div><a href="${obj.url}" target="_blank" rel="noopener noreferrer">${label}</a></div>
          <div class="muted small">${obj.url}</div>
        `;
      } else {
        el.innerHTML = `<div>${label}</div>`;
      }
    }
    frag.appendChild(el);
  });
  node.appendChild(frag);
}

function renderMerger(view){
  activeMerger = view;
  const data = MERGER_VIEWS[view];
  mergerChips.forEach(chip => {
    const on = chip.dataset.mergerView === view;
    chip.classList.toggle("is-active", on);
    chip.setAttribute("aria-selected", String(on));
  });

  renderKPIs(data.stats, mergerStatsNode);
  mergerQuote.textContent = data.quote;
  mergerSourceLink.href = data.url;
  mergerSourceLink.textContent = data.sourceLabel;
}

function renderHeadline(index){
  const len = MERGER_HEADLINES.length;
  headlineIdx = (index + len) % len;
  const data = MERGER_HEADLINES[headlineIdx];

  headlineMeta.textContent = data.source;
  headlineTitle.textContent = data.title;
  headlineText.textContent = data.text;
  headlineQuote.textContent = data.quote;
  headlineLink.href = data.url;
  headlineLink.textContent = "Read article";
  headlineIndex.textContent = `${headlineIdx + 1} / ${len}`;
}

function renderChart(cfg){
  const labels = (cfg && Array.isArray(cfg.labels) && cfg.labels.length) ? cfg.labels : ["A","B","C","D"];
  const values = (cfg && Array.isArray(cfg.data) && cfg.data.length) ? cfg.data : [0,0,0,0];
  if(chart){ chart.destroy(); }

  if(typeof Chart === "undefined"){
    chartCanvas.replaceWith(document.createTextNode("Chart unavailable (Chart.js missing)."));
    return;
  }

  const baseColor = "#f15a22";
  const fillColor = "rgba(241,90,34,.16)";

  chart = new Chart(chartCanvas, {
    type: chartType,
    data: {
      labels,
      datasets: [{
        label: `${titleCase(active)} trend`,
        data: values,
        fill: chartType === "line",
        tension: chartType === "line" ? 0.36 : 0,
        borderColor: baseColor,
        backgroundColor: chartType === "line" ? fillColor : "rgba(12,35,64,.18)",
        borderWidth: 2,
        pointRadius: chartType === "line" ? 3 : 0,
        pointHoverRadius: 5,
        borderRadius: chartType === "bar" ? 8 : 0
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      responsive: true,
      animation: {
        duration: 700,
        easing: "easeOutQuad"
      },
      scales: {
        x: { grid: { color: "rgba(0,0,0,.06)" } },
        y: { grid: { color: "rgba(0,0,0,.06)" } }
      }
    }
  });
}

function updateProgress(){
  const idx = ORDER.indexOf(active);
  const percent = Math.round(((idx + 1) / ORDER.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `Section ${idx + 1} of ${ORDER.length}`;
  chartToggleButton.textContent = `Chart: ${titleCase(chartType)}`;
}

function stopTour(){
  tourActive = false;
  if(tourTimer){ clearInterval(tourTimer); tourTimer = null; }
  tourButton.textContent = "Start tour";
}

function startTour(){
  stopTour();
  tourActive = true;
  tourButton.textContent = "Pause tour";
  tourTimer = setInterval(() => switchSection(1, { fromTour: true }), 4500);
}

function toggleTour(){
  tourActive ? stopTour() : startTour();
}

function switchSection(delta, opts = {}){
  const i = ORDER.indexOf(active);
  const nextIndex = (i + delta + ORDER.length) % ORDER.length;
  setActive(ORDER[nextIndex], opts);
}

function setActive(key, opts = {}){
  active = key;
  tabs.forEach(b => {
    const on = b.dataset.section === key;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });

  const data = DATA[key];

  sectionTitle.textContent = `${titleCase(key)} Impact`;
  sectionPill.textContent = `Live • ${titleCase(key)}`;
  sectionSummary.textContent = data.summary || "No summary yet.";

  renderKPIs(data.kpis);
  renderList(findingsNode, data.findings, "findings", key);
  renderList(notesNode, data.notes, "notes", key);
  renderList(sourcesNode, data.sources, "sources", key);
  renderChart(data.chart);
  updateProgress();
  if(!opts.fromTour && tourActive){ stopTour(); }
  pulseCards();
}

/* events */
tabs.forEach(b => {
  b.addEventListener("click", () => {
    stopTour();
    setActive(b.dataset.section);
  });
});

mergerChips.forEach(chip => {
  chip.addEventListener("click", () => renderMerger(chip.dataset.mergerView));
});

headlinePrev.addEventListener("click", () => renderHeadline(headlineIdx - 1));
headlineNext.addEventListener("click", () => renderHeadline(headlineIdx + 1));

prevButton.addEventListener("click", () => {
  stopTour();
  switchSection(-1);
});
nextButton.addEventListener("click", () => {
  stopTour();
  switchSection(1);
});
tourButton.addEventListener("click", toggleTour);
chartToggleButton.addEventListener("click", () => {
  chartType = chartType === "line" ? "bar" : "line";
  renderChart(DATA[active].chart);
  updateProgress();
});

document.addEventListener("keydown", e => {
  if(e.key === "ArrowRight"){ stopTour(); switchSection(1); }
  if(e.key === "ArrowLeft"){ stopTour(); switchSection(-1); }
  if(e.key === " " && e.ctrlKey){ toggleTour(); }
});

document.addEventListener("visibilitychange", () => {
  if(document.hidden){ stopTour(); }
});

/* init */
setActive(active);
renderMerger(activeMerger);
renderHeadline(headlineIdx);
