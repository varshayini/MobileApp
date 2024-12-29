import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount } from '../store';
import { styles } from '../styles/globalStyles';

export default function HomeScreen() {
  const { username } = useLocalSearchParams();
  const [workouts, setWorkouts] = useState([]);
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.clickCount);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      // Mock data
      setWorkouts([
        {
          id: '1',
          title: 'HIIT Workout',
          description: '30-minute high-intensity interval training',
          status: 'Beginner',
          image: require('../Image/image1.jpg'),
        },
        {
          id: '2',
          title: 'Yoga Flow',
          description: '45-minute flexibility and strength routine',
          status: 'Intermediate',
          image: require('../Image/image2.jpg'),
        },
        {
          id: '3',
          title: 'Strength Training',
          description: '60-minute full body workout',
          status: 'Advanced',
          image: require('../Image/image3.jpg'),
        },
        {
          id: '4',
          title: 'Outdoor Running',
          description: '60-minute structured running session for endurance',
          status: 'Intermediate',
          image: require('../Image/image3.jpg'),
        },
        {
          id: '5',
          title: 'Strength Training',
          description: '60-minute full body workout',
          status: 'Advanced',
          image: require('../Image/image3.jpg'),
        },
        {
          id: '6',
          title: 'Strength Training',
          description: '60-minute full body workout',
          status: 'Advanced',
          image: require('../Image/image3.jpg'),
        },
        {
          id: '7',
          title: 'Strength Training',
          description: '60-minute full body workout',
          status: 'Advanced',
          image: require('../Image/image3.jpg'),
        },
      ]);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const WorkoutCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => dispatch(incrementCount())}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusTag}>{item.status}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      </View>
      
      <FlatList
        data={workouts}
        renderItem={({ item }) => <WorkoutCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}