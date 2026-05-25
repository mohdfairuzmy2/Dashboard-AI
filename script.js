const kpis = [
  { domain: "Governance", name: "% kementerian ada AI Policy", target: "100%", progress: 82 },
  { domain: "Governance", name: "% agensi ada AI Governance Committee", target: "100%", progress: 74 },
  { domain: "Governance", name: "% kementerian ada Chief AI Officer / AI Lead", target: "90%", progress: 63 },
  { domain: "Talent", name: "Bilangan penjawat awam dilatih AI", target: "1 juta", progress: 41 },
  { domain: "Talent", name: "% pengurusan tertinggi dilatih AI Leadership", target: "100%", progress: 56 },
  { domain: "Talent", name: "Bilangan rakyat dilatih AI", target: "10 juta", progress: 38 },
  { domain: "Delivery", name: "% perkhidmatan kerajaan menggunakan AI", target: "80%", progress: 46 },
  { domain: "Delivery", name: "Bilangan AI use cases sektor awam", target: "500+", progress: 58 },
  { domain: "Citizen Impact", name: "Pengurangan masa proses perkhidmatan", target: "50%", progress: 52 },
  { domain: "Citizen Impact", name: "Skor kepuasan rakyat", target: ">90%", progress: 69 },
  { domain: "Productivity", name: "Penjimatan kos operasi kerajaan", target: "RM1 bilion", progress: 44 },
  { domain: "Trust", name: "AI Public Trust Index", target: ">85%", progress: 77 },
  { domain: "Inclusion", name: "% akses AI inklusif", target: "100%", progress: 61 },
  { domain: "Sustainability", name: "% penggunaan AI hijau", target: "70%", progress: 35 },
];

const ministries = [
  { name: "Kementerian Digital", lead: "AI governance dan platform kerajaan", score: 88, status: "Advanced" },
  { name: "MAMPU", lead: "Standard, integrasi dan delivery monitoring", score: 84, status: "Advanced" },
  { name: "Kementerian Kesihatan", lead: "Healthcare AI dan triage perkhidmatan", score: 79, status: "Progressing" },
  { name: "Kementerian Pendidikan", lead: "AI literacy pelajar dan guru", score: 75, status: "Progressing" },
  { name: "Kementerian Kewangan", lead: "Predictive budgeting dan fraud detection", score: 72, status: "Progressing" },
  { name: "Jabatan Perdana Menteri", lead: "Koordinasi reformasi AI nasional", score: 69, status: "Progressing" },
  { name: "Kementerian Pertanian", lead: "Crop analytics dan food security AI", score: 58, status: "Beginner" },
  { name: "Kementerian Dalam Negeri", lead: "Enforcement analytics dan risk screening", score: 55, status: "Beginner" },
];

const projects = [
  {
    title: "GovAI Citizen Service Assistant",
    sector: "Citizen Services",
    owner: "MAMPU",
    status: "On Track",
    impact: "Multilingual AI untuk pertanyaan kerajaan dan semakan status.",
    progress: 72,
    risk: "Data integration",
  },
  {
    title: "AI Triage Klinik Kesihatan",
    sector: "Healthcare",
    owner: "KKM",
    status: "Watch",
    impact: "Mengurangkan masa menunggu dan mempercepat triage kes ringan.",
    progress: 58,
    risk: "Clinical governance",
  },
  {
    title: "Predictive Budgeting & Leakages Monitor",
    sector: "Finance",
    owner: "MOF",
    status: "On Track",
    impact: "Mengesan corak perbelanjaan, ketirisan dan ruang penjimatan.",
    progress: 64,
    risk: "Model explainability",
  },
  {
    title: "AI Talent Analytics HRMIS",
    sector: "HR",
    owner: "JPA",
    status: "Delayed",
    impact: "Memetakan kemahiran AI penjawat awam dan keperluan latihan.",
    progress: 39,
    risk: "Data quality",
  },
  {
    title: "Fraud Detection Bantuan Kerajaan",
    sector: "Enforcement",
    owner: "JPM / MOF",
    status: "Watch",
    impact: "Mengenal pasti anomali permohonan bantuan dan risiko salah guna.",
    progress: 51,
    risk: "Bias monitoring",
  },
  {
    title: "Adaptive Learning Nasional",
    sector: "Education",
    owner: "KPM / KPT",
    status: "On Track",
    impact: "Personalisasi pembelajaran dan sokongan AI literacy pelajar.",
    progress: 67,
    risk: "Digital divide",
  },
];

