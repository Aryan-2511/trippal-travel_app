import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";

const StyledSearchBox = styled.div`
  background-color: #f0f0f0;
  color: #0a2e36;
  max-width: 48.5rem;
  min-height: 6.4rem;
  padding: 0.8rem 2.8rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  box-shadow: 0px 4px 8px rgba(19, 19, 19, 0.04);
  .search-icon {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  background-color: inherit;
  color: #0a2e36;
  outline: none;
  font-size: 2rem;
  border: none;
  flex-basis: 90%;
`;

function Searchbox() {
  return (
    <StyledSearchBox className="search-box">
      <HiMagnifyingGlass size={24} className="search-icon" />
      <StyledInput
        type="text"
        id="search-input"
        name="search"
        placeholder="Search for destinations..."
      />
    </StyledSearchBox>
  );
}

export default Searchbox;
