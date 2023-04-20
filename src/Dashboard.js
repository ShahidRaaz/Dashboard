import Activities from './Activities';
import './Dashboard.css'
import Navbar from './Navbar';
import Schedule from './Schedule';
import Stats from './Stats';
import TopP from './TopP';
import Topbar from './Topbar';
function Dashboard(){
    return(
        <div className='flex-container1' id='Wholedash' >
            <div className='flex-item1'>
            <Navbar/>
            </div>
            <div className='flex-item1' id="fulldashb">
                <div className='flex-container2'>
                    <div className='flex-item1'>
                    <Topbar/>
                    </div>
                    <div className='flex-item1'>
                    <Stats/>
                    </div>
                    <div className='flex-item1'>
                    <Activities/>
                    </div>
                    <div className='flex-item1'>
                    <div className='flex-container'>
                        <div className='flex-item1'>
                        <TopP/>
                        </div>
                        <div className='flex-item1'>
                        <Schedule/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;