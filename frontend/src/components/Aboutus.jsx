import styled from "styled-components";
import Button from "../ui/Button";
import videoSrc from "../../public/videos/result.mp4"; // Import your video file

const StyledAboutUs = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 35rem;
  text-align: justify;
  padding: 3.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border-radius: 24px;
  margin-top: 4.8rem;
  color: white;
  overflow: hidden;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.06)
    );
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  h3 {
    font-size: 3.6rem;
    z-index: 2;
  }

  p {
    font-size: 1.6rem;
    max-width: 48rem;
    line-height: 1.5;
    z-index: 2;
  }
  Button {
    z-index: 2;
  }
`;

function Aboutus() {
  return (
    <StyledAboutUs className="about_us_box">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="about_us_box-heading">Find your trip here!</h3>
      <p className="about_us_box-text">
        Need a refreshing escape from your everyday routine? Look no further —
        we&apos;ve got you covered. Choose your ideal travel destination with us
        and embark on a journey to rejuvenate your mind, body, and soul. Whether
        you seek tranquil beaches, adventurous mountains, or vibrant cities,
        discover the perfect getaway to revitalize your spirit and create
        lasting memories.
      </p>
      <Button variation="secondary">About us</Button>
    </StyledAboutUs>
  );
}

export default Aboutus;
