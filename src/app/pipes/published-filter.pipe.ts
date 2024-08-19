import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/Ipost';

@Pipe({
  name: 'publishedFilter'
})
export class PublishedFilterPipe implements PipeTransform {

  // transform(posts: IPost[], isPublished: boolean): IPost[] {
  //   if(!posts || isPublished == undefined){
  //     return posts;
  //   } else {
  //     return posts.filter((post)=> post.isPublished === isPublished);
  //   }
  // }

  // transform(posts: IPost[] | null, isPublished: boolean | undefined): IPost[] {
  //   if(!posts || isPublished === undefined){
  //     return posts || [];
  //   } else {
  //     return posts.filter((post)=> post.isPublished === isPublished);
  //   }
  // }

  transform(posts: IPost[] | null | undefined, isPublished: boolean): IPost[] {
    if (posts === null || posts === undefined || isPublished === undefined) {
      return posts || []; // Return null or undefined as is
    } else {
      return posts.filter((post) => post.isPublished === isPublished);
    }
  }

  // transform(posts: IPost[] | null | undefined, isPublished: boolean): IPost[] | null {
  //   if (posts === null || posts === undefined) {
  //     return posts; // Return null or undefined as is
  //   }
  //   return posts.filter((post) => post.isPublished === isPublished);
  // }

}
