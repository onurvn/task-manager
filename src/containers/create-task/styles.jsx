import styled from "styled-components";

export const CreateTaskContainer = styled.section`
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
     }

   input,
   textarea {
       background-color: #182b4220;
        border: 1px solid #1d2e3f;
        color: #e2ebf8;
        resize: none;
        padding: 7px;
        outline: none;
    }

    button{
        background-color: #0e325f;
    }
`