import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  public endGameMsg: string = "Start playing!, have fun๐ฅณ"

  private happyEmojis: string[] = ["๐", "๐", "๐", "๐", "๐", "๐", "๐คฃ", "๐", "๐", "๐", "๐", "๐", "๐", "๐ฅฐ", "๐"]
  private sadEmojis: string[] = ['๐', '๐', '๐', '๐', '๐ ', '๐', '๐', '๐ฅบ', '๐ฃ', '๐', '๐ซ', '๐ฉ', '๐จ', '๐ฐ', '๐ฆ', '๐ง', '๐ข', '๐ฅ', '๐ช', '๐ญ', '๐ตโ๐ซ', '๐ฎโ๐จ', '๐ถโ๐ซ๏ธ', '๐คฆโโ๏ธ', '๐คฆ', '๐คฆโโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐']
  private celebrationEmojis: string[] = ['๐', '๐', '๐', '๐', '๐ค ', '๐', '๐คฉ', '๐บ', '๐', '๐ค', '๐ค', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฐ', '๐', '๐ง', '๐ฅง', '๐ฎ', '๐ญ', '๐ฌ', '๐บ',]
  private neutralEmojis: string[] = ['๐ค', '๐คจ', '๐', '๐', '๐ถ', '๐ถโ๐ซ๏ธ', '๐', '๐', '๐', '๐ฌ', '๐ฎโ๐จ', '๐คฅ', '๐', '๐', '๐', '๐ฎ', '๐ฏ', '๐ฒ', '๐ณ', '๐ฅบ', '๐ฆ', '๐ง', '๐จ', '๐ฐ', '๐ฅ', '๐ข', '๐ญ', '๐ฑ', '๐', '๐ฃ', '๐', '๐', '๐ฉ', '๐ซ', '๐ฅฑ',]

  constructor(private _toastrService: ToastrService) {
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
  }

  // method checks if numOfGames is valid
  hasEnteredValidNumGames() {
    return (
      this.numGamesLeft >= this._minNumGames &&
      this.numGamesLeft <= this._maxNumGames
    )
  }

  getUpdatedCount(event: any) {
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
      this.endGameMsg = "with " + c.getWins() + " win" + (c.getWins() > 1 ? "s" : "") + " and " + c.getLosses() + " loss" + (c.getLosses() > 1 ? "es" : "") + " and tired " + (this.initialNumGames - (u.getWins() + u.getLosses())) + " " + this.getRandomEmoji(this.neutralEmojis)
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
    const p: any = this.com

    c.reset()
    u.reset()
    this.numGamesLeft = this.initialNumGames
    this.numGamesPlayed = 0
    this.endGameMsg = ""

    u.childVisble = false
    c.childVisble = false
    p.childVisble = false

    u.childVisble = true
    c.childVisble = true
    p.childVisble = true

  }
}