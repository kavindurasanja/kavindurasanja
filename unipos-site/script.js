const $=s=>document.querySelector(s),P={cart:'M3 4h2l2.4 11h9.6l2-8H6M9 20h.01M17 20h.01',box:'M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8',scan:'M4 8V5h3M17 4h3v3M20 16v3h-3M7 20H4v-3M6 12h12',user:'M12 12a4 4 0 100-8 4 4 0 000 8M4 20c0-4 4-6 8-6s8 2 8 6',chart:'M4 20V10M10 20V4M16 20v-8M22 20H2',tag:'M3 12l9-9h8v8l-9 9z',card:'M3 6h18v12H3zM3 10h18',gear:'M12 8a4 4 0 100 8 4 4 0 000-8M12 2v3M12 19v3M2 12h3M19 12h3',store:'M4 9l1-5h14l1 5M5 9v11h14V9M9 20v-6h6v6',net:'M12 4v6M6 20v-4h12v4M12 10v6M6 16h12',print:'M7 9V4h10v5M7 17H4v-7h16v7h-3M7 14h10v6H7z',phone:'M8 3h8v18H8zM11 18h2',book:'M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2zM5 18a2 2 0 012-2h12',pill:'M8 4l12 12-4 4L4 8zM9 15l6-6',cash:'M3 7h18v10H3zM12 10a2 2 0 100 4 2 2 0 000-4',lap:'M5 5h14v10H5zM2 19h20',cog:'M4 6h16M4 12h16M4 18h16',cloud:'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z',shield:'M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z',pay:'M2 8h20v10H2zM2 12h20',ret:'M9 14L4 9l5-5M4 9h10a6 6 0 010 12h-3',pur:'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6',emp:'M9 11a3 3 0 100-6 3 3 0 000 6M2 20c0-3 3-5 7-5s7 2 7 5M17 6a3 3 0 010 6M22 20c0-2-1-4-3-4.5',bolt:'M13 2L4 14h7l-1 8 9-12h-7z',ok:'M5 12l5 5 9-10',grow:'M3 17l6-6 4 4 8-8M15 7h6v6'};
const I=k=>`<div class="ic"><svg viewBox="0 0 24 24"><path d="${P[k]}"/></svg></div>`;$('#pi').innerHTML=`<path d="${P.print}"/>`;
const cards=(id,arr,cls,d=.05)=>{$(id).innerHTML=arr.map((a,i)=>`<div class="cd rv ${cls||''}" style="--d:${(i%5)*d}s">${I(a[0])}<h3>${a[1]}</h3>${a[2]?`<p>${a[2]}</p>`:''}</div>`).join('')};
cards('#ind',[['cart','Grocery'],['cog','Hardware'],['phone','Mobile Shop'],['tag','Fashion'],['lap','Electronics'],['box','Wholesale'],['book','Book Shop'],['user','Cosmetics'],['pill','Pharmacy'],['store','General Retail']],'ind',.07);
cards('#feat',[['cart','Fast POS Billing','Ring up sales in seconds with search, scan and quick keys.'],['box','Inventory Management','Live stock levels across products, units and warehouses.'],['scan','Barcode Scanning','Scan to sell, receive, count and transfer stock.'],['user','Customers','Keep purchase history, credit balances and contacts.'],['store','Suppliers','Track supplier accounts, orders and payments.'],['pur','Purchases / GRN','Receive goods against purchase orders with GRN.'],['cash','Expenses','Record daily expenses and see them against profit.'],['emp','Employees & Payroll','Manage staff, shifts, salaries and payslips.'],['chart','Sales Reports','Daily, monthly and product-wise sales at a glance.'],['grow','Profit Reports','Gross and net profit by product, day and branch.'],['ret','Returns','Handle customer and supplier returns with stock updates.'],['pay','Multiple Payment Methods','Cash, card, bank transfer and split payments.'],['shield','User Permissions','Control exactly what each role can see and do.'],['net','Multi-Branch Management','Run every location from one central account.'],['cloud','Offline / Online Support','Keep selling without internet and sync when back.']],'',.06);
const rows=(a)=>a.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
const kp=a=>`<div class="kp">${a.map(x=>`<div>${x[0]}<b>${x[1]}</b></div>`).join('')}</div>`;
const win=c=>`<div class="bar"><i></i><i></i><i></i></div><div class="mb"><div class="sb"><i></i><i class="on"></i><i></i><i></i><i></i></div><div class="mc">${c}</div></div>`;
const line='<svg viewBox="0 0 420 90" width="100%"><path d="M0 70C50 60 80 30 130 42S210 10 260 26 350 8 420 14" fill="none" stroke="var(--ac)" stroke-width="3"/></svg>';
const T={Dashboard:kp([['Today Sales','Rs. 248k'],['Profit','Rs. 61k'],['Orders','312']])+`<div class="bx">${line}</div>`,
POS:`<div class="two"><div class="bx"><table class="tb"><tr><th>Item</th><th>Qty</th><th>Total</th></tr>${rows([['Basmati Rice 5kg','2','3,900'],['USB-C Cable','1','850'],['Notebook A5','4','1,200']])}</table></div><div class="bx pay"><div>Subtotal<span>5,950</span></div><div>Discount<span>-250</span></div><div class="tot">Total<span>5,700</span></div><span class="btn p">Pay · Cash</span></div></div>`,
Inventory:`<div class="bx"><table class="tb"><tr><th>Product</th><th>Warehouse</th><th>Stock</th></tr>${rows([['Sugar 1kg','Main','<span class="pill">6</span>'],['Phone Case','Branch 01','<span class="pill">4</span>'],['Cotton T-Shirt','Main','240'],['AA Batteries','Branch 02','<span class="pill">3</span>']])}</table></div>`,
Purchases:kp([['Open POs','12'],['GRN today','4'],['Payable','Rs. 320k']])+`<div class="bx"><table class="tb"><tr><th>Supplier</th><th>Status</th><th>Amount</th></tr>${rows([['Ceylon Traders','<span class="pill">Received</span>','84,000'],['Metro Foods','Pending','52,500']])}</table></div>`,
Customers:kp([['Customers','2,340'],['Credit due','Rs. 96k'],['New today','14']])+`<div class="bx"><table class="tb"><tr><th>Name</th><th>Visits</th><th>Spent</th></tr>${rows([['N. Perera','32','148,200'],['S. Fernando','21','96,400']])}</table></div>`,
Reports:kp([['Gross Profit','Rs. 92k'],['Expenses','Rs. 31k'],['Net Profit','Rs. 61k']])+`<div class="bx">${line}</div>`,
Settings:`<div class="bx"><table class="tb"><tr><th>Setting</th><th>Value</th><th></th></tr>${rows([['Receipt printer','Thermal 80mm','<span class="pill">On</span>'],['Invoice size','A4 / A5','<span class="pill">On</span>'],['Roles','4 configured','<span class="pill">On</span>']])}</table></div>`};
$('#heroWin').innerHTML=win(T.Dashboard+T.POS);$('#posWin').innerHTML=win(T.POS);$('#invWin').innerHTML=win(T.Inventory);
$('#tabs').innerHTML=Object.keys(T).map((k,i)=>`<button class="tab${i?'':' on'}" role="tab">${k}</button>`).join('');
const tv=$('#tv'),show=k=>tv.innerHTML=win(T[k]);show('Dashboard');
$('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t===b));show(b.textContent)};
cards('#br',[['store','Centralized Inventory'],['net','Stock Transfers'],['chart','Branch Sales Monitoring'],['shield','User Permissions'],['cash','Branch Expenses'],['pur','Branch Reports'],['grow','Combined Business Reports']],'');
cards('#hw',[['scan','Barcode Scanner'],['print','Thermal Receipt Printer'],['tag','Barcode Label Printer'],['cash','Cash Drawer'],['print','A4 Printer'],['card','Touchscreen POS'],['lap','Laptop / Desktop']],'');
cards('#why',[['bolt','Fast','Designed for quick billing and daily operations.'],['ok','Simple','Easy for staff to learn and use.'],['grow','Scalable','Works for one shop or multiple branches.'],['shield','Reliable','Designed for real business operations.']],'');
$('#kp').innerHTML=[["Today's Sales",'Rs. 248,900','+12%'],['Gross Profit','Rs. 92,400','+9%'],['Expenses','Rs. 31,200','-3%'],['Net Profit','Rs. 61,200','+14%']].map((k,i)=>`<div class="cd rv" style="--d:${i*.08}s"><div class="sm">${k[0]}</div><div class="big">${k[1]}</div><div class="up">${k[2]}</div></div>`).join('');
$('#bars').innerHTML='<path d="M0 150H240" stroke="var(--bd)"/>'+[['B1',110,1],['B2',80,0],['B3',60,0],['HQ',130,1]].map((b,i)=>`<rect class="br ${b[2]?'':'l'}" style="--d:${i*.12}s" x="${20+i*55}" y="${150-b[1]}" width="36" height="${b[1]}" rx="6"/><text x="${28+i*55}" y="166">${b[0]}</text>`).join('');
$('#pr').innerHTML=[['Starter','Best for small businesses.'],['Business','Best for growing businesses.',1],['Multi-Branch','Best for businesses with multiple locations.'],['Custom / Enterprise','For businesses requiring customized workflows.']].map((p,i)=>`<div class="cd pr rv ${p[2]?'hi':''}" style="--d:${i*.08}s">${p[2]?'<span class="tag">Most popular</span>':''}<h3>${p[0]}</h3><p>${p[1]}</p><div class="big">Contact for Pricing</div><a class="btn ${p[2]?'p':''}" href="#demo">Request Demo</a></div>`).join('');
$('#bc').innerHTML=Array.from({length:44},(_, i)=>`<i style="width:${[2,4,3,6,2,5][i*7%6]}px;margin-right:${[2,3,4][i%3]}px"></i>`).join('');
$('#fq').innerHTML=[['Does UniPOS work offline?','Yes. You can keep billing without internet and data syncs automatically once you are back online.'],['Can I use barcode scanners?','Yes. Standard USB and Bluetooth barcode scanners work for selling, receiving and stock counting.'],['Can I import products from Excel?','Yes. Bulk-import products, prices and stock from Excel or CSV files.'],['Can I print barcode labels?','Yes. Print labels on thermal label printers or A4 sticker sheets.'],['Does UniPOS support multiple branches?','Yes. Manage all branches and warehouses from one central account.'],['Can I transfer stock between branches?','Yes. Transfer stock between branches and warehouses with a full audit trail.'],['Can I print thermal receipts?','Yes. UniPOS supports thermal receipt printers.'],['Can I print A4/A5 invoices?','Yes. Choose thermal, A4 or A5 layouts per sale.'],['Can employees have different permissions?','Yes. Give each role access only to what it needs.'],['Can UniPOS be customized for my business?','Yes. Contact us about custom workflows, fields and reports.']].map(q=>`<details><summary>${q[0]}</summary><div class="fa"><div><p>${q[1]}</p></div></div></details>`).join('');
document.querySelectorAll('.fq details').forEach(d=>{d.querySelector('summary').onclick=e=>{e.preventDefault();if(d.open){d.classList.remove('o');setTimeout(()=>d.open=false,500)}else{document.querySelectorAll('.fq details.o').forEach(x=>{x.classList.remove('o');setTimeout(()=>x.open=false,500)});d.open=true;requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add('o')))}}});
const h=$('#hd');addEventListener('scroll',()=>{h.classList.toggle('s',scrollY>20);if(!rm){const r=$('#posWin').getBoundingClientRect(),y=(r.top-innerHeight/2)*-.05;$('#posWin').style.marginTop=y+'px'}},{passive:true});
$('#bg').onclick=()=>{const o=h.classList.toggle('open');$('#bg').setAttribute('aria-expanded',o)};$('#menu').onclick=e=>{if(e.target.tagName=='A')h.classList.remove('open')};
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const count=el=>{const n=+el.dataset.n,s=el.dataset.s||'',t=performance.now();const f=now=>{const p=Math.min(1,(now-t)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString()+s;p<1&&requestAnimationFrame(f)};rm?el.textContent=n.toLocaleString()+s:requestAnimationFrame(f)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,#tw,#stats').forEach(el=>io.observe(el));document.querySelectorAll('#chg .cd').forEach(el=>io.observe(el));
$('#fm').onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));const t=`*UniPOS Demo Request*%0ABusiness: ${f.b}%0AContact: ${f.n}%0APhone: ${f.p}%0AEmail: ${f.e||'-'}%0AType: ${f.t}%0ABranches: ${f.r}%0AMessage: ${f.m||'-'}`;window.open('https://wa.me/94784474335?text='+encodeURIComponent(decodeURIComponent(t)),'_blank')};


