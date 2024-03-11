import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Activity')}
          style={styles.iconWrapper}
        >
          <Icon name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.iconWrapper}
        >
          <Icon name="message" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginLeft: 10, // Adjust the margin as needed
  },
});

export default CustomHeader;
