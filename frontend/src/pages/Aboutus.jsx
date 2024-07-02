import styled from "styled-components";
const StyledAboutus = styled.div`
  width: 100%;
  border-radius: 2rem;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 18.8rem);
  padding: 4.8rem;
  color: white;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.1)
    ),
    url(../../public/images/travel.jpg);
  background-position: center;
  background-size: cover;

  h2 {
    font-size: 4.8rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
    text-align: justify;
    line-height: 1.5;
    margin-top: 2.4rem;
    width: 50%;
  }
`;
function Aboutus() {
  return (
    <StyledAboutus>
      <h2>About us</h2>
      <p>
        Welcome to TripPal, your ultimate travel companion! Our mission is to
        make exploring the world easier and more enjoyable by providing you with
        comprehensive information about famous places, hidden gems, and
        must-visit destinations. With TripPal, you can effortlessly discover the
        best locations, find detailed city guides, and access insightful travel
        tips. Our app harnesses the power of advanced APIs and user-friendly
        interfaces to deliver accurate, up-to-date data tailored to your travel
        preferences. Whether you&quot;re planning a weekend getaway or a
        cross-country adventure, TripPal is here to inspire and guide you every
        step of the way. Join our community of explorers and embark on your next
        adventure with confidence!
      </p>
    </StyledAboutus>
  );
}

export default Aboutus;
