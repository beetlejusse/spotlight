import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/theme'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className={`flex-1 ${COLORS.background}`}>
      <Link href="/(tabs)">
        <Text>Feed Screen</Text>
      </Link>
    </View>
  )
}