import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main';

const  Example = () => {
    return (
        <div>
           <MainPage />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
