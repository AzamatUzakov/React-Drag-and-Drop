import { Column } from "@/components/custom/Column";
import React, { useState } from "react";

type boardType = {
	id: number,
	title: string
	columnId: number
}

type taskType = {
	id: number,
	title: string,
	columnId: number

}
const boardArr: boardType[] = [
	{ id: 1, title: "Почистить обувь", columnId: 1 },
	{ id: 2, title: "Сделать уроки", columnId: 2 },
	{ id: 3, title: "Убраться в комнате", columnId: 3 }
]
const task = [
	{ id: 1, title: "Почистить обувь", columnId: 1 },
	{ id: 2, title: "Сделать уроки", columnId: 2 },
	{ id: 3, title: "Убраться в комнате", columnId: 3 }
]
const Home: React.FC = () => {
	const [tasks, setTasks] = useState<taskType[]>(task);

	const [board] = useState<boardType[]>(boardArr)

	return (
		<section className="flex items-start justify-start gap-2">
			{board.map((col) => (
				<Column  key={col.id} title={col.title} id={col.id} tasks={tasks} setTasks={setTasks} />
			))}

		</section>
	);
};

export default Home;
