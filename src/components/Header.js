import menuIcon from '../statics/svg/menu-icon.svg';
import logo from '../statics/png/foko-logo.png';

export const Header = ()=> {
    return (
        <div className="fixed top-0 left-0 flex justify-between w-full z-10">
            <img src={logo} alt="logo" className="w-[50px] h-[50px] m-[50px]"/>
            <button>
                <img src={menuIcon} alt="menuIcon" className="m-[50px]"/>
            </button>
        </div>
    )
}

export default Header;