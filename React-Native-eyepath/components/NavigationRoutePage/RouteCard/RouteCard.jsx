import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RouteCard = ({title, info, highlight}) => {
  return (
    
      <View style={[styles.routeCard, highlight && styles.highlightCard]}>
        <Text style={styles.routeTitle}>{title} 최적경로</Text>
        <Text style={styles.routeInfo}>{info}</Text>
      </View>
      
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  routeCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    height: 100,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    marginTop: 380,
    paddingLeft: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  highlightCard: {
    borderColor: '#9090FF',
    borderWidth: 2,
  },
  routeTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  routeInfo: {
    fontSize: 10,
    color: '#000000',
  },

});


