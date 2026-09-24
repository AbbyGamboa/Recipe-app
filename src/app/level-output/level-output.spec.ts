import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOutput } from './level-output';

describe('LevelOutput', () => {
  let component: LevelOutput;
  let fixture: ComponentFixture<LevelOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(LevelOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
