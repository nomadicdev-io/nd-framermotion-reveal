import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home"
import LoadingScreen from "./sections/LoadingScreen";

function App() {

  const [isDomLoad, setIsDomLoad] = useState(false)

    useEffect(()=> {
        setTimeout(()=> {
            setIsDomLoad(true)
        }, 2000)
    }, [])

  return (

    <>
      {isDomLoad && (
          <>
          <Header />
          <Home />
          </>
      )}

      <AnimatePresence>
          {!isDomLoad && <LoadingScreen />}
      </AnimatePresence>
    </>

    
  )
}

export default App
