const config = {
  screens: {
    login: {
      path: "login/:id",
      parse: {
        id: (id) => `${id}`,
      },
    },
    SignUpSreen: {
      path: "SignUpSreen/:id",
      parse: {
        id: (id) => `${id}`,
      },
    },
    Home: "Home",
    FriendList: "FriendList",
    Adds: "Adds",
    
  },
  
 
};

const linking = {
  prefixes: ["demo://app"],
  config,
};

export default linking;