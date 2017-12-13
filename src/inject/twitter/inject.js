const destroyElements = () =>
  document
    .querySelectorAll('.wrapper-home .stream-container, .module.trends, .module.roaming-module')
    .forEach(node => node.parentNode.removeChild(node))

setInterval(destroyElements, 20)