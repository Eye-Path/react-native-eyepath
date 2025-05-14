import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import MainTitle from '../components/MainPage/MainTitle/MainTitle';
import TextInputSection from '../components/MainPage/TextInputSection/TextInputSection';
import StartCard from '../components/MainPage/StartCard/StartCard';
import NavigationSection from '../components/MainPage/NavigationSection/NavigationSection';
import RecentDestination from '../components/MainPage/RecentDestination/RecentDestination';

const MainPage = () => {
  return (
    <ScrollView style={styles.background}>
        <MainTitle />
        <TextInputSection />
        <StartCard />
        <NavigationSection/>
        <RecentDestination /> 
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({

    background: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#F8F7FF',
        paddingTop: 50,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 100,
    }
})