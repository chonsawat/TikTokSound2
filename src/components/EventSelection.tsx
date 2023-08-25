import React from "react";
import { EventRecordType, EventType } from "../stores/events/event.slice";
import { useAppSelector } from "../stores/store";
import { eventsSelector } from "../stores/events/event.selector";

type EventSelectionProps = {
	data: EventRecordType;
};

const EventSelection: React.FC<EventSelectionProps> = ({ data }) => {
	const events = useAppSelector(eventsSelector);
	return (
		<div>
			<select
				id="countries"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				defaultValue={data.event ? data.event : "Please select"}
			>
				{events?.map((item: EventType) => (
					<option key={item.label} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default EventSelection;
