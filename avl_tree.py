class Node:
    def __init__(self, name, score):
        self.name = name
        self.score = score
        self.height = 1
        self.left = None
        self.right = None


class AVLTree:

    def height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        return self.height(node.left) - self.height(node.right)

    def right_rotate(self, y):
        x = y.left
        t2 = x.right

        x.right = y
        y.left = t2

        y.height = 1 + max(self.height(y.left), self.height(y.right))
        x.height = 1 + max(self.height(x.left), self.height(x.right))

        return x

    def left_rotate(self, x):
        y = x.right
        t2 = y.left

        y.left = x
        x.right = t2

        x.height = 1 + max(self.height(x.left), self.height(x.right))
        y.height = 1 + max(self.height(y.left), self.height(y.right))

        return y

    def insert(self, root, name, score):
        if not root:
            return Node(name, score)

        if score < root.score:
            root.left = self.insert(root.left, name, score)
        else:
            root.right = self.insert(root.right, name, score)

        root.height = 1 + max(self.height(root.left), self.height(root.right))

        balance = self.get_balance(root)

        # LL
        if balance > 1 and score < root.left.score:
            return self.right_rotate(root)

        # RR
        if balance < -1 and score > root.right.score:
            return self.left_rotate(root)

        # LR
        if balance > 1 and score > root.left.score:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)

        # RL
        if balance < -1 and score < root.right.score:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    def get_top_players(self, root, result, k):
        if not root or len(result) >= k:
            return

        self.get_top_players(root.right, result, k)
        result.append((root.name, root.score))
        self.get_top_players(root.left, result, k)