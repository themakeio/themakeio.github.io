$(document).ready(function()
{
	$('#fb').click(function()
	{
		openInNewTab("//www.facebook.com/themakeio")
	});
	$('#insta').click(function()
	{
		openInNewTab("//www.instagram.com/themakeio")
	});
	$('#tw').click(function()
	{
		openInNewTab("//www.twitter.com/themakeio")
	});
});


function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}