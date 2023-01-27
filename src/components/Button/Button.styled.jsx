import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.1);
    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;
  }
`;
