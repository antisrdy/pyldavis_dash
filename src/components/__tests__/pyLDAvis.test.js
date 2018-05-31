import React from 'react';
import {shallow} from 'enzyme';
import pyLDAvis from '../pyLDAvis.react';

describe('pyLDAvis', () => {

    it('renders', () => {
        const component = shallow(<pyLDAvis/>);
        expect(component).to.be.ok;
    });
});
