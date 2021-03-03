import React, { useContext } from 'react';
import { Collapse } from 'antd';
import MenuContext from '../../../context/MenuContext';
import {
  SidebarContainer,
  StyledPanelHeader,
  StyledPanelContent,
  StyledLink,
} from './styled/desktop';

const Sidebar = () => {
  const {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  } = useContext(MenuContext);

  return (
    <SidebarContainer>
      {categories && menu && (
        <Collapse
          ghost
          accordion
          onChange={(eventId) =>
            setSelectedCategory(Number.parseInt(eventId, 10))}
        >
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
                  menu[categotyName].map((brand) => (
                    <StyledPanelContent
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                    >
                      <StyledLink
                        to={`/${brand.name.toUpperCase()}`}
                        selected={selectedBrand === brand.id}
                      >
                        {brand.name.toUpperCase()}
                      </StyledLink>
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
