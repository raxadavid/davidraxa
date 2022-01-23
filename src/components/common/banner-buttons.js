import React from 'react';
// filterSelection('all')
// filterSelection('uxui')
// filterSelection('graphicdesign')
// filterSelection('misc')
// filterSelection('inprogress')
const BannerButtons = () => (
  <div id="myBtnContainer" className="banner" data-testid="link-to-pages">
    <button className="btn active" onClick={() => console.log('something')}> Show all</button>
    <button className="btn" onClick={() => console.log('something')}> UX/UI Projects</button>
    <button className="btn" onClick={() => console.log('something')}> Graphic Design</button>
    <button className="btn" onClick={() => console.log('something')}> Misc. Projects</button>
    <button className="btn" onClick={() => console.log('something')}> In Progress </button>
  </div>
);

export default BannerButtons;