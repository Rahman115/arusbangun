const translations = {
    id: { /* Indonesian (fallback default) all keys match the original text, keep same as HTML */
        nav_how: "Cara Kerja", nav_service: "Layanan", nav_price: "Harga", nav_testi: "Testimoni", nav_cta: "Hubungi Kami",
        hero_badge: "Terpercaya & Profesional", hero_title: "Tukang Harian<br/>Siap Pakai,<br/><span>Tanpa Ribet</span>",
        hero_desc: "ArusBangun menyediakan tenaga tukang harian berpengalaman untuk proyek konstruksi dan renovasi Anda. Bayar per hari, sesuai kehadiran — tidak ada biaya tersembunyi.",
        hero_btn1: "Pesan Tukang Sekarang", hero_btn2: "Lihat Cara Kerja", stat1: "Tukang Aktif", stat2: "Proyek Selesai", stat3: "Kepuasan Owner",
        project_label: "Proyek Aktif Hari Ini", status_active: "Aktif", status_waiting: "Menunggu", status_done: "Selesai",
        floating1_label: "Pendapatan Hari Ini", floating1_sub: "dari 15 tukang aktif ↑", floating2_label: "Tukang Tersedia", floating2_sub: "Siap kirim hari ini",
        how_tag: "Cara Kerja", how_title: "Mudah dalam<br/>4 Langkah", how_desc: "Dari permintaan hingga tukang di lapangan — prosesnya cepat, transparan, dan terstruktur.",
        step1_title: "Hubungi ArusBangun", step1_desc: "Sampaikan kebutuhan: jumlah tukang, jenis skill, lokasi, dan estimasi durasi proyek via WhatsApp.",
        step2_title: "Sepakati Kontrak", step2_desc: "Kami kirimkan penawaran resmi. Setelah setuju, tanda tangan perjanjian dan bayar deposit awal.",
        step3_title: "Tukang Siap Kerja", step3_desc: "Tim tukang kami tiba di lokasi tepat waktu. Anda terima laporan kehadiran setiap pagi.",
        step4_title: "Bayar Sesuai Hadir", step4_desc: "Transfer berdasarkan rekap kehadiran nyata. Tidak hadir, tidak dibayar — transparan dan adil.",
        service_tag: "Layanan Kami", service_title: "Semua Kebutuhan<br/>Konstruksi Anda", service_desc: "Tukang terseleksi dengan berbagai keahlian untuk setiap tahap pembangunan.",
        srv1_title: "Tukang Batu & Bata", srv1_desc: "Pemasangan bata, plester, acian dinding, hingga konstruksi pondasi. Berpengalaman untuk berbagai jenis bangunan.", srv1_tag: "Paling Diminati",
        srv2_title: "Tukang Kayu & Kusen", srv2_desc: "Pemasangan kusen, pintu, jendela, plafon, dan furnitur built-in. Hasil rapi dan presisi.", srv2_tag: "Tersedia",
        srv3_title: "Tukang Keramik & Finishing", srv3_desc: "Pemasangan keramik lantai & dinding, cat, coating, dan finishing lainnya.", srv3_tag: "Tersedia",
        srv4_title: "Tukang Listrik & Plumbing", srv4_desc: "Instalasi listrik, titik lampu, dan pipa air. Tim bersertifikat dan mengikuti standar keamanan.", srv4_tag: "Tersedia",
        price_tag: "Struktur Harga", price_title: "Transparan &<br/>Tanpa Biaya Tersembunyi", price_desc: "Harga flat per kepala per hari. Bayar hanya untuk tukang yang hadir.",
        pack_mini_label: "Paket Mini", pack_mini_name: "1–3 Tukang", pack_mini_note: "per orang / hari hadir", feat1: "Absensi harian via WA", feat2: "Laporan kehadiran harian", feat3: "Ganti tukang jika tidak cocok", feat4: "Minimal 3 hari deposit awal", pack_btn: "Hubungi Kami",
        popular_badge: "Populer", pack_std_label: "Paket Standar", pack_std_name: "4–10 Tukang", pack_std_note: "per orang / hari hadir", std_feat1: "Semua fitur Paket Mini", std_feat2: "Mandor koordinasi lapangan", std_feat3: "Rekap mingguan lengkap", std_feat4: "Prioritas penggantian tukang", std_feat5: "Laporan foto progress", pack_std_btn: "Pesan Sekarang",
        pack_pro_label: "Paket Proyek", pack_pro_name: "10+ Tukang", pack_pro_note: "harga negotiable / volume", pro_feat1: "Semua fitur Paket Standar", pro_feat2: "Harga spesial volume besar", pro_feat3: "Kontrak jangka panjang", pro_feat4: "Dedicated account manager", pro_feat5: "Invoice & laporan formal", pack_pro_btn: "Diskusi Harga",
        testi_tag: "Testimoni", testi_title: "Owner Puas,<br/>Tukang Senang", testi_desc: "Kepercayaan owner adalah prioritas utama ArusBangun.",
        testi1_text: '"Prosesnya sangat mudah. Cukup WA, besoknya tukang sudah di lokasi. Laporan hariannya juga bikin saya tenang karena bisa pantau dari kantor."', testi1_name: "Budi Raharjo", testi1_role: "Owner Proyek Renovasi — Bekasi",
        testi2_text: '"Sistemnya transparan banget. Bayar sesuai hadir, bukan borongan yang sering bikin konflik. Rekap absensinya akurat dan bisa saya cek sendiri."', testi2_name: "Sari Widyawati", testi2_role: "Pemilik Ruko — Depok",
        testi3_text: '"Sudah 3 proyek pakai ArusBangun. Tidak pernah kecewa. Kalau ada tukang yang berhalangan, langsung diganti tanpa perlu saya cari sendiri."', testi3_name: "Hendra Mulyadi", testi3_role: "Developer Perumahan — Tangerang",
        cta_title: "Siap Mulai Proyek?<br/>Hubungi Kami Sekarang", cta_desc: "Tim ArusBangun siap menyediakan tukang profesional untuk proyek Anda dalam 24 jam.", cta_wa: "💬 Chat via WhatsApp", cta_telp: "📞 Telepon Langsung",
        footer_desc: "Solusi outsourcing tenaga tukang harian yang profesional, transparan, dan terpercaya untuk proyek konstruksi dan renovasi Anda.", footer_area: "Jakarta & sekitarnya",
        footer_service: "Layanan", footer_company: "Perusahaan", footer_area_title: "Area Layanan", terms: "Syarat & Ketentuan", privacy: "Kebijakan Privasi",
        foot_srv1: "Tukang Batu & Bata", foot_srv2: "Tukang Kayu", foot_srv3: "Tukang Keramik", foot_srv4: "Tukang Listrik", foot_srv5: "Plumbing",
        foot_about: "Tentang Kami", foot_how: "Cara Kerja", foot_join: "Daftar Jadi Tukang", foot_career: "Karir", foot_contact: "Kontak"
    },
    en: {
        nav_how: "How It Works", nav_service: "Services", nav_price: "Pricing", nav_testi: "Testimonials", nav_cta: "Contact Us",
        hero_badge: "Trusted & Professional", hero_title: "Daily Workers<br/>Ready to Use,<br/><span>No Hassle</span>",
        hero_desc: "ArusBangun provides experienced daily workers for your construction and renovation projects. Pay per day based on attendance — no hidden fees.",
        hero_btn1: "Order Workers Now", hero_btn2: "See How It Works", stat1: "Active Workers", stat2: "Projects Done", stat3: "Owner Satisfaction",
        project_label: "Active Projects Today", status_active: "Active", status_waiting: "Pending", status_done: "Completed",
        floating1_label: "Today's Revenue", floating1_sub: "from 15 active workers ↑", floating2_label: "Available Workers", floating2_sub: "Ready to dispatch today",
        how_tag: "How It Works", how_title: "Easy in<br/>4 Steps", how_desc: "From request to workers on site — fast, transparent, structured.",
        step1_title: "Contact ArusBangun", step1_desc: "Tell us your needs: number of workers, skills, location, estimated project duration via WhatsApp.",
        step2_title: "Agree Contract", step2_desc: "We send official proposal. After agreement, sign contract and pay initial deposit.",
        step3_title: "Workers Ready", step3_desc: "Our team arrives on time. You receive daily attendance reports each morning.",
        step4_title: "Pay per Attendance", step4_desc: "Transfer based on real attendance record. Not present, not paid — transparent and fair.",
        service_tag: "Our Services", service_title: "All Your<br/>Construction Needs", service_desc: "Selected workers with various skills for every construction phase.",
        srv1_title: "Masonry Workers", srv1_desc: "Brick installation, plastering, wall smoothing, even foundation construction. Experienced for various building types.", srv1_tag: "Most Popular",
        srv2_title: "Carpentry & Frames", srv2_desc: "Installation of frames, doors, windows, ceilings, and built-in furniture. Neat and precise results.", srv2_tag: "Available",
        srv3_title: "Tile & Finishing", srv3_desc: "Floor and wall tile installation, painting, coating, and other finishing work.", srv3_tag: "Available",
        srv4_title: "Electric & Plumbing", srv4_desc: "Electrical installation, lighting points, and water pipes. Certified team following safety standards.", srv4_tag: "Available",
        price_tag: "Pricing Structure", price_title: "Transparent &<br/>No Hidden Fees", price_desc: "Flat rate per person per day. Pay only for workers who show up.",
        pack_mini_label: "Mini Package", pack_mini_name: "1–3 Workers", pack_mini_note: "per person / day attended", feat1: "Daily attendance via WA", feat2: "Daily attendance report", feat3: "Replace worker if not suitable", feat4: "Minimum 3 days initial deposit", pack_btn: "Contact Us",
        popular_badge: "Popular", pack_std_label: "Standard Package", pack_std_name: "4–10 Workers", pack_std_note: "per person / day attended", std_feat1: "All Mini Package features", std_feat2: "Site coordinator (mandor)", std_feat3: "Complete weekly recap", std_feat4: "Priority worker replacement", std_feat5: "Photo progress report", pack_std_btn: "Order Now",
        pack_pro_label: "Project Package", pack_pro_name: "10+ Workers", pack_pro_note: "negotiable / volume", pro_feat1: "All Standard Package features", pro_feat2: "Special volume pricing", pro_feat3: "Long-term contract", pro_feat4: "Dedicated account manager", pro_feat5: "Invoice & formal reports", pack_pro_btn: "Discuss Pricing",
        testi_tag: "Testimonials", testi_title: "Satisfied Owners,<br/>Happy Workers", testi_desc: "Owner trust is ArusBangun's top priority.",
        testi1_text: '"The process is very easy. Just WA, the next day workers are on site. The daily reports also give me peace of mind as I can monitor from the office."', testi1_name: "Budi Raharjo", testi1_role: "Renovation Project Owner — Bekasi",
        testi2_text: '"The system is very transparent. Pay based on attendance, not lump sum which often causes conflict. The attendance recap is accurate and I can check it myself."', testi2_name: "Sari Widyawati", testi2_role: "Shop Owner — Depok",
        testi3_text: '"Already 3 projects with ArusBangun. Never disappointed. If any worker can’t come, they are replaced without me having to find a replacement myself."', testi3_name: "Hendra Mulyadi", testi3_role: "Housing Developer — Tangerang",
        cta_title: "Ready to Start Your Project?<br/>Contact Us Now", cta_desc: "ArusBangun team is ready to provide professional workers for your project within 24 hours.", cta_wa: "💬 Chat via WhatsApp", cta_telp: "📞 Call Directly",
        footer_desc: "Professional, transparent, and trusted daily worker outsourcing solution for your construction and renovation projects.", footer_area: "Jakarta & surrounding areas",
        footer_service: "Services", footer_company: "Company", footer_area_title: "Service Areas", terms: "Terms & Conditions", privacy: "Privacy Policy",
        foot_srv1: "Masonry", foot_srv2: "Carpentry", foot_srv3: "Tile & Finishing", foot_srv4: "Electrical", foot_srv5: "Plumbing",
        foot_about: "About Us", foot_how: "How It Works", foot_join: "Become a Worker", foot_career: "Career", foot_contact: "Contact"
    },
    zh: {
        nav_how: "运作方式", nav_service: "服务", nav_price: "价格", nav_testi: "客户评价", nav_cta: "联系我们",
        hero_badge: "值得信赖 & 专业", hero_title: "每日工匠<br/>随时可用,<br/><span>无繁琐</span>",
        hero_desc: "ArusBangun 为您的建筑和翻新项目提供经验丰富的日结工匠。按日付费，根据出勤情况 — 无隐藏费用。",
        hero_btn1: "立即预订工匠", hero_btn2: "查看运作方式", stat1: "活跃工匠", stat2: "完成项目", stat3: "业主满意度",
        project_label: "今日活跃项目", status_active: "活跃中", status_waiting: "等待中", status_done: "已完成",
        floating1_label: "今日收入", floating1_sub: "来自15名活跃工匠 ↑", floating2_label: "可用工匠", floating2_sub: "今日即可派遣",
        how_tag: "运作方式", how_title: "简单<br/>4步骤", how_desc: "从需求到工匠到场 — 快速、透明、有条理。",
        step1_title: "联系 ArusBangun", step1_desc: "告诉我们您的需求：工匠数量、技能类型、地点、预计工期，通过 WhatsApp。",
        step2_title: "签订合同", step2_desc: "我们发送正式报价。达成一致后，签署协议并支付初期押金。",
        step3_title: "工匠就位", step3_desc: "我们的团队准时到达现场。您每天早上收到出勤报告。",
        step4_title: "按出勤支付", step4_desc: "根据实际出勤记录转账。未出勤不付费 — 透明公正。",
        service_tag: "我们的服务", service_title: "满足您的<br/>所有建筑需求", service_desc: "精选工匠，掌握各类技能，适用于每个施工阶段。",
        srv1_title: "瓦工与砌砖", srv1_desc: "砌砖、抹灰、墙面找平，直至地基施工。经验丰富，适用于各类建筑。", srv1_tag: "最受欢迎",
        srv2_title: "木工与门窗框", srv2_desc: "安装门框、门窗、吊顶及嵌入式家具。成果整洁精确。", srv2_tag: "可用",
        srv3_title: "瓷砖与精装修", srv3_desc: "地面与墙面瓷砖铺设、油漆、涂层及其他精装修工作。", srv3_tag: "可用",
        srv4_title: "电工与水管工", srv4_desc: "电路安装、照明点和水管。持证团队，遵循安全标准。", srv4_tag: "可用",
        price_tag: "价格结构", price_title: "透明且<br/>无隐藏费用", price_desc: "每人每日固定费率。仅支付实际出勤的工匠。",
        pack_mini_label: "迷你套餐", pack_mini_name: "1–3 名工匠", pack_mini_note: "每人 / 出勤日", feat1: "通过 WhatsApp 每日签到", feat2: "每日出勤报告", feat3: "不合适可更换工匠", feat4: "最少3天初期押金", pack_btn: "联系我们",
        popular_badge: "热门", pack_std_label: "标准套餐", pack_std_name: "4–10 名工匠", pack_std_note: "每人 / 出勤日", std_feat1: "包含迷你套餐所有功能", std_feat2: "现场工头协调", std_feat3: "完整每周汇总", std_feat4: "优先更换工匠", std_feat5: "照片进度报告", pack_std_btn: "立即预订",
        pack_pro_label: "项目套餐", pack_pro_name: "10+ 名工匠", pack_pro_note: "可议价 / 批量", pro_feat1: "包含标准套餐所有功能", pro_feat2: "大批量特价", pro_feat3: "长期合同", pro_feat4: "专属客户经理", pro_feat5: "发票与正式报告", pack_pro_btn: "洽谈价格",
        testi_tag: "客户评价", testi_title: "业主满意，<br/>工匠开心", testi_desc: "业主信任是 ArusBangun 的首要任务。",
        testi1_text: '"整个过程非常简单。只需发 WhatsApp，第二天工匠就到场了。每日报告让我安心，即使不在现场也能监控。"', testi1_name: "Budi Raharjo", testi1_role: "翻新项目业主 — Bekasi",
        testi2_text: '"系统非常透明。按出勤支付，而不是常引起纠纷的承包模式。出勤记录准确，我可以自己核对。"', testi2_name: "Sari Widyawati", testi2_role: "商铺业主 — Depok",
        testi3_text: '"已经用了 ArusBangun 三个项目。从未失望。如果有工匠不能来，他们会直接替换，无需我自己找人。"', testi3_name: "Hendra Mulyadi", testi3_role: "房屋开发商 — Tangerang",
        cta_title: "准备开始您的项目？<br/>立即联系我们", cta_desc: "ArusBangun 团队随时准备在24小时内为您的项目提供专业工匠。", cta_wa: "💬 WhatsApp 聊天", cta_telp: "📞 直接电话",
        footer_desc: "为您的建筑和翻新项目提供专业、透明、值得信赖的日结工匠外包解决方案。", footer_area: "雅加达及周边地区",
        footer_service: "服务", footer_company: "公司", footer_area_title: "服务区域", terms: "条款与条件", privacy: "隐私政策",
        foot_srv1: "瓦工与砌砖", foot_srv2: "木工", foot_srv3: "瓷砖与精装修", foot_srv4: "电工", foot_srv5: "水管工",
        foot_about: "关于我们", foot_how: "运作方式", foot_join: "成为工匠", foot_career: "职业发展", foot_contact: "联系方式"
    }
};
function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = t[key];
            else el.innerHTML = t[key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
window.addEventListener('scroll', () => { const nav = document.querySelector('nav'); if (window.scrollY > 20) nav.style.boxShadow = '0 4px 30px rgba(13,71,161,0.12)'; else nav.style.boxShadow = '0 2px 20px rgba(13,71,161,0.06)'; });
setLanguage('id');