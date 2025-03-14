import { GripVertical } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";



interface TaskCardProps {
	id: number;
	title: string;
	columnId: number;

}

export const TaskCard: React.FC<TaskCardProps> = ({ title, id, columnId }) => {
	const [className, setClassName] = useState("");


	return (
		<Card
			draggable
			onDragStart={(e) => {
				setClassName("bg-gray-500");
				setTimeout(() => {
					setClassName("hidden");
				}, 0);

				const data = JSON.stringify({ id, title, columnId })
				e.dataTransfer.setData("text/plain", data)
				console.log("data", data);

			}}
			onDragEnd={() => {
				setClassName("flex");
			}}


			onDrop={() => {
				setClassName("flex")
			}}
			className={cn(
				"bg-white shadow-sm flex items-center p-3 gap-3 mt-5 cursor-grab",
				className
			)}
		>
			<GripVertical className="text-gray-400" size={16} />
			<CardContent className="p-0 flex-1">{title}</CardContent>
		</Card>
	);
};
