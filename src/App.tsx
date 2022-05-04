import React from 'react';
import {Heading} from './components/Heading';
import {PostList} from './components/posts/PostList';

const App = () => {
    return (
        <div>
            <Heading/>
            <PostList/>
        </div>
    );
};

export default App;