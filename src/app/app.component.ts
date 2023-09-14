import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

  public ajaxOptions = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    downloadUrl: this.hostUrl + 'api/FileManager/Download',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload', 
    getImageUrl: this.hostUrl + 'api/FileManager/getImage'
  }
}
