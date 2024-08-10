import { Box, Container, Typography } from '@mui/material';
import HomeInfoBlock from '../components/HomeInfoBlock';
import { useState } from 'react';

let homeInformationList = [{pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", side: 1},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", side: 2},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", side: 1},
  {pic: null, des: "Work", side: 0},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", side: 1}]

export default function Home(){
  const [homeInformation, updateHomeInformation] = useState(homeInformationList);

    return(
      <Container component="main" maxWidth="lg" sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h3" align="center" width="100%">Projects</Typography>
        {homeInformation.map((infoChunk, index) =>
          <HomeInfoBlock key={index} descriptionInfo={infoChunk}/>
        )}
        
      </Container>
    )
}