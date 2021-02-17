import { green, red } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        primary: {
            main: green[400]
        },
        secondary: {
            main: red[400]
        }
    },
    typography: {
        h1: {
            fontSize: "5rem",
            fontFamily: "Roboto"
        }
    }
})

export default theme;