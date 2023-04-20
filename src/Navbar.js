import Dimg from './dashboard_icon.png'
import Timg2 from './transaction_icon.png'
import Simg from './schedule_icon.png'
import Uimg2 from './user_icon.png'
import Simg2 from './setting_icon.png'
import './Navbar.css'
function Navbar(){
    return(
        <div>
            <div className='flex-item' id="navbar">
                <h1 id='appname2'>Board.</h1>
                <nav>
                    <h4><img src={Dimg} alt='i' className='micon'/>Dashboard</h4>
                    <h4><img src={Timg2} alt='i' className='micon'/>Transaction</h4>
                    <h4><img src={Simg} alt='i' className='micon'/>Schedule</h4>
                    <h4><img src={Uimg2} alt='i' className='micon'/>User</h4>
                    <h4><img src={Simg2} alt='i' className='micon'/>Settings</h4>
                </nav>
                <div id='btmenu'>
                <a href=''>Help</a>
                <p></p>
                <a href=''>Contact Us</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;