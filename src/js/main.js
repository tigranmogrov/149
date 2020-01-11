// import nice-se 'nice-select';
import $ from 'jquery';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('jquery-nice-select/js/jquery.nice-select.min');

$(document).ready(function() {
	$('select').niceSelect();
});
