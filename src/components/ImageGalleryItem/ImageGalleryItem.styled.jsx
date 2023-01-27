import styled from 'styled-components';
export const ImageGalleryItemWrp = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.04);
    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;
    cursor: zoom-in;
  }
`;
