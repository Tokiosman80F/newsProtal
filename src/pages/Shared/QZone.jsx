
import qzone1 from '../../assets/qzone1.png'
import qzone2 from '../../assets/qzone2.png'
import qzone3 from '../../assets/qzone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary my-4'>
            <h2>Q-Zone</h2>
            <div className='text-center'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
        </div>
    )
}

export default QZone