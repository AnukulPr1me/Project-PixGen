import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Activity = () => {
  const [selectButton, setSelectButton] = useState('people');
  const [content, setContent] = useState('people_content');
  const handleButtonClick = (buttonName) => {
    setSelectButton(buttonName);
  };
  
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
