import {Route, Routes} from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import CreatePage  from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";


function App() {

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.300", "gray.900")}>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={<CreatePage/>} />
          </Routes>
      </Box>
    </>
  );
}

export default App;
