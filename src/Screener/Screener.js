import MOCK_DATA_SCREENER from "../components/MOCK_DATA_SCREENER.json";
import { FilteringTable } from "../components/FilteringTable";
import { useState } from "react";
export const Screener = () => {
	const [data, setData] = useState(MOCK_DATA_SCREENER);
	return (
		<>
			<FilteringTable data={data} />
		</>
	);
};

export default Screener;
