import React from 'react';
import Header from '../components/Header';


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header profilePic={this.props.profilePic} />
        )
    }

}

export default HeaderContainer;