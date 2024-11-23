import React, { FC, useState } from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'To Do List',
    key: '/',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Second Page',
    key: '/secondPage',
    icon: <SettingOutlined />
  }
];

export const TopNavigator: FC = props => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key);
  };
  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};
