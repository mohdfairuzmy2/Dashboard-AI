const kpis = [
  { domain: "Governance", name: "% kementerian mempunyai AI Policy", target: "100%", progress: 82 },
  { domain: "Governance", name: "% agensi mempunyai Jawatankuasa Governance AI", target: "100%", progress: 74 },
  { domain: "Governance", name: "% kementerian mempunyai Chief AI Officer / AI Lead", target: "90%", progress: 63 },
  { domain: "Bakat", name: "Bilangan penjawat awam dilatih AI", target: "1 juta", progress: 41 },
  { domain: "Bakat", name: "% pengurusan tertinggi dilatih kepimpinan AI", target: "100%", progress: 56 },
  { domain: "Bakat", name: "Bilangan rakyat dilatih AI", target: "10 juta", progress: 38 },
  { domain: "Penyampaian", name: "% perkhidmatan kerajaan menggunakan AI", target: "80%", progress: 46 },
  { domain: "Penyampaian", name: "Bilangan use case AI sektor awam", target: "500+", progress: 58 },
  { domain: "Impak Rakyat", name: "Pengurangan masa proses perkhidmatan", target: "50%", progress: 52 },
  { domain: "Impak Rakyat", name: "Skor kepuasan rakyat", target: ">90%", progress: 69 },
  { domain: "Produktiviti", name: "Penjimatan kos operasi kerajaan", target: "RM1 bilion", progress: 44 },
  { domain: "Trust", name: "Indeks Trust Awam AI", target: ">85%", progress: 77 },
  { domain: "Keterangkuman", name: "% akses AI inklusif", target: "100%", progress: 61 },
  { domain: "Kelestarian", name: "% penggunaan AI hijau", target: "70%", progress: 35 },
];

const ministries = [
  { name: "Kementerian Digital", lead: "Governance AI dan platform kerajaan", score: 88, status: "Advanced" },
  { name: "JDN", lead: "Standard, integrasi dan pemantauan penyampaian", score: 84, status: "Advanced" },
  { name: "Kementerian Kesihatan", lead: "AI kesihatan dan triage perkhidmatan", score: 79, status: "Progressing" },
  { name: "Kementerian Pendidikan", lead: "AI literacy pelajar dan guru", score: 75, status: "Progressing" },
  { name: "Kementerian Kewangan", lead: "Belanjawan prediktif dan fraud detection", score: 72, status: "Progressing" },
  { name: "Jabatan Perdana Menteri", lead: "Koordinasi reformasi AI nasional", score: 69, status: "Progressing" },
  { name: "Kementerian Pertanian", lead: "Analitik tanaman dan food security AI", score: 58, status: "Beginner" },
  { name: "Kementerian Dalam Negeri", lead: "Analitik penguatkuasaan dan risk screening", score: 55, status: "Beginner" },
];

