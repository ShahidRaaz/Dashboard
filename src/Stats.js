import Rimg from './Revenues.png'
import Timg from './transaction.png'
import Limg from './likes.png'
import Uimg from './users.png'
import './Stats.css'
function Stats(){
    return(
        <div>
            <div className='flex-container1 statsbox' >
                <div className='flex-item2 boxes' id="tr">
                    <img src={Rimg} alt='' id='ppic1'></img>
                    <br/>
                    <p className="pp">Total Revenues</p>
                    <h1 className='value'>$2,129,430</h1>
                </div>
                <div className='flex-item2 boxes' id="tt">
                    <img src={Timg} alt='' id='ppic1'></img>
                    <br/>
                    <p className="pp">Total Transaction</p>
                    <h1 className='value'>1,520</h1>
                </div>
            <div className='flex-item2 boxes' id="tl">
            <img src={Limg} alt='' id='ppic1'></img>
            <br/>
            <p className="pp">Total Likes</p>
            <h1 className='value'>9,721</h1>
            </div>
            <div className='flex-item2 boxes' id="tu">
            <img src={Uimg} alt='' id='ppic1'></img>
            <br/>
            <p className="pp">Total Users</p>
            <h1 className='value'>892</h1>
            </div>  
        </div>
        </div>
    )
}
export default Stats;