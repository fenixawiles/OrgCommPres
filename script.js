/* simple content model - placeholders that your team can fill */
const DATA = {
    student: {
      summary: "TODO: add a short summary (2 to 3 sentences) for Student Impact.",
      kpis: [
        { label: "TODO KPI", value: "0" },
        { label: "TODO KPI", value: "0" },
        { label: "TODO KPI", value: "0" },
        { label: "TODO KPI", value: "0" }
      ],
      findings: [
        { title: "Add a finding title", text: "Describe the insight in 1 to 2 sentences with a clear mechanism." }
      ],
      chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
      notes: [
        "Add a speaking note for this section.",
        "Keep notes short and direct."
      ],
      sources: [
        { label: "Add source label", url: "https://example.com" }
      ]
    },
    faculty: {
      summary: "TODO: add a short summary (2 to 3 sentences) for Faculty Impact.",
      kpis: [ { label: "TODO KPI", value: "0" } ],
      findings: [ { title: "Add a finding title", text: "1 to 2 sentence explanation." } ],
      chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
      notes: [ "Add a speaking note for this section." ],
      sources: [ { label: "Add source label", url: "https://example.com" } ]
    },
    city: {
      summary: "TODO: add a short summary (2 to 3 sentences) for City Impact.",
      kpis: [ { label: "TODO KPI", value: "0" } ],
      findings: [ { title: "Add a finding title", text: "1 to 2 sentence explanation." } ],
      chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
      notes: [ "Add a speaking note for this section." ],
      sources: [ { label: "Add source label", url: "https://example.com" } ]
    },
    state: {
      summary: "TODO: add a short summary (2 to 3 sentences) for State Impact.",
      kpis: [ { label: "TODO KPI", value: "0" } ],
      findings: [ { title: "Add a finding title", text: "1 to 2 sentence explanation." } ],
      chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
      notes: [ "Add a speaking note for this section." ],
      sources: [ { label: "Add source label", url: "https://example.com" } ]
    },
    economic: {
      summary: "TODO: add a short summary (2 to 3 sentences) for Economic Impact.",
      kpis: [ { label: "TODO KPI", value: "0" } ],
      findings: [ { title: "Add a finding title", text: "1 to 2 sentence explanation." } ],
      chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
      notes: [ "Add a speaking note for this section." ],
      sources: [ { label: "Add source label", url: "https://example.com" } ]
    }
  };
  
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
  
  let active = "student";
  let chart;
  
  /* helpers */
  function titleCase(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
  
  function renderKPIs(list){
    kpisNode.innerHTML = "";
    if(!list || list.length === 0){
      kpisNode.innerHTML = `<div class="kpi"><h4>Example</h4><div class="val">0</div></div>`;
      return;
    }
    list.forEach(k => {
      const el = document.createElement("div");
      el.className = "kpi";
      el.innerHTML = `<h4>${k.label}</h4><div class="val">${k.value}</div>`;
      kpisNode.appendChild(el);
    });
  }
  
  function renderList(node, list, kind){
    node.innerHTML = "";
    if(!list || list.length === 0){
      const el = document.createElement("div");
      el.className = "item";
      el.innerHTML = `<div class="meta"><span>${titleCase(kind)} template</span></div><div>Add entries in DATA.${active}.${kind}</div>`;
      node.appendChild(el);
      return;
    }
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
        el.innerHTML = `
          <div><a href="${obj.url}" target="_blank" rel="noopener noreferrer">${label}</a></div>
          <div class="muted small">${obj.url || ""}</div>
        `;
      }
      node.appendChild(el);
    });
  }
  
  function renderChart(cfg){
    const labels = (cfg && cfg.labels) ? cfg.labels : ["A","B","C","D"];
    const values = (cfg && cfg.data) ? cfg.data : [0,0,0,0];
    if(chart){ chart.destroy(); }
    chart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: titleCase(active) + " trend",
          data: values,
          fill: true,
          tension: 0.3,
          borderColor: "#8c7851",
          backgroundColor: "rgba(140,120,81,.12)",
          pointRadius: 3
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: "rgba(0,0,0,.06)" } },
          y: { grid: { color: "rgba(0,0,0,.06)" } }
        }
      }
    });
  }
  
  function setActive(key){
    active = key;
    tabs.forEach(b => {
      const on = b.dataset.section === key;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", String(on));
    });
  
    const data = DATA[key];
  
    sectionTitle.textContent = `${titleCase(key)} Impact`;
    sectionPill.textContent = `${titleCase(key)} active`;
    sectionSummary.textContent = data.summary || "No summary yet.";
  
    renderKPIs(data.kpis);
    renderList(findingsNode, data.findings, "findings");
    renderList(notesNode, data.notes, "notes");
    renderList(sourcesNode, data.sources, "sources");
    renderChart(data.chart);
  }
  
  /* events */
  tabs.forEach(b => {
    b.addEventListener("click", () => setActive(b.dataset.section));
  });
  document.addEventListener("keydown", e => {
    const order = ["student","faculty","city","state","economic"];
    const i = order.indexOf(active);
    if(e.key === "ArrowRight") setActive(order[Math.min(i+1, order.length-1)]);
    if(e.key === "ArrowLeft") setActive(order[Math.max(i-1, 0)]);
  });
  
  /* init */
  setActive("student");