import { useState } from 'react';
import '../App.css';
import NavBar from './NavBar';
import MailboxList from './MailboxList';
import MailboxDetails from './MailboxDetails';
import MailboxForm from './MailboxForm';
import LetterForm from './LetterForm';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addMailbox = (newMailbox) => {
      newMailbox._id = mailboxes.length + 1;
      setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/> } />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/> } />
        <Route path="/mailboxes/new" element={<MailboxForm addMailbox={addMailbox} /> } />
        <Route path="/letters/new" element={<LetterForm mailboxes={mailboxes} letters={letters} addLetter={addLetter}/> } />
      </Routes>
    </>
  )
};

export default App;

