import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Music, Sparkles, MapPin } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}
            style={styles.heroOverlay}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Crafting Unforgettable Moments</Text>
            <Text style={styles.heroSubtitle}>Find the perfect venue for your special day.</Text>

            <Link href="/(tabs)/explore" asChild>
              <TouchableOpacity style={styles.heroButton}>
                <Text style={styles.heroButtonText}>Book Now</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose OBBS?</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <View style={styles.iconContainer}>
                <Calendar color="#d97706" size={24} />
              </View>
              <Text style={styles.featureTitle}>Easy Booking</Text>
            </View>
            <View style={styles.featureCard}>
              <View style={styles.iconContainer}>
                <Sparkles color="#d97706" size={24} />
              </View>
              <Text style={styles.featureTitle}>Premium Venues</Text>
            </View>
            <View style={styles.featureCard}>
              <View style={styles.iconContainer}>
                <Music color="#d97706" size={24} />
              </View>
              <Text style={styles.featureTitle}>Services</Text>
            </View>
          </View>
        </View>

        {/* Popular Venues (Placeholder) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Venues</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.venueCard}>
                <Image
                  source={{ uri: `https://images.unsplash.com/photo-${item === 1 ? '1519225463359-43a253970b4c' : item === 2 ? '1529636798413-e07cc5d1e4d1' : '1505236858274-0942ecc947bc'}?q=80&w=500` }}
                  style={styles.venueImage}
                />
                <View style={styles.venueInfo}>
                  <Text style={styles.venueName}>Grand Ballroom {item}</Text>
                  <View style={styles.venueMeta}>
                    <MapPin size={14} color="#666" />
                    <Text style={styles.venueLocation}>Downtown City</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark theme background
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroContainer: {
    height: 400,
    width: width,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  heroContent: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#e2e8f0',
    fontSize: 16,
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: '#d97706',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  iconContainer: {
    marginBottom: 8,
  },
  featureTitle: {
    color: '#e2e8f0',
    fontSize: 12,
    fontWeight: '600',
  },
  horizontalScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  venueCard: {
    width: 250,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  venueImage: {
    width: '100%',
    height: 150,
  },
  venueInfo: {
    padding: 12,
  },
  venueName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  venueMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  venueLocation: {
    color: '#94a3b8',
    fontSize: 12,
  },
});
