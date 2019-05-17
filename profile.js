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
			user: {},
			recipe: {},

			currentUser: {}
		};
	}

	componentDidMount() {
		const
			root = firebase.database().ref(),
			ref = root.child("recipe");

		this.setState(
			{
				user: this.props.navigation.getParam("user")
			},
			() => ref.orderByChild("email").equalTo(this.state.user.email).on("value", snap => {
				this.setState({
					recipe: snap.val()
				});
			})
		);

		firebase.auth().onAuthStateChanged((user) => {
				this.setState({
					currentUser: user
				});
			}
		);
	}

  render() {
    return (
			<ScrollView
				style={style.cont}
			>
				<View
					style={style.cont}
				>
					<Text>{this.state.user.displayName}</Text>
				</View>

				{
					this.state.user.email == this.state.currentUser.email && (
						<View
							style={style.cont}
						>
							<TouchableOpacity
								onPress={
									() => {
										this.props.navigation.navigate(
											"New",
											{
												user: this.state.currentUser
											}
										)
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
										style={style.btn}
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
