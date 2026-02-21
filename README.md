# Dr Piet Malepa Website (Vanilla HTML/CSS)

Static multi-page implementation derived from `dr-piet-malepa.pen`.

## Pages

- `index.html` (Home)
- `research.html`
- `about.html`
- `contact.html`

All pages share `styles.css`.

## Run

Open any HTML file directly, or serve the directory with a static server.

Example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/index.html`.

## Contact Form

The contact form posts to the placeholder endpoint:

- `POST /api/contact-placeholder`

Update `contact.html` if you want a production endpoint.

## Local Image Mapping

Website-ready optimized assets are stored in:

- `assets/images/optimized/`

Source originals are stored in:

- `assets/images/source/`

Legacy generated images are archived (compressed and renamed) in:

- `assets/images/archive/`

Current production mappings:

- Home hero: `assets/images/optimized/dr-piet-malepa-office-right.jpg`
- Home highlight image: `assets/images/optimized/amphibian-frog-study.jpg`
- Research hero: `assets/images/optimized/dr-piet-malepa-office-right.jpg`
- About portrait: `assets/images/optimized/dr-piet-malepa-office-right.jpg`
- Contact details image: `assets/images/optimized/dr-piet-malepa-office-right.jpg`
