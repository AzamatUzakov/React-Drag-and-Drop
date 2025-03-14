import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { TaskCard } from "./Task";


interface ColumnProps {
	title: string;
	id: number;
	tasks: taskType[];
	setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
}
type taskType = {
	id: number,
	title: string,
	columnId: number

}



export const Column: React.FC<ColumnProps> = ({ title, id, tasks, setTasks }) => {

	return (
		<Card
			onDragOver={(e) => e.preventDefault()}
			//			onDragEnter={(e) => }
			// onDragLeave={}
			onDrop={(e: React.DragEvent<HTMLDivElement>) => {
				const data = e.dataTransfer.getData("text/plain")

				if (!data) {
					console.log("erorr");
					return
				}


				const resultTranfer = JSON.parse(data)
				setTasks((prev) =>
					prev.map((task) =>
						task.id === resultTranfer.id ? { ...task, columnId: id } : task
					)
				);

				console.log("findTask", resultTranfer);

			}}
			className="w-[100%] flex flex-col bg-gray-100 shadow-md rounded-2xl overflow-hidden">


			<div className="p-4 bg-gray-200 flex justify-between items-center">
				<h2 className="text-lg font-semibold">{title}</h2>
			</div>


			<ScrollArea className="flex-1 p-4 space-y-3">

				{tasks.filter((task) => task.columnId === id)
					.map((task) => (
						<TaskCard key={task.id} id={task.id} title={task.title} columnId={task.columnId} />
					))}

			</ScrollArea>
			<div className="p-4 bg-gray-200 flex justify-center">
				<Button variant="outline" className="w-full">
					Create new task
				</Button>
			</div>
		</Card>
	);
};
