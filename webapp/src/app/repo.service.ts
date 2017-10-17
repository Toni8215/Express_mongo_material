import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoService {

  constructor(private http: Http) { }
  private gitTechUrl= 'http://localhost:3000/saved';

  // UpdateRepo(object) {
  //   object['userComments'] = 'Saved with no comments';
  //   const obj = object;
  //   this.http.post(this.gitTechUrl, obj).subscribe(res => {} );
  // }

  toSavedRepos(tech) {
    console.log(tech);
    this.http.post(this.gitTechUrl, tech).subscribe(res => {
    console.log('saved-repo');
    });
  }
  RepoId1(id) {
    console.log(id);
    this.http.delete('http://localhost:3000/saved/' + String(id)).subscribe (res => {});
    console.log('http://localhost:3000/saved/' + String(id));
    }
}
