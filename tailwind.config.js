module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Paths to all of your template files
    ],
    theme: {
        extend: {
            colors: {
                foko: '#D9D7C9',
            },
            margin: {
                foko: '50px',
            },
            fontFamily: {
                rubik: ['rubik', 'sans-serif'],  // Use the name you defined in @font-face
            },
            fontSize: {
                'rubik-20': '20px', // Custom font size for "MyFont"
            },
        },
    },
    plugins: [],
};
