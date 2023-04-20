import './Topbar.css'
import nbellicon from './notificationbell.png'
import profpic from './profilepic.png'
function Topbar(){
    return(
            <div className='flex-container1' id='topbar'>
                <div className='flex-item2' id="dtitle">
                    <h2 id='mtitle'>
                        Dashboard
                    </h2>
                </div>
                {/* search,bell, profile*/}
                <div className='flex-container1'>
                    <div className='rbi'>
                        <input id="searchbox" type='text' placeholder='Search...'/>
                    </div>
                    <div className='rbi' id="notibell">
                        <a href=''>
                            <img src={nbellicon} alt='' id='ppic'></img>
                        </a>
                    </div>
                    <div className='rbi' id="profbtn">
                        <a href=''>
                            <img src={profpic} alt='' id='ppic'></img>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default Topbar;