import { element } from 'protractor';
import { RepoService } from './../repo.service';
import { Http, HttpModule } from '@angular/http';
import { GitService } from './../git.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-saved-links',
  templateUrl: './saved-links.component.html',
  styleUrls: ['./saved-links.component.css']
})
export class SavedLinksComponent implements OnInit {
  result;
  id;

  constructor(private gitservice: GitService,
    private http: Http,
    private r: RepoService) { }


  ngOnInit() {
    this.http.get('http://localhost:3000/saved')
             .subscribe(res => {this.result = res.json();
             console.log('response', res.json());
             this.result.forEach((element) => {
                 console.log('element', element, element.owner);
             });
              // console.log(this.result);
            });
  }
  RepoId1(id) {
    console.log(id);
    this.http.delete('http://localhost:3000/saved/' + String(id)).subscribe (res => {});
    console.log('http://localhost:3000/saved/' + String(id));
    }

    // updateComments(newComment) {
    //   console.log(this.id);
    //   const obj = {'userComments': newComment};
    //   this.http.put('http://localhost:3000/saved/' + String(this.id), obj).subscribe(res => {});
    //   this.result.forEach((element) => {
    //     if (this.id === element.id) {
    //       element['userComments'] = newComment;
    //     }
    //   });
    // }

    // openDialog(): void {
    //   const dialogRef = this.dialog.open(MyDialog, {
    //     width: '500px',
    //     data: { id: this.id }
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');

    //   });
    // }
    // @Component({
    //   selector: 'my-dialog',
    //   template:`<h2> New Comment {{data.id}}</h2>
    //               <mat-form-field class="example-full-width">
    //                 <textarea #newComment matInput placeholder="New Comment"></textarea>
    //               </mat-form-field>
    //               <button mat-raised-button [mat-dialog-close]="data.comment" color = "primary"> Save </button>
    //             `
    //  })

    //  export class MyDialog{
    //   constructor(
    //     public dialogRef: MatDialogRef<MyDialog>,
    //     @Inject(MAT_DIALOG_DATA) public data: any,
    //     ) { }
    //  }
}
