import aboutUsImage from '../statics/png/about-us.png';

const AboutUs = () => {
    return (
        <div className="flex flex-col xl:flex-row h-full xl:h-screen items-center justify-center">
            <h1 className="text-start text-30 font-rubik hidden xl:block absolute left-[50px] my-foko">About <br/> FOKO</h1>

            <div className='flex'>
                <h1 className="text-16 font-rubik block xl:hidden absolute left-[30px] mt-foko">About <br/> FOKO</h1>
                <span className="flex flex-col w-full justify-center items-center text-justify my-foko">
                    <p className="mx-[30px] xl:mx-[50px] text-10 xl:text-16 w-7/12 self-end md:self-center max-w-[450px]">FOKO Studio is a Los Angeles-based architecture and interior design firm.
                        Our studio specializes in crafting bespoke, high-end residential and commercial
                        spaces that are as thoughtful as they are visually compelling.
                    </p>

                    <p className="mx-[30px] xl:mx-[50px] hidden xl:block w-7/12 self-end md:self-center text-16 max-w-[450px] my-foko">
                        At FOKO Studio, we are deeply committed to our clients' specific needs.
                        From intimate interiors to large-scale architectural projects,
                        we combine creative problem-solving with a holistic design approach,
                        navigating the layered complexities of each project. By considering every detail,
                        we design environments that are perfectly tailored to the unique lifestyle and
                        aspirations of our clients.
                    </p>
                    <h2 className="font-rubik w-7/12 max-w-[450px] self-end md:self-center mx-[30px] xl:mx-[50px] xl:justify-self-start text-10 xl:text-20 mt-foko">MORE &nbsp; &nbsp; &#62;</h2>
                </span>
            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'} className="filter grayscale mb-foko xl:m-foko"/>
        </div>)
}

export default AboutUs;