import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../state/StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function MessageSender () {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    };

    return (
    <div className="message_sender">
        <div className="message_sender_top">
            <Avatar src={ user.photoURL }/>
            <form>
                <input onChange={ handleChange } type="text" placeholder="What's on your mind?" value={ input } />
                <input onChange={ handleUrlChange } placeholder="Image URL {optional)" value={ imageUrl }/>
                <button onClick={ handleSubmit } type="submit">Hidden Submit</button>
            </form>
        </div>

        <div className="message_sender_bottom">
            
            <div className="message_sender_option">
                <VideocamIcon color="secondary"/>
                <h3>Live Video</h3>
            </div>
            <div className="message_sender_option">
                <PhotoLibraryIcon style={{ color: "green" }}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="message_sender_option">
                <InsertEmoticonIcon style={{ color: "orange" }}/>
                <h3>Feeling/Activity</h3>
            </div>

        </div>
    </div>
    );
}
 
export default MessageSender;