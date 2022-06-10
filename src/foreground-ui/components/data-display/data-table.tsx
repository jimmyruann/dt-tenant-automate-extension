import { Paper, Table } from "@mantine/core";
import { mergeNestedObjects } from "../../../shared/utils";
import { DataTableSkeleton } from "./data-table-skeleton";

interface DataTableProps {
	colName: [string, string];
	data: any[];
	isLoading?: boolean;
}

export const DataTable = ({ colName, data, isLoading }: DataTableProps) => {
	return (
		<Paper>
			<Table highlightOnHover>
				<thead>
					<tr>
						<th>{colName[0]}</th>
						<th>{colName[1]}</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<DataTableSkeleton />
					) : (
						Object.entries(mergeNestedObjects(data)).map(([key, value]) => (
							<tr key={key}>
								<td>{key}</td>
								<td>{value === undefined ? "Null" : value}</td>
							</tr>
						))
					)}
				</tbody>
			</Table>
		</Paper>
	);
};

export default DataTable;
