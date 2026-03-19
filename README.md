**The Alchemist — Luxury Mixology & Dining**

A polished, responsive single-page site showcasing a high-end mixology and dining experience. Built with React and Vite, the project uses GSAP animations and local asset management to present hero banners, menu sections, and visual highlights.

**Quick Links**
- **Source:** This workspace
- **Metadata:** [metadata.json](metadata.json)
- **Package manifest:** [package.json](package.json)

**Features**
- **Hero:** Animated hero with local banner asset and gradient overlay.
- **Menu:** Food and drinks sections with curated items and local images.
- **Experience:** Visual highlight cards and animated feature grid.
- **Assets:** Local banners and menu images in `assets/banners` and `assets/menu`.

**Project Structure**
- **`src` / root:** App entrypoints (`App.tsx`, `index.tsx`) and main markup.
- **`components/`**: Reusable React components such as `Hero.tsx`, `MenuList.tsx`, `Experience.tsx`, `Header.tsx`, `Footer.tsx`.
- **`assets/`**: Local images used by the site (banners, menu images, gallery).

**Prerequisites**
- **Node.js:** v16+ recommended
- **Package manager:** `npm` (repo uses `npm` scripts)

**Local Development**
- Install dependencies:

   `npm install`

- Start the dev server:

   `npm run dev`

- Build for production:

   `npm run build`

- Preview production build locally:

   `npm run preview`

**Key Files**
- **Hero component:** [components/Hero.tsx](components/Hero.tsx)
- **Menu listing:** [components/MenuList.tsx](components/MenuList.tsx)
- **Experience visuals:** [components/Experience.tsx](components/Experience.tsx)
- **Assets:** [assets/](assets/)

**Notes on Assets**
- Banners live in [assets/banners](assets/banners) (examples: `hero.png`, `menu.png`, `room-nb.png`).
- Menu item images live in [assets/menu](assets/menu) (e.g., `food_001.webp`).

**Dependencies & Tooling**
- Frontend: `react`, `react-dom`
- Animations: `gsap`
- Icons: `lucide-react`
- Build: `vite`
- See full list in [package.json](package.json)

**Development Tips**
- When adding images, import them and use them as module sources (e.g., `import hero from './assets/banners/hero.png'`) to let Vite optimize them.
- GSAP `scrollTrigger` hooks reference DOM nodes via refs — keep component refs stable.

**Contributing**
- Fork, create a feature branch, implement changes, and open a PR with a brief description and screenshots if applicable.

**License & Credits**
- This repository does not include a license file. Add one (for example, an MIT `LICENSE`) if you plan to make the project public.

**Questions / Next Steps**
- I can run the dev server and verify visuals locally (`npm run dev`). Want me to start it now?

