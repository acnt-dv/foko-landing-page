
const ContactUs = () => {
    return (
        <div className="flex flex-col xl:flex-row h-screen items-center justify-center">
            <h1 className="text-lg hidden xl:block xl:text-8xl m-[50px]">Contact Us</h1>

            <div className='flex'>
                <h1 className="text-lg block xl:hidden m-[50px]">About FOKO</h1>
                <span className="flex flex-col w-full justify-center items-center text-justify">
                    <p className="m-[50px] text-lg max-w-[450px]">FOKO Studio is here to bring your architectural dreams to life. We invite you to get in touch with us to discuss your project ideas and see how we can assist you. Email us at contact@foko.studio or give us a call at +123-456-7890. Our team is ready to provide you with the expertise and support you need to achieve your goals.


                    </p>


        </span>
            </div>
        </div>
    )
}

export default ContactUs;