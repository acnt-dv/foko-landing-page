const ContactUs = () => {
    return (
        <div className="flex flex-col xl:flex-row w-full h-full xl:h-screen justify-start items-center mb-32">
            <h1 className="text-30 font-rubik text-end hidden xl:block mx-[50px]">Contact <br/> Us</h1>

            <div className='flex w-full text-justify'>
                <h1 className="text-16 font-rubik block xl:hidden mx-[30px]">Contact <br/> Us</h1>
                <p className="mx-[30px] xl:mx-[50px] w-full xl:max-w-[450px] text-10 xl:text-16">FOKO
                    Studio is here to bring your architectural dreams to life. We invite you to get in touch with us to
                    discuss your project ideas and see how we can assist you. Email us at contact@foko.studio or give us
                    a call at +123-456-7890. Our team is ready to provide you with the expertise and support you need to
                    achieve your goals.
                </p>
            </div>
        </div>
    )
}

export default ContactUs;