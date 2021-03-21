import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse } from 'antd';
import MenuContext from '../../../context/MenuContext';
import {
  SidebarContainer,
  StyledPanelHomeHeader,
  StyledPanelHeader,
  StyledPanelContent,
} from './styled/desktop';

const Sidebar = () => {
  const {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  } = useContext(MenuContext);
  const history = useHistory();
  return (
    <SidebarContainer>
      {categories && menu && (
        <Collapse
          ghost
          accordion
          onChange={(eventId) => {
            if (Number.parseInt(eventId, 10) !== 0)
              setSelectedCategory(Number.parseInt(eventId, 10));
            else {
              // HOME 버튼 클릭시 처리
              setSelectedCategory(0);
              setSelectedSubCategory(0);
              history.push('/');
            }
          }}
        >
          <StyledPanelHomeHeader
            header="HOME"
            key={0}
            selected={selectedCategory === 0}
            showArrow={false}
          />
          {Object.entries(categories).map((categoryArr) => {
            const category = categoryArr[1];
            const categotyName = category.name;
            const categotyId = category.id;
            return (
              <StyledPanelHeader
                header={categotyName.toUpperCase()}
                key={categotyId}
                selected={selectedCategory === categotyId}
                showArrow={false}
              >
                {menu[categotyName] &&
                  menu[categotyName].map((subCategory) => (
                    <StyledPanelContent
                      key={subCategory.id}
                      selected={selectedSubCategory === subCategory.id}
                      onClick={() => {
                        setSelectedSubCategory(subCategory.id);
                        history.push(`/${subCategory.name.toUpperCase()}`);
                      }}
                    >
                      {subCategory.name.toUpperCase()}
                    </StyledPanelContent>
                  ))}
              </StyledPanelHeader>
            );
          })}
        </Collapse>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
