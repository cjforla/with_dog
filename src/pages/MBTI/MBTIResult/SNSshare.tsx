import styled from 'styled-components/macro';
import TitlePaw from '../../../assets/svg/TitlePawPositoin.svg';
import Kakao from '../../../assets/svg/kakao-logo2.svg';
import Twitter from '../../../assets/svg/twitter.svg';
import FaceBook from '../../../assets/svg/Facebook_2.svg';

const SNSshare = () => {
  return (
    <SNSshareCotainer>
      <TitleContainer>
        <TitleIMG src={TitlePaw} />
        <TitleText>SNS 공유하기</TitleText>
        <TitleIMG src={TitlePaw} />
      </TitleContainer>
      <HorizontalAlign>
        <SNSImg src={Kakao} />
        <SNSImg src={Twitter} />
        <SNSImg src={FaceBook} />
      </HorizontalAlign>
    </SNSshareCotainer>
  );
};

const SNSshareCotainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-between')};
  margin-top: 9.375rem;
`;

const TitleContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 25rem;
`;

const TitleIMG = styled.img`
  width: 1.563rem;
`;

const TitleText = styled.span`
  text-align: center;
  color: #333333;
  font-size: 1.563rem;
`;

const HorizontalAlign = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 27.5rem;
  margin-top: 2.5rem;
`;

const SNSImg = styled.img`
  width: 4.375rem;
  &:hover {
    border: 0.313rem solid #7dccc7;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export default SNSshare;