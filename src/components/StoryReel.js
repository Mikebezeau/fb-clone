import React from 'react';
import './StoryReel.css';
import Story from './Story.js';
import { useStateValue } from '../state/StateProvider';

function StoryReel () {
    
    const [{ user }, dispatch] = useStateValue();

    return (
    <div className="story_reel">
        <Story
            image="https://placeimg.com/128/210/tech" 
            profileSrc={ user.photoURL } 
            title={ user.displayName }
        />

        <Story
            image="https://placeimg.com/128/211/tech" 
            profileSrc="http://placeimg.com/40/42/people" 
            title="Name Lastname" 
        />

        <Story
            image="https://placeimg.com/128/212/tech" 
            profileSrc="http://placeimg.com/40/43/people" 
            title="Name Lastname" 
        />

        <Story
            image="https://placeimg.com/128/213/tech" 
            profileSrc="http://placeimg.com/40/44/people" 
            title="Name Lastname" 
         />

        <Story
            image="https://placeimg.com/128/214/tech" 
            profileSrc="http://placeimg.com/40/45/people" 
            title="Name Lastname" 
        />

    </div>
    );
}
 
export default StoryReel;