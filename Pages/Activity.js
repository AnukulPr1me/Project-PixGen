import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { UserType } from "../UserContext";



const Activity = () => {
  const [selectButton, setSelectButton] = useState('people');
  const [content, setContent] = useState('people_content');
  const [users, setUsers] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const handleButtonClick = (buttonName) => {
    setSelectButton(buttonName);
  };
  useEffect(() => { 
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);

      axios
        .get(`http://192.168.29.4:3000/user/${userId}`)
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
    <ScrollView style={{marginTop: 5}}>
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Activity</Text>
        <View style={{flexDirection:"row", alignItems:"center",gap:10,marginTop:12}}>

          <TouchableOpacity 
          onPress={() => handleButtonClick("people")}
            style={[{
              flex:1,
              paddingVertical:10,
              paddingHorizontal:20,
              backgroundColor: "white",
              borderColor: "#D0D0D0",
              borderRadius:10,
              borderWidth:0.7
            },
            selectButton==="people"? {backgroundColor: "black"} : null,
          ]}
          >
            <Text style={[{textAlign:"center", fontWeight:"bold"}, selectButton==="people" ? {color:"white"}: {color:"black"}]}>
              People
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[{
              flex:1,
              paddingVertical:10,
              paddingHorizontal:20,
              backgroundColor: "white",
              borderColor: "#D0D0D0",
              borderRadius:10,
              borderWidth:0.7
            },
            selectButton==="all"? {backgroundColor: "black"} : null,
          ]}
            onPress={() => handleButtonClick('all')}
          >
            <Text style={[{textAlign:"center", fontWeight:"bold"}, selectButton==="all" ? {color:"white"}: {color:"black"}]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{
              flex:1,
              paddingVertical:10,
              paddingHorizontal:20,
              backgroundColor: "white",
              borderColor: "#D0D0D0",
              borderRadius:10,
              borderWidth:0.7
            },
            selectButton==="request"? {backgroundColor: "black"} : null,
          ]}
            onPress={() => handleButtonClick('request')}
          >
            <Text style={[{textAlign:"center", fontWeight:"bold"}, selectButton==="request" ? {color:"white"}: {color:"black"}]}>
              Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({});
