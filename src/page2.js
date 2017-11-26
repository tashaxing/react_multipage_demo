import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Tag} from 'antd'

class Page2 extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>this is the page2</h2>
                <Tag><a href="./index.html">to home</a></Tag>
            </div> 
        );
    }
}

export default Page2;

ReactDOM.render(<Page2/>, document.getElementById('page2'));