# Chrome DevTools Examples - Project 2

**Name:** Rafael Garcia
**Date:** December 2, 2025

---

## Overview

This project implements examples from the Chrome DevTools documentation:
- JavaScript Debugging: https://developer.chrome.com/docs/devtools/javascript
- DOM Manipulation: https://developer.chrome.com/docs/devtools/dom

---

## JavaScript Debugging Examples

### Example 1: Breakpoints

**File:** `devtools-javascript.html`

**What it demonstrates:** Setting a breakpoint to debug a buggy calculator

**How to use:**
1. Open `devtools-javascript.html` in Chrome
2. Press F12 to open DevTools
3. Go to Sources tab
4. Find `devtools-javascript.js`
5. Click line 13 to set breakpoint
6. Click "Add Numbers" button
7. Code pauses - inspect variables in Scope panel

**Screenshot:**
[Insert screenshot here]

---

### Example 2: Event Listener Breakpoints

**What it demonstrates:** Pausing when a click event fires

**How to use:**
1. In DevTools Sources tab
2. Expand "Event Listener Breakpoints"
3. Check Mouse → click
4. Click the button on page
5. Execution pauses automatically

**Screenshot:**
[Insert screenshot here]

---

### Example 3: Watch Expressions

**What it demonstrates:** Monitoring variables in real-time

**How to use:**
1. In DevTools Sources tab
2. Find "Watch" section
3. Add expression: `petStats`
4. Set breakpoint in button handler
5. Click buttons and watch values update

**Screenshot:**
[Insert screenshot here]

---

### Example 4: Console Evaluation

**What it demonstrates:** Testing code in the Console

**How to use:**
1. Open Console tab
2. Type: `testFunction()`
3. Try typing variable names
4. Test expressions before coding them

**Screenshot:**
[Insert screenshot here]

---

## DOM Manipulation Examples

### Example 5: Inspecting Elements

**File:** `devtools-dom.html`

**What it demonstrates:** Selecting and viewing DOM elements

**How to use:**
1. Open `devtools-dom.html` in Chrome
2. Right-click any element → Inspect
3. Or press Ctrl+Shift+C to select elements
4. Navigate with arrow keys in Elements panel

**Screenshot:**
[Insert screenshot here]

---

### Example 6: Editing Content

**What it demonstrates:** Modifying text and attributes

**How to use:**
1. Inspect any element
2. Double-click text to edit it
3. Double-click attributes to change them
4. Changes appear instantly on page

**Screenshot:**
[Insert screenshot here]

---

### Example 7: Reordering Elements

**What it demonstrates:** Changing DOM structure

**How to use:**
1. Inspect a list element
2. Drag elements up/down in DevTools
3. Press H to hide/show elements
4. Press Delete to remove elements

**Screenshot:**
[Insert screenshot here]

---

### Example 8: Console Commands

**What it demonstrates:** Using $0 to reference selected element

**How to use:**
1. Inspect any element
2. Open Console (Esc key)
3. Type: `$0` to see selected element
4. Try: `$0.style.color = "red"`

**Screenshot:**
[Insert screenshot here]

---

### Example 9: Editing Styles

**What it demonstrates:** Modifying CSS in real-time

**How to use:**
1. Inspect the styled box
2. Look at Styles panel
3. Click any value to edit it
4. Click :hov to force hover state

**Screenshot:**
[Insert screenshot here]

---

### Example 10: Event Listeners

**What it demonstrates:** Viewing attached event handlers

**How to use:**
1. Inspect the multi-event button
2. Scroll to Event Listeners section
3. See all events: click, mouseenter, etc.
4. Click handler to see code

**Screenshot:**
[Insert screenshot here]

---

## Files Created

- `devtools-javascript.html` - JavaScript debugging examples
- `devtools-javascript.js` - JavaScript code
- `devtools-dom.html` - DOM manipulation examples
- `devtools-dom.js` - DOM code
- `devtools-styles.css` - Styling

---

## What I Learned

- How to set different types of breakpoints
- How to step through code
- How to inspect variables
- How to edit DOM elements
- How to modify CSS in DevTools
- How to use Console commands like $0

---

**End of Documentation**
