import React from "react";
import {
	View,
	TouchableOpacity,
	Text
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

if (!firebase.apps.length) {
  firebase.initializeApp(
		auth.firebase
  );
}

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navigation: {}
		};
	}

	componentDidMount() {
		this.setState({
			navigation: this.props.navigation
		});

		firebase.auth().onAuthStateChanged((user) => {
				this.setState({
					user: user
				});
			}
		);
	}

	render() {
		if (this.state.user) {
			return (
				<View
					style={style.cont}
				>
					<TouchableOpacity
						onPress={
							() => {
								this.props.navigation.navigate(
									"Profile"
								)
							}
						}
					>
						<Text>{this.state.user.email}</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={
							() => {
								firebase
									.auth()
									.signOut()
									.then(() => {
										() => this.props.navigation.navigate(
											"Index"
										)
									}
								);
							}
						}
					>
						<Text>Log Out</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return (
				<View
					style={style.cont}
				>
					<TouchableOpacity
						onPress={
							() => {
								this.props.navigation.navigate(
									"SignUp"
								)
							}
						}
					>
						<Text>Sign Up</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={
							() => {
								this.props.navigation.navigate(
									"LogIn"
								)
							}
						}
					>
						<Text>Log In</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}
}
