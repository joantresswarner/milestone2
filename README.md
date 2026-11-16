# Joantress Portfolio

Upload index.html, projects.html, about.html, style.css, and contact.js to the root of milestone2 on main, replacing the old files.

## Enable GitHub Pages

1. Open repository Settings → Pages.
2. Choose Deploy from a branch under Build and deployment.
3. Select main and / (root), then Save.
4. Wait for deployment, then open https://joantresswarner.github.io/milestone2/ and check all three pages.

## Responsive layout

- Below 768px: one project column, stacked header.
- From 768px: two project columns, horizontal header.
- From 1024px: three project columns, split hero, two-column about page.

All pages load style.css and Google Fonts (Space Grotesk and DM Sans). Google Fonts require an internet connection; local fallbacks are provided. Project cards remain labeled placeholders until real work is added.

## Accessibility fixes

- I linked every page to the shared stylesheet and Google Fonts so the palette and typography stay consistent.
- I added a visible label linked to each contact control with matching for/id attributes.
- I grouped contact details and message fields with fieldset and legend elements.
- I added required indicators, email formatting guidance, and descriptions connected with aria-describedby.
- I added written field errors and aria-invalid states so errors do not depend on color alone.
- I added an error summary with links to invalid fields and moved keyboard focus to it after an invalid submission.
- I clear corrected errors and announce successful validation through a polite status region.
- I added visible keyboard focus outlines and dark form borders that remain clear against their backgrounds.
- I kept the existing skip links, English language declaration, page landmarks, heading hierarchy, and current-page navigation.

## Gestalt principles

- **Proximity:** I keep each project title and description together inside a card, and place each form label, hint, and error beside its control.
- **Similarity:** I repeat the same card shapes, heading fonts, teal actions, and navigation styles across all three pages.
- **Common region:** I use bordered fieldsets to visually and semantically group related contact fields.

## WebAIM contrast checks

I checked these palette pairs with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) on November 15, 2026; every pair passes WCAG AA for normal text (minimum 4.5:1).

| Text color | White #FFFFFF | Page #F7F8F4 | Soft green #E5EFE9 |
| --- | --- | --- | --- |
| Navy #142C3C | 14.43:1 | 13.52:1 | 12.26:1 |
| Slate #4C626D | 6.41:1 | 6.01:1 | 5.45:1 |
| Teal #146858 | 6.66:1 | 6.24:1 | 5.66:1 |
| Error red #A11919 | 7.86:1 | 7.37:1 | 6.69:1 |

White button text on teal has the same 6.66:1 ratio, and white button text on navy hover backgrounds has the same 14.43:1 ratio because contrast is symmetric.
The slate form borders and teal focus indicators also exceed the 3:1 requirement for identifying controls on their adjacent backgrounds.
Pale decorative card borders do not communicate errors or identify form controls.

## Contact form behavior

The About page includes Name, Email, Topic, and Message fields with accessible validation in contact.js.
Choose **Check message** to validate the fields; this demonstration does not send, save, or clear the message.
Actual message delivery requires a form endpoint and server-side validation before replacing the demo behavior.
Without JavaScript the check button stays disabled and the page explains the limitation.

## Validation and WAVE status

Axe-core checks in JSDOM found no structural accessibility violations on index.html, projects.html, or about.html; color contrast and label-content-name-mismatch rules were excluded because this environment does not provide browser rendering/canvas support.
Each contact control was separately checked for a matching label and valid descriptive references.
Form interaction checks passed for empty and whitespace-only required fields, malformed email, error-summary focus, error-link focus, correction, successful validation announcements, and clearing outdated success messages after edits.
All internal page links resolve.
These checks do not replace a rendered browser review or WAVE evaluation.

| Page | WAVE attempt on November 15, 2026 |
| --- | --- |
| Home | Blocked: the intended live URL serves GitHub's “Site not found” page. |
| Projects | Blocked: the intended live URL serves GitHub's “Site not found” page. |
| About | Blocked: the intended live URL serves GitHub's “Site not found” page. |

WAVE evaluated GitHub's 404 document, not this portfolio, so its reported errors are not recorded as portfolio errors and a zero-error portfolio result is not claimed.
After deployment, run WAVE on each actual page, fix every reported error and contrast error, review alerts, and record the final results here.
You can also open the extracted pages locally and use the official WAVE browser extension before deployment.

## Final manual checks

1. Upload contact.js with the HTML and CSS files, then enable GitHub Pages using the steps above.
2. Confirm Home, Projects, and About load, and run WAVE on all three pages.
3. Use Tab and Shift+Tab to check skip links, navigation, form controls, and focus visibility.
4. Submit the empty form, follow each error link, correct the fields, and check the confirmation.
5. Inspect all three pages at 320px, 768px, and 1200px and at 200% zoom for overlap or horizontal scrolling.
