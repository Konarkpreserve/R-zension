# Dashboard Experience Specification

> The Dashboard is the command center of R-zension. Every user should immediately understand their current position, recent progress, AI insights, and the next best action.

---

# Document Information

| Field | Value |
|--------|-------|
| Screen | Dashboard |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |

---

# Purpose

Provide a complete overview of the user's current progress.

Help users answer:

- Where am I?
- What changed?
- What should I do next?

within 10 seconds.

---

# Primary Users

- Students
- Professionals
- Recruiters
- Organizations

---

# Business Goal

Increase daily engagement.

Increase Oracle usage.

Encourage goal completion.

Increase retention.

---

# User Goal

See personal progress.

Track achievements.

View AI recommendations.

Navigate to deeper insights.

---

# Emotional Goal

Users should feel

- Productive
- Motivated
- In Control
- Curious

Never confused.

---

# Entry Points

- Login
- Onboarding
- Logo Click
- Dashboard Navigation

---

# Exit Points

- Leaderboard
- Oracle
- Analytics
- Goals
- Profile
- Settings

---

# Screen Layout

```

---------------------------------------------------------
Top Navigation

---------------------------------------------------------

Sidebar | Dashboard Header

|--------------------------------------------------------

| Quick Stats

|

| Oracle Insight

|

| Progress Overview

|

| Activity Timeline

|

| Goals

|

| Achievements

|

---------------------------------------------------------

```

---

# Navigation

Persistent Sidebar

Top Navigation

Breadcrumb (Future)

---

# Dashboard Header

Contains

- Greeting
- Current Date
- Search
- Notifications
- User Avatar

Example

Good Evening, Konark 👋

Continue your journey.

---

# Quick Stats Section

Purpose

Immediate overview.

---

Contains

- Current Rank
- Growth Score
- Completed Goals
- Oracle Confidence
- Active Streak

---

Layout

Five Statistic Cards

Desktop

5 Columns

Tablet

3 Columns

Mobile

1 Column

---

# Oracle Insight Section

Purpose

Display today's most valuable AI recommendation.

---

Contains

- Insight Title
- Confidence Score
- Summary
- Recommendation
- Expected Impact
- Open Oracle Button

Maximum

One primary insight.

---

# Progress Overview

Purpose

Visualize long-term growth.

---

Contains

- Weekly Progress
- Monthly Progress
- Skill Progress
- Goal Completion

Visualization

Line Chart

Area Chart

Progress Ring

---

# Activity Timeline

Purpose

Recent activity.

---

Displays

- Achievements
- Rank Changes
- Goal Completion
- Oracle Insights
- Learning Progress

Newest first.

---

# Goals Section

Purpose

Track active goals.

---

Contains

- Goal Name
- Progress
- Due Date
- Status
- Continue Button

Maximum

5 Active Goals

View All Button

---

# Achievement Section

Purpose

Celebrate progress.

---

Contains

- Recent Badge
- New Achievement
- XP Earned
- Milestones

---

# Recommendation Strip

Displays

Three Quick Actions

Examples

Continue Goal

↓

View Oracle

↓

Improve Rank

---

# Notification Preview

Shows

Recent Notifications

Unread Count

View All Button

---

# Search

Global Search

Supports

Users

Goals

Oracle

Leaderboard

Documentation

Future

Command Palette

---

# Sidebar

Contains

Dashboard

Leaderboard

Oracle

Analytics

Goals

Profile

Settings

Help

Logout

---

# Components Used

- Sidebar
- Navbar
- Statistic Card
- Oracle Insight Card
- Chart
- Progress Ring
- Timeline
- Goal Card
- Achievement Card
- Notification Card
- Search Bar
- Avatar
- Badge
- Button

---

# Information Hierarchy

1. Greeting
2. Quick Stats
3. Oracle Insight
4. Progress Overview
5. Goals
6. Activity
7. Achievements
8. Notifications

---

# User Interactions

Hover

Cards

Buttons

Charts

Sidebar

---

Click

Navigation

Charts

Goals

Oracle

Achievements

Notifications

---

Keyboard

Search

Navigation

Shortcuts

---

Touch

Swipe Cards

Tap Actions

---

# Motion

Page

Fade Transition

Statistic Cards

Count Up Animation

Oracle Card

Glow Reveal

Charts

Animate Once

Timeline

Fade Up

Achievement

One-Time Reveal

Buttons

Lift + Glow

---

# States

Loading

Skeleton Dashboard

---

Empty

Personalized Welcome

Prompt user to create first goal.

---

Error

Retry Button

Support Link

---

Offline

Cached Data

Offline Banner

---

Success

Dashboard Loaded

---

# Responsive Behaviour

Desktop

Multi-column Grid

---

Tablet

Two-column Layout

---

Mobile

Single Column

Sticky Bottom Navigation (Future)

---

# Accessibility

Keyboard Navigation

Visible Focus

Screen Reader Support

ARIA Labels

Reduced Motion

WCAG AA

---

# Performance

Lazy Load Charts

Lazy Load Timeline

Code Splitting

Virtualized Lists

Image Optimization

Cache Dashboard Data

---

# Analytics Events

Track

Dashboard Visit

Oracle Click

Goal Click

Chart Interaction

Achievement View

Notification Click

Search Usage

Sidebar Navigation

---

# Future Enhancements

- AI Dashboard Personalization
- Custom Widgets
- Drag-and-Drop Layout
- Dashboard Themes
- Productivity Widgets
- Calendar Integration
- Live Collaboration
- Workspace Sharing

---

# Related APIs

GET /dashboard

GET /dashboard/stats

GET /dashboard/activity

GET /dashboard/goals

GET /dashboard/achievements

GET /notifications

---

# Related Database Entities

- User
- Dashboard
- Goal
- Achievement
- Activity
- Notification
- Rank
- OracleInsight

---

# Oracle Integration

Dashboard displays

- Daily Insight
- Confidence Score
- Recommended Action
- Growth Prediction

Only one primary Oracle insight should be displayed to avoid overwhelming users.

---

# Success Criteria

Users understand their current status within 10 seconds.

Users can access any major feature within 2 clicks.

Users identify at least one recommended action every visit.

Dashboard loads in under 2 seconds on a normal connection.

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