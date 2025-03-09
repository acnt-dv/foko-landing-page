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
                'foko-sm': '30px'
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],  // Use the name you defined in @font-face
                helvetica: ['Helvetica', 'sans-serif'],  // Use the name you defined in @font-face
            },
            fontSize: {
                '10': '10px', // Custom font size for "MyFont"
                '16': '16px',
                '20': '20px', // Custom font size for "MyFont"
                '30': '30px',
            },
        },
    },
    plugins: [],
};
