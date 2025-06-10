import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RouteCard = ({title, info, distance, highlight}) => {
  return (
    <View style={[styles.routeCard, highlight && styles.highlightCard]}>
      <Text style={styles.routeTitle}>{title} 최적경로</Text>
      <View style={styles.infoRow}>
        <Text style={styles.routeInfoLarge}>{info}13분</Text>
        <Text style={styles.routeInfoSmall}>{distance}721m</Text>
      </View>
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
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    marginTop: 380,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  routeInfoLarge: {
    fontSize: 28,
    color: '#000000',
    fontWeight: 'bold',
  },
  routeInfoSmall: {
    fontSize: 15,
    color: '#555555',
    marginLeft: 6,
    marginBottom: 3,
  },
});

