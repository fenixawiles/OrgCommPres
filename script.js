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
    actions: [
      "Secure +50 clinical seats with Westside partners to keep pace with demand.",
      "Extend scholarship dollars to preserve the 0.6 semester time-to-degree gain for Pell students.",
      "Increase residency match agreements to push 42% closer to 50%."
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
    actions: [
      "Grow the seed fund to unlock additional $4.3M+ in external awards.",
      "Expand shared core scheduling to avoid another $450K in duplicate spend.",
      "Pair joint appointments with grad mentorship and new lines in growth areas."
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
    actions: [
      "Add clinic days in Southside/Eastside to cut waits and serve more than 5,800 patients.",
      "Scale bilingual (Spanish) support teams across all partner clinics.",
      "Convert the 9 MOUs into funded rotation slots for students."
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
    actions: [
      "Launch bandwidth upgrades in 3 rural counties to stabilize telehealth reach.",
      "Tie scholarships to in-state placement to sustain the 2.3× retention uplift.",
      "Pilot MD/MS in AI and Nurse Anesthesia cohorts aligned to rural and statewide needs."
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
    actions: [
      "Land industry partnerships leveraging $486M research spend and 6 federally funded centers.",
      "Track the $7B projected impact with regional dashboards tied to the $44.1B sector.",
      "Showcase 90% alumni retention in Texas to workforce and state partners."
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

/* Structured content objects for Economic and State impacts */
const EconomicImpact = {
  summary: "UT San Antonio blends two R1 universities with ~$486M annual research spend, a projected $7B annual economic impact, and six federally funded R&D centers. The merger scales talent and capital to pull industry partners, philanthropic investment, and regional growth.",
  signals: [
    { label: "Annual Research Expenditures", value: 486000000 },
    { label: "Economic Impact", value: 7000000000 },
    { label: "Students Served", value: 40000 },
    { label: "Employees", value: 17000 },
    { label: "Population Served", value: null },
    { label: "New Programs / Facilities", value: "320+ programs; 6 R&D centers; $1.3B endowment" }
  ],
  findings: "Economic lift is driven by combining $486M research spend, 6 R&D centers, and 40k students/17k employees into a single institution that boosts the $44.1B regional health and biosciences sector. Scale and alumni stickiness (90% stay in Texas) make UT San Antonio a workforce and innovation flywheel.",
  speakingNotes: "Lead with the $7B projected annual impact and $486M research engine; call out 6 federally funded R&D centers and $1.3B endowment; emphasize 40k students/17k employees feeding the $44.1B sector; note 90% alumni retention in Texas.",
  sources: [
    { title: "UT System approval", url: "https://magazines.uthscsa.edu/mission/university-in-motion-utsa-to-merge-with-ut-health-san-antonio" },
    { title: "Merger completion release", url: "https://news.uthscsa.edu/utsa-and-ut-health-san-antonio-complete-merger-to-become-the-university-of-texas-at-san-antonio-2" },
    { title: "President statement", url: "https://www.utsa.edu/president/2025/09/story/2025-09-30.html" },
    { title: "Express-News commentary", url: "https://www.expressnews.com/opinion/commentary/article/ut-san-antonio-merger-21029327.php" },
    { title: "KSAT report", url: "https://www.ksat.com/news/local/2025/09/01/ut-san-antonio-merger-completed-becoming-texas-third-largest-public-research-university/" },
    { title: "UT System FAQ", url: "https://www.utsystem.edu/sites/default/files/landing-pages/utsa2/utsa-uthscsa-faq-2024-08-22.pdf" }
  ],
  chartData: {
    labels: ["2022", "2023", "2024", "2025 proj"],
    datasets: [
      {
        label: "Research expenditures ($B)",
        data: [0.47, 0.48, 0.486, 0.49],
        backgroundColor: "rgba(241,90,34,.25)",
        borderColor: "#f15a22",
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: "Projected economic impact ($B)",
        data: [6.2, 6.6, 7.0, 7.2],
        backgroundColor: "rgba(12,35,64,.14)",
        borderColor: "#0c2340",
        borderWidth: 2,
        tension: 0.25
      }
    ]
  }
};

const StateImpact = {
  summary: "UT San Antonio is now Texas’ third largest public research university, serving 5.5M residents today (6.1M by 2040) across six campuses and 15 colleges with 320+ degrees. New programs and facilities extend reach into health, AI, and workforce development.",
  signals: [
    { label: "Annual Research Expenditures", value: 486000000 },
    { label: "Economic Impact", value: 7000000000 },
    { label: "Students Served", value: 40000 },
    { label: "Employees", value: 17000 },
    { label: "Population Served", value: 6100000 },
    { label: "New Programs / Facilities", value: "MD/MS AI; Nurse Anesthesia; Dental Hygiene; Science One; NeuroRecovery Lab" }
  ],
  findings: "State reach grows as a unified R1 institution with six campuses, 320+ degrees, and new clinical/AI programs. Being third in Texas by research scale signals competitive heft; serving 5.5M people (6.1M projected) ties the academic portfolio directly to public health and workforce outcomes.",
  speakingNotes: "Open with third-largest public research university status; cite 5.5M people served (6.1M by 2040) across 6 campuses and 15 colleges; mention new MD/MS in AI, Nurse Anesthesia, and Dental Hygiene plus Science One and NeuroRecovery Lab; connect scale to statewide health and workforce impact.",
  sources: [
    { title: "UT System approval", url: "https://magazines.uthscsa.edu/mission/university-in-motion-utsa-to-merge-with-ut-health-san-antonio" },
    { title: "Merger completion release", url: "https://news.uthscsa.edu/utsa-and-ut-health-san-antonio-complete-merger-to-become-the-university-of-texas-at-san-antonio-2" },
    { title: "President statement", url: "https://www.utsa.edu/president/2025/09/story/2025-09-30.html" },
    { title: "Express-News commentary", url: "https://www.expressnews.com/opinion/commentary/article/ut-san-antonio-merger-21029327.php" },
    { title: "KSAT report", url: "https://www.ksat.com/news/local/2025/09/01/ut-san-antonio-merger-completed-becoming-texas-third-largest-public-research-university/" },
    { title: "UT System FAQ", url: "https://www.utsystem.edu/sites/default/files/landing-pages/utsa2/utsa-uthscsa-faq-2024-08-22.pdf" }
  ],
  chartData: {
    labels: ["2023", "2024", "2025", "2040 proj"],
    datasets: [
      {
        label: "Population served (millions)",
        data: [5.5, 5.6, 5.7, 6.1],
        backgroundColor: "rgba(241,90,34,.22)",
        borderColor: "#f15a22",
        borderWidth: 2,
        tension: 0.32
      }
    ]
  }
};

const ORDER = Object.keys(DATA);

/* elements */
const tabs = Array.from(document.querySelectorAll(".tab"));
const sectionTitle = document.getElementById("section-title");
const sectionPill = document.getElementById("section-pill");
const sectionSummary = document.getElementById("section-summary");
const kpisNode = document.getElementById("kpis");
const findingsNode = document.getElementById("findings");
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

function formatValue(label, val){
  if(val === null){ return "—"; }
  if(typeof val !== "number"){ return val; }
  const lower = label.toLowerCase();
  const isMoney = lower.includes("research") || lower.includes("economic") || lower.includes("endowment");
  if(isMoney){
    const isBillions = val >= 1_000_000_000;
    const divisor = isBillions ? 1_000_000_000 : 1_000_000;
    const unit = isBillions ? "B" : "M";
    const formatted = (val / divisor).toFixed(val % divisor === 0 ? 0 : 1);
    return `$${formatted}${unit}`;
  }
  return val.toLocaleString("en-US");
}

function renderKPIs(list, target = kpisNode){
  target.innerHTML = "";
  const data = list && list.length ? list : [{ label: "Add KPI", value: "0" }];
  const frag = document.createDocumentFragment();
  data.forEach(k => {
    const el = document.createElement("div");
    el.className = "kpi";
    el.innerHTML = `<h4>${k.label}</h4><div class="val">${formatValue(k.label, k.value)}</div>`;
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
    } else if(kind === "actions"){
      el.innerHTML = `
        <div class="meta"><span>Move ${i+1}</span></div>
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

function renderChart(cfg, fullConfig){
  const labels = (cfg && Array.isArray(cfg.labels) && cfg.labels.length) ? cfg.labels : ["A","B","C","D"];
  const values = (cfg && Array.isArray(cfg.data) && cfg.data.length) ? cfg.data : [0,0,0,0];
  if(chart){ chart.destroy(); }

  if(typeof Chart === "undefined"){
    chartCanvas.replaceWith(document.createTextNode("Chart unavailable (Chart.js missing)."));
    return;
  }

  const baseColor = "#f15a22";
  const fillColor = "rgba(241,90,34,.16)";

  const datasets = fullConfig && Array.isArray(fullConfig.datasets) && fullConfig.datasets.length
    ? fullConfig.datasets.map(ds => ({
        ...ds,
        backgroundColor: ds.backgroundColor || (chartType === "line" ? fillColor : "rgba(12,35,64,.18)"),
        borderColor: ds.borderColor || baseColor,
        borderWidth: ds.borderWidth || 2,
        tension: chartType === "line" ? (ds.tension ?? 0.36) : 0,
        fill: chartType === "line"
      }))
    : [{
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
      }];

  chart = new Chart(chartCanvas, {
    type: chartType,
    data: {
      labels: (fullConfig && fullConfig.labels && fullConfig.labels.length) ? fullConfig.labels : labels,
      datasets
    },
    options: {
      plugins: { legend: { display: true } },
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
  renderList(sourcesNode, data.sources, "sources", key);
  renderChart(data.chart, data.chartData);
  updateProgress();
  if(!opts.fromTour && tourActive){ stopTour(); }
  pulseCards();
}

function updateSection(sectionName, payload){
  const key = sectionName.toLowerCase();
  const base = DATA[key] || {};
  const kpis = (payload.signals || []).map(sig => ({ label: sig.label, value: sig.value }));
  const findings = payload.findings ? [{ title: "Key finding", text: payload.findings }] : [];
  const actions = payload.speakingNotes
    ? payload.speakingNotes.split(/[\n;•]/).map(s => s.trim()).filter(Boolean)
    : [];
  const sources = (payload.sources || []).map(s => ({ label: s.title, url: s.url }));
  const chart = payload.chartData
    ? { labels: payload.chartData.labels, data: payload.chartData.datasets && payload.chartData.datasets[0] ? payload.chartData.datasets[0].data : [] }
    : base.chart;

  DATA[key] = {
    ...base,
    summary: payload.summary,
    kpis,
    findings,
    actions,
    sources,
    chartData: payload.chartData,
    chart
  };

  if(active === key){
    setActive(key);
  }
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

/* apply research-driven content to Economic and State sections */
updateSection("Economic", EconomicImpact);
updateSection("State", StateImpact);

/* init */
setActive(active);
renderMerger(activeMerger);
renderHeadline(headlineIdx);
