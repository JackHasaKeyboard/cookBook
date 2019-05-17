import React from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity
} from "react-native";

import * as firebase from "firebase";

import style from "./style";

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: ""
		};
	}

	handle = () => {
		firebase
      .auth()
      .createUserWithEmailAndPassword(
				this.state.email,
				this.state.password
			)
			.then(() => {
				firebase
					.auth()
					.signInWithEmailAndPassword(
						this.state.email,
						this.state.password
					).then(() => {
						firebase.auth().currentUser.updateProfile({
							displayName: this.state.name
						}).then(() => {
							this.props.navigation.navigate(
								"Profile",
								{
									user: firebase.auth().currentUser
								}
							);
						});
					});
			})
      .catch((err) => this.setState({
				err: err.message
			}));
	}

	render() {
		return (
			<ScrollView
				style={style.cont}
			>
				{
					this.state.err && (
						<View
							style={style.cont}
						>
							<Text
								style={style.err}
							>
								{this.state.err}
							</Text>
						</View>
					)
      	}

				<View
					style={style.cont}
				>
					<Text>Sign Up</Text>
				</View>

				<View>
					<TextInput
						style={style.field}
						placeholder="Name"
						autoCapitalize="none"
						value={this.state.name}
						onChangeText={
							(name) => this.setState({
								name
							})
						}
					/>

					<TextInput
						style={style.field}
						placeholder="E-mail"
						autoCapitalize="none"
						value={this.state.email}
						onChangeText={
							(email) => this.setState({
								email
							})
						}
					/>

					<TextInput
						style={style.field}
						secureTextEntry
						placeholder="Password"
						autoCapitalize="none"
						value={this.state.password}
						onChangeText={
							(password) => this.setState({
								password
							})
						}
					/>
				</View>

				<View
					style={style.cont}
				>
					<TouchableOpacity
						onPress={this.handle}
					>
						<Text>
							Enter
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
