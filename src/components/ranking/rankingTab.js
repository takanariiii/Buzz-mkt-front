import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'css/react-tabs.css';

export default function RankingTab(props) {
    return (
        <Tabs>
            <TabList>
                <Tab>今日</Tab>
                <Tab>月間</Tab>
                <Tab>年間</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
}
