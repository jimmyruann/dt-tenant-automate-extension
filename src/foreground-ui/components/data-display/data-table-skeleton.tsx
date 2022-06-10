import { Skeleton } from "@mantine/core";

export const DataTableSkeleton = () => {
	return (
		<>
			{new Array(5).fill(false).map((_, i) => (
				<tr key={i}>
					<td>
						<Skeleton height={8} mt={6} width='100%' radius='xl' />
					</td>
					<td>
						<Skeleton height={8} mt={6} width='100%' radius='xl' />
					</td>
				</tr>
			))}
		</>
	);
};
