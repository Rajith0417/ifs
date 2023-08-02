import { Component } from '@angular/core';
import { IPost } from './interfaces/Ipost';
import { PostsService } from './services/posts.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IFS';

  // Set showFilterPanel to true for part 3
  public showFilterPanel = true;

  public posts$!: Observable<IPost[]>;
  public currentPage: number = 1;
  public postsPerPage: number = 30;
  public selectedTitle!: string;
  public searchTitle!: string;
  public filterPublished: boolean = true;

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.service.getPosts();
    console.log(this.posts$);
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  receivedTitle(value: any){
    this.selectedTitle = value;
  }

  onCheckboxChange(event: Event){
    let target = event.target as HTMLInputElement;
    this.filterPublished = target?.checked;
  }

}
