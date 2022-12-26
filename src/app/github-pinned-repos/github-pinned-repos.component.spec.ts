import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPinnedReposComponent } from './github-pinned-repos.component';

describe('GithubPinnedReposComponent', () => {
  let component: GithubPinnedReposComponent;
  let fixture: ComponentFixture<GithubPinnedReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubPinnedReposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubPinnedReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
