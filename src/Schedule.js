import './Schedule.css'
import Aimg from './rightarrow.png'
function Schedule(){
    return(
        <div id='schedule' className='prsc'>
        <div className='flex-item prscbox'>
        <div className='flex-container1' >
        <div className='flex-item2'>
            <h2 className='pstitle'>
                Today's Schedule
            </h2>
        </div>
            <div className='flex-container1'>
            <div className='flex-item2'>
                <a className='salll' href=''>See all
                <img alt='none' src={Aimg} className='salb'/>
                </a>
            </div>
            </div>
        </div>
        <div className='sch' id='sch1'>
            <p className='mname'>Meeting with suppliers from Kuta Bali</p>
            <p className='mtime'>14.00-15.00</p>
            <p className='madd'>at Sunset Road, Kuta, Bali </p>
        </div>
        <div className='sch' id='sch2'>
            <p className='mname'>Check operation at Giga Factory 1</p>
            <p className='mtime'>18.00-20.00</p>
            <p className='madd'>at Central Jakarta</p>
        </div>
        </div>
        </div>
    )
}
export default Schedule;