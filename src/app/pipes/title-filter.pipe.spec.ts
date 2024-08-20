import { IPost } from '../interfaces/Ipost';
import { TitleFilterPipe } from './title-filter.pipe';

describe('TitleFilterPipe', () => {

  let pipe: TitleFilterPipe;

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original array when searchTitle is an empty string', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 2, title: 'Introduction to TypeScript', cover: 'cover2.jpg', description: 'Intro to TypeScript', isPublished: true }
    ];
    expect(pipe.transform(posts, '')).toEqual(posts);
  });


  it('should return the original array when searchTitle is null or undefined', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 2, title: 'Introduction to TypeScript', cover: 'cover2.jpg', description: 'Intro to TypeScript', isPublished: true }
    ];
    expect(pipe.transform(posts, '')).toEqual(posts);
    expect(pipe.transform(posts, undefined as unknown as string)).toEqual(posts);
  });


  it('should return an empty array when posts is an empty array', () => {
    const posts: IPost[] = [];
    expect(pipe.transform(posts, 'Angular')).toEqual([]);
  });


  it('should return an array of posts that match the searchTitle', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 2, title: 'Introduction to TypeScript', cover: 'cover2.jpg', description: 'Intro to TypeScript', isPublished: true },
      { id: 3, title: 'Advanced Angular', cover: 'cover3.jpg', description: 'Deep dive into Angular', isPublished: false }
    ];
    expect(pipe.transform(posts, 'Angular')).toEqual([
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 3, title: 'Advanced Angular', cover: 'cover3.jpg', description: 'Deep dive into Angular', isPublished: false }
    ]);
  });


  it('should return an empty array if no posts match the searchTitle', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 2, title: 'Introduction to TypeScript', cover: 'cover2.jpg', description: 'Intro to TypeScript', isPublished: true }
    ];
    expect(pipe.transform(posts, 'React')).toEqual([]);
  });


  it('should be case-insensitive in filtering', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true },
      { id: 2, title: 'Introduction to TypeScript', cover: 'cover2.jpg', description: 'Intro to TypeScript', isPublished: true }
    ];
    expect(pipe.transform(posts, 'angular')).toEqual([
      { id: 1, title: 'Angular Basics', cover: 'cover1.jpg', description: 'Intro to Angular', isPublished: true }
    ]);
  });



});
