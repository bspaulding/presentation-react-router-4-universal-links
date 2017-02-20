// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	Code,
	CodePane,
	Deck,
	Heading,
	Image,
	Fill,
	Fit,
	Layout,
	ListItem,
	List,
	Quote,
	Slide,
	Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import LinkList from "./LinkList";
import BasicExample from "./BasicExample";
import AppearingText from "./AppearingText";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

function lines(start, end, text) {
	return text.split("\n").slice(start, end).join("\n");
}

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");

const images = {
	associatedDomain: require("../assets/associatedDomains.png")
};

preloader(images);

const theme = createTheme({
	primary: "#FDF6E3",
	secondary: "#586E75",
	tertiary: "#268BD2",
	quartenary: "#657b83"
}, {
	primary: "Montserrat",
	secondary: "Helvetica"
});
const bgColor = "#FDF6E3";
const color = "#268BD2";

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={[]} transitionDuration={500} theme={theme}>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Routes and Links
					</Heading>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						Using React Router v4 with React Native
					</Text>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>What is React Router?</Heading>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}>React interface to History API in browsers</Text>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}>Maps URLs to Components</Text>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>What's new?</Heading>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}>Multiple Routers / Packages</Text>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}><Code>&lt;Route&gt;</Code> Simplified</Text>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}><Code>&lt;Switch/&gt;</Code></Text>
					<Text textColor="quaternary" style={{ paddingTop: 20 }}>Native support!</Text>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Multiple Routers / Packages</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="javascript"
								source={lines(0, 6, require("!!raw-loader!./Routers.example"))}
								style={{ fontSize: 24 }}
							/>
						</Fit>
						<Fit>
							<CodePane
								lang="javascript"
								source={lines(6, 11, require("!!raw-loader!./Routers.example"))}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="javascript"
								source={lines(12, 16, require("!!raw-loader!./Routers.example"))}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps><Code>&lt;Route&gt;</Code> Simplified</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="jsx"
								source={require("!!raw-loader!./RouteExample.example").trim()}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} caps>Basic Example</Heading>
					<BasicExample/>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps><Code>&lt;Switch&gt;</Code></Heading>
					<Heading size={7}>Renders the first child that matches</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="jsx"
								source={lines(1, 6, require("!!raw-loader!./Switch.example").trim())}
								style={{ fontSize: 24 }}
							/>
						</Fit>
						<Fit>
							<CodePane
								lang="jsx"
								source={require("!!raw-loader!./Switch.example").trim()}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Native Support</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="jsx"
								source={require("!!raw-loader!./NativeSupport.example").trim()}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Implementing Deep Links</Heading>
					<AppearingText textColor="quaternary" padding={20}>Setup SSL on your site &#10003;</AppearingText>
					<AppearingText textColor="quaternary" padding={20}>Add <Code>apple-app-site-association</Code> file</AppearingText>
					<AppearingText textColor="quaternary" padding={20}>Add Associated Domain Entitlement</AppearingText>
					<AppearingText textColor="quaternary" padding={20}>Update AppDelegate</AppearingText>
					<AppearingText textColor="quaternary" padding={20}>Listen to <Code>Linking</Code> events</AppearingText>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary">ADD <Code>apple-app-site-association</Code> FILE</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="javascript"
								source={require("!!raw-loader!./apple-app-site-association.example").trim()}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
					<AppearingText textColor="secondary" textSize={24}>* do <em>not</em> add a <Code textSize={24}>.json</Code> file extension </AppearingText>
					<AppearingText fontSize={32} padding={12}>🤦</AppearingText >
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Add Associated Domain Entitlement</Heading>
					<Heading size={7} textColor="secondary">Xcode > Target > Capabilities</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fill>
							<Image src={images.associatedDomain} width={708} style={{
								borderColor: '#ccc',
								borderWidth: 1,
								borderStyle: 'solid'
							}}/>
						</Fill>
					</Layout>
					<Layout style={{ justifyContent: 'center' }}>
						<Code textColor="secondary">applinks:yourdomain.com</Code>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Update AppDelegate</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="objectivec"
								source={[
									lines(13, 17, require("!!raw-loader!../Demo/ios/Demo/AppDelegate.m")),
									lines(37, 46, require("!!raw-loader!../Demo/ios/Demo/AppDelegate.m"))
								].join("\n")}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Listen to <Code>Linking</Code> events</Heading>
					<Layout style={{ justifyContent: 'center' }}>
						<Fit>
							<CodePane
								lang="javascript"
								source={require("!!raw-loader!./Linking.example").trim()}
								style={{ fontSize: 24 }}
							/>
						</Fit>
					</Layout>
				</Slide>
				<Slide transition={["zoom", "fade"]} bgColor="secondary">
					<Heading textColor="primary" caps>Demo</Heading>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading size={6} textColor="secondary" caps>Resources</Heading>
					<LinkList links={[{
						href: "https://reacttraining.com/react-router/",
						title: "React Router"
					}, {
						href: "https://facebook.github.io/react-native/docs/linking.html",
						title: "Linking - React Native"
					}, {
						href: "https://developer.apple.com/videos/play/wwdc2015/509/",
						title: "Seamless Linking in Your App (WWDC '15)"
					}, {
						href: "https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html",
						title: "Support Universal Links"
					}, {
						href: "http://building.usebutton.com/debugging/ios/deep-linking/links/universal-links/2016/03/31/debugging-universal-links/",
						title: "Debugging Universal Links"
					}]}
					/>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading caps>Questions?</Heading>
				</Slide>
				<Slide transition={["slide"]}>
					<Heading caps>Thanks!</Heading>
					<Text textColor="secondary" style={{ paddingTop: 20 }}>github / bspaulding</Text>
					<Text textColor="secondary" style={{ paddingTop: 20 }}>twitter / bradspaulding</Text>
				</Slide>
			</Deck>
		);
	}
}
