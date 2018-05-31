import React, {Component} from 'react';
import {pyLDAvis} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>pyldavis-dash Demo</h1>

                <hr/>
                <h2>ExampleComponent</h2>
                <pyLDAvis/>
                <hr/>
            </div>
        );
    }
}

export default Demo;
