import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Toggle
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/roommates">
                    <BsGrid1X2Fill className='icon'/> Roommates
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/events">
                    <BsFillArchiveFill className='icon'/> Events
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/lodges">
                    <BsFillGrid3X3GapFill className='icon'/> Lodges
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/buyandsell">
                    <BsPeopleFill className='icon'/> Buy/Sell
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/reports">
                    <BsListCheck className='icon'/> reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="settings">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar