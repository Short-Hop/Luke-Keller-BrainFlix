import React from 'react';
import Info from '../components/Info';


class InfoContainer extends React.Component {

    render() {
        return (
            <Info mainVideo={this.props.mainVideo} />
        )
    }
}

export default InfoContainer;