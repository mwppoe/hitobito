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
import jQuery from 'jquery';
import 'js-cookie';
import 'jquery-ujs';
// import 'jquery-ui/widgets/datepicker';
// import 'jquery-ui-datepicker-i18n';
// import 'jquery-ui/effects/effect-highlight';
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
// import 'bootstrap3-wysihtml5-bower';
// TODO: jquery_nested_form
import 'chosen-js';
// TODO: jquery.remotipart
// TODO: modernizr
import 'moment'; // TODO: make global?
// TODO: custom scripts
// TODO: wysiwyg script
// TODO: wagon script
// import 'jquery.turbolinks';

// Provide the jQuery object globally
window.$ = jQuery
window.jQuery = jQuery

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true);
// const imagePath = (name) => images(name, true);

console.log('Hello World from Webpacker');
