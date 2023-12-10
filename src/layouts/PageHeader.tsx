import Logo from '../assets/logo.png'
import { SlCamrecorder } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'
import { CiBellOn } from 'react-icons/ci'
import { FaMicrophone } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../store/dropDownMenu/dropDownMenuSlice'
import { AppDispatch } from '../store/store'

export default function PageHeader() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className='header'>
      <div className='start'>
        <div className='icon-container'>
          <button onClick={() => dispatch(changeStatus())}>
            <FiMenu className='icon drop-down-menu' />
          </button>
        </div>
        <div className='logo'>
          <a href=''>
            <img src={Logo} alt='' />
          </a>
        </div>
      </div>
      <div className='center'>
        <input placeholder='Search' className='input' type='Search' />
        <button className='search-btn'>
          <CiSearch />
        </button>
        <button className='mic-btn'>
          <FaMicrophone />
        </button>
      </div>
      <div className='end'>
        <div className='icon-container'>
          <SlCamrecorder className='icon' />
        </div>
        <div className='icon-container'>
          <CiBellOn className='icon' />
        </div>
        <div className='profile'></div>
      </div>
    </div>
  )
}
