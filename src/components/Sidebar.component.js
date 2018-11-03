import React from "react";
import Dock from "react-dock";

const DockSettings = {
    position:  'left',
    fluid: true,
    size: .2,
    dimMode: 'none',
    duration: 400,
    zIndex: 2   
}


export class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        const {position, fluid, size, dimMode, duration, zIndex } = DockSettings;
        return (
      
            <Dock 
            duration={duration} 
            dimMode={dimMode} 
            position={position} 
            fluid={true}
            zIndex={zIndex}
            isVisible={this.props.isSideBarVisible} 
            size={size}>
                <div onClick={this.props.toggleSidebar}>X</div>
            </Dock>
  
         
        )
    }

}

export default Sidebar;