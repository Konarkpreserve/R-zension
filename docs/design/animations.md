# R-zension Motion & Animation System

> Motion is communication. Every animation should explain, guide, reinforce, or delight.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Motion & Animation System |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |
| Last Updated | YYYY-MM-DD |

---

# Purpose

Motion gives life to the interface.

Animation should never exist purely for aesthetics.

Every animation must improve one of the following:

• Understanding

• Navigation

• Feedback

• Focus

• Continuity

If it does not improve the experience,

remove it.

---

# Motion Philosophy

R-zension should feel like:

✓ Intelligent

✓ Calm

✓ Responsive

✓ Smooth

✓ Intentional

Never:

✗ Hyperactive

✗ Bouncy

✗ Cartoonish

✗ Flashy

✗ Distracting

The user should notice how smooth the interface feels,

not the animations themselves.

---

# Core Motion Principles

## Principle 1

Motion explains change.

Users should understand

where something came from,

where it went,

and why it changed.

---

## Principle 2

Motion establishes hierarchy.

Important elements move first.

Supporting elements follow.

Nothing should compete.

---

## Principle 3

Motion creates continuity.

Navigation should feel connected.

Pages should feel like different parts of the same world.

---

## Principle 4

Motion rewards interaction.

Hover.

Click.

Selection.

Success.

Loading.

Everything should provide feedback.

---

# Motion Personality

Imagine:

A spacecraft.

Not fireworks.

Everything moves with precision.

Not excitement.

---

# Duration Tokens

## Instant

100ms

Micro feedback.

Examples

Button press

Checkbox

Toggle

---

## Fast

150–200ms

Hover

Tooltips

Dropdowns

---

## Normal

250–300ms

Cards

Dialogs

Menus

Tabs

---

## Slow

400–500ms

Page transitions

Large panels

Hero animations

---

## Ambient

6–20 seconds

Background lighting

Aurora

Particle drift

Never loop aggressively.

---

# Easing

Primary

ease-out

Used for

Entering elements

---

Secondary

ease-in-out

Used for

Layout changes

Page transitions

---

Linear

Used for

Progress bars

Loading

Continuous movement

---

Avoid

Elastic

Bounce

Overshoot

unless explicitly designed.

---

# Animation Tokens

Motion tokens should become CSS variables.

--duration-fast

--duration-normal

--duration-slow

--ease-primary

--ease-secondary

Developers should never hardcode durations.

---

# Page Transition

Every page transition should feel continuous.

Sequence

Old page fades

↓

Camera shifts

↓

New page appears

↓

Primary content gains focus

No harsh cuts.

No instant replacement.

---

# Hero Animation

Hero should introduce the product.

Sequence

Background wakes up

↓

Aurora slowly appears

↓

Headline fades upward

↓

Description fades

↓

Buttons appear

↓

Mockup reveals

↓

Ambient motion continues

The hero should never animate repeatedly.

---

# Scroll Reveal

Every major section enters naturally.

Recommended

Opacity

+

Small translateY

Maximum

20px movement

Avoid

Large flying animations.

---

# Navbar

On page load

Fade + Slide Down

On scroll

Glass strengthens

Background becomes slightly more opaque

Navigation should never jump.

---

# Buttons

Hover

Slight elevation

Soft glow

Background transition

Cursor feedback

Press

Scale

0.98

Duration

100ms

Never bounce.

---

# Cards

Hover

Small lift

2–4px

Soft shadow increase

Glow increase

No dramatic scaling.

---

# Inputs

Focus

Border glow

Background brighten slightly

Label transitions

Errors

Gentle shake

Only once.

Never repeatedly.

---

# Oracle Motion

Oracle is the most important animated element.

Oracle never behaves like a chatbot.

Oracle feels alive.

Behavior

Pulse

↓

Scanning

↓

Analysis

↓

Prediction

↓

Confidence Update

↓

Recommendation

Everything happens calmly.

Never rapidly.

---

# Oracle Loading

Instead of

Loading...

Use

Analyzing trends...

Evaluating momentum...

Calculating confidence...

Searching opportunities...

Generating recommendations...

The user should feel Oracle is thinking.

---

# Leaderboard Motion

Ranking movement should tell a story.

When rank changes

Old Position

↓

Movement Line

↓

New Position

↓

Momentum Update

↓

Glow

↓

Stabilize

Never instantly replace positions.

---

# Analytics Motion

Charts should animate once.

Never loop.

Reveal

Axis

↓

Data

↓

Insights

↓

Recommendations

Data should appear progressively.

---

# Sidebar

Expand

Width transition

↓

Labels appear

↓

Icons reposition

Collapse

Reverse sequence.

---

# Modals

Fade

↓

Scale

98%

↓

100%

Close

Reverse.

---

# Notifications

Slide

Fade

Auto-dismiss

Progress indicator

Never interrupt the user.

---

# Skeleton Loading

Always prefer skeletons.

Avoid

Spinners

Large loading screens

Blank pages

Skeletons preserve layout stability.

---

# Progress Indicators

Progress should always move.

Never jump.

Always animate toward the destination.

---

# Success States

Success should feel rewarding.

Small glow.

Checkmark.

Soft expansion.

Never use fireworks.

---

# Error States

Errors should remain calm.

Small shake.

Highlight.

Explanation.

Never flash red repeatedly.

---

# Hover Philosophy

Hover should answer

"Yes,

this element is interactive."

Hover should never distract.

---

# Empty States

Illustration

↓

Fade

↓

Message

↓

CTA

Everything appears gently.

---

# Ambient Motion

Allowed

Aurora

Gradient drift

Soft particles

Light beams

Subtle mesh movement

Not allowed

Flying objects

Rotating logos

Constant spinning

Aggressive particles

---

# Performance Rules

Animations must maintain

60 FPS

Prefer

transform

opacity

Avoid animating

width

height

top

left

box-shadow

whenever possible.

GPU-friendly animations only.

---

# Accessibility

Respect

prefers-reduced-motion

When enabled

Disable

Large transitions

Parallax

Ambient motion

Reduce

Duration

Distance

Opacity transitions remain acceptable.

Accessibility takes priority.

---

# Anti-Patterns

Never

✗ Animate everything

✗ Delay usability

✗ Loop entrance animations

✗ Use bounce everywhere

✗ Use random floating cards

✗ Flash bright colors

✗ Distract users from content

Motion should support the product,

not become the product.

---

# Motion Checklist

Every animation must answer

✓ What changed?

✓ Why did it change?

✓ Does this improve usability?

✓ Is it smooth?

✓ Is it subtle?

✓ Is it performant?

✓ Is it accessible?

If any answer is "No",

remove the animation.

---

# Inspiration

The motion language should take inspiration from:

- Apple
- Linear
- Arc Browser
- Cursor
- Framer
- Vercel
- OpenAI

Understand their principles.

Do not imitate their animations.

---

# Future Expansion

This motion system should support

- Design Tokens

- CSS Variables

- Tailwind

- Framer Motion

- Motion One

- GSAP (only when necessary)

without changing the product's visual identity.

---

# Related Documents

- design-system.md
- spacing.md
- typography.md
- color-palette.md
- components.md
- screen-specifications.md