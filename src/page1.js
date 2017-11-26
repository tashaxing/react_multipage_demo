import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Tag} from 'antd'

class Page1 extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>this is the page1</h2>
                <Tag><a href="./index.html">to home</a></Tag>
            </div> 
        );
    }
}

export default Page1;

ReactDOM.render(<Page1/>, document.getElementById('page1'));
