import { async, TestBed } from '@angular/core/testing';
import { FrontendFeaturesModule } from './frontend-features.module';

describe('FrontendFeaturesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendFeaturesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendFeaturesModule).toBeDefined();
  });
});
