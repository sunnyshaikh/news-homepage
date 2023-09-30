import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import retroPcs from "../assets/images/image-retro-pcs.jpg"
import topLaptops from "../assets/images/image-top-laptops.jpg"
import gamingGrowth from "../assets/images/image-gaming-growth.jpg"

const data = [
  {
    id: 1,
    watermark: "01",
    img: retroPcs,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?"
  },
  {
    id: 2,
    watermark: "02",
    img: topLaptops,
    title: "Top 10 Laptops of 2023",
    desc: "Our best picks for various needs and budgets."
  },
  {
    id: 3,
    watermark: "03",
    img: gamingGrowth,
    title: "The Growth of Gaming",
    desc: "How the pandamic has sparked fresh opportunities."
  },
]

const Cards = () => {
  return (
    <Container>
      <Box py={5} mt={3}>
        <Grid container spacing={3}>
          {
            data.map(({ id, img, title, desc, watermark }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Card sx={{ borderRadius: 0, display: "flex", "& img": { aspectRatio: "2/3" } }} elevation={0}>
                  <CardMedia>
                    <img src={img} alt="image" style={{ maxHeight: "150px", maxWidth: "180px", borderRadius: "6px" }} />
                  </CardMedia>
                  <CardContent sx={{ py: 0 }}>
                    <Typography gutterBottom variant="h5" color="grey.400">
                      {watermark}
                    </Typography>
                    <Typography gutterBottom variant="h6" fontSize={18}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Container>
  )
}

export default Cards