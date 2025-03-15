import {useEffect, useRef, useState} from "react";

const FadingTextBox = ({text}) => {
    const textBoxRef = useRef(null);
    const [maskOpacity, setMaskOpacity] = useState(100); // Start fully visible


    const spaceToAdd = text.replace(/./g, ' ')
    // Calculate half the length of the text
    const normalizedText = text + spaceToAdd.substring(0,600); // Append half of the text's length in spaces

    useEffect(() => {
        const handleScroll = () => {
            if (!textBoxRef.current) return;

            const {scrollTop, scrollHeight, clientHeight} = textBoxRef.current;
            const maxScroll = scrollHeight - clientHeight;

            // Calculate opacity for the fade effect (from fully visible to fully faded)
            let newOpacity = 1 - scrollTop / maxScroll;
            setMaskOpacity(newOpacity);
        };

        const textBox = textBoxRef.current;
        textBox?.addEventListener("scroll", handleScroll);
        return () => textBox?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex w-full items-center justify-center self-center mt-[30px] md:mt-[50px]">
            <p
                ref={textBoxRef}
                className="whitespace-pre-wrap w-full h-[16vh] overflow-y-auto text-10 md:text-16 text-justify text-black no-scrollbar my-[30px] md:my-[50px] leading-relaxed"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    lineHeight: '2rem',
                    textJustify: 'justify-between',
                }}
            >
                {normalizedText }
        </p>
        </div>
    );
};

export default FadingTextBox;
