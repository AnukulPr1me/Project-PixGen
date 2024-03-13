import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({title, navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          onChangeText={setSearchText}
          value={searchText}
        />
        <TouchableOpacity
          onPress={() => {
            // Handle search action here, e.g., navigation.navigate('SearchResults', { searchText });
            setSearchText('');
          }}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.iconWrapper}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginLeft: 10, // Adjust the margin as needed
  },
});

export default CustomHeader;
