import React from "react";
import {
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Text
} from "react-native";
import {
	createStackNavigator,
	createAppContainer
} from "react-navigation";

import Head from "./head";
import Index from "./index";
import Recipe from "./recipe";
import Profile from "./profile";
import SignUp from "./signUp";
import LogIn from "./logIn";

import auth from "./auth";

import style from "./style";

const
	Nav = createStackNavigator(
		{
			Index: Index,
			Recipe: Recipe,
			Profile: Profile,
			SignUp: SignUp,
			LogIn: LogIn
		}, {}
	),

	Cont = createAppContainer(Nav);

export default class App extends React.Component {
  render() {
    return (
			<SafeAreaView
				style={style.cover}
			>
				<SafeAreaView
					style={style.page}
				>
					<Head />

					<Cont />
				</SafeAreaView>
			</SafeAreaView>
    );
  }
}