const ministryReports = [
  {
    name: "Kementerian Digital",
    maturity: "Tahap 4 - Bersepadu",
    score: 88,
    status: "Advanced",
    aiLead: "Dilantik",
    activeProjects: 14,
    officersTrained: "68%",
    citizenImpact: "Tinggi",
    governance: [
      ["AI Policy", "Selesai"],
      ["AI Governance Committee", "Selesai"],
      ["Chief AI Officer / AI Lead", "Selesai"],
      ["AI Risk Assessment", "Dalam pelaksanaan"],
      ["AI Audit Trail", "Selesai"],
    ],
    projects: [
      ["Lapisan Integrasi AI-GOV", "On Track", 82],
      ["Pembantu Perkhidmatan GovAI", "On Track", 72],
      ["Model Registry Nasional", "Watch", 54],
    ],
    risks: [
      ["Model supply chain", "Medium", "Perlu assurance untuk model/API pihak ketiga."],
      ["Integrasi data", "Medium", "Standard metadata dan pemilikan data perlu dimuktamadkan."],
    ],
    intervention: "Percepat model registry dan standard garis dasar keselamatan AI rentas kementerian.",
  },
  {
    name: "JDN",
    maturity: "Tahap 4 - Bersepadu",
    score: 84,
    status: "Advanced",
    aiLead: "Dilantik",
    activeProjects: 11,
    officersTrained: "64%",
    citizenImpact: "Tinggi",
    governance: [
      ["AI Policy", "Selesai"],
      ["AI Governance Committee", "Selesai"],
      ["Chief AI Officer / AI Lead", "Selesai"],
      ["AI Risk Assessment", "Selesai"],
      ["AI Audit Trail", "Dalam pelaksanaan"],
    ],
    projects: [
      ["Pembantu Perkhidmatan Rakyat GovAI", "On Track", 72],
      ["Pemantauan Penyampaian AI", "On Track", 76],
      ["Garis Dasar Security AI", "Watch", 61],
    ],
    risks: [
      ["Prompt injection", "High", "Chatbot kerajaan perlu red-team dan guardrail."],
      ["Data leakage", "High", "Audit log dan masking data perlu diwajibkan."],
    ],
    intervention: "Tetapkan kawalan minimum AI kerajaan dan jadual red-team untuk sistem utama.",
  },
  {
    name: "Kementerian Kesihatan",
    maturity: "Tahap 3 - Operasi",
    score: 79,
    status: "Progressing",
    aiLead: "Dilantik",
    activeProjects: 9,
    officersTrained: "52%",
    citizenImpact: "Tinggi",
    governance: [
      ["AI Policy", "Dalam pelaksanaan"],
      ["AI Governance Committee", "Selesai"],
      ["Chief AI Officer / AI Lead", "Selesai"],
      ["AI Risk Assessment", "Dalam pelaksanaan"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["AI Triage Klinik Kesihatan", "Watch", 58],
      ["Ramalan Giliran Perubatan", "On Track", 66],
      ["Pembantu Pengetahuan Klinikal", "Watch", 49],
    ],
    risks: [
      ["Governance klinikal", "High", "Semakan manusia wajib untuk keputusan klinikal."],
      ["Data kesihatan sensitif", "High", "Data kesihatan memerlukan kawalan akses ketat."],
    ],
    intervention: "Lengkapkan governance AI klinikal dan penilaian impak privasi sebelum peluasan.",
  },
  {
    name: "Kementerian Pendidikan",
    maturity: "Tahap 3 - Operasi",
    score: 75,
    status: "Progressing",
    aiLead: "Dilantik",
    activeProjects: 10,
    officersTrained: "57%",
    citizenImpact: "Sederhana Tinggi",
    governance: [
      ["AI Policy", "Dalam pelaksanaan"],
      ["AI Governance Committee", "Selesai"],
      ["Chief AI Officer / AI Lead", "Selesai"],
      ["AI Risk Assessment", "Belum lengkap"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["Pembelajaran Adaptif Nasional", "On Track", 67],
      ["Pembantu Guru AI", "Watch", 55],
      ["Analitik Sokongan Pelajar", "Watch", 51],
    ],
    risks: [
      ["Jurang digital", "Medium", "Akses luar bandar perlu dipantau."],
      ["Privasi data pelajar", "High", "Data pelajar perlu minimization dan kawalan persetujuan."],
    ],
    intervention: "Perkukuh kawalan data pelajar dan fokus AI literacy guru secara berfasa.",
  },
  {
    name: "Kementerian Kewangan",
    maturity: "Tahap 3 - Operasi",
    score: 72,
    status: "Progressing",
    aiLead: "Dilantik",
    activeProjects: 8,
    officersTrained: "49%",
    citizenImpact: "Sederhana",
    governance: [
      ["AI Policy", "Selesai"],
      ["AI Governance Committee", "Dalam pelaksanaan"],
      ["Chief AI Officer / AI Lead", "Selesai"],
      ["AI Risk Assessment", "Dalam pelaksanaan"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["Pemantauan Belanjawan Prediktif & Ketirisan", "On Track", 64],
      ["Fraud Detection Bantuan Kerajaan", "Watch", 51],
      ["Analitik Risiko Perolehan", "Watch", 48],
    ],
    risks: [
      ["Kebolehjelasan model", "Medium", "Keputusan fiskal perlu boleh diaudit."],
      ["Pemantauan bias", "Medium", "Model fraud perlu fairness testing."],
    ],
    intervention: "Tetapkan explainability standard untuk model kewangan dan bantuan rakyat.",
  },
  {
    name: "Jabatan Perdana Menteri",
    maturity: "Tahap 3 - Operasi",
    score: 69,
    status: "Progressing",
    aiLead: "Dalam pelantikan",
    activeProjects: 7,
    officersTrained: "46%",
    citizenImpact: "Sederhana",
    governance: [
      ["AI Policy", "Dalam pelaksanaan"],
      ["AI Governance Committee", "Selesai"],
      ["Chief AI Officer / AI Lead", "Dalam pelantikan"],
      ["AI Risk Assessment", "Belum lengkap"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["Indeks Reformasi AI Nasional", "Watch", 52],
      ["Analitik Eskalasi Penyampaian", "On Track", 63],
      ["Pembantu Risikan Dasar", "Watch", 47],
    ],
    risks: [
      ["Pemilikan rentas agensi", "Medium", "Mandat data rentas agensi perlu jelas."],
      ["Fragmentasi penyampaian", "Medium", "Portfolio AI perlu standard intervensi."],
    ],
    intervention: "Muktamadkan AI Lead dan mandatkan semakan portfolio bulanan.",
  },
  {
    name: "Kementerian Pertanian",
    maturity: "Tahap 2 - Adoption",
    score: 58,
    status: "Beginner",
    aiLead: "Belum dilantik",
    activeProjects: 4,
    officersTrained: "28%",
    citizenImpact: "Sederhana",
    governance: [
      ["AI Policy", "Belum lengkap"],
      ["AI Governance Committee", "Dalam pelaksanaan"],
      ["Chief AI Officer / AI Lead", "Belum dilantik"],
      ["AI Risk Assessment", "Belum lengkap"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["Analitik Tanaman AI", "Watch", 42],
      ["Ramalan Food Security", "Watch", 46],
      ["Pembantu Nasihat Petani", "Delayed", 34],
    ],
    risks: [
      ["Kualiti data", "High", "Data ladang dan daerah belum seragam."],
      ["Readiness adoption", "Medium", "Latihan pegawai daerah perlu dipercepat."],
    ],
    intervention: "Lantik AI Lead dan fokus satu use case berimpak tinggi untuk pilot nasional.",
  },
  {
    name: "Kementerian Dalam Negeri",
    maturity: "Tahap 2 - Adoption",
    score: 55,
    status: "Beginner",
    aiLead: "Belum dilantik",
    activeProjects: 5,
    officersTrained: "31%",
    citizenImpact: "Sederhana",
    governance: [
      ["AI Policy", "Belum lengkap"],
      ["AI Governance Committee", "Dalam pelaksanaan"],
      ["Chief AI Officer / AI Lead", "Belum dilantik"],
      ["AI Risk Assessment", "Belum lengkap"],
      ["AI Audit Trail", "Belum lengkap"],
    ],
    projects: [
      ["Risk Screening Penguatkuasaan", "Watch", 45],
      ["Analitik Sempadan", "Delayed", 36],
      ["Pembantu Keutamaan Kes", "Watch", 41],
    ],
    risks: [
      ["Kebebasan awam", "High", "Use case penguatkuasaan perlu governance dan oversight."],
      ["Cybersecurity", "High", "Data sensitif perlu zero trust dan pemantauan."],
    ],
    intervention: "Sediakan AI governance committee dan human oversight untuk semua use case enforcement.",
  },
];

const projects = [
  {
    title: "Pembantu Perkhidmatan Rakyat GovAI",
    sector: "Perkhidmatan Rakyat",
    owner: "JDN",
    status: "On Track",
    impact: "Multilingual AI untuk pertanyaan kerajaan dan semakan status.",
    progress: 72,
    risk: "Integrasi data",
  },
  {
    title: "AI Triage Klinik Kesihatan",
    sector: "Kesihatan",
    owner: "KKM",
    status: "Watch",
    impact: "Mengurangkan masa menunggu dan mempercepat triage kes ringan.",
    progress: 58,
    risk: "Governance klinikal",
  },
  {
    title: "Pemantauan Belanjawan Prediktif & Ketirisan",
    sector: "Kewangan",
    owner: "MOF",
    status: "On Track",
    impact: "Mengesan corak perbelanjaan, ketirisan dan ruang penjimatan.",
    progress: 64,
    risk: "Kebolehjelasan model",
  },
  {
    title: "AI Talent Analytics HRMIS",
    sector: "HR",
    owner: "JPA",
    status: "Delayed",
    impact: "Memetakan kemahiran AI penjawat awam dan keperluan latihan.",
    progress: 39,
    risk: "Kualiti data",
  },
  {
    title: "Fraud Detection Bantuan Kerajaan",
    sector: "Penguatkuasaan",
    owner: "JPM / MOF",
    status: "Watch",
    impact: "Mengenal pasti anomali permohonan bantuan dan risiko salah guna.",
    progress: 51,
    risk: "Pemantauan bias",
  },
  {
    title: "Pembelajaran Adaptif Nasional",
    sector: "Pendidikan",
    owner: "KPM / KPT",
    status: "On Track",
    impact: "Personalisasi pembelajaran dan sokongan AI literacy pelajar.",
    progress: 67,
    risk: "Jurang digital",
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
  { name: "Bias AI", level: "Medium", detail: "Model keputusan rakyat perlu fairness testing dan semakan manusia." },
  { name: "Ancaman deepfake", level: "Medium", detail: "Ancaman maklumat palsu terhadap komunikasi kerajaan." },
  { name: "Insiden cybersecurity", level: "High", detail: "Sistem AI perlu zero trust, logging dan tindak balas insiden." },
  { name: "Aduan etika AI", level: "Medium", detail: "Saluran aduan dan semakan etika perlu tersedia." },
  { name: "Pelanggaran compliance", level: "Low", detail: "Pematuhan PDPA dan standard keselamatan kerajaan." },
];

const alerts = [
  { title: "3 kementerian belum lantik AI Lead", detail: "Perlu keputusan pelantikan dan mandat pelaksanaan.", tone: "danger" },
  { title: "2 projek impak rakyat lewat milestone", detail: "Disyorkan escalation kepada delivery huddle mingguan.", tone: "warning" },
  { title: "Indeks trust meningkat tetapi belum capai sasaran", detail: "Perlu komunikasi awam dan ketelusan outcome.", tone: "info" },
];

const nationalStats = [
  { label: "Jumlah Use Case", value: "286", note: "58% menuju sasaran 500+" },
  { label: "Kementerian Maju", value: "2", note: "Daripada 8 entiti contoh" },
  { label: "Projek Mengikut Jadual", value: "50%", note: "3 daripada 6 projek utama" },
  { label: "Purata Readiness Negeri", value: "70%", note: "Berdasarkan peta AI literacy" },
  { label: "Latihan Rakyat", value: "3.8j", note: "Anggaran capaian terkumpul" },
  { label: "Skor Trust", value: "77%", note: "Belum capai sasaran >85%" },
  { label: "Risiko Tinggi", value: "2", note: "Data leakage dan cybersecurity" },
  { label: "Projek Lewat", value: "1", note: "Perlu intervensi KSU KD" },
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
  { label: "Cybersecurity", value: 74, detail: "Keperluan zero trust dan tindak balas insiden" },
  { label: "Bias AI", value: 59, detail: "Perlu fairness testing untuk keputusan rakyat" },
  { label: "Deepfake", value: 52, detail: "Ancaman maklumat palsu dan reputasi kerajaan" },
  { label: "Etika AI", value: 48, detail: "Saluran aduan dan audit etika perlu jelas" },
  { label: "Compliance", value: 31, detail: "Pematuhan PDPA dan standard keselamatan" },
];

const securityMetrics = [
  { label: "Insiden Kritikal AI", value: "0", note: "Dalam bulan semasa", tone: "success" },
  { label: "Dapatan Risiko Tinggi", value: "7", note: "Perlu remediation <30 hari", tone: "warning" },
  { label: "Sistem AI Dinilai", value: "64%", note: "Telah melalui risk assessment", tone: "info" },
  { label: "Liputan Kawalan Data", value: "71%", note: "Masking, access log, audit trail", tone: "warning" },
];

const securityThreats = [
  {
    name: "Prompt Injection",
    level: "High",
    detail: "Risiko arahan berniat jahat terhadap chatbot dan agent AI kerajaan.",
    owner: "JDN / CISO",
  },
  {
    name: "Kebocoran Data Sensitif",
    level: "High",
    detail: "Risiko pendedahan PII, rekod bantuan, kesihatan atau maklumat dalaman.",
    owner: "Pemilik Data",
  },
  {
    name: "Bias Model & Hallucination",
    level: "Medium",
    detail: "Output tidak tepat atau berat sebelah untuk keputusan berimpak rakyat.",
    owner: "AI Governance Lead",
  },
  {
    name: "Deepfake & Media Sintetik",
    level: "Medium",
    detail: "Ancaman manipulasi komunikasi kerajaan dan keyakinan awam.",
    owner: "Komunikasi Strategik",
  },
  {
    name: "Model Supply Chain",
    level: "Medium",
    detail: "Kebergantungan kepada model, API atau dataset pihak ketiga tanpa assurance.",
    owner: "Perolehan / Security",
  },
];

const securityControls = [
  { label: "AI Risk Assessment", value: 64 },
  { label: "Klasifikasi Data", value: 71 },
  { label: "Kawalan Akses & MFA", value: 82 },
  { label: "Audit Trail & Logging", value: 68 },
  { label: "Validasi Model", value: 57 },
  { label: "Semakan Human-in-the-loop", value: 61 },
  { label: "Playbook Tindak Balas Insiden", value: 54 },
];

const securityActions = [
  { title: "Mandatkan garis dasar security AI", due: "30 hari", status: "Priority", detail: "Wajib untuk semua projek AI berimpak rakyat sebelum production." },
  { title: "Tetapkan latihan red-team AI", due: "60 hari", status: "Watch", detail: "Ujian prompt injection, data leakage dan abuse case untuk sistem utama." },
  { title: "Lengkapkan model registry", due: "90 hari", status: "Watch", detail: "Daftar model, dataset, pemilik, versi, rating risiko dan bukti audit." },
  { title: "Aktifkan protokol respons deepfake", due: "30 hari", status: "Priority", detail: "SOP pengesahan kandungan, komunikasi krisis dan koordinasi takedown." },
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
  Priority: "danger",
};

const statusLabels = {
  Advanced: "Maju",
  Progressing: "Sedang Berjalan",
  Beginner: "Permulaan",
  "On Track": "Mengikut Jadual",
  Watch: "Pantau",
  Delayed: "Lewat",
  High: "Tinggi",
  Medium: "Sederhana",
  Low: "Rendah",
  Priority: "Keutamaan",
};

const toneLabels = {
  success: "Stabil",
  info: "Pantau",
  warning: "Perlu Dipantau",
  danger: "Kritikal",
};

function getStatusLabel(value) {
  return statusLabels[value] || value;
}

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
          <span class="status ${statusTone[ministry.status]}">${getStatusLabel(ministry.status)}</span>
          ${createProgress(ministry.score)}
        </div>
      `,
    )
    .join("");
}

function populateMinistryReportSelect() {
  const select = document.getElementById("ministryReportSelect");

  ministryReports.forEach((ministry) => {
    const option = document.createElement("option");
    option.value = ministry.name;
    option.textContent = ministry.name;
    select.appendChild(option);
  });

  select.value = ministryReports[0].name;
  select.addEventListener("change", (event) => renderMinistryReport(event.target.value));
}

function renderMinistryReport(ministryName = ministryReports[0].name) {
  const report = ministryReports.find((item) => item.name === ministryName) || ministryReports[0];
  const hero = document.getElementById("ministryReportHero");
  const governanceList = document.getElementById("ministryGovernanceList");
  const projectList = document.getElementById("ministryProjectList");
  const riskGrid = document.getElementById("ministryRiskGrid");

  hero.innerHTML = `
    <article class="ministry-profile-card">
      <span>Laporan Kementerian</span>
      <strong>${escapeHtml(report.name)}</strong>
      <p>${escapeHtml(report.maturity)} · Status ${escapeHtml(getStatusLabel(report.status))} · AI Lead: ${escapeHtml(report.aiLead)}</p>
    </article>
    <article class="ministry-report-stat">
      <span>Readiness AI</span>
      <strong>${report.score}%</strong>
      ${createProgress(report.score)}
    </article>
    <article class="ministry-report-stat">
      <span>Projek AI Aktif</span>
      <strong>${report.activeProjects}</strong>
      <small>Portfolio kementerian</small>
    </article>
    <article class="ministry-report-stat">
      <span>Pegawai Dilatih AI</span>
      <strong>${report.officersTrained}</strong>
      <small>AI literacy dan kepimpinan</small>
    </article>
    <article class="ministry-report-stat">
      <span>Impak Rakyat</span>
      <strong>${report.citizenImpact}</strong>
      <small>Anggaran outcome semasa</small>
    </article>
  `;

  governanceList.innerHTML = report.governance
    .map(([item, status]) => {
      const tone = status === "Selesai" ? "success" : status.includes("Belum") ? "danger" : "warning";
      return `
        <div class="governance-row">
          <span>${escapeHtml(item)}</span>
          <strong class="pill ${tone}">${escapeHtml(status)}</strong>
        </div>
      `;
    })
    .join("");

  projectList.innerHTML = report.projects
    .map(
      ([title, status, progress]) => `
        <div class="ministry-project-card">
          <div class="risk-topline">
            <strong>${escapeHtml(title)}</strong>
            <span class="pill ${statusTone[status]}">${escapeHtml(getStatusLabel(status))}</span>
          </div>
          ${createProgress(progress)}
        </div>
      `,
    )
    .join("");

  riskGrid.innerHTML = `
    ${report.risks
      .map(
        ([title, level, detail]) => `
          <div class="ministry-risk-card">
            <div class="risk-topline">
              <strong>${escapeHtml(title)}</strong>
              <span class="pill ${statusTone[level]}">${escapeHtml(getStatusLabel(level))}</span>
            </div>
            <p>${escapeHtml(detail)}</p>
          </div>
        `,
      )
      .join("")}
    <div class="ministry-risk-card intervention">
      <span>Cadangan Intervensi KSU KD</span>
      <strong>${escapeHtml(report.intervention)}</strong>
    </div>
  `;
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
            <span class="pill ${statusTone[project.status]}">${getStatusLabel(project.status)}</span>
          </div>
          <span>${project.impact}</span>
          <div class="project-meta">
            <span>${project.sector}</span>
            <span>${project.owner}</span>
            <span>Risiko: ${project.risk}</span>
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
            <span class="pill ${statusTone[risk.level]}">${getStatusLabel(risk.level)}</span>
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
          <span><i class="dot ${tone === "success" ? "green" : tone === "warning" ? "yellow" : "red"}"></i>${getStatusLabel(label)}</span>
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

function renderSecurityMetrics() {
  const grid = document.getElementById("securityMetrics");
  grid.innerHTML = securityMetrics
    .map(
      (metric) => `
        <article class="security-metric-card">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <small>${metric.note}</small>
          <i class="pill ${metric.tone}">${toneLabels[metric.tone]}</i>
        </article>
      `,
    )
    .join("");
}

function renderSecurityThreats() {
  const list = document.getElementById("securityThreatList");
  list.innerHTML = securityThreats
    .map(
      (threat) => `
        <div class="security-threat-card">
          <div class="risk-topline">
            <strong>${threat.name}</strong>
            <span class="pill ${statusTone[threat.level]}">${getStatusLabel(threat.level)}</span>
          </div>
          <p>${threat.detail}</p>
          <span>Pemilik: ${threat.owner}</span>
        </div>
      `,
    )
    .join("");
}

function renderSecurityActions() {
  const grid = document.getElementById("securityActionGrid");
  grid.innerHTML = securityActions
    .map(
      (action) => `
        <div class="security-action-card">
          <div class="risk-topline">
            <strong>${action.title}</strong>
            <span class="pill ${statusTone[action.status]}">${getStatusLabel(action.status)}</span>
          </div>
          <p>${action.detail}</p>
          <span>Tempoh: ${action.due}</span>
        </div>
      `,
    )
    .join("");
}

function renderSecurityDashboard() {
  renderSecurityMetrics();
  renderSecurityThreats();
  renderCompactBars("securityControlBars", securityControls);
  renderSecurityActions();
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
  const lastUpdated = document.getElementById("lastUpdated");
  const formatter = new Intl.DateTimeFormat("ms-MY", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  if (lastUpdated) {
    lastUpdated.textContent = `Dikemaskini: ${formatter.format(new Date())}`;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getExecutiveSummaryText() {
  const beginnerMinistries = ministries.filter((ministry) => ministry.status === "Beginner").length;
  const delayedProjects = projects.filter((project) => project.status === "Delayed").length;
  const highRisks = risks.filter((risk) => risk.level === "High").map((risk) => risk.name).join(", ");
  const trustKpi = kpis.find((item) => item.name === "Indeks Trust Awam AI");

  return (
    `Ringkasan KSU KD: Skor nasional AI berada pada tahap sedang berjalan dengan ${beginnerMinistries} kementerian masih pada tahap permulaan. ` +
    `${delayedProjects} projek memerlukan intervensi segera, khususnya projek talent analytics yang tertangguh. ` +
    `Risiko tertinggi ialah ${highRisks}. Indeks Trust Awam AI kini berada pada ${trustKpi.progress}% daripada sasaran ${trustKpi.target}; ` +
    "cadangan tindakan ialah mengadakan delivery huddle mingguan, mempercepat pelantikan AI Lead kementerian dan mewajibkan AI risk assessment bagi semua projek berimpak rakyat."
  );
}

function buildPrintableReport(summary) {
  const report = document.getElementById("printReport");
  const generatedAt = new Intl.DateTimeFormat("ms-MY", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());
  const advancedMinistries = ministries.filter((ministry) => ministry.status === "Advanced").length;
  const onTrackProjects = projects.filter((project) => project.status === "On Track").length;
  const delayedProjects = projects.filter((project) => project.status === "Delayed").length;
  const highRisks = risks.filter((risk) => risk.level === "High");
  const trustKpi = kpis.find((item) => item.name === "Indeks Trust Awam AI");
  const topMinistries = ministries
    .slice(0, 5)
    .map(
      (ministry, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(ministry.name)}</td>
          <td>${escapeHtml(getStatusLabel(ministry.status))}</td>
          <td>${ministry.score}%</td>
        </tr>
      `,
    )
    .join("");
  const projectRows = projects
    .map(
      (project) => `
        <tr>
          <td>${escapeHtml(project.title)}</td>
          <td>${escapeHtml(project.owner)}</td>
          <td>${escapeHtml(getStatusLabel(project.status))}</td>
          <td>${project.progress}%</td>
          <td>${escapeHtml(project.risk)}</td>
        </tr>
      `,
    )
    .join("");
  const riskItems = highRisks
    .map((risk) => `<li><strong>${escapeHtml(risk.name)}:</strong> ${escapeHtml(risk.detail)}</li>`)
    .join("");

  report.innerHTML = `
    <div class="print-cover">
      <span>AI-GOV Malaysia | Laporan Eksekutif KSU KD</span>
      <h1>Ringkasan Prestasi Pelaksanaan AI Sektor Awam Malaysia</h1>
      <p>Dokumen ini dijana daripada dashboard prestasi AI untuk cetakan mesyuarat, edaran dalaman atau simpanan PDF.</p>
      <div class="print-meta">
        <div><strong>Tarikh jana</strong><br>${escapeHtml(generatedAt)}</div>
        <div><strong>Status nasional</strong><br>Sedang Berjalan</div>
        <div><strong>Skor nasional</strong><br>76.4 / 100</div>
      </div>
    </div>

    <div class="print-grid">
      <div class="print-stat"><span>Use Case AI</span><strong>286</strong><small>58% menuju sasaran 500+</small></div>
      <div class="print-stat"><span>Kementerian Maju</span><strong>${advancedMinistries}</strong><small>Daripada ${ministries.length} entiti contoh</small></div>
      <div class="print-stat"><span>Projek Mengikut Jadual</span><strong>${onTrackProjects}/${projects.length}</strong><small>${delayedProjects} projek lewat</small></div>
      <div class="print-stat"><span>Indeks Trust Awam AI</span><strong>${trustKpi.progress}%</strong><small>Sasaran ${escapeHtml(trustKpi.target)}</small></div>
    </div>

    <section class="print-section">
      <span class="print-section-label">Ringkasan Eksekutif</span>
      <h2>Nota Untuk KSU KD</h2>
      <div class="print-box">${escapeHtml(summary)}</div>
    </section>

    <section class="print-section">
      <span class="print-section-label">Keputusan Diperlukan</span>
      <h2>Perhatian Hari Ini</h2>
      <ul class="print-list">
        <li>Memuktamadkan pelantikan AI Lead bagi kementerian yang belum lengkap struktur governance.</li>
        <li>Bawa projek impak rakyat yang lewat milestone ke delivery huddle KSU KD.</li>
        <li>Mewajibkan AI risk assessment bagi projek berisiko tinggi sebelum peluasan nasional.</li>
      </ul>
    </section>

    <section class="print-section">
      <span class="print-section-label">Ranking</span>
      <h2>Readiness AI Kementerian Tertinggi</h2>
      <table class="print-table">
        <thead>
          <tr><th>No.</th><th>Kementerian/Agensi</th><th>Status</th><th>Skor</th></tr>
        </thead>
        <tbody>${topMinistries}</tbody>
      </table>
    </section>

    <section class="print-section">
      <span class="print-section-label">Penjejak Pelaksanaan</span>
      <h2>Status Projek AI Utama</h2>
      <table class="print-table">
        <thead>
          <tr><th>Projek</th><th>Pemilik</th><th>Status</th><th>Kemajuan</th><th>Risiko</th></tr>
        </thead>
        <tbody>${projectRows}</tbody>
      </table>
    </section>

    <section class="print-section">
      <span class="print-section-label">Risiko & Trust</span>
      <h2>Risiko Tahap Tinggi</h2>
      <ul class="print-list">${riskItems}</ul>
      <p class="print-note">Nota: Untuk simpan sebagai PDF, pilih destinasi "Save as PDF" dalam dialog print browser.</p>
    </section>

    <section class="print-section">
      <span class="print-section-label">Security AI</span>
      <h2>Keutamaan Keselamatan AI</h2>
      <ul class="print-list">
        <li>Postur Security AI berada pada 72% dan memerlukan pengukuhan kawalan validasi model serta playbook tindak balas insiden.</li>
        <li>Ancaman utama ialah prompt injection, data leakage sensitif, deepfake dan model supply chain.</li>
        <li>Cadangan tindakan: mandatkan garis dasar security AI, latihan red-team dan model registry nasional.</li>
      </ul>
    </section>
  `;
}

function generateExecutiveSummary() {
  const summary = getExecutiveSummaryText();
  const executiveSummary = document.getElementById("executiveSummary");

  if (executiveSummary) {
    executiveSummary.textContent = summary;
  }
  buildPrintableReport(summary);

  const originalTitle = document.title;
  document.title = "Ringkasan KSU KD AI-GOV Malaysia";
  window.addEventListener("afterprint", () => {
    document.title = originalTitle;
  }, { once: true });

  window.setTimeout(() => window.print(), 150);
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
  populateMinistryReportSelect();
  renderMinistryReport();
  renderProjects();
  renderNationalStatistics();
  renderSecurityDashboard();
  renderStates();
  renderSegments();
  renderRisks();

  const exportButton = document.getElementById("exportButton");

  if (exportButton) {
    exportButton.addEventListener("click", generateExecutiveSummary);
  }
});
