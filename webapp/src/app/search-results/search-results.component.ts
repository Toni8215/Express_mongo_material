import { GitService } from './../git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private gitservice: GitService) { }
  userdata = this.gitservice.data;
  userrepo = this.gitservice.repo;
  ngOnInit() {
  }

}
