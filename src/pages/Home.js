import { Box, Container } from '@mui/material';


export default function Home(){

    return(
        <Container component="main" maxWidth="md">
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    <Box
                    component="img"
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxHeight: "100px"
                  }} alt="test" src="./images/react.png"/>
                    TestTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph
                  </Box>
                  <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                     Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph
                  </Box>
                  <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    TestTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph
                  </Box>
      </Container>
    )
}