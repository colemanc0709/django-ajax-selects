// load jquery and jquery-ui if needed
// into window.jQuery
if (typeof jQuery === 'undefined') {
	try { // use django admins
		jQuery=django.jQuery;
	} catch(err) {
		document.write('<script type="text/javascript"  src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"><\/script>');
	}
}
if(typeof jQuery === 'undefined' || (typeof jQuery.ui === 'undefined')) {
	document.write('<script type="text/javascript"  src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"><\/script>');
	document.write('<link type="text/css" rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />');
}
