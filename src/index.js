import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Tag} from 'antd'

export default class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>this is the home page</h1>
                <Tag color="red"><a href="./page1.html">page1</a></Tag>
                <Tag color="green"><a href="./page2.html">page2</a></Tag>
            </div> 
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('home'));
