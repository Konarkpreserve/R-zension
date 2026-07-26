# Onboarding Experience Specification

> The onboarding experience transforms a newly registered user into an active R-zension user by collecting only the information required to personalize their experience and Oracle recommendations.

---

# Document Information

| Field | Value |
|--------|-------|
| Screen | Onboarding |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |

---

# Purpose

Configure the user's workspace.

Personalize the platform.

Prepare Oracle.

Initialize the user's profile.

---

# Primary Users

- Students
- Professionals
- Recruiters
- Organizations

---

# Business Goal

Increase activation rate.

Reduce first-day abandonment.

Collect meaningful personalization data.

---

# User Goal

Complete setup in under 3 minutes.

Understand what happens next.

Reach the dashboard quickly.

---

# Emotional Goal

Users should feel:

- Excited
- Motivated
- Guided
- Confident

Never overwhelmed.

---

# Entry Points

- Email Verification
- First Login

---

# Exit Points

- Dashboard

---

# Completion Flow

```
Welcome

↓

Profile

↓

Goals

↓

Interests

↓

Notifications

↓

Workspace Ready

↓

Dashboard
```

---

# Progress Indicator

Top Progress Bar

Step Counter

Estimated Time Remaining

Example

Step 2 of 5

---

# Layout

Desktop

Centered Card

Tablet

Centered Card

Mobile

Full Width

---

# Step 1 — Welcome

Purpose

Introduce the product.

Contains

- Welcome Message
- Product Illustration
- Short Explanation
- Continue Button

---

# Step 2 — Profile

Collect

- Profile Photo (Optional)
- Display Name
- Username
- Country
- Timezone

---

# Step 3 — Goals

Question

"What do you want to achieve?"

Options

- Improve Skills
- Increase Ranking
- Build Portfolio
- Track Progress
- Learn Faster

Multiple selections allowed.

---

# Step 4 — Interests

Examples

- AI
- Web Development
- Backend
- Frontend
- DevOps
- Data Science
- UI/UX
- Cybersecurity
- Mobile Development

Used for recommendations.

---

# Step 5 — Notifications

Options

- Email Updates
- Weekly Reports
- Achievement Alerts
- Rank Changes
- Oracle Insights

All optional.

---

# Completion Screen

Message

"Your workspace is ready."

Contains

- Success Illustration
- Continue Button

Automatically redirects after a short delay.

---

# Components Used

- Progress Bar
- Stepper
- Card
- Button
- Avatar Upload
- Input
- Multi Select
- Checkbox
- Success Card

---

# Information Hierarchy

1. Progress
2. Step Title
3. Description
4. Form
5. Primary Action

---

# Navigation Rules

Next

Previous

Skip (Optional Steps Only)

Never lose entered data.

---

# Validation

Required fields must be completed.

Display validation only after interaction.

---

# Motion

Card Transition

Fade + Slide

Progress Bar

Animated

Completion

Success Animation

---

# States

Loading

Skeleton

Error

Retry

Success

Workspace Ready

Offline

Temporary Save

---

# Responsive Behaviour

Desktop

Centered Card

Tablet

Reduced Width

Mobile

Single Column

Large Touch Targets

---

# Accessibility

Keyboard Navigation

Visible Focus

Screen Reader Labels

Reduced Motion

WCAG AA

---

# Performance

Autosave after each completed step.

Lazy load illustrations.

Keep transitions under 300ms.

---

# Analytics Events

Track

- Onboarding Started
- Step Completed
- Step Skipped
- Onboarding Completed
- Onboarding Abandoned

---

# Future Enhancements

- AI-assisted onboarding
- Organization onboarding
- Skill assessment
- Personalized starter projects
- Import from LinkedIn/GitHub

---

# Related APIs

- GET /users/me
- PATCH /users/profile
- PATCH /users/preferences
- POST /users/onboarding/complete

---

# Related Database Entities

- User
- UserProfile
- UserPreference
- NotificationPreference
- UserGoal

---

# Oracle Integration

Collected onboarding data initializes:

- Personalized recommendations
- Goal tracking
- Learning suggestions
- Ranking insights

Oracle recommendations begin after onboarding completion.

---

# Success Criteria

Users complete onboarding in under 3 minutes.

At least 90% of users reach the dashboard after starting onboarding.

---

# References

- vision.md
- feature-list.md
- user-stories.md
- design-system.md
- components.md
- animations.md
- typography.md
- spacing.md
- color-palette.md
```