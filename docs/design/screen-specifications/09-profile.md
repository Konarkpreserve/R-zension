# Profile Experience Specification

> The Profile experience represents the user's identity within R-zension. It showcases achievements, progress, skills, rankings, and personal growth while allowing users to manage their personal information and public presence.

---

# Document Information

| Field | Value |
|--------|-------|
| Screen | Profile |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |

---

# Purpose

Provide a complete view of the user's identity, achievements, progress, and account information.

---

# Primary Users

- Students
- Professionals
- Recruiters
- Organizations
- Administrators

---

# Business Goal

Increase profile completeness.

Encourage portfolio building.

Promote social engagement.

Improve user retention.

---

# User Goal

- View profile information
- Update personal details
- Showcase achievements
- Track personal growth
- Share public profile

---

# Emotional Goal

Users should feel

- Proud
- Motivated
- Professional
- Accomplished

Never overwhelmed.

---

# Entry Points

- Sidebar
- Dashboard
- Leaderboard
- User Search
- Oracle Recommendation

---

# Exit Points

- Dashboard
- Leaderboard
- Analytics
- Goals
- Settings

---

# Screen Layout

```
----------------------------------------------------------

Profile Header

----------------------------------------------------------

Profile Summary

----------------------------------------------------------

Statistics

----------------------------------------------------------

Skills

----------------------------------------------------------

Achievements

----------------------------------------------------------

Activity Timeline

----------------------------------------------------------

Public Portfolio

----------------------------------------------------------
```

---

# Profile Header

Contains

- Cover Image
- Avatar
- Display Name
- Username
- Bio
- Organization
- Current Rank
- Edit Profile Button

---

# Profile Summary

Displays

- Joined Date
- Current Level
- XP
- Active Streak
- Oracle Score
- Completion Rate

---

# Statistics

Displays

- Total Goals
- Completed Goals
- Current Rank
- Best Rank
- Achievements
- Skills Mastered

Display Style

Statistic Cards

---

# Skills

Displays

- Skill Name
- Skill Level
- Growth %
- Progress Bar
- Last Updated

Supports

- Sorting
- Filtering
- Search

---

# Achievements

Displays

- Badge
- Achievement Name
- Description
- Date Earned
- Category

Supports

- Grid View
- List View
- Filter
- Search

---

# Activity Timeline

Displays

- Goal Completion
- Rank Changes
- Achievements
- Oracle Insights
- Skill Improvements

Newest First

---

# Public Portfolio

Contains

- Featured Projects
- Certifications
- Public Achievements
- Public Statistics
- Public Goals (Optional)

Shareable URL

Future

Portfolio Themes

---

# Edit Profile

Editable Fields

- Profile Picture
- Cover Image
- Name
- Username
- Bio
- Country
- Website
- Social Links

---

# Privacy Settings

Supports

- Public Profile
- Private Profile
- Friends Only
- Hide Statistics
- Hide Goals
- Hide Achievements

---

# Components Used

- Profile Header
- Avatar
- Statistic Card
- Skill Card
- Progress Bar
- Achievement Card
- Timeline
- Button
- Badge
- Tabs
- Modal
- Drawer

---

# Information Hierarchy

1. Profile Header
2. Statistics
3. Skills
4. Achievements
5. Timeline
6. Portfolio

---

# User Interactions

Hover

Cards

Buttons

Achievements

---

Click

Edit Profile

Achievement

Skill

Project

Timeline Entry

---

Keyboard

Navigation

Forms

Tabs

---

Touch

Swipe Tabs

Tap Cards

---

# Motion

Header

Fade Reveal

Statistics

Count Up

Skills

Progress Animation

Achievements

Reveal Animation

Timeline

Fade Up

---

# States

Loading

Skeleton Profile

---

Empty

Encourage profile completion.

---

Error

Retry Button

---

Offline

Cached Profile

Offline Banner

---

Success

Profile Loaded

---

# Responsive Behaviour

Desktop

Multi-column Layout

---

Tablet

Two-column Layout

---

Mobile

Single Column

Collapsible Sections

Sticky Edit Button

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

Lazy Load Timeline

Image Optimization

Pagination

Background Refresh

Client-side Cache

---

# Analytics Events

Track

Profile Visit

Edit Profile

Achievement View

Skill Click

Portfolio View

Share Profile

Privacy Change

---

# Future Enhancements

- Portfolio Builder
- Resume Export
- Verified Skills
- Skill Endorsements
- Social Following
- Public APIs
- Recruiter View
- AI Resume Review

---

# Related APIs

GET /users/me

GET /users/{id}

PATCH /users/profile

PATCH /users/privacy

GET /users/achievements

GET /users/skills

GET /users/activity

---

# Related Database Entities

- User
- UserProfile
- Skill
- Achievement
- Activity
- Rank
- Portfolio
- PrivacySettings

---

# Oracle Integration

Oracle displays

- Personal growth summary
- Skill recommendations
- Career suggestions
- Portfolio improvement tips
- Profile completion suggestions

Oracle insights are personalized and visible only to the profile owner.

---

# Success Criteria

Users understand their personal progress immediately.

Users can update profile information without confusion.

Profiles effectively showcase achievements and growth.

Users are encouraged to maintain a complete and up-to-date profile.

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