const states = [
  { name: "Selangor", score: 82, note: "Latihan industri dan komuniti tinggi" },
  { name: "Kuala Lumpur", score: 86, note: "Akses digital dan IPT kukuh" },
  { name: "Pulau Pinang", score: 78, note: "PMKS dan industri aktif" },
  { name: "Johor", score: 70, note: "Perluasan komuniti dan TVET" },
  { name: "Sabah", score: 49, note: "Jurang capaian luar bandar" },
  { name: "Sarawak", score: 53, note: "Keperluan capaian daerah pedalaman" },
];

const segments = [
  { name: "Penjawat awam", target: "1 juta", progress: 41 },
  { name: "Pelajar sekolah", target: "3 juta", progress: 36 },
  { name: "IPT/IPTS", target: "2 juta", progress: 48 },
  { name: "PMKS", target: "1 juta", progress: 32 },
  { name: "Komuniti luar bandar", target: "1 juta", progress: 27 },
  { name: "Pekerja industri", target: "1.5 juta", progress: 44 },
  { name: "Warga emas/komuniti khas", target: "500 ribu", progress: 18 },
];

const risks = [
  { name: "Data leakage", level: "High", detail: "Integrasi data merentas agensi perlu audit trail dan kawalan akses." },
  { name: "Bias AI", level: "Medium", detail: "Model keputusan rakyat perlu fairness testing dan human review." },
  { name: "Deepfake threats", level: "Medium", detail: "Ancaman maklumat palsu terhadap komunikasi kerajaan." },
  { name: "Cybersecurity incidents", level: "High", detail: "Sistem AI perlu zero trust, logging dan incident response." },
  { name: "AI ethics complaints", level: "Medium", detail: "Saluran aduan dan semakan etika perlu tersedia." },
  { name: "Compliance violations", level: "Low", detail: "Pematuhan PDPA dan standard keselamatan kerajaan." },
];

const alerts = [
  { title: "3 kementerian belum lantik AI Lead", detail: "Perlu keputusan pelantikan dan mandat pelaksanaan.", tone: "danger" },
  { title: "2 projek impak rakyat lewat milestone", detail: "Disyorkan escalation kepada delivery huddle mingguan.", tone: "warning" },
  { title: "Trust index meningkat tetapi belum capai sasaran", detail: "Perlu komunikasi awam dan ketelusan outcome.", tone: "info" },
];

const nationalStats = [
  { label: "Jumlah Use Cases", value: "286", note: "58% menuju sasaran 500+" },
  { label: "Kementerian Advanced", value: "2", note: "Daripada 8 entiti contoh" },
  { label: "Projek On Track", value: "50%", note: "3 daripada 6 projek utama" },
  { label: "Purata Readiness Negeri", value: "70%", note: "Berdasarkan AI literacy map" },
  { label: "Latihan Rakyat", value: "3.8j", note: "Anggaran capaian terkumpul" },
  { label: "Skor Trust", value: "77%", note: "Belum capai sasaran >85%" },
  { label: "Risiko Tinggi", value: "2", note: "Data leakage dan cybersecurity" },
  { label: "Projek Lewat", value: "1", note: "Perlu intervensi KSN" },
];

