from avl_tree import AVLTree


class Leaderboard:
    def __init__(self):
        self.tree = AVLTree()
        self.root = None
        self.players = {}

    def rebuild_tree(self):
        self.root = None
        for name, score in self.players.items():
            self.root = self.tree.insert(self.root, name, score)

    def add_player(self, name, score):
        self.players[name] = score
        self.root = self.tree.insert(self.root, name, score)

    def update_score(self, name, score):
        if name not in self.players:
            print("Player not found!")
            return
        self.players[name] = score
        self.rebuild_tree()

    def get_top_5(self):
        result = []
        self.tree.get_top_players(self.root, result, 5)
        return result

    def display(self):
        result = []
        self.tree.get_top_players(self.root, result, len(self.players))
        return result