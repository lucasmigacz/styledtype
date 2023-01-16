import styled from "styled-components";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <MainContent />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div``;
