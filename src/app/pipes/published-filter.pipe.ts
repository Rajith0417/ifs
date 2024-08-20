import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/Ipost';

@Pipe({
  name: 'publishedFilter'
})
export class PublishedFilterPipe implements PipeTransform {

  transform(posts: IPost[] | null | undefined, isPublished: boolean): IPost[] {
    if (posts === null || posts === undefined) {
      return []; // Return an empty array instead of null or undefined
    }
    else if(isPublished === undefined){
      return posts;
    }
    else {
      return posts.filter((post) => post.isPublished === isPublished);
    }
  }

}
