/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Averta:['" Averta,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif "']
      },
      boxShadow: {
        'money': '0.25em 0.5em 3em rgb(255 213 48 / 80%)',
      }
    },
    screens: {
			sm: { max: "414px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}
