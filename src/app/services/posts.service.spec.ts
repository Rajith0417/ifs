import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { IPost } from '../interfaces/Ipost';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch posts successfully', () => {
    const mockPosts: IPost[] = [
      { id: 1, title: 'Post 1', cover: 'cover1.jpg', description: 'Description 1', isPublished: true },
      { id: 2, title: 'Post 2', cover: 'cover2.jpg', description: 'Description 2', isPublished: false }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('should handle error when fetching posts fails', () => {
    const errorMessage = 'Something bad happened; please try again later.';

    service.getPosts().subscribe({
      next: () => fail('Expected an error, not posts'),
      error: (error: Error) => {
        expect(error.message).toBe(errorMessage);
      }
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toBe('GET');

    // Simulate a server error
    req.flush('Error fetching posts', {
      status: 500,
      statusText: 'Server Error'
    });
  });

  it('should handle network error', () => {
    const errorMessage = 'Something bad happened; please try again later.';

    service.getPosts().subscribe({
      next: () => fail('Expected a network error, not posts'),
      error: (error: Error) => {
        expect(error.message).toBe(errorMessage);
      }
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toBe('GET');

    // Simulate a network error
    const mockError = new ErrorEvent('Network error', {
      message: 'Failed to connect to the server'
    });

    req.error(mockError);
  });
});
