import React, { useCallback } from "react";
import { Grid, Stack, Button } from "@sanity/ui";
import { AddIcon } from "@sanity/icons";
import { randomKey } from "@sanity/util/content";
import { insert, setIfMissing, useClient } from "sanity";
import * as style from "./LimitedArray.module.css";
export const LimitedArray = (props) => {
	const { onChange, schemaType, members } = props;

	const getValidation = schemaType.validation.map((rule) =>
		rule._rules.find((o) => o.flag === "max")
	);
	const maxLength = getValidation[0]?.constraint || Infinity;
	const arrayValidLength = members?.length < maxLength;

	const client = useClient({ apiVersion: `2023-04-01` });

	const handleClick = useCallback(
		async (event) => {
			const type = event.currentTarget.value;
			const arrayItem = {
				_key: randomKey(12),
				_type: type,
			};
			onChange([setIfMissing([]), insert([arrayItem], "after", [-1])]);
		},
		[onChange, client]
    );
    
	return (
		<Stack space={3}>
			<div className={style.container}>
				{props.renderDefault(props)}
				{arrayValidLength && (
					<Grid columns={schemaType.of.length} gap={1}>
						{schemaType.of.map((item) => (
							<Button
								key={item.name}
								value={item.name}
								icon={item.icon || AddIcon}
								text={item.title}
								mode={"ghost"}
								onClick={handleClick}
							/>
						))}
					</Grid>
				)}
			</div>
		</Stack>
	);
};
