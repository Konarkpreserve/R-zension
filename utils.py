def print_leaderboard(players):
    print("\n🏆 Leaderboard:")
    for i, (name, score) in enumerate(players, start=1):
        print(f"{i}. {name} - {score}")