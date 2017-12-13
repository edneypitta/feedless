const destroyElements = () =>
	document
		.querySelectorAll('[id^=topnews_main_stream], .home_right_column > .pagelet')
		.forEach(node => node.parentNode.removeChild(node))

setInterval(destroyElements, 20)