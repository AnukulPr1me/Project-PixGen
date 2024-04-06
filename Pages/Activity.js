import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Activity = () => {
  const [selectButton, setSelectButton] = useState('people');
  const [content, setContent] = useState('people_content');


  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);

      axios
        .get(`http://localhost:3000/user/${userId}`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

    fetchUsers();
  }, []);
  
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
