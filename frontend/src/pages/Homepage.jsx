import styled from "styled-components";
import { useRef, useState } from "react";
import Searchbox from "../ui/Searchbox";
import { placesData } from "../../public/data/dummyData";
import Aboutus from "../components/Aboutus";
import { getCity } from "../services/getCity";
import Loader from "../components/Loader";
// import { getLocations } from "../services/getLocations";
import { fetchFamousPlaces } from "../services/OpenTripMap";
import { getLocations } from "../services/getLocations";

const StyledHomepage = styled.div`
  text-align: center;
  .homepage-heading {
    font-size: 4.8rem;
    margin-bottom: 2.4rem;
    span {
      color: #4caf50;
    }
  }
`;

const StyledPopularPlacesContainer = styled.div`
  text-align: left;
  margin-top: 4.8rem;
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
  .popular-places-boxes {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3.6rem;
    overflow-y: hidden;
    overflow-x: scroll;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const StyledPlaceBox = styled.div`
  height: 20.8rem;
  min-width: 34.5rem;
  border-radius: 1.2rem;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  padding-top: 16.5rem;
  padding-left: 2.4rem;
  scroll-snap-align: start;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  p {
    font-size: 1.6rem;
    font-weight: 600;
    z-index: 2;
    color: white;
    transition: opacity 0.3s ease-in-out;
  }
  img {
    height: 100px;
    aspect-ratio: 16/9;
  }
`;

function Homepage() {
  const popular_places = useRef(null);
  const [searchResult, setSearchResult] = useState({});
  const [loading, setLoading] = useState(false);

  // card horizontal scrolling on homepage
  function handleScroll(e) {
    popular_places.current.scrollLeft += e.deltaY * 5;
  }
  async function handleSearch(city) {
    try {
      setLoading(true);
      const cityObj = await getCity(city);
      const locations = await getLocations(city);
      console.log("locations", locations);
      setSearchResult(cityObj);
    } catch (error) {
      console.error("Error searching city", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyledHomepage>
      <h2 className="homepage-heading">
        Hey <span>Aman!</span> Where to?
      </h2>
      <Searchbox
        onSearch={handleSearch}
        searchResult={searchResult}
        loading={loading}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {console.log(searchResult)}
          <Aboutus />
          <StyledPopularPlacesContainer>
            <h3 className="popular-places-heading">Popular Places</h3>
            <div
              className="popular-places-boxes"
              onWheel={handleScroll}
              ref={popular_places}
            >
              {placesData.map((item, key) => {
                return (
                  <StyledPlaceBox key={key} $img={item.img}>
                    <p>
                      {item.name}, {item.state}
                    </p>
                  </StyledPlaceBox>
                );
              })}
            </div>
          </StyledPopularPlacesContainer>
        </>
      )}
    </StyledHomepage>
  );
}

export default Homepage;
