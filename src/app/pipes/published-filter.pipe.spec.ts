import { IPost } from '../interfaces/Ipost';
import { PublishedFilterPipe } from './published-filter.pipe';

describe('PublishedFilterPipe', () => {

  let pipe: PublishedFilterPipe;

  beforeEach(() => {
    pipe = new PublishedFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

it('should return an empty array when posts array is empty', () => {
    const posts: IPost[] = [];
    expect(pipe.transform(posts, true)).toEqual([]);
    expect(pipe.transform(posts, false)).toEqual([]);
  });

  it('should return all posts when isPublished is undefined', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Post 1', cover: 'Cover 1', description: 'Description 1', isPublished: true },
      { id: 2, title: 'Post 2', cover: 'Cover 2', description: 'Description 2', isPublished: false }
    ];
    expect(pipe.transform(posts, undefined as any)).toEqual(posts);
  });

  it('should return only published posts when isPublished is true', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Post 1', cover: 'Cover 1', description: 'Description 1', isPublished: true },
      { id: 2, title: 'Post 2', cover: 'Cover 2', description: 'Description 2', isPublished: false },
      { id: 3, title: 'Post 3', cover: 'Cover 3', description: 'Description 3', isPublished: true }
    ];
    const result = pipe.transform(posts, true);
    expect(result.length).toBe(2);
    expect(result.every(post => post.isPublished)).toBe(true);
  });

  it('should filter unpublished posts when isPublished is false', () => {
    const posts: IPost[] = [
      { id: 1, title: 'Post 1', cover: 'Cover 1', description: 'Description 1', isPublished: true },
      { id: 2, title: 'Post 2', cover: 'Cover 2', description: 'Description 2', isPublished: false },
      { id: 3, title: 'Post 3', cover: 'Cover 3', description: 'Description 3', isPublished: false },
    ];

    const result = pipe.transform(posts, false);

    expect(result).toBeTruthy(); // Check that result is not null or undefined
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { id: 2, title: 'Post 2', cover: 'Cover 2', description: 'Description 2', isPublished: false },
      { id: 3, title: 'Post 3', cover: 'Cover 3', description: 'Description 3', isPublished: false },
    ]);
  });

  it('should return null when posts is null', () => {
    expect(pipe.transform(null, true)).toEqual([]);
    expect(pipe.transform(null, false)).toEqual([]);
  });


});