const useCaseTrend = [
  { month: "Jan", value: 118 },
  { month: "Feb", value: 146 },
  { month: "Mac", value: 178 },
  { month: "Apr", value: 215 },
  { month: "Mei", value: 249 },
  { month: "Jun", value: 286 },
];

const riskStats = [
  { label: "Data Leakage", value: 78, detail: "Risiko integrasi data merentas agensi" },
  { label: "Cybersecurity", value: 74, detail: "Keperluan zero trust dan incident response" },
  { label: "Bias AI", value: 59, detail: "Perlu fairness testing untuk keputusan rakyat" },
  { label: "Deepfake", value: 52, detail: "Ancaman maklumat palsu dan reputasi kerajaan" },
  { label: "Etika AI", value: 48, detail: "Saluran aduan dan audit etika perlu jelas" },
  { label: "Compliance", value: 31, detail: "Pematuhan PDPA dan standard keselamatan" },
];

const statusTone = {
  Advanced: "advanced",
  Progressing: "progressing",
  Beginner: "beginner",
  "On Track": "success",
  Watch: "warning",
  Delayed: "danger",
  High: "danger",
  Medium: "warning",
  Low: "success",
};

function progressTone(value) {
  if (value >= 75) return "success";
  if (value >= 50) return "warning";
  return "danger";
}

function createProgress(value) {
  return `
    <div class="progress-cell">
      <div class="progress-track"><b class="${progressTone(value)}" style="width: ${value}%"></b></div>
      <span>${value}%</span>
    </div>
  `;
}

