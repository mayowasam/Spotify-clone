import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useStateVal } from '../Hooks/StateProvider'
import ImageOne from '../images/image1.jpeg'

function Sidebar() {
    const [{ playlists }] = useStateVal()
    console.log('playlist from the reducer', playlists)


    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={ImageOne} alt="" />
            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {
                playlists?.items?.map(playlist =>(
                    <SidebarOption title={playlist.name} />
                ))
            }
           




        </div>
    )
}

export default Sidebar
