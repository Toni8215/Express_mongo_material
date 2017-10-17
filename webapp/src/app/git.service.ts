import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitService {
  constructor(private http: Http) { }
  private gitUrl = 'https://api.github.com/users';
  private gitTechUrl= 'https://api.github.com/search/repositories?q=';
  private repos= 'repos';

  public data: Array<Object> = [];
  public repo: Array<Object> = [];
  public tech: Array<Object> = [];

  get_data(username: string) {
    const url = `${this.gitUrl}/${username}`;
    return this.http.get(url);
  }
  get_repos(username: string) {
    const url = `${this.gitUrl}/${username}/${this.repos}`;
    return this.http.get(url);
  }
  get_byTech(technology: string) {
    const url = `${this.gitTechUrl}/${technology}+"&per_page=10"`;
    return this.http.get(url);

  }
}
