//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import {AntDesign, Entypo, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import notificationsData from '../assets/data/taxdata';

const TaxScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="pt-16 px-5">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} className="flex-row items-center">
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text className="text-white text-lg font-[500]">Home</Text>
        </TouchableOpacity>
        <Text className="text-lg font-[500] text-white -ml-12">OAW Taxes</Text>
        <Feather name="settings" size={20} color="white" />
      </View>
      <View className="mt-5">
        <View className="flex-row items-center justify-center">
          <View className="items-center justify-center">
            <View className="w-28 h-28 rounded-full bg-[#232326] items-center justify-center border border-black border-[2px]">
              <AntDesign name="arrowdown" size={27} color="#377EF6" />
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[400] mt-[1px] text-[20px] text-white">
                  €00.
                </Text>
                <Text className="text-xs mb-3 text-white">00</Text>
              </View>
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Money Requested</Text>
          </View>
          <View className="items-center justify-center">
            <View className="w-32 h-32 rounded-full bg-yellow-500/50 items-center justify-center border border-black border-[2px]">
              <MaterialIcons name="show-chart" size={28} color="#67C992" />
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[500] mt-[1px] text-[24px] text-white">
                  €858.
                </Text>
                <Text className="text-xs mb-3 text-white">93</Text>
              </View>
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Current Balance</Text>
          </View>
          <View className="items-center justify-center">
            <View className="w-28 h-28 rounded-full bg-[#232326] items-center justify-center border border-black border-[2px]">
              <Ionicons name="ios-people" size={24} color="#377EF6" />
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Access</Text>
          </View>
        </View>
      </View>

      <View>
        <Text className="text-white font-[500] text-[17px] mt-6 mb-4">This Month</Text>
        <FlatList  data={notificationsData}
                   showsVerticalScrollIndicator={false}
                   renderItem={({item}) => (
                     <TouchableOpacity activeOpacity={0.7} className="flex-row items-center mb-4 border-y border-gray-600 py-2">
                       <View className="flex-row items-center flex-1">
                         <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} className="w-10 h-10" />
                         <View className="ml-5">
                           <Text className="text-white font-[500] text-[17px]">{item.subtitle}</Text>
                           <Text className="text-white text-sm text-gray-400 mt-2">{item.title}</Text>
                         </View>
                       </View>
                       <View className="flex-row bg-transparent mt-2">
                         <Text className="font-[500] mt-[1px] text-[22px] text-blue-500">
                           {item.price}.
                         </Text>
                         <Text className="text-xs mb-3 text-blue-500">{item.priceDecimals}</Text>
                       </View>
                     </TouchableOpacity>
                     )} />
      </View>
      <View className="absolute top-[840px] left-[90px] flex-row items-center space-x-10 bg-transparent">
        <TouchableOpacity activeOpacity={0.7} className="w-12 h-12 bg-orange-800 items-center justify-center border border-[#ee7f39] border-[2px] rounded-full">
          <AntDesign name="arrowup" size={35} color="#ee7f39" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-12 h-12 bg-blue-800 items-center justify-center border border-[#377EF6] border-[2px] rounded-full">
          <AntDesign name="arrowdown" size={35} color="#377EF6" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-12 h-12 bg-purple-800 items-center justify-center border border-[#6B41C5] border-[2px] rounded-full">
          <Entypo name="plus" size={35} color="#6B41C5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaxScreen;
