import React, { Children } from 'react';
import classnames from 'classnames/bind';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabSectionElementProps } from 'components/TabSectionElement/TabSectionElement';
import styles from './TabSection.module.scss';

interface TabSectionElement {
  props: TabSectionElementProps;
}

interface TabSectionProps {
  children: TabSectionElement[];
}

const cx = classnames.bind(styles);

const TabSection = ({ children }: TabSectionProps) => (
  <Tabs
    selectedTabClassName={cx('TabSelected')}
    selectedTabPanelClassName={cx('TabPanelVisible')}
  >
    <TabList className={cx('TabList')}>
      {Children.map(children, child => (
        <Tab className={cx('Tab')}>{child.props.name}</Tab>
      ))}
    </TabList>

    {Children.map(children, child => (
      <TabPanel className={cx('TabPanel')}>
        {child.props.children}
      </TabPanel>
    ))}
  </Tabs>
);

export default TabSection;
