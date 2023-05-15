import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuState, setMenuState] = useState([]);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuToggle = (index) => {
    const updatedMenuState = [...menuState];
    updatedMenuState[index] = !updatedMenuState[index];
    setMenuState(updatedMenuState);
  };

  const menuItems = [
    { label: t('sidebar.home') },
    { label: t('sidebar.about'), subItems: [t('sidebar.sublink1'), t('sidebar.sublink2')] },
    { label: t('sidebar.services'), subItems: [t('sidebar.sublink1'), t('sidebar.sublink2')] },
    { label: t('sidebar.contact') },
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClick}>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className={menuState[index] ? 'open' : ''}>
            <button
              className="menu-toggle"
              onClick={() => handleMenuToggle(index)}
            >
              {item.label}
            </button>
            {item.subItems && (
              <ul className="sub-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
