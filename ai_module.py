def predict_rank(score, leaderboard):
    top_players = leaderboard.get_top_5()

    if not top_players:
        return "No data available"

    highest = top_players[0][1]

    if score > highest:
        return "🔥 You can reach Rank 1 soon!"
    elif score >= highest * 0.8:
        return "💪 Close to top players"
    else:
        return "📈 Needs improvement"


def required_score_for_top(leaderboard):
    top_players = leaderboard.get_top_5()

    if not top_players:
        return 0

    return top_players[0][1] + 10


def performance_summary(score):
    if score > 90:
        return "Excellent performance ⭐"
    elif score > 70:
        return "Good performance 👍"
    elif score > 50:
        return "Average performance ⚡"
    else:
        return "Needs improvement ❗"