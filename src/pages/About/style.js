import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

export const LogoSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;

  padding: 2rem;
  height: calc(100vh - 9rem);
`;

export const Logo = styled.img`
  max-width: 500px;
  width: 100%;
  justify-self: center;
  flex-grow: 1;
  margin-bottom: 6rem;
`;

export const VICon = styled.img`
  cursor: pointer;
  max-width: 50px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const MembersSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
`;

export const Text = styled.p`
  text-align: center;
  color: #2a2a2a;
  letter-spacing: 0.125rem;
  line-height: 1.25rem;
`;

export const MembersContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