function populateSelect(selectId, values) {
  const select = document.getElementById(selectId);
  const uniqueValues = [...new Set(values)];

  uniqueValues.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderKpis(domain = "all") {
  const table = document.getElementById("kpiTable");
  const filtered = domain === "all" ? kpis : kpis.filter((item) => item.domain === domain);

  table.innerHTML = filtered
    .map(
      (item) => `
        <tr>
          <td><strong>${item.domain}</strong></td>
          <td>${item.name}</td>
          <td><strong>${item.target}</strong></td>
          <td>${createProgress(item.progress)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderMinistries() {
  const list = document.getElementById("ministryRanking");
  list.innerHTML = ministries
    .map(
      (ministry, index) => `
        <div class="ranking-row">
          <span class="rank-number">${index + 1}</span>
          <div>
            <strong>${ministry.name}</strong>
            <p>${ministry.lead}</p>
          </div>
          <span class="status ${statusTone[ministry.status]}">${ministry.status}</span>
          ${createProgress(ministry.score)}
        </div>
      `,
    )
    .join("");
}

function renderProjects(sector = "all") {
  const list = document.getElementById("projectList");
  const filtered = sector === "all" ? projects : projects.filter((project) => project.sector === sector);

  list.innerHTML = filtered
    .map(
      (project) => `
        <div class="project-card">
          <div class="project-topline">
            <strong>${project.title}</strong>
            <span class="pill ${statusTone[project.status]}">${project.status}</span>
          </div>
          <span>${project.impact}</span>
          <div class="project-meta">
            <span>${project.sector}</span>
            <span>${project.owner}</span>
            <span>Risk: ${project.risk}</span>
          </div>
          <div style="margin-top: 12px">${createProgress(project.progress)}</div>
        </div>
      `,
    )
    .join("");
}

function renderStates() {
  const grid = document.getElementById("stateGrid");
  grid.innerHTML = states
    .map(
      (state) => `
        <div class="state-card">
          <div class="project-topline">
            <strong>${state.name}</strong>
            <span class="pill ${progressTone(state.score)}">${state.score}%</span>
          </div>
          <span>${state.note}</span>
        </div>
      `,
    )
    .join("");
}

function renderSegments() {
  const list = document.getElementById("segmentList");
  list.innerHTML = segments
    .map(
      (segment) => `
        <div class="segment-row">
          <div class="segment-topline">
            <strong>${segment.name}</strong>
            <span>${segment.target}</span>
          </div>
          ${createProgress(segment.progress)}
        </div>
      `,
    )
    .join("");
}

function renderRisks() {
  const grid = document.getElementById("riskGrid");
  grid.innerHTML = risks
    .map(
      (risk) => `
        <div class="risk-item">
          <div class="risk-topline">
            <strong>${risk.name}</strong>
            <span class="pill ${statusTone[risk.level]}">${risk.level}</span>
          </div>
          <span>${risk.detail}</span>
        </div>
      `,
    )
    .join("");
}

function renderAlerts() {
  const stack = document.getElementById("alertStack");
  stack.innerHTML = alerts
    .map(
      (alert) => `
        <div class="alert-item">
          <strong>${alert.title}</strong>
          <span>${alert.detail}</span>
        </div>
      `,
    )
    .join("");
}

function renderStatisticalSnapshot() {
  const strip = document.getElementById("nationalStatsStrip");
  strip.innerHTML = nationalStats
    .map(
      (stat) => `
        <div class="stat-tile">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
          <small>${stat.note}</small>
        </div>
      `,
    )
    .join("");
}

function renderUseCaseTrendChart() {
  const chart = document.getElementById("useCaseTrendChart");
  const maxValue = Math.max(...useCaseTrend.map((item) => item.value));
  const width = 760;
  const height = 320;
  const plotTop = 28;
  const plotRight = 24;
  const plotBottom = 54;
  const plotLeft = 52;
  const plotHeight = height - plotTop - plotBottom;
  const barGap = 22;
  const barWidth = (width - plotLeft - plotRight - barGap * (useCaseTrend.length - 1)) / useCaseTrend.length;

  const bars = useCaseTrend
    .map((item, index) => {
      const barHeight = (item.value / maxValue) * plotHeight;
      const x = plotLeft + index * (barWidth + barGap);
      const y = plotTop + plotHeight - barHeight;
      const labelX = x + barWidth / 2;

      return `
        <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="10" fill="var(--primary)"></rect>
        <text x="${labelX}" y="${y - 8}" text-anchor="middle" class="chart-value">${item.value}</text>
        <text x="${labelX}" y="${height - 20}" text-anchor="middle" class="axis-label">${item.month}</text>
      `;
    })
    .join("");

  chart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img">
      <title>Pertumbuhan AI use cases sektor awam dari Januari hingga Jun</title>
      <line x1="${plotLeft}" y1="${plotTop + plotHeight}" x2="${width - plotRight}" y2="${plotTop + plotHeight}" stroke="var(--line)" stroke-width="2"></line>
      <line x1="${plotLeft}" y1="${plotTop}" x2="${plotLeft}" y2="${plotTop + plotHeight}" stroke="var(--line)" stroke-width="2"></line>
      ${bars}
      <text x="${plotLeft}" y="16" class="chart-caption">Unit: bilangan use cases sektor awam</text>
      <text x="${width / 2}" y="${height - 2}" text-anchor="middle" class="chart-caption">Bulan pelaporan</text>
    </svg>
  `;
}

function renderProjectStatusDonut() {
  const donut = document.getElementById("projectStatusDonut");
  const legend = document.getElementById("projectStatusLegend");
  const statusCounts = projects.reduce((counts, project) => {
    counts[project.status] = (counts[project.status] || 0) + 1;
    return counts;
  }, {});
  const total = projects.length;
  const onTrackEnd = ((statusCounts["On Track"] || 0) / total) * 100;
  const watchEnd = onTrackEnd + ((statusCounts.Watch || 0) / total) * 100;

  donut.style.setProperty("--on-track", `${onTrackEnd}%`);
  donut.style.setProperty("--watch", `${watchEnd}%`);
  donut.dataset.total = `${total}`;

  legend.innerHTML = [
    ["On Track", statusCounts["On Track"] || 0, "success"],
    ["Watch", statusCounts.Watch || 0, "warning"],
    ["Delayed", statusCounts.Delayed || 0, "danger"],
  ]
    .map(
      ([label, value, tone]) => `
        <div class="legend-row">
          <span><i class="dot ${tone === "success" ? "green" : tone === "warning" ? "yellow" : "red"}"></i>${label}</span>
          <strong>${value} projek</strong>
        </div>
      `,
    )
    .join("");
}

function renderCompactBars(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
        <div class="compact-bar-row">
          <span>${item.label}</span>
          <div class="progress-track"><b class="${progressTone(item.value)}" style="width: ${item.value}%"></b></div>
          <strong>${item.value}%</strong>
        </div>
      `,
    )
    .join("");
}

function renderRiskStatsGrid() {
  const grid = document.getElementById("riskStatsGrid");
  grid.innerHTML = riskStats
    .map(
      (risk) => `
        <div class="risk-stat-card">
          <span>${risk.label}</span>
          <strong>${risk.value}%</strong>
          <p>${risk.detail}</p>
          <div class="progress-track"><b class="${progressTone(100 - risk.value)}" style="width: ${risk.value}%"></b></div>
        </div>
      `,
    )
    .join("");
}

function renderNationalStatistics() {
  renderStatisticalSnapshot();
  renderUseCaseTrendChart();
  renderProjectStatusDonut();
  renderCompactBars(
    "ministryStatsBars",
    ministries.slice(0, 6).map((ministry) => ({ label: ministry.name, value: ministry.score })),
  );
  renderCompactBars(
    "trainingStatsBars",
    segments.map((segment) => ({ label: segment.name, value: segment.progress })),
  );
  renderRiskStatsGrid();
}

function updateTimestamp() {
  const formatter = new Intl.DateTimeFormat("ms-MY", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  document.getElementById("lastUpdated").textContent = `Dikemaskini: ${formatter.format(new Date())}`;
}

function generateExecutiveSummary() {
  const beginnerMinistries = ministries.filter((ministry) => ministry.status === "Beginner").length;
  const delayedProjects = projects.filter((project) => project.status === "Delayed").length;
  const highRisks = risks.filter((risk) => risk.level === "High").map((risk) => risk.name).join(", ");
  const trustKpi = kpis.find((item) => item.name === "AI Public Trust Index");

  document.getElementById("executiveSummary").textContent =
    `Ringkasan KSN: Skor nasional AI berada pada tahap Progressing dengan ${beginnerMinistries} kementerian masih pada tahap Beginner. ` +
    `${delayedProjects} projek memerlukan intervensi segera, khususnya projek talent analytics yang tertangguh. ` +
    `Risiko tertinggi ialah ${highRisks}. AI Public Trust Index kini berada pada ${trustKpi.progress}% daripada sasaran ${trustKpi.target}; ` +
    "cadangan tindakan ialah mengadakan delivery huddle mingguan, mempercepat pelantikan AI Lead kementerian dan mewajibkan AI risk assessment bagi semua projek berimpak rakyat.";
}

function bindFilters() {
  const domainFilter = document.getElementById("domainFilter");
  const projectFilter = document.getElementById("projectFilter");

  populateSelect("domainFilter", kpis.map((item) => item.domain));
  populateSelect("projectFilter", projects.map((project) => project.sector));

  domainFilter.addEventListener("change", (event) => renderKpis(event.target.value));
  projectFilter.addEventListener("change", (event) => renderProjects(event.target.value));
}

function bindNavigationState() {
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-40% 0px -52% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimestamp();
  bindFilters();
  bindNavigationState();

  renderAlerts();
  renderKpis();
  renderMinistries();
  renderProjects();
  renderNationalStatistics();
  renderStates();
  renderSegments();
  renderRisks();

  document.getElementById("exportButton").addEventListener("click", generateExecutiveSummary);
});
