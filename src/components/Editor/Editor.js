import React from 'react';

import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubTitle,
  font,
  setfont,
  align,
  setalign,
  text,
  settext,
}) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={(e) => setfont(e.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control" value={align} onChange={(e) => setalign(e.target.value)}>
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control" value={text} onChange={(e) => settext(e.target.value)}>
        <textarea style={{ height: '250px' }} />
        <label>Text</label>
      </div>
    </div>
  );
}
