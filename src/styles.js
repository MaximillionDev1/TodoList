import styled from "styled-components";
import { FcEmptyTrash, FcApproval } from "react-icons/fc";

export const Container = styled.div`
 background: url('https://giffiles.alphacoders.com/215/215911.gif');
 background-size: cover;
 background-position: center;
 width: 100vw;
 height:100vh;
 display: flex;
 justify-content: center;
 align-items: center;

`;

export const ToDoList = styled.div`
background: #f1f1f1;
background-size:cover;
padding: 30px 20px;
border-radius: 8px;
box-shadow: 1px 4px 10px rgba(129, 32, 185, 0.8);

ul{
    padding: 0;
    margin-top: 60px ;
    
}

`;

export const Input = styled.input`
width: 342px;
height: 40px;
margin-right: 10px;
border-radius: 5px;
border: 2px solid rgba( 209 , 211 , 212 , 0.4);
text-align: center;


`;

export const Button = styled.button`
width: 130px;
height: 40px;
border-radius: 5px;
background: #8052EC;
border: none;
color: #fff;
transition: opacity 0.5s ease-in-out;
cursor: pointer;
font-weight: 900;
font-size:16px;

&:hover {
    opacity:0.9;
    transform: scale(1.1);
}

`;

export const ListItem = styled.div`
background: ${(props) => (props.$isFinished ? "#E8ff8b" : "#f1f1f1")};
width: 500px;
height: 60px;
border-radius: 5px;
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding: 0 10px;

li{
    list-style: none;
}


`;

export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`;

export const Check = styled(FcApproval)`
cursor: pointer;
`;

export const Empty = styled.h3`
text-align:center;
font-size:20px;
color: #8052ec;
font-weight:900;

`;
