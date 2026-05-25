# AI-GOV Malaysia

Dashboard statik untuk memantau prestasi pelaksanaan AI sektor awam Malaysia daripada perspektif KSU KD.

## Cara buka

Buka `index.html` terus dalam browser, atau jalankan local server:

```bash
python3 -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

## Kandungan utama

- Executive View dan National AI Score
- Statistik AI Nasional dengan graf trend, donut status projek dan risk index
- Scorecard KPI Nasional AI 2030
- Ranking AI Readiness Kementerian
- Laporan Kementerian dengan drill-down governance, projek, risiko dan intervensi
- AI Implementation Tracker
- AI Rakyat Readiness Index
- Security AI Dashboard untuk AI security posture, threat intelligence, control coverage dan action queue
- AI Risk & Trust Monitor
- Roadmap pelaksanaan nasional
- Butang Ringkasan KSU KD yang boleh dicetak atau disimpan sebagai PDF melalui dialog print browser

Semua data contoh berada dalam `script.js` dan boleh diganti dengan data sebenar daripada HRMIS, JDN, ICU, MyGovCloud atau sistem kementerian.
