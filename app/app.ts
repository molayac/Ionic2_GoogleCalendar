import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GoogleCalendar} from './pages/GoogleCalendar/googleCalendar';

@Component({
  templateUrl: 'build/app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make Google Calendar the root (or first) page
  rootPage: any = GoogleCalendar;
  pages: Array<{title: string, component: any}>;
  
  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Ionic2 + Google Calendar', component: GoogleCalendar }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
