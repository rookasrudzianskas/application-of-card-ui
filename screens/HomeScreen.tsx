import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View className="flex-1 bg-black pt-16 px-5">
      <View className="flex-row items-center w-full justify-between">
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons name="tree" size={24} color={'white'} />
        </TouchableOpacity>
        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign name="piechart" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <MaterialIcons name="group-add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-4xl font-bold text-white mt-5 mb-3">Home</Text>
      <View className="flex-row items-center bg-gray-900/80 rounded-md space-x-3 px-3">
        <Octicons name="search" size={20} color="gray" />
        <TextInput className="h-9 text-gray-300" placeholder="Search for anything in the app" />
      </View>
      <View className="mt-5">
        <Text className="text-lg font-semibold text-white">Awaiting Events</Text>
        <View>
          <View>
            <View>
              <Ionicons name="ios-airplane-outline" size={24} color="white" />
            </View>
            <View>
              <Text>Open Savings Account!</Text>
              <Text>Make a Top Up</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
