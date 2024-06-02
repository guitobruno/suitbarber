import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  require('./assets/img1.jpg'), 
  require('./assets/img3.jpg'),
];

const WelcomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Suits Barbearia</Text>
    </View>
  );
};

const App = () => {
  const { width } = Dimensions.get('window');

  const handleWhatsAppPress = () => {
    Linking.openURL('whatsapp://send?phone=61998682345');
  };

  const handleLocationPress = () => {
    Linking.openURL('https://maps.app.goo.gl/1LDeRCHupoNtk5cV6');
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <ScrollView>
        <View style={styles.carouselContainer}>
          <Carousel
            data={images}
            renderItem={renderCarouselItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Suits Vicente Pires</Text>
          </View>
          <View style={styles.textebox}>
            <TouchableOpacity onPress={handleLocationPress}>
              <Text style={styles.buttons}>Localização 📍</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWhatsAppPress}>
              <Text style={styles.buttons}>Contato 📞</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              A Suits Barbearia localizada no coracao de vicente pires esta pronta para lhe atender com o maior respeito e profissionalismo do mercado, voce ira se impressionar com os resultados, somos mais que uma barbearia, somos uma inovacao no mercado de beleza e estetica corporal.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const renderCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image source={item} style={styles.carouselImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
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
  title: {
    fontSize: 24,
    top: 10,
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    top: 1,
  },
  titlebox: {
    width: '100%',
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 40,
  },
  textebox: {
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    fontSize: 24,
    top: 0.1,
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
  },
  buttonapp: {
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    padding: 10,
    bottom: 170,
  },
  carouselContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    backgroundColor: '#808080',
    borderRadius: 0,
    overflow: 'hidden',
    padding: 0,
    height: 400,
  },
  carouselImage: {
    height: '100%',
    resizeMode: 'cover', 
    width: '100%',
  },
});

export default App;
