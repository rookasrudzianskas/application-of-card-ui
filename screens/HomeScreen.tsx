import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";

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
        <View className="mt-4 bg-gray-900 space-y-4 p-3 rounded-lg">
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-red-600 rounded-full items-center justify-center">
              <Ionicons name="ios-airplane-outline" size={30} color="#F87171" className="text-red-500" />
            </View>
            <View className="bg-gray-900/80">
              <Text className="text-[15px] font-[500]">Open Savings Account!</Text>
              <Text className="text-gray-400 mb-1">Make a Top Up</Text>
            </View>
          </TouchableOpacity>
          <View className="border border-t border-[1px] mx-4"/>
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-yellow-600 rounded-full items-center justify-center">
              {/*<Ionicons name="ios-airplane-outline" size={30} color="#F87171" className="text-red-500" />*/}
              <FontAwesome5 name="piggy-bank" size={30} color="#FDE047" />
            </View>
            <View className="bg-gray-900/80">
              <Text className="text-[15px] font-[500]">Open Savings Account!</Text>
              <Text className="text-gray-400 mb-1">Make a Top Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
