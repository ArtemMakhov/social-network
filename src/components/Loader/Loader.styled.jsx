import styled from "styled-components";

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 10px solid #80c4654c;
  border-radius: 50%;
  border-top-color: #42db1c;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;


@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`
