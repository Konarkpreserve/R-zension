# R-zension Spacing System

> Establishing rhythm, balance, and visual harmony across the entire product.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Spacing System |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |
| Last Updated | YYYY-MM-DD |

---

# Purpose

Spacing is one of the strongest indicators of design quality.

Good spacing creates:

- hierarchy
- readability
- balance
- elegance
- focus

Bad spacing creates:

- clutter
- confusion
- inconsistency
- visual fatigue

The purpose of this document is to ensure every screen in R-zension follows the same spatial rhythm.

---

# Philosophy

Whitespace is not empty.

Whitespace is content.

Spacing should guide the user's eye naturally through the interface.

If everything is close together,

nothing feels important.

If everything is far apart,

the interface feels disconnected.

The goal is rhythm.

---

# Spacing System

R-zension follows an **8-point spacing system**.

Every spacing value should be a multiple of 4.

Preferred multiples:

4

8

12

16

24

32

40

48

64

80

96

128

Avoid arbitrary values like:

17px

29px

43px

unless absolutely necessary.

---

# Design Tokens

These tokens should become CSS variables or Tailwind theme values.

| Token | Value |
|--------|------:|
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-5 | 24px |
| --space-6 | 32px |
| --space-7 | 40px |
| --space-8 | 48px |
| --space-9 | 64px |
| --space-10 | 80px |
| --space-11 | 96px |
| --space-12 | 128px |

Developers should use tokens instead of hardcoded values.

---

# Layout Width

Maximum Content Width

1280px

Preferred Width

1200px

Wide Sections

1440px

Never allow content to stretch across ultra-wide monitors.

Very long lines reduce readability.

---

# Page Margins

Desktop

64px

Tablet

40px

Mobile

20px

Margins should shrink gracefully.

---

# Section Spacing

Major sections should breathe.

Desktop

96–128px

Tablet

72–96px

Mobile

56–72px

Example

Hero

↓

96px

↓

Features

↓

96px

↓

Leaderboard

---

# Component Spacing

Cards

24px internal padding

Compact Cards

16px

Large Cards

32px

Never mix padding values inside the same card.

---

# Button Padding

Small

Horizontal

16px

Vertical

10px

---

Medium

Horizontal

20px

Vertical

12px

---

Large

Horizontal

28px

Vertical

16px

Buttons should never feel cramped.

---

# Form Spacing

Label

↓

8px

↓

Input

↓

16px

↓

Helper Text

↓

24px

↓

Next Field

Forms should feel calm and easy to scan.

---

# Navigation

Navbar Height

72px

Navigation Item Gap

32px

Logo Margin

24px

CTA Distance

32px

Navigation should never feel crowded.

---

# Hero Layout

Top Padding

120px

Bottom Padding

120px

Headline

↓

24px

↓

Description

↓

32px

↓

CTA Buttons

↓

48px

↓

Preview

The hero should breathe.

---

# Cards

Internal Padding

24px

Title

↓

12px

↓

Description

↓

20px

↓

Action

Card spacing should remain consistent.

---

# Dashboard

Widget Gap

24px

Section Gap

40px

Page Gap

64px

Avoid placing widgets too close together.

---

# Sidebar

Width

280px

Internal Padding

24px

Menu Gap

12px

Group Gap

32px

---

# Tables

Cell Padding

16px

Header Padding

20px

Row Height

56px

Compact Row

48px

---

# Modals

Outer Padding

32px

Section Gap

24px

Buttons

24px

Maximum Width

640px

---

# Dialogs

Title

↓

16px

↓

Description

↓

24px

↓

Content

↓

32px

↓

Actions

---

# Lists

Item Gap

12px

Group Gap

24px

Section Gap

48px

---

# Icons

Icon

↓

Text

8px

Icon Group

16px

Navigation Icons

12px

---

# Avatars

Avatar

↓

Name

12px

Group Avatars

-8px overlap

Maximum Stack

5 avatars

---

# Charts

Chart

↓

Legend

24px

Chart

↓

Insights

32px

Chart

↓

Recommendation

40px

Analytics should tell a story.

---

# Empty States

Illustration

↓

24px

↓

Title

↓

12px

↓

Description

↓

24px

↓

CTA

Do not compress empty states.

---

# Footer

Section Padding

96px

Column Gap

48px

Bottom Padding

40px

---

# Mobile Adaptation

Desktop spacing should not simply shrink.

Instead:

Reduce columns.

Increase vertical spacing.

Preserve breathing room.

Users scroll vertically.

Optimize for that behavior.

---

# Density Guidelines

Comfortable

Default experience.

Used everywhere.

Compact

Tables

Admin pages

Power users

Spacious

Landing page

Marketing pages

Hero sections

Oracle

---

# Anti-Patterns

Never:

✘ Random margins

✘ Different card paddings

✘ Uneven spacing

✘ Widgets touching each other

✘ Tiny click targets

✘ Overfilled screens

✘ "Pixel-perfect" manual adjustments everywhere

Consistency is more valuable than perfection.

---

# Spacing Checklist

Every screen should answer:

✓ Is spacing consistent?

✓ Is there a clear rhythm?

✓ Are sections visually separated?

✓ Can users scan naturally?

✓ Is whitespace intentional?

✓ Does the interface feel premium?

---

# Future Expansion

The spacing system should support:

- Responsive layouts

- Design tokens

- Tailwind configuration

- Figma variables

- CSS variables

without changing the visual rhythm.

---

# References

- design-system.md

- color-palette.md

- typography.md

- components.md

- screen-specifications.md