// UniPOS v2 interaction polish
(() => {
  const progress = document.getElementById('scrollProgress');
  const glow = document.getElementById('cursorGlow');
  const heroVisual = document.querySelector('.hv');
  const heroWindow = heroVisual?.querySelector('.win');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  if (!reduced && glow && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  if (!reduced && heroVisual && heroWindow && window.matchMedia('(pointer:fine)').matches) {
    heroVisual.addEventListener('pointermove', e => {
      const r = heroVisual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      heroWindow.style.transform = `rotateY(${x * 4 - 2}deg) rotateX(${-y * 3 + 1}deg) translateY(-2px)`;
    });
    heroVisual.addEventListener('pointerleave', () => {
      heroWindow.style.transform = 'rotateY(-2deg) rotateX(1deg)';
    });
  }

  const navLinks = [...document.querySelectorAll('.menu a[href^="#"]')];
  const tracked = navLinks.map(a => ({ a, el: document.querySelector(a.getAttribute('href')) })).filter(x => x.el);
  if (tracked.length) {
    const navObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + visible.target.id));
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0,.2,.5,1] });
    tracked.forEach(x => navObserver.observe(x.el));
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {
    const header = document.getElementById('hd');
    if (header?.classList.contains('open')) header.classList.remove('open');
  }));
})();