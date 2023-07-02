import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Online Education</Text>
      <Button title='Click to go to other tabs!' color="#ffdd80" onPress={() => navigation.navigate ('AboutUs')}></Button>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.textStyle}>About Page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Curriculum')}>
        <Text style={styles.textStyle}>Curriculum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Results')}>
        <Text style={styles.textStyle}>Results</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});