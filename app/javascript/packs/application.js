/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'core-js/stable';
import 'regenerator-runtime/runtime';

/**
 * Dependencies
 */
import 'jquery';
import ujs from 'jquery-ujs';
ujs.start();
import 'moment';
import 'jquery.turbolinks/vendor/assets/javascripts/jquery.turbolinks';

// jQuery UI
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-de';
import 'jquery-ui/ui/i18n/datepicker-fr';
import 'jquery-ui/ui/i18n/datepicker-it';
import 'jquery-ui/ui/effects/effect-highlight';

// Bootstrap
import 'bootstrap-sass/js/bootstrap-transition';
import 'bootstrap-sass/js/bootstrap-alert';
import 'bootstrap-sass/js/bootstrap-button';
import 'bootstrap-sass/js/bootstrap-collapse';
import 'bootstrap-sass/js/bootstrap-dropdown';
import 'bootstrap-sass/js/bootstrap-tooltip';
import 'bootstrap-sass/js/bootstrap-popover';
import 'bootstrap-sass/js/bootstrap-typeahead';
import 'bootstrap-sass/js/bootstrap-tab';
import 'bootstrap-sass/js/bootstrap-modal';

// UI Components
import 'chosen-js';

// Gems without NPM package
import '../src/vendor/gems.js.erb';

// Custom scripts
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../src/modules', true, /\.(js|coffee)$/));
// TODO: wysiwyg script (separate bundle?)
// TODO: wagon script

import * as turbolinks from 'turbolinks';
turbolinks.start();

/**
 * Images
 */
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true);
// const imagePath = (name) => images(name, true);

console.log('Hello World from Webpacker');
