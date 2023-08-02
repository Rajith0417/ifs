import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public title!: string;

  @Input()
  public description!: string;

  @Input()
  public isPublished!: boolean;

  @Output()
  public emitTitle = new EventEmitter();

  sendTitleToParent(){
    this.emitTitle.emit(this.title);
    console.log(this.title);
  }

}
