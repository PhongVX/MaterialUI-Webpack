import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    standardColor: {
      primary: "#303F9F",
      secondary: "#FF5252",
      error:"#E64A19"
    },
    typography:{
        fontFamily:"Roboto"
    },
    shape:{
        borderRadius:4,
        backgroundColor:"#512DA8",
        textColor:"#FFFFFF",
        borderColor:"#CCCCCC"
    }
});

export default theme;