import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GdComponent } from './gd.component';

describe('GdComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GdComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GdComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gorgo-dresses'`, () => {
    const fixture = TestBed.createComponent(GdComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gorgo-dresses');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GdComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'gorgo-dresses app is running!'
    );
  });
});
