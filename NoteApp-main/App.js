import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ 
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  handleDelete,
  itemEdited,
  setItemEdited,
  editNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          handleDelete={handleDelete}
          setItemEdited={setItemEdited}
        />
      )
      case 'add':
        return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
      case 'edit':
        return (
          <EditNote
            setCurrentPage={setCurrentPage}
            itemEdited={itemEdited}
            editNote={editNote}
          />
        )
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [itemEdited, setItemEdited] = useState({})

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const handleDelete = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const editNote = (id, title, desc) => {
    const updatedNote = noteList.map((note) => {
      if (note.id === id) {
        note.title = title;
        note.desc = desc;
      }
      return note;
    });

    setNoteList(updatedNote);
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      handleDelete={handleDelete}
      setItemEdited={setItemEdited}
      itemEdited={itemEdited}
      editNote={editNote}
    />
  )
}

export default App