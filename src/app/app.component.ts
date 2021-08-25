import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public htmlData: string = "hello"
  public readonly: boolean = true;
  constructor() {
    setInterval(() => {
      console.log("", this.htmlData)
    }, 2000)
  }


  ngOnInit(): void {
  }


}
