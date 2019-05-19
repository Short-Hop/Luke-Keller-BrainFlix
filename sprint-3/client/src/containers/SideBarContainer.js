import React from 'react';
import SideBar from '../components/SideBar';

// Container - mainly a placeholder for potential future required state changes
class SideBarContainer extends React.Component {

    render() {
        return (
            <SideBar sideVideos={this.props.sideVideos} mainVideo={this.props.mainVideo} />
        )
    }
}

export default SideBarContainer;