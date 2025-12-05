/* Content model - seeded with plausible presentation data */
const DATA = {
  student: {
    summary: "The joint UTSA × UT Health pipeline now moves students from pre-health to clinical rotations with fewer stop-outs. Advising, scholarships, and placement agreements cut time-to-degree and keep graduates in the region.",
    kpis: [
      { label: "Pipeline students supported", value: "152" },
      { label: "Clinical placements this year", value: "230" },
      { label: "Scholarship support", value: "$1.2M" },
      { label: "UT Health residency match", value: "42%" }
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
    summary: "We’re extending reach to rural and frontier counties using telehealth plus periodic immersion weeks. State workforce scholarships now underwrite UTSA students who commit to in-state service.",
    kpis: [
      { label: "Rural health pilots active", value: "6" },
      { label: "Telehealth visits / month", value: "2.7k" },
      { label: "State workforce scholarships", value: "$3.6M" },
      { label: "Counties represented", value: "21" }
    ],
    findings: [
      { title: "Retention tied to incentives", text: "Scholarship recipients are 2.3× more likely to accept in-state placements after graduation." },
      { title: "Telehealth scales precepting", text: "Virtual precepting added capacity equal to two additional clinics without new buildings." }
    ],
    chart: { labels: ["2019","2020","2021","2022","2023","2024"], data: [2,3,4,5,6,6] },
    notes: [
      "Connect scholarships ($3.6M) to in-state retention; 2.3× uplift.",
      "Explain the telehealth model that substitutes for physical sites.",
      "Flag that we need bandwidth support in 3 rural counties."
    ],
    sources: [
      { label: "Texas higher ed board brief", url: "https://www.highered.texas.gov/" },
      { label: "UT Health telehealth", url: "https://uthscsa.edu/telehealth" }
    ]
  },
  economic: {
    summary: "The partnership continues to be a net job and spend generator. Research, clinical placements, and startup activity now yield a $128M annual economic lift for the region.",
    kpis: [
      { label: "Total economic impact", value: "$128M" },
      { label: "Annual research spend", value: "$24M" },
      { label: "Jobs supported", value: "1,140" },
      { label: "Startups spun out", value: "7" }
    ],
    findings: [
      { title: "Impact is broad-based", text: "Roughly 58% of the $128M comes from induced local spending tied to student and faculty presence." },
      { title: "Startup velocity improving", text: "Seven health-tech spinouts in three years; two are revenue positive and hiring locally." }
    ],
    chart: { labels: ["2019","2020","2021","2022","2023","2024"], data: [60,72,88,101,118,128] },
    notes: [
      "Mention induced spend (58%) to show community lift, not just research dollars.",
      "Call out the two revenue-positive startups as proof of momentum.",
      "Invite city/state partners to co-invest in the next 3 pilots."
    ],
    sources: [
      { label: "Regional impact study", url: "https://www.sanantonio.gov/" },
      { label: "UTSA innovation and economic development", url: "https://www.utsa.edu/ied/" }
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
const notesNode = document.getElementById("notes");
const sourcesNode = document.getElementById("sources");
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

function renderKPIs(list){
  kpisNode.innerHTML = "";
  const data = list && list.length ? list : [{ label: "Add KPI", value: "0" }];
  const frag = document.createDocumentFragment();
  data.forEach(k => {
    const el = document.createElement("div");
    el.className = "kpi";
    el.innerHTML = `<h4>${k.label}</h4><div class="val">${k.value}</div>`;
    frag.appendChild(el);
  });
  kpisNode.appendChild(frag);
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

function renderChart(cfg){
  const labels = (cfg && Array.isArray(cfg.labels) && cfg.labels.length) ? cfg.labels : ["A","B","C","D"];
  const values = (cfg && Array.isArray(cfg.data) && cfg.data.length) ? cfg.data : [0,0,0,0];
  if(chart){ chart.destroy(); }

  if(typeof Chart === "undefined"){
    chartCanvas.replaceWith(document.createTextNode("Chart unavailable (Chart.js missing)."));
    return;
  }

  const baseColor = "#8c7851";
  const fillColor = "rgba(140,120,81,.14)";

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
        backgroundColor: chartType === "line" ? fillColor : "rgba(140,120,81,.35)",
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
