import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, Button } from 'react-native-paper';

const dannyel = [
  require('./assets/dannyel.jpeg'),
  require('./assets/dannyel2.jpeg'),
];
const ana = [
  require('./assets/ana1.jpeg'),
  require('./assets/ana2.jpeg'),
];
const testa = [
  require('./assets/testa1.jpg'),
  require('./assets/testa2.jpg'),
];

const EquipHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Equipe</Text>
    </View>
  );
};

const App = () => {
  const { width } = Dimensions.get('window');

  const handleWhatsAppPress = () => {
    Linking.openURL('whatsapp://send?phone=61998682345');
  };

  return (
    <View style={styles.container}>
      <EquipHeader />
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.carouselContainer}>
              <Carousel
                data={dannyel}
                renderItem={renderCarouselItem}
                sliderWidth={width}
                itemWidth={width - 20} 
                layout="default"
              />
            </View>
            <Text style={styles.cardTitle}>Dannyel</Text>
            <Text style={styles.cardContent}>Barbeiro a mais de x anos bastante experiente  no ramo, sempre preza pelo respeito e excelencia em seus cortes deixando sempre uma grande satisfacao ao cliente</Text>
            <Card.Actions>
              <TouchableOpacity onPress={handleWhatsAppPress}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </Card.Actions>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.carouselContainer}>
              <Carousel
                data={ana}
                renderItem={renderCarouselItem}
                sliderWidth={width}
                itemWidth={width - 20} 
                layout="default"
              />
            </View>
            <Text style={styles.cardTitle}>Anna</Text>
            <Text style={styles.cardContent}>Barbeira a mais de x anos bastante experiente  no ramo, sempre preza pelo respeito e excelencia em seus cortes deixando sempre uma grande satisfacao ao cliente</Text>
            <Card.Actions>
              <TouchableOpacity onPress={handleWhatsAppPress}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </Card.Actions>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.carouselContainer}>
              <Carousel
                data={testa}
                renderItem={renderCarouselItem}
                sliderWidth={width}
                itemWidth={width - 20} 
                layout="default"
              />
            </View>
            <Text style={styles.cardTitle}>Testa</Text>
            <Text style={styles.cardContent}>Barbeiro a mais de x anos bastante experiente  no ramo, sempre preza pelo respeito e excelencia em seus cortes deixando sempre uma grande satisfacao ao cliente</Text>
            <Card.Actions>
              <TouchableOpacity onPress={handleWhatsAppPress}>
                <Button style={styles.button}>Agendar</Button>
              </TouchableOpacity>
            </Card.Actions>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const renderCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image source={item} style={styles.carouselImage} resizeMode="contain" />
  </View>
);

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
  carouselContainer: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
  },
  carouselItem: {
    backgroundColor: '#808080',
    overflow: 'hidden',
    height: 300,
    marginBottom: 15,
    width: '87%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 95,
  },
  card: {
    backgroundColor: '#808080', 
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    marginTop:15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
  },
  button:{
    fontSize: 17, 
    backgroundColor: 'white', 
  },
})

export default App;
