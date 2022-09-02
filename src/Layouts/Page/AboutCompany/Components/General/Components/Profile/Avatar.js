import UploadAvatarIcon from '../../../../../../../Icons/UploadAvatarIcon';
import Clickable from '../../../../../../../Components/Clickable';
import styled from 'styled-components';

const UploadButton = styled.div`
    position: absolute;
    box-sizing:border-box;
    right: 0px;
    top:100%;
    transform: translateY(-100%);
`;
const WrapperAvatar = styled.div`
    position:relative;
    width: 96px;
`;

function Avatar() {
    return (
        <WrapperAvatar>
            <img src={require('../../../../../../../Images/AppAvatar.png')}></img>
            <Clickable>
                <UploadButton>
                    <UploadAvatarIcon/>
                </UploadButton>
            </Clickable>
        </WrapperAvatar>
    );
}

export default Avatar;