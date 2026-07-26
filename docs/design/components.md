# R-zension Component Library

> The canonical specification for every reusable UI component in R-zension.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Component Library |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |
| Last Updated | YYYY-MM-DD |

---

# Purpose

This document defines every reusable UI component used throughout R-zension.

A component should solve a reusable interface problem.

If the same UI appears more than once,
it should become a reusable component.

---

# Component Philosophy

Every component must be:

✓ Reusable

✓ Accessible

✓ Responsive

✓ Themeable

✓ Consistent

✓ Performant

✓ Predictable

Never build one-off UI.

---

# Design Principles

Every component should answer:

• What is its purpose?

• What problem does it solve?

• When should it be used?

• When should it NOT be used?

---

# Component Categories

## Foundation

- Button
- Icon
- Typography
- Badge
- Avatar
- Divider
- Tooltip

---

## Inputs

- Input
- Textarea
- Select
- Combobox
- Checkbox
- Radio
- Switch
- Slider
- Date Picker
- Search Box

---

## Navigation

- Navbar
- Sidebar
- Breadcrumb
- Tabs
- Pagination

---

## Data Display

- Card
- Table
- Data Grid
- Chart Container
- Statistic
- Timeline
- Progress
- Empty State

---

## Feedback

- Toast
- Alert
- Banner
- Modal
- Dialog
- Drawer
- Skeleton
- Spinner

---

## Oracle

- Oracle Insight Card
- Prediction Card
- Confidence Meter
- Recommendation Panel
- AI Status Badge

---

## Leaderboard

- Rank Card
- User Rank Row
- Momentum Indicator
- Rank Change Indicator
- Achievement Badge

---

# BUTTON

Purpose

Primary action.

Never use more than one Primary Button per section.

---

Variants

Primary

Secondary

Ghost

Outline

Danger

Success

Icon

Link

---

Sizes

Small

Medium

Large

---

States

Default

Hover

Focus

Active

Loading

Disabled

Success

---

Behavior

Hover

Small elevation

Soft glow

Press

Scale to 98%

Loading

Spinner + Disabled

Disabled

Reduced opacity

No interaction

---

Accessibility

Keyboard Focus

ARIA Label

44px minimum touch target

---

Usage

✓ Save

✓ Submit

✓ Login

✓ Continue

✗ Navigation

✗ Decoration

---

# INPUT

Purpose

Collect user information.

---

Variants

Default

Search

Password

Email

Number

Multiline

---

States

Empty

Focused

Typing

Valid

Invalid

Disabled

Loading

---

Rules

Always show labels.

Never rely only on placeholders.

Validation should appear after interaction.

---

# CARD

Purpose

Group related information.

---

Card Types

Information

Analytics

Oracle

Leaderboard

Profile

Achievement

Feature

---

Layout

Header

↓

Body

↓

Footer

---

Rules

One purpose per card.

Avoid nested cards.

Padding remains consistent.

---

# MODAL

Purpose

Temporary focused interaction.

---

Structure

Title

↓

Description

↓

Content

↓

Actions

---

Rules

Maximum width

640px

Click outside closes (configurable)

ESC closes

Focus trap required

---

# NAVBAR

Purpose

Primary navigation.

---

Contains

Logo

Navigation

Theme

Profile

Primary CTA

---

Behavior

Sticky

Glass background

Blur

Responsive

---

# SIDEBAR

Purpose

Application navigation.

---

States

Expanded

Collapsed

Mobile Drawer

---

Contains

Logo

Navigation Groups

User Profile

Settings

Logout

---

Rules

Always highlight current page.

---

# TABLE

Purpose

Display structured information.

---

Capabilities

Sorting

Filtering

Pagination

Search

Selection

Responsive

---

States

Loading

Empty

Error

Success

---

# CHART CONTAINER

Purpose

Wrap all visualizations.

---

Contains

Title

↓

Chart

↓

Insight

↓

Recommendation

---

Every chart answers

What changed?

Why?

What should I do?

---

# TOAST

Purpose

Temporary notification.

---

Types

Success

Info

Warning

Danger

---

Placement

Top Right

---

Duration

4 seconds

---

Never stack more than three.

---

# EMPTY STATE

Purpose

Guide users.

---

Contains

Illustration

↓

Title

↓

Explanation

↓

Primary Action

---

Never say

"No Data"

Instead explain

Why

and

What Next

---

# SKELETON

Purpose

Loading placeholder.

---

Rules

Match final layout.

Avoid layout shift.

Never replace with spinner when layout is known.

---

# ORACLE INSIGHT CARD

Purpose

Display one AI insight.

---

Contains

Confidence

↓

Headline

↓

Explanation

↓

Recommendation

↓

Action

---

Color

Oracle Cyan

Accent

Soft Glow

---

Never conversational.

Never chat bubbles.

---

# CONFIDENCE METER

Purpose

Display Oracle certainty.

---

Display

Percentage

Visual Ring

Confidence Label

Reason

---

Example

92%

High Confidence

Trend based on previous 30 days.

---

# RECOMMENDATION PANEL

Purpose

Actionable improvements.

---

Contains

Priority

↓

Recommendation

↓

Reason

↓

Expected Impact

↓

Action Button

---

# RANK CARD

Purpose

Display user ranking.

---

Contains

Rank

↓

Movement

↓

User

↓

Momentum

↓

Badge

---

Movement

Green

Up

Red

Down

Gray

No Change

---

# MOMENTUM INDICATOR

Purpose

Visualize recent growth.

---

Displays

Increasing

Stable

Declining

---

Never display numbers only.

Always include explanation.

---

# ACHIEVEMENT BADGE

Purpose

Celebrate progress.

---

Contains

Icon

Title

Short Description

Unlocked Date

---

Animation

One-time reveal.

---

# PROFILE CARD

Purpose

User summary.

---

Contains

Avatar

↓

Name

↓

Level

↓

Rank

↓

Achievements

↓

Actions

---

# COMPONENT STATES

Every reusable component supports

Loading

Empty

Error

Success

Disabled

Responsive

Dark Mode

Focus

Hover

Keyboard

---

# Accessibility Standards

Every component must support

✓ Keyboard Navigation

✓ Screen Readers

✓ Visible Focus

✓ WCAG AA Contrast

✓ Touch Targets ≥44px

✓ ARIA Labels where appropriate

---

# Responsive Rules

Desktop

Tablet

Mobile

Components adapt.

Never simply shrink.

Layouts reorganize.

---

# Naming Convention

Button.tsx

Button.types.ts

Button.test.tsx

Button.stories.tsx

Button.module.css (if applicable)

or

/button

    Button.tsx

    Button.types.ts

    Button.test.tsx

    index.ts

One component = one folder.

---

# Development Standards

Every component should be

Reusable

Typed

Testable

Documented

Accessible

Memoized where beneficial

Composable

---

# Component Checklist

Before adding a new component ask

✓ Can an existing component solve this?

✓ Is this reusable?

✓ Does it match the design system?

✓ Does it support accessibility?

✓ Does it support dark mode?

✓ Does it support mobile?

✓ Does it support keyboard navigation?

If not,

improve the existing component instead.

---

# References

- design-system.md
- typography.md
- spacing.md
- animations.md
- color-palette.md
- screen-specifications.md