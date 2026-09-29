(() => {
  'use strict';
  const data = window.portfolio;
  if (!data) return;
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; };
  const safeUrl = value => { if (!value) return null; try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; } };
  const externalLink = (label, url) => { const link = el('a', 'project-link', label + ' ↗'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.append(el('span', 'sr-only', ' (opens in a new tab)')); return link; };
  const patterns = {
    raster: '<div class="mini-raster"><div class="raster-head"><span>SPIKE RASTER</span><span>300 MS</span></div><div class="raster-row"><span>LPLC2</span><div><i style="left:8%"></i><i style="left:14%"></i><i style="left:19%"></i><i style="left:27%"></i><i style="left:33%"></i><i style="left:38%"></i><i style="left:44%"></i><i style="left:52%"></i><i style="left:57%"></i><i style="left:63%"></i><i style="left:70%"></i><i style="left:76%"></i><i style="left:83%"></i><i style="left:90%"></i></div></div><div class="raster-row"><span>LPLC2</span><div><i style="left:5%"></i><i style="left:12%"></i><i style="left:22%"></i><i style="left:29%"></i><i style="left:36%"></i><i style="left:41%"></i><i style="left:49%"></i><i style="left:55%"></i><i style="left:61%"></i><i style="left:68%"></i><i style="left:74%"></i><i style="left:81%"></i><i style="left:88%"></i><i style="left:94%"></i></div></div><div class="raster-row"><span>DNp01</span><div><i style="left:58%"></i><i style="left:64%"></i><i style="left:69%"></i><i style="left:73%"></i><i style="left:77%"></i><i style="left:82%"></i><i style="left:86%"></i></div></div><div class="raster-end"><span>LOOM → LPLC2 → GIANT FIBER</span><span>↗</span></div></div>',
    ledger: '<div class="mini-ledger"><div class="ledger-head"><span>TRANSACTION LEDGER</span><span>№ 001</span></div><div><span>ACCOUNT</span><span>ENTRY</span><span>BALANCE</span></div><div><b>01</b><i></i><i></i></div><div><b>02</b><i></i><i></i></div><div><b>03</b><i></i><i></i></div><div class="ledger-bottom"><span>INPUT → PROCESS → RECORD</span><span>↗</span></div></div>',
    chart: '<div class="mini-chart"><span class="chart-axis">OBSERVATIONS</span><div class="bars"><i style="--height:28%"></i><i style="--height:44%"></i><i style="--height:37%"></i><i style="--height:63%"></i><i style="--height:52%"></i><i style="--height:79%"></i><i style="--height:69%"></i><i style="--height:92%"></i></div><div class="chart-bottom"><span>QUESTION</span><span>EXPLORE</span><span>UNDERSTAND</span></div></div>',
    catalog: '<div class="mini-catalog"><div class="catalog-index">INDEX / LIBRARY</div><div><span>01</span><b>Catalog</b><i>────────</i></div><div><span>02</span><b>Organize</b><i>──────</i></div><div><span>03</span><b>Discover</b><i>────────</i></div></div>',
    report: '<div class="mini-report"><div><span>STUDENT / REPORT</span><b>R</b></div><div class="report-rule"></div><div class="report-line"><i></i><span>──</span></div><div class="report-line"><i></i><span>──</span></div><div class="report-line"><i></i><span>──</span></div><div class="report-end">A CLEARER VIEW OF PROGRESS</div></div>'
  };
  for (const project of data.projects.filter(item => !item.hidden)) {
    const card = el('article', 'project-card');
    const visual = el('div', 'project-visual ' + project.visual);
    const imageUrl = safeUrl(project.screenshot);
    const placeholder = () => { visual.replaceChildren(); const graphic = el('div', 'concept-graphic'); graphic.setAttribute('aria-hidden', 'true'); graphic.innerHTML = patterns[project.visual] || ''; visual.append(graphic, el('span', 'preview-label', 'CONCEPT SKETCH · NOT A SCREENSHOT')); };
    if (imageUrl) { const img = el('img'); img.src = imageUrl; img.alt = project.screenshotAlt; img.loading = 'lazy'; img.width = 720; img.height = 440; img.addEventListener('error', placeholder, { once: true }); visual.append(img); } else placeholder();
    const body = el('div', 'project-body');
    const meta = el('div', 'project-meta'); meta.append(el('span', '', project.category), el('span', '', '/' + project.number));
    const title = el('h3', '', project.title); const description = el('p', 'project-description', project.description);
    const tags = el('ul', 'tags'); tags.setAttribute('aria-label', 'Project topics'); project.tags.forEach(tag => tags.append(el('li', '', tag)));
    const details = el('details', 'project-details'); const summary = el('summary', '', 'Project notes'); summary.append(el('span', 'summary-icon', '+')); const notes = el('div', 'notes-content'); notes.append(el('p', '', project.details), el('p', 'result-note', project.result));
    const links = el('div', 'project-links'); const repo = safeUrl(project.repository); const demo = safeUrl(project.demo); if (repo) { const link = externalLink('View on GitHub', repo); link.classList.add('project-repo-button'); link.setAttribute('aria-label', 'View ' + project.title + ' on GitHub (opens in a new tab)'); links.append(link); } if (demo) links.append(externalLink('Live project', demo)); if (!repo && !demo) links.append(el('span', 'pending-link', 'Project links will be added here.')); details.append(summary, notes);
    body.append(meta, title, description, tags, links, details); card.append(visual, body); document.getElementById('projects').append(card);
  }
  for (const group of data.skillGroups) {
    const section = el('div', 'skill-group'); section.append(el('h3', '', group.title), el('p', 'skill-note', group.note));
    const list = el('ul', 'skill-list'); group.skills.forEach(skill => { const item = el('li'); const status = el('span', 'skill-status' + (skill.status === 'Used in projects' ? ' used' : ''), skill.status); item.append(el('span', 'skill-name', skill.name), status); list.append(item); }); section.append(list); document.getElementById('skills-list').append(section);
  }
  // A decorative plot of synthetic points, not results from a portfolio project.
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 360 320'); svg.setAttribute('aria-hidden', 'true');
  const plotPart = (tag, attrs) => { const item = document.createElementNS(svgNS, tag); Object.entries(attrs).forEach(([key, value]) => item.setAttribute(key, value)); svg.append(item); return item; };
  plotPart('path', {d:'M34 32V266H333', fill:'none', stroke:'#8b9c97', 'stroke-width':'.8'});
  for (let i = 0; i < 64; i++) {
    const x = 44 + (i / 63) * 280;
    const y = 228 - 161 / (1 + Math.exp(-(i - 32) / 7)) + Math.sin(i * 2.4) * 24 + Math.cos(i * .75) * 13;
    plotPart('circle', {cx:x.toFixed(2), cy:y.toFixed(2), r:i % 7 === 0 ? 3.6 : 2.4, fill:i % 7 === 0 ? '#a24630' : '#385477', opacity:i % 3 === 0 ? '.8' : '.5'});
  }
  let curve = '';
  for (let i = 0; i <= 80; i++) { const x = 42 + i * 3.5; const y = 228 - 161 / (1 + Math.exp(-(i - 40) / 9)); curve += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)} `; }
  plotPart('path', {d:curve, fill:'none', stroke:'#284969', 'stroke-width':'1.5'});
  plotPart('path', {d:'M188 158L225 216H288', fill:'none', stroke:'#a24630', 'stroke-width':'.8'});
  const label = plotPart('text', {x:'226', y:'231', fill:'#7d4f3e', 'font-family':'Georgia, serif', 'font-size':'14', 'font-style':'italic'}); label.textContent = 'find the pattern';
  const foot = plotPart('text', {x:'34', y:'294', fill:'#59665d', 'font-family':'monospace', 'font-size':'8', 'letter-spacing':'1.2'}); foot.textContent = 'OBSERVE   /   QUESTION   /   BUILD';
  const fallback = document.querySelector('.art-fallback'); fallback.replaceChildren(svg);
  const artUrl = safeUrl(data.heroImage);
  if (artUrl) { const img = el('img', 'field-art-image'); img.src = artUrl; img.alt = ''; img.width = 800; img.height = 1000; img.fetchPriority = 'high'; img.addEventListener('load', () => document.getElementById('hero-art').classList.add('has-image')); img.addEventListener('error', () => img.remove(), { once: true }); document.getElementById('hero-art').append(img); }
  const hasEmail = typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const contactFacts = document.getElementById('contact-facts');
  const fact = (label, value, href) => { const item = el('li'); item.append(el('span', 'fact-label', label)); const text = el(href ? 'a' : 'span', '', value); if (href) text.href = href; item.append(text); contactFacts.append(item); };
  fact('EMAIL', hasEmail ? data.email : 'Contact email coming soon', hasEmail ? 'mailto:' + data.email : null);
  fact('BASED IN', data.location || 'Nepal');
  if (data.phone) fact('PHONE', data.phone, 'tel:' + data.phone.replace(/[^+\d]/g, ''));
  const submit = document.getElementById('message-submit');
  submit.disabled = !hasEmail;
  if (hasEmail) document.getElementById('form-note').textContent = 'Opens your email app with a draft. You review and send it there.';
  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || !hasEmail) return;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || message.length < 10) { document.getElementById('form-status').textContent = 'Please add your name and a message of at least 10 characters.'; return; }
    const subject = encodeURIComponent('Portfolio enquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nReply to: ' + email + '\n\n' + message);
    window.location.href = 'mailto:' + data.email + '?subject=' + subject + '&body=' + body;
    document.getElementById('form-status').textContent = 'Email draft requested. Nothing has been sent by this website. If your email app did not open, use the email address in Get in touch.';
  });
  const faqOptions = document.getElementById('faq-options');
  for (const item of data.faq || []) {
    const button = el('button', 'faq-question', item.question); button.type = 'button'; button.setAttribute('aria-pressed', 'false'); button.setAttribute('aria-controls', 'faq-answer');
    button.addEventListener('click', () => { faqOptions.querySelectorAll('button').forEach(node => node.setAttribute('aria-pressed', 'false')); button.setAttribute('aria-pressed', 'true'); document.getElementById('faq-answer-text').textContent = item.answer; });
    faqOptions.append(button);
  }
  for (const social of data.socialLinks || []) { const url = safeUrl(social.url); if (!url) continue; const link = externalLink(social.label, url); link.className = 'social-link'; document.getElementById('social-links').append(link); }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
