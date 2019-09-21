import { async, TestBed } from '@angular/core/testing';
import { FrontendUiModule } from './frontend-ui.module';

describe('FrontendUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendUiModule).toBeDefined();
  });
});
