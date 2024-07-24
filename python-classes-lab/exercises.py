class Game():
    def __init__(self):
        self.turn = 'X'
        self.tie = False
        self.winner = None
        self.board = {
            'a1': None, 'b1': None, 'c1': None,
            'a2': None, 'b2': None, 'c2': None,
            'a3': None, 'b3': None, 'c3': None,
        }

    def play_game(self):
        print('Welcome to Drooskin\'s Terminal Tac Toe!')
        while not self.winner and not self.tie:
            self.render()
            self.get_move()
            if self.check_for_winner() or self.check_for_tie():
                self.render()
                break

    def print_board(self):
        board = self.board
        print(f"""
                A   B   C
            1)  {board['a1'] or ' '} | {board['b1'] or ' '} | {board['c1'] or ' '}
                ----------
            2)  {board['a2'] or ' '} | {board['b2'] or ' '} | {board['c2'] or ' '}
                ----------
            3)  {board['a3'] or ' '} | {board['b3'] or ' '} | {board['c3'] or ' '}
        """)

    def print_message(self):
        if self.tie:
            print("The game is tied!")
        elif self.winner:
            print(f"Player {self.winner} wins!")
        else:
            print(f"It's player {self.turn}'s turn.")
    
    def render(self):
        self.print_board()
        self.print_message()
    
    def get_move(self):
        while True:
            move = input(f"Enter a valid move (example: A1): ").lower()
            if move in self.board and self.board[move] == None:
                self.board[move] = self.turn
                self.switch_turn()
                break
            else:
                print("Invalid input")
    
    def switch_turn(self):
        if self.turn == 'X':
            self.turn = 'O'
        else:
            self.turn = 'X'
    
    def check_for_winner(self):
        winning_combos = [
            ['a1', 'b1', 'c1'],
            ['a2', 'b2', 'c2'],
            ['a3', 'b3', 'c3'],
            ['a1', 'a2', 'a3'],
            ['b1', 'b2', 'b3'],
            ['c1', 'c2', 'c3'],
            ['a1', 'b2', 'c3'],
            ['c1', 'b2', 'a3'],
        ]

        for combo in winning_combos:
            a, b, c = combo
            if self.board[a] and (self.board[a] == self.board[b] == self.board[c]):
                self.winner = self.board[a]
                return True
        return False

    def check_for_tie(self):
        if not self.winner and all(value is not None for value in self.board.values()):
            self.tie = True
            return True
        return False

game = Game()
game.play_game()