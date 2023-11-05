export default `
  x-resize { display: block; }
  x-resize[width] { display: flex; }
  x-resize > :not(.resize-bar) { overflow: hidden; }
  x-resize:has(.resize-bar.active) { user-select: none; }
  x-resize > .resize-bar { background: #CCC; display: block; }
  x-resize > .resize-bar:is(.active, :hover) { background: #00F; }
  x-resize[width] > .resize-bar { cursor: col-resize ; width: 2px;}
  x-resize[height] > .resize-bar { cursor: row-resize; height: 2px;}

  x-resize:is([top], [bottom]) { position: absolute; }
  x-resize:is([top], [bottom]):after { content: ' '; display: block; width: 12px; height: 12px; opacity: .5; }
  x-resize:is([top], [bottom]):hover:after { width: 16px; height: 16px; opacity: 1; }

  x-resize[top][left] { top: 1px; left: 1px; cursor: nw-resize; }
  x-resize[top][left]:after {
    background: linear-gradient( -45deg, #0000, #0000 60%, #000 60%, #000, #0000, #0000 70%, #000 70%, #000, #0000, #0000 80%, #000 80%, #000, #0000, #0000 90%, #000 90%, #000 )
  }

  x-resize[top][right] { top: 1px; right: 1px; cursor: ne-resize; }
  x-resize[top][right]:after {
    background: linear-gradient( 45deg, #0000, #0000 60%, #000 60%, #000, #0000, #0000 70%, #000 70%, #000, #0000, #0000 80%, #000 80%, #000, #0000, #0000 90%, #000 90%, #000 )
  }

  x-resize[bottom][left] { bottom: 1px; left: 1px; cursor: sw-resize; }
  x-resize[bottom][left]:after {
    background: linear-gradient( 45deg, #000 10%, #000, #0000, #0000 20%, #000 20%, #000, #0000, #0000 30%, #000 30%, #000, #0000, #0000 40%, #000 40%, #000, #0000, #0000 50% )
  }

  x-resize[bottom][right] { bottom: 1px; right: 1px; cursor: se-resize; }
  x-resize[bottom][right]:after {
    background: linear-gradient( -45deg, #000 10%, #000, #0000, #0000 20%, #000 20%, #000, #0000, #0000 30%, #000 30%, #000, #0000, #0000 40%, #000 40%, #000, #0000, #0000 50% )
  }
`;