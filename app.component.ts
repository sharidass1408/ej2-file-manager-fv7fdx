import { Component, ViewEncapsulation } from '@angular/core';
import { FileManagerComponent } from '@syncfusion/ej2-angular-filemanager';
/**
 * Data binding Menu Controller
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public ajaxSettings: object;
    public view: string;
    public hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';


    
    public detailsViewSettings =  {Columns: [{field: 'name', headerText: 'Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' },template: '${name}'},{field: 'size', headerText: 'Size',minWidth: 50, width: '110', template: '${size}'},{ field: 'dateModified', headerText: 'DateModified',minWidth: 50, width: '190'}]};


    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
       this.view = "Details";
       }
}