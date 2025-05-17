import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const fetchRoutes = async () => {
  const res = await axios.get('https://eyepath.duckdns.org/route');
  return res.data;
}


const ServerTestPage = () => {
  
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['routes'],
    queryFn: fetchRoutes,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>서버 응답:</Text>
      <Text>{JSON.stringify(data)}</Text>
      {data.map((route, index ) => (
        <View key={index} style={styles.routeBox}>
          <Text>경로 설명: {route.description}</Text>
          <Text>출발지: ({route.start_y}, {route.start_x})</Text>
          <Text>도착지: ({route.end_y}, {route.end_x})</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 150,
    padding: 20,
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  routeBox: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});

export default ServerTestPage;