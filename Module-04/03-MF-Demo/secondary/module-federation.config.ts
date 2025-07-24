export const mfConfig = {
  name: "secondary",
  filename: "remoteEntry.js",
  remotes:{
    primary: 'primary@http://localhost:3001/remoteEntry.js'
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
