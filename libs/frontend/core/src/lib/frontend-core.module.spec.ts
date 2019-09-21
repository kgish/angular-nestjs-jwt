import { async, TestBed } from '@angular/core/testing';
import { FrontendCoreModule } from './frontend-core.module';

describe('FrontendCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendCoreModule).toBeDefined();
  });
});
