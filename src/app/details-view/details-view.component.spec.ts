import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { DetailsViewComponent } from './details-view.component';

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
