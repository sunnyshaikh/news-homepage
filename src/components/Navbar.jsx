import React from 'react'
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logoLight from "../assets/images/logo.svg"
import logoDark from "../assets/images/logo-dark.svg"

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const sections = [
  {
    id: 1,
    title: "Home",
    href: "/"
  },
  {
    id: 2,
    title: "New",
    href: "/new"
  },
  {
    id: 3,
    title: "Popular",
    href: "/popular"
  },
  {
    id: 4,
    title: "Trending",
    href: "/trending"
  },
  {
    id: 5,
    title: "Categories",
    href: "/categories"
  },
]

const Navbar = ({ setMode }) => {
  const theme = useTheme()
  return (
    <Box>
      <AppBar position='static' sx={{ background: "none", py: "2rem" }} elevation={0}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }} disableGutters>
            {
              theme.palette.mode === "dark" ? <img src={logoDark} alt="logo" /> : <img src={logoLight} alt="logo" />
            }
            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              {
                sections.map(section => (
                  <Link
                    key={section.id}
                    underline="none"
                    href={section.href}
                    sx={{
                      transition: "0.25s ease",
                      color: "text.secondary",
                      py: 2,
                      "&:hover": {
                        color: "text.primary"
                      }
                    }}>{section.title}
                  </Link>
                ))
              }
            </Stack>
            <Box sx={{ ml: { xs: "auto", sm: "0" } }}>
              <IconButton onClick={() => setMode(prev => prev === "dark" ? "light" : "dark")} aria-label="toggle dark mode">
                {
                  theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
                }

              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar