import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {
  AntDesign,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons
} from "@expo/vector-icons";

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
        <View className="mt-4 bg-gray-900/80 space-y-4 p-3 rounded-lg">
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-red-600 rounded-full items-center justify-center">
              <Ionicons name="ios-airplane-outline" size={30} color="#F87171" className="text-red-500" />
            </View>
            <View className="bg-gray-900/10">
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
            <View className="bg-gray-900/10">
              <Text className="text-[15px] font-[500]">Open Savings Account!</Text>
              <Text className="text-gray-400 mb-1">Make a Top Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="font-[600] mt-3 text-[15px] text-blue-500">See All...</Text>
        <View className="flex-row items-center justify-between">
          <Text className="font-[600] mt-[1px] text-[18px] text-white">Rokas</Text>
          <Ionicons name="chevron-down" size={18} color="white" />
        </View>

        <View className="mt-2 space-y-3">
          <View className="flex-row space-x-4">
            <TouchableOpacity activeOpacity={0.7} className="bg-gray-900/80 flex-1 rounded-md p-3">
              <Text className="font-[600] mt-[1px] text-[18px] text-white">Spent €0.00</Text>
              <View className="bg-yellow-500 w-2 h-2 rounded-full my-2"/>
              <Text className="text-sm text-gray-400">Buy something first</Text>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7} className="bg-purple-700/50 flex-1 rounded-md p-3">
              <View className="flex-row items-center bg-transparent space-x-1">
                <MaterialIcons name="account-balance-wallet" size={20} color="#6B41C5" />
                <Text className="font-[600] mt-[1px] text-[18px] text-white">Total Balance</Text>
              </View>
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[600] mt-[1px] text-[20px] text-white">
                  €4292.
                </Text>
                <Text className="text-xs mb-3">53</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row space-x-4">
            <TouchableOpacity activeOpacity={0.7} className="bg-gray-900/80 flex-1 rounded-md px-3 py-2">
              <Text className="font-[600] mt-[1px] mb-1 text-[18px] text-gray-500">Your Cards</Text>
              <View className="bg-gray-900/80 px-2 py-1 rounded-md w-12 items-center justify-center h-9">
                <Fontisto name="mastercard" size={20} color="#377EF6" />
              </View>
              <Text className="text-sm text-gray-400 mt-1">On the way</Text>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7} className="bg-orange-700/50 flex-1 rounded-md p-3">
              <View className="flex-row items-center bg-transparent space-x-1">
                <MaterialIcons name="account-balance-wallet" size={17} color="#EE7F39" />
                <Text className="font-[600] mt-[1px] text-[18px] text-white">Main</Text>
              </View>
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[600] mt-[1px] text-[20px] text-white">
                  €3433.
                </Text>
                <Text className="text-xs mb-3">60</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
