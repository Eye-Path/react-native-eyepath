// components/RouteCard.jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RouteCard = ({title, info, highlight}) => {
  return (
    <View style={styles.cardRow}>
      <View style={[styles.routeCard, highlight && styles.highlightCard]}>
        <Text style={styles.routeTitle}>{title} 최적경로</Text>
        <View style={styles.infoRow}>
          <Text style={styles.routeInfo}>10분</Text>
          <Text style={styles.routeSemiInfo}>700m</Text>
        </View>
      </View>

      <View style={[styles.routeCard, highlight && styles.highlightCard]}>
        <Text style={styles.routeTitle}>{title} 최적경로</Text>
        <View style={styles.infoRow}>
          <Text style={styles.routeInfo}>11분</Text>
          <Text style={styles.routeSemiInfo}>720m</Text>
        </View>
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

  infoRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  routeInfo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 8,
  },
  routeSemiInfo: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 4,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
