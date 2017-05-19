var doCache = false;

// Name our cache
var CACHE_NAME = 'pwa-experiment';

// Delete old caches that are not our current one!
this.addEventListener('activate', function(event){
  console.log("oia ativa");
});

// The first time the user starts up the PWA, 'install' is triggered.
this.addEventListener('install', function(event) {
  console.log("oia instala");
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
this.addEventListener('fetch', function(event) {
  console.log("faz fetch");
});
