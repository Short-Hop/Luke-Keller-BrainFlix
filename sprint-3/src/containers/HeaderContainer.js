import React from 'react';
import Header from '../components/Header';

// Container - mainly a placeholder for potential future required state changes
class HeaderContainer extends React.Component {

    render() {
        return (
            <Header profilePic={this.props.profilePic} />
        )
    }

}

export default HeaderContainer;