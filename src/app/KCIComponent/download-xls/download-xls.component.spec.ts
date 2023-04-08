import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadXlsComponent } from './download-xls.component';

describe('DownloadXlsComponent', () => {
  let component: DownloadXlsComponent;
  let fixture: ComponentFixture<DownloadXlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadXlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
