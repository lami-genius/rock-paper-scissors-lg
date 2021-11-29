import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpsLG-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _linkedInURL: string = "https://www.linkedin.com/in/fonyuy-boris-lami"
  private _linkGitHubURL: string = "https://github.com/lami-genius/rock-paper-scissors-lg"
  private _figmaDesignURL: string = "https://www.figma.com/file/1kuqPMOhLhLaFUhuOJDYFk/Rock-Paper-Scissors?node-id=0%3A1"

  public get figmaDesignURL(): string {
    return this._figmaDesignURL;
  }

  public set figmaDesignURL(figmaDesignURL: string) {
    this._figmaDesignURL = figmaDesignURL;
  }

  public get linkGitHubURL(): string {
    return this._linkGitHubURL
  }

  public set linkGitHub(linkGitHubURL: string) {
    this._linkGitHubURL = linkGitHubURL;
  }



  public get linkedInURL(): string {
    return this._linkedInURL;
  }

  public set linkedInURL(linkedInURL: string) {
    this._linkedInURL = linkedInURL;
  }


  constructor() { }

  ngOnInit(): void {
  }

  onClickLink(link: string): void {
    window.open(
      link === 'linkedin' ? this._linkedInURL : link === 'github' ? this._linkGitHubURL : link === 'figmas' ? this.figmaDesignURL : '',
      '_blank'
    );
  }

}
