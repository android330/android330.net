import { Box, Typography } from "@mui/material"

export default function HomeInfoBlock({descriptionInfo}){
    console.log(descriptionInfo)
    return(
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                
                }}>
            <Box
                component="img"
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxHeight: "100px"  
                }} alt="test" src={descriptionInfo.pic}/>
                <Typography marginLeft={1}>{descriptionInfo.des}</Typography>
        </Box>
    )
}