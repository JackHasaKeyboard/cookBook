import React from "react";
import {
	ScrollView,
	Text,
	View,
	TouchableOpacity
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

export default class extends React.Component {
	constructor() {
    super();

    this.state = {
      ln: [],
      recipe: [],

			currentUser: {}
    };
  }

	componentDidMount() {
		const
			root = firebase.database().ref(),
			ref = root.child("recipe");

		ref.on("value", snap => {
			this.setState( {
				recipe: snap.val()[this.props.navigation.getParam("k")]
			});
		});

		firebase.auth().onAuthStateChanged((user) => {
				this.setState({
					currentUser: user
				});
			}
		);
	}

  render() {
		let recipe = this.state.recipe;

    return (
			<ScrollView
				style={style.cont}
			>
				<View
					style={style.cont}
				>
					{
						recipe.email == this.state.currentUser.email && (
							<View
								style={style.cont}
							>
								<TouchableOpacity
									onPress={
										() => {
											this.props.navigation.navigate(
												"Edit",
												{
													k: this.props.navigation.getParam("k")
												}
											)
										}
									}
								>
									<Text>Edit</Text>
								</TouchableOpacity>
							</View>
						)
					}

					<TouchableOpacity
						onPress={
							() => {
								this.props.navigation.navigate(
									"Profile"
								)
							}
						}
					>
						<Text
							style={style.h1}
						>{recipe.title}</Text>
					</TouchableOpacity>
					<Text
						style={style.h2}
					>{recipe.author}</Text>
				</View>

				{
					recipe.note != "" && (
						<View
							style={style.cont}
						>
							<Text
								style={style.h3}
							>Notes</Text>

							<Text>{recipe.note}</Text>
						</View>
					)
				}

				<View
					style={style.cont}
				>
					<Text
						style={style.h3}
					>Ingredients</Text>

					{
						recipe.ingredient != undefined
							? recipe.ingredient.map((inst) => {
								return (
									<Text>{inst}</Text>
								);
							})
							: <Text>...</Text>
					}
				</View>

				<View
					style={style.cont}
				>
					<Text
						style={style.h3}
					>Steps</Text>

					{
						recipe.step != undefined
							? recipe.step.map((inst) => {
								return (
									<View>
										<Text>{inst.header}</Text>
										<Text>{inst.desc}</Text>
									</View>
								);
							})
							: <Text>...</Text>
					}
				</View>
			</ScrollView>
    );
  }
}
