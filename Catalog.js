import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const CatalogHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Catalogo</Text>
    </View>
  );
};

const LeftContent = props => <Avatar.Icon {...props} icon="tag" backgroundColor="white" color='#808080' />

const Catalog = () => {
  const handleAgendar = () => {
    const phoneNumber = '61998682345';
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <CatalogHeader />
      <ScrollView>
        <View>
          <Card style={styles.cardbox}>
            <Card.Title title="Degrade" left={LeftContent} titleStyle={styles.title} />
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/92/f6/2f/92f62fb704b1d986c142a8e832a6a46f.jpg' }} style={styles.img} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleAgendar}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cardbox}>
            <Card.Title title="Undercut" left={LeftContent} titleStyle={styles.title} />
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/d8/7c/c1/d87cc1af0826b036eb5f2fdaef409648.jpg' }} style={styles.img} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleAgendar}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cardbox}>
            <Card.Title title="Corte Social" left={LeftContent} titleStyle={styles.title} />
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/48/5e/f9/485ef9e212dfa95863f63600937b379e.jpg' }} style={styles.img} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleAgendar}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cardbox}>
            <Card.Title title="Corte Militar" left={LeftContent} titleStyle={styles.title} />
            <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/94/04/3e/94043e962a31f341684049bcff39e282.jpg' }} style={styles.img} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleAgendar}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

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
  cardbox: {
    margin: 10,
    backgroundColor: '#808080',
  },
  img: {
    padding: 10,
    height: 500,
    backgroundColor: '#808080',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 100,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default Catalog;
