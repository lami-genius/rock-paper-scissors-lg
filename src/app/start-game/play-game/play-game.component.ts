import { PlayerOptionsComponent } from './../player-options/player-options.component';
import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumGamesService } from 'src/app/services/num-games.service';
import { TwoWay } from 'two-way-decorator';

@Component({
  selector: 'rpsLG-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  public numGamesLeft: number = 1
  public initialNumGames: number = 0
  public numGamesPlayed: number = 0
  private _minNumGames: number = 1
  private _maxNumGames: number = 99
  public strongMsg: string = "No winner"
  public endGameMsg: string = "Start playing!, have fun🥳"

  private happyEmojis: string[] = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍"]
  private sadEmojis: string[] = ['😞', '😒', '🙄', '😟', '😠', '😕', '🙁', '🥺', '😣', '😖', '😫', '😩', '😨', '😰', '😦', '😧', '😢', '😥', '😪', '😭', '😵‍💫', '😮‍💨', '😶‍🌫️', '🤦‍♀️', '🤦', '🤦‍♂️', '🙍‍♀️', '🙍', '🙍‍♂️', '💔']
  private celebrationEmojis: string[] = ['🎉', '🎊', '🎁', '🎈', '🤠', '😍', '🤩', '🕺', '💃', '🤘', '🤟', '👈', '👉', '👆', '👍', '🙌', '👏', '🍰', '🎂', '🧁', '🥧', '🍮', '🍭', '🍬', '🍺',]
  private neutralEmojis: string[] = ['🤐', '🤨', '😐', '😑', '😶', '😶‍🌫️', '😏', '😒', '🙄', '😬', '😮‍💨', '🤥', '😕', '😟', '🙁', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱',]

  constructor(private _numGamesService: NumGamesService,
    private _toastrService: ToastrService) {
  }

  ngOnInit(): void {
    let str = localStorage.getItem('gameNumGames')
    if (str !== null) {
      this.numGamesLeft = parseInt(str)

      // incase
      if (!this.hasEnteredValidNumGames()) {
        this._toastrService.info("1 Game to play")
        this._toastrService.warning("You attempted to play " + this.numGamesLeft + " games failed!")
        this.numGamesLeft = this._minNumGames

      }

      // set ref
      this.initialNumGames = this.numGamesLeft
    }
    this._numGamesService.getNumGames().subscribe({
      next: (num) => {
        if (num)
          this.numGamesLeft = num
        console.log(this.numGamesLeft)
      }
    })

  }

  // method checks if numOfGames is valid
  hasEnteredValidNumGames() {
    return (
      this.numGamesLeft >= this._minNumGames &&
      this.numGamesLeft <= this._maxNumGames
    )
  }

  getUpdatedCount(event: any) {
    console.log('g' + this.numGamesLeft)
  }


  @ViewChild('com')
  com!: ElementRef;

  @ViewChild('comScore')
  comScore!: ElementRef;

  @ViewChild('yourScore')
  yourScore!: ElementRef;

  handleObjClickedEvent(event: any): void {
    const p: any = this.com


    if (this.hasEnded()) {
      this._toastrService.success("Please restart a new game!")
      this.numGamesLeft = 0
      this.numGamesPlayed = this.initialNumGames
      p.colorReset();


    }
    else {
      // com played
      p.updateColor('rand')

      // check who won
      this.gameEval(event, p.shape)

      // adjust counter for games left
      this.updateNumGames()
    }

  }

  gameEval(you: string, com: string) {
    const u: any = this.yourScore
    const c: any = this.comScore


    if (you === com) {
      this.endGameMsg = "Tire round" + this.getRandomEmoji(this.neutralEmojis) + ", oh boy!"
    }
    else if ((you === "rock" && com === "scissors") ||
      (you === "scissors" && com === "paper") ||
      (you === "paper" && com === "rock")) {
      this.endGameMsg = "You WON this round " + this.getRandomEmoji(this.happyEmojis) + " !"
      u.increementWin()
      c.increementLosses()
    }
    else {
      this.endGameMsg = "You LOST this round " + this.getRandomEmoji(this.sadEmojis) + " !"
      c.increementWin()
      u.increementLosses()
    }
  }

  getRandomEmoji(d: string[]): string {
    return d[Math.floor(Math.random() * d.length)]
  }

  updateNumGames(): void {
    if (this.hasEnded()) {
      this._toastrService.warning("Game over!")
    }
    else {
      this.numGamesLeft--
      this.numGamesPlayed++

      const p: any = this.com


      if (this.hasEnded()) {
        this._toastrService.warning("Game over!")

        this.numGamesLeft = 0
        this.numGamesPlayed = this.initialNumGames

        // message of winner
        this.winnerMsg()
      }
    }
  }

  hasEnded(): boolean {
    return (this.numGamesLeft <= 0)
  }

  winnerMsg(): void {
    this.delayMsg()
  }

  delayMsg(): void {
    const u: any = this.yourScore
    const c: any = this.comScore

    if (c.getWins() > u.getWins()) {
      this.endGameMsg = c.getWins() + ", loss " + c.getLosses() + " and tired " + (this.initialNumGames - (c.getWins() + c.getLosses())) + " " + this.getRandomEmoji(this.sadEmojis)
      this.strongMsg = "Com won "
    }
    else if (c.getWins() == u.getWins()) {
      this.endGameMsg = c.getWins() + " wins and " + c.getLosses() + " losses" + " " + this.getRandomEmoji(this.neutralEmojis)
      this.strongMsg = "A tire "
    }
    else {
      this.endGameMsg = u.getWins() + ", loss " + u.getLosses() + " and tired " + (this.initialNumGames - (u.getWins() + u.getLosses())) + " " + this.getRandomEmoji(this.celebrationEmojis)
      this.strongMsg = "You won "
    }
  }

  restartGame(event: any): void {
    const u: any = this.yourScore
    const c: any = this.comScore
    c.reset()
    u.reset()
    this.numGamesLeft = this.initialNumGames
    this.numGamesPlayed = 0
    location.reload();
  }
}