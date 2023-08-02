import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/Ipost';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(posts: IPost[], searchTitle: string): IPost[] {

    if(!posts || !searchTitle){
      return posts;
    }else {
      return posts.filter((post) => post.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }
  }

}
