import { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [font, setfont] = useState("Architect's Daughter");
  const [align, setalign] = useState('left');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, setTitle, subtitle, setSubTitle, font, setfont, align, setalign }} />
      <Editor {...{ title, setTitle, subtitle, setSubTitle, font, setfont, align, setalign }} />
    </main>
  );
}
