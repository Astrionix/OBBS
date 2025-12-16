import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utensils, Camera, Music, Wifi, Star, ArrowRight } from 'lucide-react-native';

const services = [
  {
    id: '1',
    title: 'Catering',
    description: 'Exquisite culinary delights for your guests. From traditional feasts to modern fusion cuisine.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Photography',
    description: 'Capture every precious moment with our professional photographers and videographers.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2522&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Entertainment',
    description: 'Live bands, DJs, and performers to keep the party alive all night long.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Smart Venues',
    description: 'High-speed WiFi, smart lighting, and state-of-the-art audio visual equipment.',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1505236858274-0942ecc947bc?q=80&w=2570&auto=format&fit=crop',
    rating: 5.0,
  },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>Everything you need for a perfect event</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} activeOpacity={0.9} style={styles.card}>
            <Image source={{ uri: service.image }} style={styles.image} />
            <View style={styles.cardOverlay} />

            <View style={styles.cardContent}>
              <View style={styles.badges}>
                <View style={styles.iconBadge}>
                  <service.icon size={16} color="#ffffff" />
                </View>
                <View style={styles.ratingBadge}>
                  <Star size={12} color="#fbbf24" fill="#fbbf24" style={{ marginRight: 4 }} />
                  <Text style={styles.ratingText}>{service.rating}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.cardTitle}>{service.title}</Text>
                <Text style={styles.cardDescription} numberOfLines={2}>
                  {service.description}
                </Text>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.learnMore}>View Details</Text>
                <ArrowRight size={16} color="#d97706" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 20,
    backgroundColor: '#0f172a',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  content: {
    padding: 16,
    gap: 20,
    paddingBottom: 40,
  },
  card: {
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1e293b',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  cardContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'space-between',
  },
  badges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  learnMore: {
    color: '#d97706',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
