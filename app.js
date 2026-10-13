(() => {
  'use strict';

  const data = window.portfolio;
  if (!data) return;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  const safeUrl = value => {
    if (!value) return null;
    try {
      const url = new URL(value, location.href);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  };

  const externalLink = (label, url) => {
    const link = el('a', 'project-link', label + ' ↗');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(el('span', 'sr-only', ' (opens in a new tab)'));
    return link;
  };

  for (const project of data.projects) {
    const card = el('article', 'project-card');
    card.id = project.id;

    if (project.screenshot) {
      const visual = el('figure', 'project-visual');
      const image = el('img');
      image.src = safeUrl(project.screenshot);
      image.alt = project.screenshotAlt;
      image.loading = 'lazy';
      image.width = 960;
      image.height = 600;
      const caption = el('figcaption', 'preview-label', project.visualNote);
      visual.append(image, caption);
      card.append(visual);
    }

    const body = el('div', 'project-body');
    const meta = el('div', 'project-meta');
    meta.append(el('span', '', project.category), el('span', '', '/' + project.number));
    const title = el('h3', '', project.title);
    const description = el('p', 'project-description', project.description);
    const result = el('p', 'project-result', project.result);

    const tags = el('ul', 'tags');
    tags.setAttribute('aria-label', 'Project tools');
    project.tags.forEach(tag => tags.append(el('li', '', tag)));

    const links = el('div', 'project-links');
    const repo = safeUrl(project.repository);
    if (repo) {
      const link = externalLink('View code', repo);
      link.classList.add('project-repo-button');
      link.setAttribute('aria-label', 'View ' + project.title + ' code on GitHub (opens in a new tab)');
      links.append(link);
    }
    if (project.caseStudy) {
      const link = el('a', 'project-link', 'Read case study →');
      link.href = safeUrl(project.caseStudy);
      links.append(link);
    }

    const details = el('details', 'project-details');
    const summary = el('summary', '', 'Approach & limitations');
    summary.append(el('span', 'summary-icon', '+'));
    const notes = el('div', 'notes-content');
    notes.append(el('p', '', project.details), el('p', 'result-note', project.limitation));
    details.append(summary, notes);
    body.append(meta, title, description, result, tags, links, details);
    card.append(body);
    document.getElementById('projects').append(card);
  }

  for (const group of data.skillGroups) {
    const section = el('div', 'skill-group');
    section.append(el('h3', '', group.title), el('p', 'skill-note', group.note));
    const list = el('ul', 'skill-list');
    for (const skill of group.skills) {
      const item = el('li');
      const used = skill.status === 'Used in projects';
      const status = el('span', 'skill-status' + (used ? ' used' : ''), skill.status);
      item.append(el('span', 'skill-name', skill.name), status);
      list.append(item);
    }
    section.append(list);
    document.getElementById('skills-list').append(section);
  }

  const hasEmail = typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const contactFacts = document.getElementById('contact-facts');
  const fact = (label, value, href) => {
    const item = el('li');
    item.append(el('span', 'fact-label', label));
    const text = el(href ? 'a' : 'span', '', value);
    if (href) text.href = href;
    item.append(text);
    contactFacts.append(item);
  };
  fact('EMAIL', hasEmail ? data.email : 'Contact email coming soon', hasEmail ? 'mailto:' + data.email : null);
  fact('BASED IN', data.location);
  document.getElementById('message-submit').disabled = !hasEmail;

  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || !hasEmail) return;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const status = document.getElementById('form-status');
    if (!name || message.length < 10) {
      status.textContent = 'Please add your name and a message of at least 10 characters.';
      return;
    }
    const subject = encodeURIComponent('Portfolio enquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nReply to: ' + email + '\n\n' + message);
    window.location.href = 'mailto:' + data.email + '?subject=' + subject + '&body=' + body;
    status.textContent = 'Email draft requested. Nothing has been sent by this website. If your email app did not open, use the email address in Get in touch.';
  });

  const faqOptions = document.getElementById('faq-options');
  for (const item of data.faq) {
    const button = el('button', 'faq-question', item.question);
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-controls', 'faq-answer');
    button.addEventListener('click', () => {
      faqOptions.querySelectorAll('button').forEach(node => node.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      document.getElementById('faq-answer-text').textContent = item.answer;
    });
    faqOptions.append(button);
  }

  for (const social of data.socialLinks) {
    const url = safeUrl(social.url);
    if (!url) continue;
    const link = externalLink(social.label, url);
    link.className = 'social-link';
    document.getElementById('social-links').append(link);
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
