import styled from 'styled-components';
import { useState } from 'react';
import ListHeaderBox from 'pages/Admin/components/RightSection/ListHeaderBox';
import ListContentsBox from 'pages/Admin/components/RightSection/ListContentsBox';
import UserModal from 'pages/Admin/components/Modal/UserModal';
import DatePickerComponent from 'pages/Admin/components/DatePickerComponent';
import PageNation from 'pages/Admin/components/PageNation';
import { PagenatedData } from 'types/type';

const AdminRightPageUser = ({ response }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [indexClicked, setIndexClicked] = useState('');
  const [allToggle, setAllToggle] = useState(false);
  const [banToggle, setBanToggle] = useState(false);
  const [modalId, setModalId] = useState<number | undefined>();

  const userData = response?.data;

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const onCurrentModal = id => {
    setModalId(id);
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentPost = userData => {
    if (userData) {
      return userData.slice(indexOfFirst, indexOfLast);
    }
  };
  const pagenatedData: PagenatedData[] = currentPost(userData);

  return (
    <AdminRightContainer>
      <AdminRightTitle>관리자 페이지</AdminRightTitle>
      <FilterBox>
        <CheckAll
          onClick={() => setAllToggle(prev => !prev)}
          className={allToggle ? 'active' : ''}
        />
        <CheckAllText>전체</CheckAllText>
        <ThreeBanned
          onClick={() => setBanToggle(prev => !prev)}
          className={banToggle ? 'active' : ''}
        />
        <ThreeBannedText>신고 3회 이상</ThreeBannedText>
      </FilterBox>
      <SortBox>
        <SortByDate>
          <DateTitle>
            <DateText>날짜</DateText>
          </DateTitle>
          <DateFilter>
            <DatePickerComponent />
          </DateFilter>
        </SortByDate>
        <SortByUser>
          <UserTitle>
            <TitleText>사용자 검색</TitleText>
          </UserTitle>
          <UserInput />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        <ListHeaderBox />
        <ListContentsSection>
          {userData &&
            pagenatedData.map(data => (
              <ListContentsBox
                data={data}
                key={data.id}
                openModal={openModal}
                onCurrentModal={onCurrentModal}
              />
            ))}
          {userData && (
            <PageNation
              perPage={perPage}
              totalPost={userData.length}
              setCurrentPage={setCurrentPage}
              setIndexClicked={setIndexClicked}
              indexClicked={indexClicked}
            />
          )}
          {isModalOpen && (
            <UserModal closeModal={closeModal} modalId={modalId} />
          )}
        </ListContentsSection>
      </UserListContainer>
    </AdminRightContainer>
  );
};

const AdminRightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AdminRightTitle = styled.div`
  padding-left: 1.25rem;
  padding-top: 1.25rem;
  margin-bottom: 1.25rem;
  height: 3.125rem;
  font-size: 1.875rem;
`;

const FilterBox = styled.div``;

const CheckAll = styled.button`
  margin-left: 1.25rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  background-color: transparent;

  &.active {
    background-color: yellow;
  }

  :hover {
    background-color: yellow;
  }
`;

const CheckAllText = styled.span`
  font-size: 1.25rem;
`;

const ThreeBanned = styled.button`
  margin-left: 1.25rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  background-color: transparent;

  &.active {
    background-color: yellow;
  }

  :hover {
    background-color: yellow;
  }
`;

const ThreeBannedText = styled.span`
  font-size: 1.25rem;
`;

const SortBox = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  margin-left : 1.25rem;
  margin-top: 1.25rem;
`;

const SortByDate = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 18.75rem;
`;

const DateTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 5rem;
  height: 1.875rem;
  background-color: ${props => props.theme.colors.gray};
`;

const DateText = styled.span``;

const DateFilter = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

const SortByUser = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 18.75rem;
`;

const UserTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 5rem;
  background-color: ${props => props.theme.colors.gray};
`;

const TitleText = styled.span``;

const UserInput = styled.input``;

const UserListContainer = styled.div``;

const ListContentsSection = styled.div``;

export default AdminRightPageUser;
