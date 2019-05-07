import React from 'react';
import './TextView.scss';

class TextView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { placeholder } = this.props;
        return <input type="text" style={{height: 26, borderColor: 'gray', borderWidth: 1}} placeholder = {placeholder} />
    }
}

export default TextView;