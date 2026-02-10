
# Vanilla CopyGuard UI: Native Front-end Security Framework

Welcome to the official workspace. This project is a framework designed under the **KISS** (*Keep It Simple, Stupid*) philosophy, focusing on high standards of **Front-end Cybersecurity**.

This system is built as a robust, native infrastructure where organization, security, and modularity are the primary objectives.

---

## 📂 System Architecture

```text
ROOT_DIRECTORY/
│
├── 🚪 index.html              # The Gateway (Entry Point)
│
├── 🔐 core/                   # SECURITY ENGINE (Rules & Protocols)
│   ├── security.js            # Security Guard (Console & CMD Blocking)
│   ├── ghosting.css           # Content Ghosting (UI Protection)
│   ├── interceptor.js         # Data Traffic Controller
│   └── shield_layers.js       # Security Reinforcements
│
├── 📁 assets/                 # STATIC RESOURCES (Raw Assets)
│   ├── img/                   # Visual Media & Assets
│   └── fonts/                 # Typography & Brand Styles
│
├── ⚙️ shared/                 # GLOBAL UTILITIES (Shared Resources)
│   ├── css/                   # Global Styles
│   ├── js/                    # Utility Functions
│   └── lib/                   # External Dependencies
│
└── 🧩 modules/                # FEATURE MODULES (Independent Components)
    ├── home/                  # Primary Module
    │   ├── home.html, .css, .js
    │   └── controller.js
    └── page2/                 # Secondary Module
        ├── page2.html, .css, .js
        └── controller.js
```

---

## 📝 Component Breakdown

### 🚪 1. The Gateway (`index.html`)
This is the single entry point. Its sole mission is to receive the user and verify the environment. If **JavaScript is disabled**, access is denied. Once the environment is validated, it redirects the user to the primary module.

### 🔐 2. Security Engine (`core/`)
This directory contains the system's governance and front-end cybersecurity protocols:
*   **Surveillance:** Blocks access to the developer console, F12, and CMD-style tools.
*   **Content Protection:** Prevents text theft, unauthorized copying, and file dragging using ghosting layers.
*   **Active Protocol:** If a security breach is detected, the Engine triggers a "kill-switch" on the current view and halts all interaction to protect the source code.

### 📁 3. Static Assets (`assets/`)
Stores raw assets with no internal logic, such as images, icons, and fonts. These are kept separate so that design updates can be made without interfering with the functional code.

### ⚙️ 4. Global Utilities (`shared/`)
This is the shared inventory of the project. It stores resources that all modules must use consistently.

---

## 🛠️ Configuration & Setup

This project is **Open Source** and free to use. Follow these steps to implement it in your own environment:

### 1. Domain Authorization
To prevent your project from being downloaded and run locally or on unauthorized mirrors, you must configure the "Allowed Hosts".
*   Open `core/security.js`.
*   Locate the `allowedHosts` constant.
*   Add your production domain (e.g., `['yourdomain.com', 'localhost']`).

### 2. Security Mechanisms (What is blocked?)
The framework actively monitors and intercepts the following actions:
*   **Keyboard Shortcuts:**
    *   `F12`: Developer Tools.
    *   `Ctrl+S / Cmd+S`: Saving the webpage locally.
    *   `Ctrl+U / Cmd+U`: Viewing the page source code.
    *   `Ctrl+P / Cmd+P`: Printing (prevents PDF scraping).
    *   `Ctrl+Shift+I / J / C`: Inspect element and Console shortcuts.
*   **Mouse Interaction:**
    *   `Right-Click`: Context menu is disabled.
    *   `Drag & Drop`: Images and text cannot be dragged out of the browser.
*   **Environmental Monitoring:**
    *   **Window Resizing:** Triggers security if the difference between outer and inner window dimensions suggests a side-docked console.
    *   **Infinite Debugger:** Pauses script execution if the dev-tools are somehow bypassed.

### 3. Creating New Modules
The framework is designed to be infinitely scalable:
1.  Navigate to `modules/`.
2.  Clone an existing module folder (e.g., `home`).
3.  Rename the folder and its internal `.html`, `.css`, and `.js` files.
4.  Maintain the imports to `../../core/security.js` in the `<head>` of your new HTML file to ensure the shield remains active.

---

## 🔄 Development Workflow

1.  **Development Phase:** Work with the raw code in your local environment. Keep `security.js` readable to debug your own application.
2.  **Logic Separation:** Keep module-specific logic in `module_name.js` and cross-module communication in `controller.js`.
3.  **Production Hardening:**
    *   Before deploying, it is **highly recommended** to obfuscate `core/security.js` using tools like [javascript-obfuscator.io](https://javascript-obfuscator.io/).
    *   Set the **Domain Lock** in the obfuscator settings to match your production URL.
    *   Replace the raw `security.js` with the obfuscated version.

---

## 🚀 Why This Infrastructure?

*   **Hardened Security:** Security is centralized in the core. Every interaction is filtered through native protection protocols.
*   **Strict Modularity:** Business logic remains separated from design assets.
*   **Low Friction:** Framework-agnostic. No npm, no heavy dependencies—just native performance.
*   **Scalable & Clean:** Grows without creating "spaghetti code."

---
**"Everything together, but nothing mixed. Categorized by blocks for total control."**
```