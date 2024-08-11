import { Box, Link } from "@mui/material"
import { Navigate, useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate();

    return(
        <Box width="100%" sx={{display: "flex",flexDirection: "row", background: "black"}}>
          <Link variant="h6" sx={{paddingLeft: 2, color: "white", cursor: "pointer"}} onClick={()=>{navigate('/')}}>Projects</Link>
          <Link variant="h6"  sx={{paddingLeft: 2, color: "white", cursor: "pointer"}} onClick={()=>{navigate('/AboutMe')}}>About Me</Link>
        </Box>
    )
}