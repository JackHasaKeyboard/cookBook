import React from "react";
import {
	SafeAreaView,
	ScrollView
} from "react-native";
import {
	createStackNavigator,
	createAppContainer
} from "react-navigation";

import Head from "./head";
import Index from "./index";
import Recipe from "./recipe";

import auth from "./auth";

import style from "./style";

const
	Nav = createStackNavigator(
		{
			Index: Index,
			Recipe: Recipe
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
