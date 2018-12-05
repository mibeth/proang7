// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyCpVIdOkfTqpIe21pGDEI1ILRcq5TvTHjg",
    authDomain: "poke-app-fe5a7.firebaseapp.com",
    databaseURL: "https://poke-app-fe5a7.firebaseio.com",
    projectId: "poke-app-fe5a7",
    storageBucket: "poke-app-fe5a7.appspot.com",
    messagingSenderId: "27147007153"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
