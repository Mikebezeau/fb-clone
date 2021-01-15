import React from 'react';
import './Widget.css';


function Widget () {
    return (
    <div className="widget">

        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fblackbirdtec%2Fposts%2F429048260599272%3A0&width=340&show_text=true&appId=672950579418960&height=534" 
        title="post1"
        width="340" 
        height="534" 
        style={{ border:"none", overflow:"hidden" }} 
        scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        <iframe src="https://www.facebook.com/plugins/post.php?
        href=https%3A%2F%2Fwww.facebook.com%2Fblackbirdtec%2Fposts%2F429051630598935&width=340&show_text=true&appId=672950579418960&height=293" 
        title="post2"
        width="340" 
        height="293" 
        style={{border:"none" , overflow:"hidden"}} 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
    </div>
    );
}
 
export default Widget;