import React from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
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

			email: "",
			author: "",

			title: "",
			ingredient: [],
			note: "",
			step: [],

			err: null
    };
  }

	componentDidMount() {
    this.setState({
			user: this.props.navigation.getParam("user"),

			email: this.props.navigation.getParam("user").email,
			author: this.props.navigation.getParam("user").displayName,

			title: "",
			ingredient: [
				""
			],
			note: "",
			step: [
				{
					header: "",
					desc: ""
				}
			],

			err: null
    });
	}

	post = () => {
		let k = firebase.database().ref().child("recipe").push(
			{
				"email": this.state.email,
				"author": this.state.author,

				"title": this.state.title,
				"ingredient": this.state.ingredient,
				"note": this.state.note,
				"step": this.state.step
			}
		).key;

		this.props.navigation.navigate(
			"Recipe",
			{
				k: k
			}
		);
	}

  render() {
		return (
			<ScrollView
				style={style.cont}
			>
				<Text
					style={style.h3}
				>Title</Text>

				<TextInput
					placeholder="Title"
					autoCapitalize="none"
					onChangeText={
						title => this.setState({
							title: title
						})
					}
					value={
						this.state.title
					}
					style={
						style.field
					}
				/>

				<Text
					style={style.h3}
				>
					Notes
				</Text>

				<TextInput
					placeholder="Notes"
					autoCapitalize="none"
					onChangeText={
						note => this.setState({
							note: note
						})
					}
					value={
						this.state.note
					}
					style={
						style.field
					}
				/>

				<View
					style={style.cont}
				>
					<Text
						style={style.h3}
					>
						Ingredients
					</Text>

					<TouchableOpacity
						onPress={
							() => {
								this.setState({
									ingredient: [
										...this.state.ingredient,
										""
									]
								});
							}
						}
					>
						<Text>
							New
						</Text>
					</TouchableOpacity>

					<View>
						{
							this.state.ingredient.map((val, i) => {
								return (
									<TextInput
										key={i}
										placeholder="Ingredient"
										style={
											style.field
										}
										onChangeText={
											(txt) => {
												this.state.ingredient[i] = txt;
											}
										}
									>
										{
											val.desc
										}
									</TextInput>
								)
							})
						}
					</View>
				</View>

				<View
					style={style.cont}
				>
					<Text
						style={style.h3}
					>
						Steps
					</Text>

					<TouchableOpacity
						onPress={
							() => {
								this.setState({
									step: [
										...this.state.step,
										{
											header: "",
											desc: ""
										}
									]
								});
							}
						}
					>
						<Text>
							New
						</Text>
					</TouchableOpacity>

					<View>
						{
							this.state.step.map((val, i) => {
								return (
									<View
										key={i}
									>
										<Text>{i}</Text>

										<TextInput
											placeholder="Header"
											onChangeText={
												(txt) => {
													this.state.step[i]["header"] = txt;
												}
											}
											style={style.field}
										>{val.header}</TextInput>

										<TextInput
											placeholder="Instructions"
											onChangeText={
												(txt) => {
													this.state.step[i]["desc"] = txt;
												}
											}
											style={style.field}
										>{val.desc}</TextInput>
									</View>
								)
							})
						}
					</View>
				</View>

				<View
					style={
						style.cont
					}
				>
					<TouchableOpacity
						onPress={
							this.post
						}
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
