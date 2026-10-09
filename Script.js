/* Online Resume Builder - shared logic for all pages (styles are in style.css).
   Data lives in the browser (localStorage), so it works on GitHub Pages with no backend. */

const $ = (s, r = document) => r.querySelector(s);
const store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

const TEMPLATES = [
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' },
  { id: 'minimal', name: 'Minimal' }
];
const FIELDS = ['name', 'title', 'email', 'phone', 'location', 'links', 'summary', 'education', 'skills', 'projects', 'experience'];

/* ---------- helpers ---------- */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const say = (el, text, ok) => { el.textContent = text; el.className = 'msg' + (ok ? ' ok' : ''); };
const currentUser = () => sessionStorage.getItem('rb_user');
const requireLogin = () => { if (!currentUser()) location.href = 'login.html'; };

async function hash(text) {
  if (window.crypto && crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return btoa(text); // fallback when not on https/localhost (demo only)
}

function renderNav() {
  const nav = $('#nav');
  if (!nav) return;
  const links = currentUser()
    ? '<a href="index.html">Builder</a><a href="#" id="logout">Log out</a>'
    : '<a href="login.html">Log in</a><a href="register.html">Register</a>';
  nav.innerHTML = '<a class="brand" href="index.html">Resume Builder</a>' + links;
  const out = $('#logout');
  if (out) out.addEventListener('click', e => { e.preventDefault(); sessionStorage.removeItem('rb_user'); location.href = 'login.html'; });
}

/* ---------- register ---------- */
function initRegister() {
  $('#form').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim().toLowerCase();
    const pw = $('#password').value;
    const msg = $('#msg');
    if (pw.length < 6) return say(msg, 'Use a password with at least 6 characters.');
    const users = store.get('rb_users', {});
    if (users[email]) return say(msg, 'This email already has an account. Log in instead.');
    users[email] = { name, pass: await hash(pw) };
    store.set('rb_users', users);
    say(msg, 'Account created. Taking you to log in…', true);
    setTimeout(() => (location.href = 'login.html'), 900);
  });
}

/* ---------- login ---------- */
function initLogin() {
  $('#form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#email').value.trim().toLowerCase();
    const users = store.get('rb_users', {});
    const user = users[email];
    if (!user || user.pass !== await hash($('#password').value)) return say($('#msg'), 'Email or password is incorrect.');
    sessionStorage.setItem('rb_user', email);
    location.href = 'index.html';
  });
}

/* ---------- resume rendering ---------- */
const list = t => t ? `<ul>${t.split('\n').filter(l => l.trim()).map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : '';
const section = (title, body) => body ? `<h2>${title}</h2>${body}` : '';

function renderResume(d) {
  const contact = [d.email, d.phone, d.location, d.links].filter(Boolean).map(esc).join(' | ');
  const skills = d.skills ? `<p>${d.skills.split(',').map(s => esc(s.trim())).filter(Boolean).join(', ')}</p>` : '';
  return `<div class="head"><h1>${esc(d.name) || 'Your name'}</h1><div>${esc(d.title)}</div><div>${contact}</div></div>`
    + section('Summary', d.summary ? `<p>${esc(d.summary)}</p>` : '')
    + section('Education', list(d.education))
    + section('Skills', skills)
    + section('Projects', list(d.projects))
    + section('Experience', list(d.experience));
}

/* ---------- builder (index.html) ---------- */
function initBuilder() {
  requireLogin();
  const user = currentUser();
  const key = 'rb_resume_' + user;
  const data = store.get(key, {});
  if (!data.name) data.name = (store.get('rb_users', {})[user] || {}).name || '';
  if (!data.email) data.email = user || '';

  const tpl = $('#template');
  tpl.innerHTML = TEMPLATES.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  tpl.value = store.get('rb_template_' + user, 'classic');

  FIELDS.forEach(f => { $('#' + f).value = data[f] ?? ''; $('#' + f).addEventListener('input', update); });
  tpl.addEventListener('change', update);

  function update() {
    const d = {};
    FIELDS.forEach(f => (d[f] = $('#' + f).value.trim()));
    store.set(key, d);
    store.set('rb_template_' + user, tpl.value);
    $('#preview').className = 'tpl-' + tpl.value;
    $('#preview').innerHTML = renderResume(d);
  }

  $('#print').addEventListener('click', () => window.print());
  $('#clear').addEventListener('click', () => {
    if (confirm('Clear every field in this resume?')) { FIELDS.forEach(f => ($('#' + f).value = '')); update(); }
  });
  update();
}

/* ---------- start ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  const pages = { register: initRegister, login: initLogin, builder: initBuilder };
  const run = pages[document.body.dataset.page];
  if (run) run();
});
