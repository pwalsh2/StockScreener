import React from "react";

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;
	return (
		<div>
			<span>
				<input
					value={filterValue || ""}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</span>
		</div>
	);
};
