# 🌐 Site‑Vitrine‑Portfolio — Projet personnel

> Un site vitrine moderne développé avec **Nuxt 3 + Tailwind CSS** pour mettre en pratique mes compétences **full‑stack, SEO et performance**.

---

## 🚀 Objectifs du projet
- **Exploration Nuxt 3** : routing, server‑side rendering (SSR) et composables.
- **UI responsive** : design propre, adaptable mobiles / tablettes / desktop.
- **Optimisation SEO & accessibilité** : balises metas, sitemap.xml, robots.txt, ARIA.
- **Performance web** : lazy‑loading d’images, PWA, compression et cache.
- **Structuration type “vitrine”** : accueil, services, témoignages, contact.

---

## 🛠️ Fonctionnalités clés
- Page **Accueil** avec section héroïque animée (Vue transitions).
- Section **Services / Projets** alimentée par fichiers Markdown.
- **Témoignages** statiques (ou JSON) affichés sous forme de cartes.
- **Formulaire de contact** : validation côté client (Vee‑validate) + hook mail (server API).
- **Optimisation SEO** :  
  - Nuxt SEO module (meta, OG tags).  
  - Sitemap & robots.txt auto‑générés.  
- **PWA** : installation offline, icône, manifest.json.
- **Nuxt Image** : redimensionnement et formats modernes (WebP, AVIF).

---

## 💻 Stack & outils
| Catégorie | Choix | Pourquoi ? |
|-----------|-------|------------|
| **Framework** | **Nuxt 3 (Vue 3)** | SSR/SSG, composables, DX moderne |
| **UI** | **Tailwind CSS** | Rapidité de prototypage, responsive natif |
| **State / Content** | Nuxt Content + auto‑import | Rendu Markdown + typographie |
| **SEO** | `@nuxtjs/seo` | Balises meta, OG, JSON‑LD |
| **PWA** | `@vite-pwa/nuxt` | Cache, manifest, offline |
| **Images** | `@nuxt/image` | Formats next‑gen, lazy‑loading |
| **Tests** | Vitest + Playwright (à venir) | Assurance qualité |
| **CI/CD** | GitHub Actions | Lint, tests, déploiement Vercel |

---

## ⚡ Performances & bonnes pratiques
- `nuxt build --analyze` pour inspecter les bundles.
- Compression Brotli + Gzip activée sur Vercel.
- Images <source set> générées automatiquement.
- Scores cibles Lighthouse : **Performance ≥ 90**, **A11y ≥ 90**, **SEO ≥ 95**.

---

## 📦 Installation locale

```bash
# 1. Cloner
git clone https://github.com/USERNAME/site-vitrine-portfolio.git
cd site-vitrine-portfolio

# 2. Dépendances
pnpm install          # ou npm / yarn

# 3. Dev server
pnpm dev
# http://localhost:3000
```

--- 

## Déploiement

```bash
- Vercel : vercel --prod
- Netlify : netlify deploy --prod
- VPS :
  - pnpm build
  - pnpm start
```

---

## 🤝 Contributions

Projet personnel ; les PR sont bienvenues pour améliorations ou suggestions.
Ouvrez une issue pour toute fonctionnalité intéressante !

---

## 📄 Licence
Ce projet est distribué sous la **licence MIT**.  

---

## 🙋 Contact
- **GitHub :** [@LeoPellegrin](https://github.com/LeoPellegrin)  
- **LinkedIn :** [leo‑pellegrin](https://www.linkedin.com/in/leo-pellegrin/)  
- **Courriel :** leo.pellegrin87@gmail.com

> *Built with ❤️ & Nuxt 3 — always learning, always shipping.*
