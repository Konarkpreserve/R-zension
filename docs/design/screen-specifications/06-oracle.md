# Oracle Experience Specification

> Oracle is the intelligence layer of R-zension. It does not simply display data—it analyzes user behavior, identifies opportunities, predicts future outcomes, and recommends actionable steps. Oracle is an AI strategist, not a chatbot.

---

# Document Information

| Field | Value |
|--------|-------|
| Screen | Oracle |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Product Design Team |

---

# Purpose

Transform raw data into actionable intelligence.

Help users answer:

- What changed?
- Why did it change?
- What should I do next?
- What will happen if I continue?

---

# Primary Users

- Students
- Professionals
- Recruiters
- Organizations

---

# Business Goal

Increase Oracle engagement.

Increase user retention.

Improve goal completion.

Deliver personalized AI recommendations.

---

# User Goal

Receive personalized insights.

Understand strengths and weaknesses.

Discover improvement opportunities.

Plan next actions.

---

# Emotional Goal

Users should feel

- Guided
- Intelligent
- Confident
- Empowered

Never confused or overwhelmed.

---

# Entry Points

- Dashboard
- Sidebar
- Goal Recommendation
- Analytics
- Leaderboard Rank Card

---

# Exit Points

- Dashboard
- Goals
- Analytics
- Leaderboard
- Profile

---

# Screen Layout

```
----------------------------------------------------------

Oracle Header

----------------------------------------------------------

Today's Insight

----------------------------------------------------------

Priority Recommendations

----------------------------------------------------------

Performance Analysis

----------------------------------------------------------

Predictions

----------------------------------------------------------

Opportunity Explorer

----------------------------------------------------------

Action Plan

----------------------------------------------------------

Insight History

```

---

# Oracle Header

Contains

- Title
- Current AI Status
- Last Analysis Time
- Refresh Analysis
- Search Insights

---

# AI Status

Displays

- Ready
- Analyzing
- Updating
- Offline

---

# Today's Insight

Purpose

Display the single most important insight.

Contains

- Headline
- Summary
- Confidence Score
- Reason
- Recommended Action

Maximum

One primary insight.

---

# Priority Recommendations

Displays

Top 5 recommendations.

Each Recommendation

- Priority
- Recommendation
- Expected Benefit
- Estimated Time
- Difficulty
- Start Button

Priority Levels

Critical

High

Medium

Low

---

# Performance Analysis

Displays

Strengths

Weaknesses

Consistency

Learning Pattern

Productivity Trend

Skill Growth

---

# Prediction Section

Displays

- Rank Prediction
- Goal Completion Prediction
- Weekly Forecast
- Monthly Forecast
- Confidence Score

---

# Opportunity Explorer

Displays

Potential improvements.

Examples

- Complete Goal A
- Practice Skill B
- Maintain Current Streak
- Improve Consistency

Each Opportunity

Expected Impact

Estimated Effort

Success Probability

---

# Action Plan

Purpose

Provide a structured improvement roadmap.

Displays

Today's Tasks

This Week

This Month

Long-Term

Users can

- Mark Complete
- Snooze
- Edit
- View Details

---

# Insight History

Displays

Previous Oracle analyses.

Each Entry

- Date
- Summary
- Confidence
- Action Taken
- Outcome

Supports

Search

Filter

Sort

---

# Components Used

- Oracle Insight Card
- Confidence Meter
- Recommendation Card
- Prediction Card
- Timeline
- Progress Ring
- Statistic Card
- Accordion
- Badge
- Search Bar
- Button

---

# Information Hierarchy

1. Today's Insight
2. Priority Recommendations
3. Performance Analysis
4. Predictions
5. Opportunities
6. Action Plan
7. History

---

# User Interactions

Hover

Cards

Buttons

Graphs

Recommendations

---

Click

Refresh

Recommendation

Prediction

History

Search

---

Keyboard

Search

Navigation

Shortcuts

---

Touch

Swipe Cards

Expandable Sections

---

# Motion

Page

Fade Transition

Insight Card

Glow Reveal

Prediction Charts

Animate Once

Confidence Meter

Progress Animation

Recommendations

Slide Up

History

Fade In

---

# States

Loading

Skeleton Oracle

---

Analyzing

Animated AI Status

Progress Indicator

---

Empty

No Data Available

Prompt user to complete goals.

---

Error

Retry Analysis

---

Offline

Cached Insights

Offline Banner

---

Success

Latest Analysis Loaded

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

Stacked Cards

Collapsible Sections

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

Lazy Load History

Cache Previous Analysis

Code Splitting

Virtualized Lists

Background Refresh

---

# Analytics Events

Track

Oracle Visit

Recommendation Click

Prediction View

Action Completed

History Search

Insight Refresh

Opportunity Open

---

# Future Enhancements

- Conversational Oracle
- Voice Interaction
- AI Coaching
- Weekly AI Reports
- Team Recommendations
- Organization Intelligence
- Predictive Risk Detection
- AI Learning Plans

---

# Related APIs

GET /oracle

GET /oracle/insights

GET /oracle/recommendations

GET /oracle/predictions

GET /oracle/history

POST /oracle/refresh

POST /oracle/action

---

# Related Database Entities

- OracleInsight
- Recommendation
- Prediction
- UserGoal
- Activity
- Rank
- Skill
- Achievement

---

# Oracle Integration

Oracle is the core feature of this screen.

Every recommendation must include

- Why it exists
- Confidence Score
- Expected Impact
- Estimated Effort
- Supporting Data
- Suggested Next Action

Oracle never provides unexplained recommendations.

Every recommendation must be explainable.

---

# Success Criteria

Users identify their highest-priority improvement within 30 seconds.

Users understand why a recommendation was generated.

Users complete recommended actions regularly.

Oracle recommendations increase measurable user growth over time.

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