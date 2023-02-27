import styled from 'styled-components'

 export const Box = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  ::before {
    content: 'Choose file';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }
`;


