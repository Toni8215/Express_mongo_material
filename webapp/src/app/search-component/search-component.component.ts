import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { GitService } from '../git.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent implements OnInit {

  @Input() username: string;

 constructor(private gitService: GitService, private router: Router) {}
  ngOnInit() {
  }
  load_userdata(): void {
    this.gitService.get_data(this.username).subscribe((res) => {this.gitService.data = res.json();
      console.log('Data', this.gitService.data); });
    this.router.navigate(['/search-results']);
  }

 load_userdata_repos(): void {
    this.gitService.get_repos(this.username).subscribe((res) => {this.gitService.repo = res.json();
      console.log('Repo', this.gitService.repo); });
    this.router.navigate(['/search-results']);
  }

  load_technology(): void {
    this.gitService.get_byTech(this.username).subscribe((res) => {this.gitService.tech = res.json().items;
      console.log('Tech', this.gitService.tech); });
    this.router.navigate(['/search-tech']);
  }
}
