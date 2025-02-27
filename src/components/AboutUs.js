import aboutUsImage from '../statics/png/about-us.png';

const AboutUs = () => {
    return (
        <div className="flex flex-col xl:flex-row h-screen items-center justify-center">
            <h1 className="text-lg hidden xl:block xl:text-8xl m-[50px]">About FOKO</h1>

            <div className='flex'>
                <h1 className="text-lg block xl:hidden m-[50px]">About FOKO</h1>
                <span className="flex flex-col w-full justify-center items-center text-justify">
                    <p className="m-[50px] text-lg max-w-[450px]">FOKO Studio is a Los Angeles-based architecture and interior design firm.
                        Our studio specializes in crafting bespoke, high-end residential and commercial
                        spaces that are as thoughtful as they are visually compelling.
                    </p>

            <p className="m-[50px] text-lg max-w-[450px]">
                At FOKO Studio, we are deeply committed to our clients' specific needs.
                From intimate interiors to large-scale architectural projects,
                we combine creative problem-solving with a holistic design approach,
                navigating the layered complexities of each project. By considering every detail,
                we design environments that are perfectly tailored to the unique lifestyle and
                aspirations of our clients.
            </p>
            <span className="flex w-full max-w-[450px] justify-start items-center text-justify">
                <h2 className="justify-self-start text-2xl">MORE &nbsp; &nbsp; &#62;</h2>
                    </span>
        </span>
            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'} className="filter grayscale m-foko"/>
        </div>
    )
}

export default AboutUs;