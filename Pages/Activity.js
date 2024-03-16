import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Activity = () => {
  const [selectButton, setSelectButton] = useState('people');
  const [content, setContent] = useState('people_content');
  
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
        Activity
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={[
            {
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            },
            selectButton === 'people' ? { backgroundColor: 'black' } : null,
          ]}
          onPress={() => setSelectButton('people')}>
          <Text style={[{ textAlign: 'center', fontWeight: 'bold' }, selectButton === 'people' ? { color: 'white' } : { color: 'black' }]}>
            People
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Activity;
const styles = StyleSheet.create({});
