# The Hosting Table Co. — updated full project

This project includes your real photos, source code, original package lock, Netlify configuration, and a freshly built dist folder. No placeholder images are included. node_modules is omitted; install dependencies with npm ci when developing locally.

## View or publish

- To develop: open this folder in your terminal, run npm ci, then npm run dev.
- To rebuild: npm run build. The output is dist.
- For a manual deployment on your existing host, use the contents of dist as the published website. For a repository-based deployment, retain the existing Netlify build configuration (npm run build, publish dist).
- Publishing has not been performed. After deploying, send a test inquiry and confirm receipt and the success-page conversion. The original success.html and conversion event are preserved.

## What changed

Seven expandable cuisine menus (French, Italian, Coastal, Seasonal American, Latin American, Japanese Inspired, Mediterranean Inspired), with all four seasons and seasonal sides. The selector starts on the current Virginia season. Menus mix your signature dishes with explicitly labeled sample ideas. Edit src/data/seasonalMenus.js for future updates.

Refreshed About and service copy; current phone and booking email; 50% deposit and final payment deadlines; $85 family-style starting price; clearer meal-prep portions; improved form status/error feedback; keyboard/mobile styling; lazy photo loading; individual city-page metadata; removed duplicate Google Ads initialization. Existing review text, photos, Netlify settings, and success-page conversion tracking are preserved.

## Validation

Production build passed using the original project's Vite 8.0.14 and React 19.2.6 dependencies with all real assets. All six HTML entries were emitted. Earlier checks covered all 28 seasonal menu combinations, date boundaries, React rendering, CSS/JS syntax, structured metadata, and matching Netlify registration fields.

Browser checks passed for opening menu sections, changing seasons, mobile single-column menus, and the Northern Virginia page. Live inquiry delivery and actual advertising conversion reporting remain untested until deployment. No live site changes were made.
