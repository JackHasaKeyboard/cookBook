import React from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: {},

			user: {}
		};
	}

	componentDidMount() {
		const
			root = firebase.database().ref(),
			ref = root.child("recipe");

		firebase.auth().onAuthStateChanged((user) => {
			this.setState(
					{
						user: firebase.auth().currentUser
					},
					() => {
						if (this.state.user) {
							ref.orderByChild("email").equalTo(this.state.user.email).on("value", snap => {
								this.setState({
									recipe: snap.val()
								});
							})
						}
					}
				);
			}
		);
	}

  render() {
    return (
			<ScrollView
				style={style.cont}
			>
				{
					this.state.user && (
						<View
							style={style.cont}
						>
							<Text
								style={style.h1}
							>{this.state.user.displayName}</Text>
						</View>
					)
				}

				{
					this.state.user && (
						<View
							style={style.cont}
						>
							<TouchableOpacity
								onPress={
									() => {
										this.props.navigation.navigate("New")
									}
								}
							>
								<Text>New</Text>
							</TouchableOpacity>
						</View>
					)
				}

				{
					this.state.recipe && (
						Object.keys(this.state.recipe).map((k) => {
							let inst = this.state.recipe[k];

							return (
								<TouchableOpacity
									key={k}
									onPress={
										() => {
											this.props.navigation.navigate(
												"Recipe",
												{
													k: k
												}
											)
										}
									}
								>
									<Text
										key={k}
										style={[
											style.btn,
											style.h2
										]}
									>{inst.title}</Text>
								</TouchableOpacity>
							);
						})
					)
				}
			</ScrollView>
    );
  }
}
