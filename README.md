# SB System Service – sbscctv.in

Information website for SB System Service, Dindigul – wholesale dealer of CCTV, biometric attendance, access control and security accessories.

Plain static site (HTML/CSS/JS), no build step.

## Update business details
Edit the `SITE` object at the top of `assets/main.js` (phone, WhatsApp number, email, address).
To pin the exact shop on the map, replace the `iframe` `src` in the Contact section of `index.html`
with the "Embed a map" link from Google Maps.

## Hosting (GitHub Pages)
1. Repo Settings → Pages → Deploy from branch → `main` / root.
2. `CNAME` already contains `sbscctv.in`.
3. At the domain registrar, add DNS records:
   - `A` records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www` → `rnrinfo2014.github.io`
4. Enable "Enforce HTTPS" once the certificate is issued.
