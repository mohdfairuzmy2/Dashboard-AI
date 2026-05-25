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

- Paparan Eksekutif dan Skor AI Nasional
- Statistik AI Nasional dengan graf trend, donut status projek dan indeks risiko
- Scorecard KPI Nasional AI 2030
- Ranking Readiness AI Kementerian
- Laporan Kementerian dengan perincian governance, projek, risiko dan intervensi
- Penjejak Pelaksanaan AI
- Indeks Readiness AI Rakyat
- Dashboard Security AI untuk postur keselamatan AI, risikan ancaman, liputan kawalan dan senarai tindakan
- Pemantauan Risiko & Trust AI
- Roadmap pelaksanaan nasional
- Butang Ringkasan KSU KD yang boleh dicetak atau disimpan sebagai PDF melalui dialog print browser

Semua data contoh berada dalam `script.js` dan boleh diganti dengan data sebenar daripada HRMIS, JDN, ICU, MyGovCloud atau sistem kementerian.
