import logo from '../../assets/logo.png'
import moment from "moment";
const Header = () => {
    return (
      <div>
        <div className='text-center'>
          <img src={logo} alt='' />
          <p className='text-secondary'>Journalism Without Fear or Favour</p>
          <h5>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h5>
        </div>
      </div>
    );
}

export default Header