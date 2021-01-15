import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

const user = {photoURL: '', displayName: 'Mike Bezeau'};

function Sidebar () {
    return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} Icon=""/>
        <SidebarRow src="" title="Covid-19 Information Center" Icon={LocalHospitalIcon}/>
        <SidebarRow src="" title="Pages" Icon={EmojiFlagsIcon}/>
        <SidebarRow src="" title="Friends" Icon={PeopleIcon}/>
        <SidebarRow src="" title="Messenger" Icon={ChatIcon}/>
        <SidebarRow src="" title="Marketplace" Icon={StorefrontIcon}/>
        <SidebarRow src="" title="Videos" Icon={VideoLibraryIcon}/>
        <SidebarRow src="" title="More" Icon={ExpandMoreOutlined}/>
    </div>
    );
}
 
export default Sidebar;