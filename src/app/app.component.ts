import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  message = ''; //error message
  showList = false; // when to show list with repositories
  loading = false; // loading state
  user = {  //user object
    githubPage: '',
    imgUrl: '',
    imgAlt: ''
  };
  data = [];  //data loaded from github API

  constructor(private http: Http, public snackBar: MdSnackBar) {}

  callApi(githubUser) { //function for calling API
    if (githubUser != '') {
      this.loading = true;
      this.http.request(`https://api.github.com/users/${githubUser}/repos`)
      .subscribe(
        result => { // success
          if (result.json().length !== 0) {
            this.data = result.json();
            this.user.imgUrl = result.json()[0].owner.avatar_url;
            this.user.githubPage = result.json()[0].owner.url;
            this.user.imgAlt = githubUser;
            this.loading = false;
            this.showList = true;
            this.snackBar.open('Data sucessfully downloaded.', 'Close');
            console.log(this.data)
          }
          else { // error handling
            this.clearData();
            this.snackBar.open(`User '${githubUser}' doesnt have any repositories.`, 'Close');
          }
        },
        error => {  // error handling
          this.clearData();
          this.message = error.statusText;
          this.message = (this.message == '' ? 'Unknown Error' : error.statusText);
          this.snackBar.open(`There was en error with request: ${this.message}` , 'Close');
        },
      );
    }
    else {  // error handling
      this.snackBar.open('You have to fill input field.', 'Close');
    }
  }
  clearData() {  //clearing data
    this.showList = false;
    this.data = [];
    this.user.imgUrl = '';
    this.loading = false;
    this.snackBar.open('Data cleared.', 'Close');
  }
}
