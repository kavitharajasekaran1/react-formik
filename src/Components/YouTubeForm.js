import React from 'react';

function YouTubeForm() {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name'/>

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email'/>

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel'/>

            <button > submit</button>
        </form>
      
    </div>
  );
}

export default YouTubeForm;
