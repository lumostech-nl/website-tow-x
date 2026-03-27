# Design System Document: Tactical Reliability & Editorial Sophistication

## 1. Overview & Creative North Star: "The Sentinel Dispatch"
The visual identity of this design system is anchored in the concept of **"The Sentinel Dispatch."** In the high-stakes world of tow dispatching, we move away from the chaotic, "emergency yellow" tropes of the industry. Instead, we embrace a high-end editorial aesthetic that signals quiet authority, precision, and architectural stability.

### Creative North Star: Tactical Elegance
We achieve this through **Organic Brutalism**: a layout style that uses heavy, authoritative typography paired with soft, layered surfaces. We break the "SaaS template" look by utilizing intentional asymmetry—allowing imagery to bleed off-canvas and using "The Layering Principle" to create depth without a single drop shadow. The interface should feel like a premium command center: calm under pressure, impeccably organized, and undeniably modern.

---

### 2. Colors & Surface Philosophy
Our palette moves beyond simple brand colors into a functional ecosystem of tonal depth.

*   **Primary Tier (`#003646` to `#004E64`):** Used for "Command" elements. Deep Teal provides a sense of nocturnal reliability and professional weight.
*   **Secondary/Neutral Tier (`#D0CEBA` / `secondary_container`):** This Sage/Champagne tone is our "New White." It reduces eye strain and provides a sophisticated, paper-like quality to the dispatch interface.
*   **Tertiary/Action Tier (`#EE6352` / `tertiary_container`):** The Coral accent is a "Tactical Alert." Use it sparingly for the most critical conversion points.

#### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Tonal Transitions:** Using the `secondary_fixed_dim` (`#c9c7b3`) to create a soft edge against the primary background.

#### Glass & Gradient Strategy
To avoid a flat, "out-of-the-box" look, use **Glassmorphism** for floating navigation bars or dashboard widgets. 
*   **Surface:** `surface_container_low` at 80% opacity.
*   **Effect:** 20px backdrop-blur.
*   **Signature Gradient:** For Hero backgrounds, use a subtle radial gradient from `primary_container` (`#004e64`) to `primary` (`#003646`) to add "soul" and dimension.

---

### 3. Typography: The Editorial Voice
We utilize a dual-typeface system to balance high-impact authority with functional clarity.

*   **Display & Headlines (Manrope):** A modern, geometric sans-serif with a wide stance. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headlines to create an "Editorial Cover" feel.
*   **Body & Labels (Inter):** The industry standard for legibility. Inter handles all functional data and long-form descriptions.

**Hierarchy Strategy:** 
*   **High Contrast:** Pair a `display-md` headline in `on_primary` against a `primary_container` background for maximum impact.
*   **Label Precision:** Use `label-md` in all-caps with 0.05em tracking for overlines (e.g., "REAL-TIME DISPATCHING") to evoke a tactical, military-grade aesthetic.

---

### 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "noisy" for a precision dispatch tool. We define hierarchy through physical stacking.

*   **The Layering Principle:** Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container` (#eceeef) background. This creates a natural "lift" based on color value rather than artificial shadows.
*   **Ambient Shadows:** When a floating element (like a modal) is required, use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 78, 100, 0.06);`. Note the tint—we use a low-opacity version of our **Primary Teal**, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. It should be felt, not seen.

---

### 5. Components & Primitive Styling

#### Buttons (The Tactical Trigger)
*   **Primary:** Background `tertiary` (`#6a0001` - deep red variant) or `tertiary_container` (`#EE6352`). Shape: `DEFAULT` (0.5rem) or `full` for a modern pill. No borders.
*   **Secondary:** `surface_container_highest` background with `on_surface` text.
*   **Interaction:** On hover, shift background color by 10% brightness; do not use "glow" effects.

#### Cards & Containers
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use `spacing_12` (3rem) of vertical white space or a subtle shift from `surface` to `surface_container_low`.
*   **Corners:** Use `xl` (1.5rem) for main landing page cards to soften the "Brutalist" typography.

#### Input Fields
*   **Style:** Minimalist. Underline only or a `surface_container_high` solid fill. 
*   **Focus State:** A 2px solid `primary_fixed_dim` (`#95cfe9`) "Ghost Border."

#### Custom Component: The "Live Dispatch" Chip
For this specific app, create a "Pulse Chip." A `secondary_container` pill featuring a small, animating dot in `tertiary` (`#EE6352`) to indicate live driver tracking.

---

### 6. Do’s and Don'ts

#### Do:
*   **DO** use asymmetric layouts. If a card sits on the left, let the supporting text sit slightly lower on the right to create a "waterfall" visual flow.
*   **DO** use the `0.5rem` to `1.5rem` roundedness scale consistently to maintain the "Modern & Trustworthy" feel.
*   **DO** leverage `surface_bright` for CTA sections to create a high-contrast break from the `secondary` sage background.

#### Don't:
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#191c1d) for better readability against the sage background.
*   **DON'T** use standard 1px borders between list items. Use `spacing_4` (1rem) padding and a background color hover state instead.
*   **DON'T** use "Safety Yellow" or "Emergency Orange." We are the calm *solution* to the emergency; stay within the Coral (`#EE6352`) and Teal (`#004E64`) palette to maintain premium positioning.