# OIBSIP - Oasis Infobyte Web Development Internship

This repository contains the completed tasks for the Oasis Infobyte Web Development and Design virtual internship program, developed by Luthfi.

---

## Tasks Overview

### 1. Calculator (`Luthfi_Task1`)
A clean, modern calculator with basic mathematical functionalities built using HTML, CSS Grid, and JavaScript.
- **Layout**: Uses a flat dark-theme styled grid system for button alignment.
- **Features**:
  - Standard arithmetic: Addition, subtraction, multiplication, and division.
  - Bracket grouping and decimal point precision.
  - Memory registers: MC (Memory Clear), MR (Memory Recall), MS (Memory Store), and M+ (Memory Add).
- **Core Logic**: Uses a safe evaluation engine that validates inputs before executing calculations.

### 2. Tribute Page (`Luthfi_Task2`)
A minimal, elegant tribute page dedicated to Steve Jobs.
- **Layout**: Inspired by Apple's minimalist visual identity, featuring an obsidian dark background, an ambient colorful radial glow, and responsive typography.
- **Content**: A chronological timeline highlighting key legacy milestones (1955 – 2011) and iconic design philosophy quotes.
- **Media**: Incorporates the color WWDC 2010 headshot portrait.

### 3. To-Do WebApp (`Luthfi_Task3`)
An interactive, responsive To-Do application styled with a Cyber-Y2K / Neo-Brutalist design.
- **Layout**: Features high-contrast borders, block drop shadows, and Space Grotesk typography.
- **Features**:
  - Add, edit, complete, and delete tasks.
  - Separate sections for Pending Tasks and Completed Tasks.
  - Supports task editing and deletion on both list views.
  - Automatically logs and displays date/time stamps when tasks are added and completed.
- **Storage**: Persists list data in the browser's `localStorage` for offline use.

---

## Vercel Live Demo Links
- [Task1 Calculator on Vercel](https://luthfi-task1.vercel.app)
- [Task2 Tribute Page on Vercel](https://luthfi-task2.vercel.app)
- [Task3 Todo WebApp on Vercel](https://luthfi-task3.vercel.app)

---

## Deploy to Vercel

Each task is configured for deployment to Vercel as a separate static project.

To deploy from the CLI:
1. Install the Vercel CLI if needed: `npm install -g vercel`
2. Log in with `vercel login`
3. Deploy each task folder separately:
   - `cd Luthfi_Task1 && vercel --prod`
   - `cd ../Luthfi_Task2 && vercel --prod`
   - `cd ../Luthfi_Task3 && vercel --prod`

If you prefer the Vercel dashboard, create three projects and set the root directory for each project to:
- `Luthfi_Task1`
- `Luthfi_Task2`
- `Luthfi_Task3`

Each folder already includes a `vercel.json` file so Vercel will serve the static HTML/CSS/JS files correctly.

---

## How to Run the Projects

To run any of the tasks locally:
1. Clone or download this repository.
2. Navigate into the task folder (e.g., `Luthfi_Task1`).
3. Open `index.html` directly in any web browser.
