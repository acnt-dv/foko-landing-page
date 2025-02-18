import image from '../statics/png/main-title.png';
import Header from './Header';
import Footer from './Footer';

export const Title = () => {
    return (
        <>
            <Header className="z-10"/>
            <div
                className="h-screen w-full bg-cover bg-center bg-red-400 absolute"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <Footer className="z-20"/>
        </>
    )
}

export default Title;