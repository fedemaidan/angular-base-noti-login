// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCJpPzHwseNT5Y1mu-GEqfI7OlCfSJoTl4",
    authDomain: "notiml.firebaseapp.com",
    databaseURL: "https://notiml.firebaseio.com",
    projectId: "notiml",
    storageBucket: "gs://notiml.appspot.com/",
    messagingSenderId: "232289099085",
    appId: "1:232289099085:web:5e21209d54b6bd74"
  }
};
