module.exports = {
    content: ["./src/**/*.{html,js}"],
     
    theme: {
        extend: {
             fontFamily: {
                 Poppins: ["Poppins", "sans-serif"],
            },
            
             colors: {
                 'primary': {
                     DEFAULT: '#F2994A',
                     '50': '#FEFAF5',
                     '100': '#FDEFE2',
                     '200': '#FAD9BC',
                     '300': '#F7C496',
                     '400': '#F5AE70',
                     '500': '#F2994A',
                     '600': '#EE7C16',
                     '700': '#BE610E',
                     '800': '#8A460A',
                     '900': '#552B06'
                 },
                 'secondary': '#F2B14B',
                 'third': '#F2B14B',
                 't1': '#48485C',

            },
            screen: {
                '2xl': '1320px',
                 'xl': '1280px',
            },
            borderRadius: {
                'fur': '50px',

            },
           
        },
    },
    plugins: [],
}

