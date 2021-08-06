import { makeStyles } from "@material-ui/core"

const styleOverride = makeStyles({
    root: {
        backgroundColor:"#464646",
        marginTop:"10px",
        width : "470px",
        height:"400px",
           
    },

    cajaFoto:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        position:"absolute",  
        margin:"10px"      
    }

} )

export default styleOverride