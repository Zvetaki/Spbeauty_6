import styled from "styled-components";
function UploadAvatarIcon() {
    const Circle = styled.svg`
        width: 36px;
        height: 36px;
        border-radius: 18px;
        background-color: #3B82F6;
        &:hover {
            background-color: #0EA5E9;
        }
    `;
    return (
        <Circle xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 13C10.8954 13 10 13.8954 10 15V23C10 24.1046 10.8954 25 12 25H24C25.1046 25 26 24.1046 26 23V15C26 13.8954 25.1046 13 24 13H22.4142C22.149 13 21.8946 12.8946 21.7071 12.7071L20.5858 11.5858C20.2107 11.2107 19.702 11 19.1716 11H16.8284C16.298 11 15.7893 11.2107 15.4142 11.5858L14.2929 12.7071C14.1054 12.8946 13.851 13 13.5858 13H12ZM18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" fill="white"/>
        </Circle>
    );
  }
  
  export default UploadAvatarIcon;