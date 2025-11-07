    /* =====================================================================
       CONTENT MODEL — Update this object with your team’s inputs. 
       Each section key controls the whole page when its tab is active.
       No build step. Client‑side only. Good for GitHub Pages.
    ====================================================================== */
    const DATA = {
        student: {
          summary: "TODO: Student Impact summary (2–3 sentences).",
          kpis: [
            { label: "TODO KPI label", value: "TODO value" }
          ],
          findings: [
            { title: "TODO finding title", text: "Describe the insight in 1–2 sentences with a clear mechanism."}
          ],
          chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
          notes: [
            "TODO speaking note #1",
            "TODO speaking note #2"
          ],
          sources: [
            { label: "TODO source label", url: "https://example.com" }
          ]
        },
        faculty: {
          summary: "TODO: Faculty Impact summary (2–3 sentences).",
          kpis: [ { label: "TODO KPI label", value: "TODO value" } ],
          findings: [ { title: "TODO finding title", text: "1–2 sentence explanation." } ],
          chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
          notes: [ "TODO speaking note #1" ],
          sources: [ { label: "TODO source label", url: "https://example.com" } ]
        },
        city: {
          summary: "TODO: City Impact summary (2–3 sentences).",
          kpis: [ { label: "TODO KPI label", value: "TODO value" } ],
          findings: [ { title: "TODO finding title", text: "1–2 sentence explanation." } ],
          chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
          notes: [ "TODO speaking note #1" ],
          sources: [ { label: "TODO source label", url: "https://example.com" } ]
        },
        state: {
          summary: "TODO: State Impact summary (2–3 sentences).",
          kpis: [ { label: "TODO KPI label", value: "TODO value" } ],
          findings: [ { title: "TODO finding title", text: "1–2 sentence explanation." } ],
          chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
          notes: [ "TODO speaking note #1" ],
          sources: [ { label: "TODO source label", url: "https://example.com" } ]
        },
        economic: {
          summary: "TODO: Economic Impact summary (2–3 sentences).",
          kpis: [ { label: "TODO KPI label", value: "TODO value" } ],
          findings: [ { title: "TODO finding title", text: "1–2 sentence explanation." } ],
          chart: { labels: ["A","B","C","D"], data: [0,0,0,0] },
          notes: [ "TODO speaking note #1" ],
          sources: [ { label: "TODO source label", url: "https://example.com" } ]
        }
      };
  
      /* =============================================================
         UI STATE
      ============================================================== */
      const tabs = Array.from(document.querySelectorAll('.tab'));
      const bar = document.getElementById('bar');
      const pill = document.getElementById('pill-tag');
      const summary = document.getElementById('section-summary');
      const kpisNode = document.getElementById('kpis');
      const findingsNode = document.getElementById('findings');
      const notesNode = document.getElementById('notes');
      const sourcesNode = document.getElementById('sources');
      const chartCanvas = document.getElementById('chart');
      const presenterBtn = document.getElementById('presenter');
      const printBtn = document.getElementById('print');
      const exportBtn = document.getElementById('export');
      const searchBox = document.getElementById('q');
  
      let active = 'student';
      let chart;
  
      function setActive(tag){
        active = tag;
        for(const b of tabs){
          const on = b.dataset.tag === tag;
          b.classList.toggle('active', on);
          b.setAttribute('aria-selected', on);
        }
        const order = ['student','faculty','city','state','economic'];
        const idx = order.indexOf(tag);
        bar.style.width = ((idx+1)/order.length*100) + '%';
  
        const d = DATA[tag];
        pill.textContent = bCase(tag) + ' Impact';
        summary.textContent = d.summary;
  
        // KPIs
        kpisNode.innerHTML = '';
        d.kpis.forEach(k => {
          const el = document.createElement('div');
          el.className = 'kpi';
          el.innerHTML = `<h3>${k.label}</h3><div class="val">${k.value}</div>`;
          kpisNode.appendChild(el);
        });
  
        // Findings
        findingsNode.innerHTML = '';
        const q = searchBox.value.trim().toLowerCase();
        const sectionKey = tag;
        const candidate = (d.findings || []).filter(function(f){
          const t = (f.title || '') + (f.text || '');
          return !q || t.toLowerCase().includes(q);
        });
        if(candidate.length === 0){
          var el = document.createElement('div');
          el.className = 'item';
          var label = document.createElement('div');
          label.className = 'meta';
          label.innerHTML = '<span class="tag">Template</span>';
          var title = document.createElement('div');
          title.style.fontWeight = '700';
          title.textContent = 'Add findings';
          var help = document.createElement('div');
          help.className = 'small';
          help.textContent = 'Use DATA.' + sectionKey + '.findings with objects: { title, text }.';
          el.appendChild(label); el.appendChild(title); el.appendChild(help);
          findingsNode.appendChild(el);
        } else {
          candidate.forEach(function(f,i){
            var el = document.createElement('div');
            el.className = 'item';
            var meta = document.createElement('div');
            meta.className = 'meta';
            meta.innerHTML = '<span class="tag">Finding ' + (i+1) + '</span>';
            var t = document.createElement('div');
            t.style.fontWeight = '700';
            t.textContent = f.title || 'Untitled';
            var txt = document.createElement('div');
            txt.className = 'small';
            txt.textContent = f.text || '';
            el.appendChild(meta); el.appendChild(t); el.appendChild(txt);
            findingsNode.appendChild(el);
          });
        }
  
        // Notes
        notesNode.innerHTML = '';
        d.notes.forEach((n,i)=>{
          const el = document.createElement('div');
          el.className = 'item';
          el.innerHTML = `<div class="meta"><span class="tag">Note ${i+1}</span></div><div>${n}</div>`;
          notesNode.appendChild(el);
        });
  
        // Sources
        sourcesNode.innerHTML = '';
        d.sources.forEach(s=>{
          const el = document.createElement('div');
          el.className = 'item';
          el.innerHTML = `<div><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></div><div class="small">${s.url}</div>`;
          sourcesNode.appendChild(el);
        });
  
        // Chart
        const labels = d.chart.labels;
        const values = d.chart.data;
        if(chart){ chart.destroy(); }
        chart = new Chart(chartCanvas, {
          type: 'line',
          data: { labels, datasets: [{ label: bCase(tag), data: values, tension:.35, fill:true }]},
          options: {
            plugins: { legend: { display:false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,.06)' }, ticks:{ color:'#b7bce0' } },
              y: { grid: { color: 'rgba(255,255,255,.06)' }, ticks:{ color:'#b7bce0' } }
            }
          }
        });
      }
  
      function bCase(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
  
      // Init
      tabs.forEach(b=> b.addEventListener('click', ()=> setActive(b.dataset.tag)) );
      searchBox.addEventListener('input', ()=> setActive(active));
  
      // Presenter Mode
      presenterBtn.addEventListener('click', ()=>{
        const on = presenterBtn.getAttribute('aria-pressed') === 'true';
        const next = !on;
        presenterBtn.setAttribute('aria-pressed', String(next));
        document.body.classList.toggle('focus', next);
      });
  
      // Keyboard control for presentation
      document.addEventListener('keydown', e=>{
        const order = ['student','faculty','city','state','economic'];
        const idx = order.indexOf(active);
        if(e.key === 'ArrowRight') setActive(order[Math.min(order.length-1, idx+1)]);
        if(e.key === 'ArrowLeft') setActive(order[Math.max(0, idx-1)]);
        if(e.key.toLowerCase() === 'p') presenterBtn.click();
      });
  
      // Print and export
      printBtn.addEventListener('click', ()=> window.print());
      exportBtn.addEventListener('click', ()=>{
        const d = DATA[active];
        const notes = d.notes.map((n,i)=> `${i+1}. ${n}`).join('\n');
        const blob = new Blob([`Speaking Notes — ${bCase(active)} Impact\n\n${notes}\n`], { type: 'text/plain' });
        navigator.clipboard.writeText(`Speaking Notes — ${bCase(active)} Impact\n\n${notes}\n`);
        alert('Notes copied to clipboard.');
      });
  
      // Deep link support: ?tab=city
      const params = new URLSearchParams(location.search);
      const initial = params.get('tab');
      if(['student','faculty','city','state','economic'].includes(initial)) setActive(initial); else setActive('student');