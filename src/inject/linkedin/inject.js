const destroyElements = () =>
document
	.querySelectorAll('.core-rail > .ember-view:not(.sharing-share-box):not(.nt-card-list)')
	.forEach(node => node.parentNode.removeChild(node))

setInterval(destroyElements, 1000)