import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
