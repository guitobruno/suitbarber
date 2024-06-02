import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity  } from 'react-native';

const ScheduleHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Agenda</Text>
    </View>
  );
};

const Catalog = () => {
  return (
    <View style={styles.container}>
      <ScheduleHeader />
      <Text style={styles.titleContent}>Cortes Agendados</Text>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textDate}>08/05/2024</Text>
          <Text style={styles.textDate}>Undercut</Text>
          <Text style={styles.textDate}>08:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textDate}>08/06/2024</Text>
          <Text style={styles.textDate}>Militar</Text>
          <Text style={styles.textDate}>14:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textDate}>14/06/2024</Text>
          <Text style={styles.textDate}>Social</Text>
          <Text style={styles.textDate}>12:00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//hooks react native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#808080',
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    top: 20,
  },
  titleContent:{
    fontWeight:'bold',
    fontSize:20,
    color:'7d8392',
    marginBottom:20,
    marginTop:20,
  },
  buttonContainer:{
    height:55,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:15,
    borderRadius:10,
    backgroundColor:'#808080',
    marginBottom:15,
  },
  textDate:{
      textTransform:'uppercase',
      color:'black',
      fontWeight:'bold',
      fontSize:14,
  }
})



export default Catalog;