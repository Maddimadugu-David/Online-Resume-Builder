# Online Resume Builder - Documentation

## 1. Overview

The Online Resume Builder lets a user create a resume in the browser without installing anything. Users register, log in, enter their details, choose a template, and download the finished resume as a PDF.

## 2. Objectives

- Make resume creation quick and free of formatting work
- Give a live preview so changes are visible immediately
- Offer several professional layouts
- Keep the app simple enough to host as static files on GitHub Pages

## 3. Pages

| File | Purpose |
|---|---|
| `register.html` | Create an account (name, email, password) |
| `login.html` | Log in with email and password |
| `index.html` | Builder: form on the left, live preview on the right |
| `style.css` | Styles for every page, including the print layout used for PDF |
| `script.js` | All logic: auth, saving, rendering, templates |

## 4. User flow

1. Open `register.html` and create an account.
2. Log in on `login.html`.
3. On `index.html`, fill in the details. The preview updates as you type.
4. Switch template any time with the Template menu on the builder.
5. Click **Download as PDF** and choose "Save as PDF" in the print dialog.

## 5. Data storage

| Key | Storage | Content |
|---|---|---|
| `rb_users` | localStorage | Accounts: name and SHA-256 password hash, keyed by email |
| `rb_resume_<email>` | localStorage | Resume fields for that user |
| `rb_template_<email>` | localStorage | Selected template |
| `rb_user` | sessionStorage | Email of the logged-in user |

## 6. Resume fields

Name, job title, email, phone, location, links, summary, education, skills, projects, experience. In the education, projects and experience boxes, each line becomes one bullet. Skills are separated by commas.

## 7. Templates

- **Classic**: serif font, centered header
- **Modern**: colored header band, accented section titles
- **Minimal**: smaller type, light section titles

Templates are CSS classes (`tpl-classic`, `tpl-modern`, `tpl-minimal`) applied to the preview. To add one, add an entry to `TEMPLATES` in `script.js` and a matching CSS block in `style.css`.

## 8. Security notes

- All user text is escaped before it is placed in the preview to prevent script injection.
- Passwords are hashed with SHA-256 in the browser. Because there is no server, anyone with access to the browser profile can read stored data, so this is not suitable for real user accounts.

## 9. Testing checklist

- [ ] Register with a new email works; a duplicate email is rejected
- [ ] Login fails with a wrong password and succeeds with the right one
- [ ] Opening `index.html` while logged out redirects to login
- [ ] Preview updates while typing and survives a page refresh
- [ ] Each template renders correctly
- [ ] PDF output contains only the resume
- [ ] Layout works on a phone-width screen

## 10. Future improvements

- Backend with a database and secure authentication
- More templates and color options
- Photo upload
- Import and export resume data as JSON
- Multiple resumes per user
