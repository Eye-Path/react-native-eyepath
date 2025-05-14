import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const ServerTestPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://223.130.147.155:8000/route')
      .then(res => setData(res.data))
      .catch(err => setData([{ error: err.message }]));
  }, []);

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