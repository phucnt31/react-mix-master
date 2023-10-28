import styled from "styled-components";

const Wrapper = styled.nav`
  background: #fff;
  .nav-center {
    max-width: 1120px;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: #10b981;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: #0f172a;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: 0.3s ease-in-out all;
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: #10b981;
  }
  .active {
    color: #10b981;
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
