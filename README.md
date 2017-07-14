# Music Production Club

#### An Epicodus project in Angular 2, TypeScript, Node.js , Css, and HTML 07.14.17

#### **By Nick Wise**

## Description


This web application will allow a user to view all Artist involved with the Club. An Admin can add, edit, and delete new members.


# STARTING NEW PROJECT
| Package | Installation |
|:---:|:---:|
| Npm |$ npm install -g @angular/cli@1.0.0 |
| Bower |$ npm install bower -g |
| Bower | $ bower init |
| Bower bootstrap dependency | $ bower install bootstrap --save |
| Firebase |$ npm install -g @angular/cli@1.0.0 |
| TypeScript | $ npm install -g typescript |
| New angular project | $ ng new project-name |

## FireBase Api Key
 You will need to Sign up with Firebase and log in through the console they offer here https://firebase.google.com/. After you sign up you can generate your unique API key that will be plugged into the api-key.ts file. You Will also need to create this file inside the app folder called api-key.ts. Use the following code as a template to plug in your apikey. 
You will also need to hide the api key by putting the following text in the .gitIgnore file.

 | FireBase | 
|:----------------:|
| export var masterFirebaseConfig = { 
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  }; |
  

 #Firebase credentials
/src/app/api-keys.ts |

# CLONING PROJECT

 | Package | Installation |
 |:---:|:---:|
 | npm |$ npm install |
 | bower |$ bower install |
 | bower |$ bower init |
 | firebase| $ npm install angularfire2@4.0.0-rc.0 firebase --save |

# MusicClub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs


## Additional Notes

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used

* TypeScript
* HTML
* Angular 2
* Node.js
* Firebase
* Css

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Nick Wise**
