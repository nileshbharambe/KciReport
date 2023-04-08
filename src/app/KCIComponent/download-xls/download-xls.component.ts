import { Component } from '@angular/core';
import { DownloadXlsService } from '../service/download-xls.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-xls',
  templateUrl: './download-xls.component.html',
  styleUrls: ['./download-xls.component.css']
})
export class DownloadXlsComponent {

  constructor(private downloadXlsService: DownloadXlsService) { }

  downloadFile(filename: string): void {
    this.downloadXlsService
      .download(filename)
      .subscribe(blob => saveAs(blob, filename));
  }

 /* public downloadNewFile(): void {
    this.downloadXlsService.downloadNewFile()
      .subscribe(response => {
        let fileName = response.header.get('content-disposition')
        ?.split(';')[1].split('=')[1];
        let blob: Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      })
  } */

}
