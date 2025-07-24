export const mfConfig = {
  name: "primary",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header",
    "./Footer": "./src/components/Footer",
  },
  shared: ["react", "react-dom"],
};
