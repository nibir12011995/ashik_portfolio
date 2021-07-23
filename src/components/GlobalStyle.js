import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #151922;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden !important;
}
body::-webkit-scrollbar {
        width: 0.25rem;
}
body::-webkit-scrollbar-track {
    background: white;
} 
body::-webkit-scrollbar-thumb {
    background: #fe4f4e;
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-top: 3rem;
    border: 3px solid #4687ff;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #4687ff;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#4687ff;
    }
    p{
        padding: 1rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
