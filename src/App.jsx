import { Typography, CssBaseline, Button } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Cards from "./components/Cards"
import { useMemo, useState } from "react"

const App = () => {
  const [mode, setMode] = useState("dark")
  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: 15,
      h1: {
        fontWeight: 800
      },
      h2: {
        fontWeight: 800
      },
      h3: {
        fontWeight: 700
      },
      h4: {
        fontWeight: 700
      },
      h5: {
        fontWeight: 700
      },
      h6: {
        fontWeight: 700
      },
    },
    palette: {
      mode,
      ...(mode === "light" ? {
        primary: {
          main: "hsl(5, 85%, 63%)"
        },
        secondary: {
          main: "#00001A",
          contrastText: "#fff"
        },
        background: {
          default: "#fafafa",
          paper: "#fafafa"
        }
      } : {
        primary: {
          main: "hsl(5, 85%, 63%)"
        },
        secondary: {
          main: "#333348",
          contrastText: "#fff"
        },
        background: {
          default: "#00001A",
          paper: "#00001A"
        }
      })
    }
  }),
    [mode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="app">
        <Navbar setMode={setMode} />
        <Main />
        <Cards />
      </main>
    </ThemeProvider>
  )
}

export default App
