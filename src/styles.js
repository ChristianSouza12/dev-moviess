import styled from "styled-components";

import { FaTrashAlt , FaCheck } from "react-icons/fa";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h3{
    color:white;
    display: flex;
    justify-content: center;
  }
`;

export const AddButton = styled.button `
  background:  #65b7cd;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 17px;
  height: 47px;
  cursor: pointer;
  transition: all 0.3s;
  width: 130px;

  &:hover {
    background: transparent;
    border: 1px solid #65b7cd;
    color: #65b7cd;
  }

  &:active {
    opacity: .2;
  }
`;

export const ContainerItens = styled.div `
  background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 00, 00, 00, 0.37 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 13.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 30px;
  width: 90%;
  max-width: 500px; 

  ul {
    padding: 0;
    margin-top: 20px;
  }
`;

export const Input = styled.input `
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 10px;
  width: calc(100% - 130px - 20px); 
  margin-bottom: 10px;
`;

export const ListItem = styled.div `
  background: ${(props) => props.isFinished ? "#afd4b5" : "#e4e4e4"};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;

  li {
    list-style: none;
    margin-left: 10px;
  }
`;

export const Trash = styled(FaTrashAlt) `
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

export const Check = styled(FaCheck) `
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;
