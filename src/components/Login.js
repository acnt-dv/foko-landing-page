import logo from '../statics/png/foko-logo.png';

export const Login = ({loggedIn, setLoggedIn})=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img src={logo} alt={'logo'}/>
            <button className="text-2xl mt-[100px]"
            onClick={()=>setLoggedIn(!loggedIn)}
            >password &#62;</button>
        </div>
    )
}

export default Login;