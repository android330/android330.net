import { Box, Typography } from "@mui/material"

export default function HomeInfoBlock({descriptionInfo}){
    return(
        <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
            {descriptionInfo.side === 1 && 
                <>
                    <Typography marginLeft={1} align="right">{descriptionInfo.des}</Typography>
                    <Box component="img" sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center',maxHeight: "100px"  }} alt="test" src={descriptionInfo.pic}/>
                </>
            }
            {descriptionInfo.side === 2 && 
                <>
                    <Box component="img" sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',maxHeight: "100px"  }} alt="test" src={descriptionInfo.pic}/>
                    <Typography marginLeft={1} align="left">{descriptionInfo.des}</Typography>
                </>
            }
            {descriptionInfo.side === 0 &&
                <Typography variant="h4" align="center" width="100%" >{descriptionInfo.des}</Typography>}
        </Box>
    )
}