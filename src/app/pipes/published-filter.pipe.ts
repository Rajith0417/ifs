import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/Ipost';

@Pipe({
  name: 'publishedFilter'
})
export class PublishedFilterPipe implements PipeTransform {

  transform(posts: IPost[], isPublished: boolean): IPost[] {
    if(!posts || isPublished == undefined){
      return posts;
    } else {
      return posts.filter((post)=> post.isPublished === isPublished);
    }
  }

}
