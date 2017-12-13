const destroyElements = () =>
  document
    .querySelectorAll('#hnmain > tbody > tr:nth-child(3)')
    .forEach(node => node.parentNode.removeChild(node))

destroyElements()