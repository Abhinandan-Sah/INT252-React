import React, { useEffect, useState } from 'react';
import './ToNote.css';

const ToNote = () => {
    const [notes, setNotes] = useState(()=>{
        const savedNotes= localStorage.getItem("notes")
        return savedNotes ? JSON.parse(savedNotes): [];
    });
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [search, setSearch] = useState('');

    const handleAddNote = () => {
        setNotes([...notes, { name, job }]);
        setName('');
        setJob('');
    };

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes]);

    const handleDeleteNote = (indexs) => {
        const newNotes = notes.filter((ch,index) => index !== indexs);
        setNotes(newNotes);
    };

    const filteredNotes = notes.filter(note=>
        note.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        note.job.toLowerCase().includes(search.toLocaleLowerCase()) 
    )

    return (
        <div>
            <h1>ToNote</h1>
            <label for="name">Name</label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label for="job">Job</label>
            <input
                type="text"
                placeholder="Job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleAddNote}>Add Note</button>
            <input type='text' placeholder='search' value={search} onChange={(e)=> setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredNotes.map((note, index) => (
                        <tr key={index}>
                            <td>{note.name}</td>
                            <td>{note.job}</td>
                            <td>
                                <button onClick={() => handleDeleteNote(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToNote;