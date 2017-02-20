import React from "react";
import {
	Link,
	List,
	ListItem
} from "spectacle";

const LinkList = ({ links }) => (
	<List style={{ listStylePosition: "inherit" }}>
		{links.map(({ href, title }) => (
			<ListItem key={href}>
				<Link textColor="tertiary" href={href}>{title}</Link>
			</ListItem>
		))}
	</List>
);

export default LinkList;
