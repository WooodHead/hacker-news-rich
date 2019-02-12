import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {HackerNewsSearchService} from '../hacker-news-search.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
               private location: Location,
               private hackerNewsSearchService: HackerNewsSearchService) { }

  ngOnInit() {
  }

  onSearchChange(term: string) {
    const searchPath = '/search';
    this.location.go(searchPath + '?query=' + term);
    this.router.navigate([searchPath]);
    this.hackerNewsSearchService.searchStory(term);
  }

  onSearchSubmit(form: NgForm) {
    this.hackerNewsSearchService.searchStory(form.value.query);
  }

}