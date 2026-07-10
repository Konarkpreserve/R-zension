from leaderboard import Leaderboard
from ai_module import predict_rank, required_score_for_top, performance_summary
from utils import print_leaderboard


def main():
    lb = Leaderboard()

    while True:
        print("\n===== Leaderboard Menu =====")
        print("1. Add Player")
        print("2. Update Score")
        print("3. Show Leaderboard")
        print("4. Show Top 5")
        print("5. AI Insights")
        print("6. Exit")

        choice = input("Enter choice: ")

        if choice == "1":
            name = input("Enter name: ")
            score = int(input("Enter score: "))
            lb.add_player(name, score)

        elif choice == "2":
            name = input("Enter name: ")
            score = int(input("Enter new score: "))
            lb.update_score(name, score)

        elif choice == "3":
            print_leaderboard(lb.display())

        elif choice == "4":
            print_leaderboard(lb.get_top_5())

        elif choice == "5":
            name = input("Enter player name: ")
            if name in lb.players:
                score = lb.players[name]
                print(predict_rank(score, lb))
                print("Score needed for Top:", required_score_for_top(lb))
                print(performance_summary(score))
            else:
                print("Player not found!")

        elif choice == "6":
            print("Exiting...")
            break

        else:
            print("Invalid choice!")


if __name__ == "__main__":
    main()