import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 4.2rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  a.btn {
    padding: 10px 20px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px; /* Rounded button */
    transition: background-color 0.3s ease;
  }

  @media (min-width: 576px) {
    span {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;
