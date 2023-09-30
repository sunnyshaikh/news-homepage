import { Box, Container, Grid, Typography, Stack, Divider, useTheme } from '@mui/material'
import React, { Fragment } from 'react'
import desktopImg from "../assets/images/image-web-3-desktop.jpg"
import mobileImg from "../assets/images/image-web-3-mobile.jpg"
import { StyledButton } from './styledComponents/button'

const data = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    desc: "Will Hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    id: 3,
    title: "Is VC Funcding Drying Up?",
    desc: "Private funcding by VC firms is down 50% YOY. We take a look at what that means."
  }
]

const Main = () => {
  const theme = useTheme()
  return (
    <Container>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={6} md={8}>
          <Box>
            <picture>
              <source srcSet={desktopImg} media="(min-width: 768px)" />
              <img src={mobileImg} alt="hero-img" style={{ borderRadius: "10px", overflow: "hidden" }} />
            </picture>
            <Grid container mt={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3" component="h1">The Bright Future of Web 3.0?</Typography>
              </Grid>
              <Grid item xs={12} sm={6} pl={{ xs: 0, md: 5 }}>
                <Typography variant="body2" color="text.secondary">
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfulling its promise?
                </Typography>
                <StyledButton style={{ marginTop: "3rem" }} variant="contained" color="primary">
                  Read more
                </StyledButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{
            bgcolor: "secondary.dark", p: 3, pb: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}>
            <Typography variant='h3' component="h2" color="primary.main">New</Typography>
            <Stack spacing={3} mt={2}>
              {
                data.map(({ id, title, desc }, index) => (
                  <Fragment key={id}>
                    <Box color="inherit">
                      <Typography variant="h3" c color="grey.50" fontSize={20}>{title}</Typography>
                      <Typography variant="body2" color="grey.400" mt={1}>{desc}</Typography>
                    </Box>
                    {
                      index !== data.length - 1 ? <Divider style={{ color: "grey" }} /> : null
                    }
                  </Fragment>
                ))
              }
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main