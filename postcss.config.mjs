// const config = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// export default config;

/////////////////////////////////////////////////////////////////////////////////////////////////
///// Initialized as below upon running 'npx create-next-app@latest portfolio --typescript' /////
///// INCORRECT ACCORDING TO CHATGPT: "This is not valid. plugins should be an object, not  /////
///// an array, and @tailwindcss/postcss is not a plugin — it's a package name that         /////
///// shouldn't be listed this way.                                                         /////
/////////////////////////////////////////////////////////////////////////////////////////////////

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
