import React from 'react';
import Info from '../components/Info';

// Container - mainly a placeholder for potential future required state changes
class InfoContainer extends React.Component {

    render() {
        return (
            <Info mainVideo={this.props.mainVideo} />
        )
    }
}

export default InfoContainer;