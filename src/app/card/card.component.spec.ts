import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title, isPublished and description inputs', () => {
    // Arrange
    const title = 'Test Title';
    const description = 'Test Description';
    component.title = title;
    component.description = description;

    // Act
    fixture.detectChanges();

    // Assert
    const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    const descriptionElement = fixture.debugElement.query(By.css('.description')).nativeElement;

    expect(titleElement.textContent).toContain(title);
    expect(descriptionElement.textContent).toContain(description);
  });

  it('should have a boolean input property isPublished', () => {
    // Arrange
    component.isPublished = true;

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.isPublished).toBeTrue();
  });

  it('should emit the title when sendTitleToParent is called', () => {
    // Arrange
    spyOn(component.emitTitle, 'emit');
    const title = 'Test Title';
    component.title = title;

    // Act
    component.sendTitleToParent();

    // Assert
    expect(component.emitTitle.emit).toHaveBeenCalledWith(title);
  });

});
