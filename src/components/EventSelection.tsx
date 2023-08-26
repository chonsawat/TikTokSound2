import { Select, initTE } from "tw-elements";
import React, { useEffect } from "react";
import { eventsSelector } from "../stores/events/event.selector";
import { EventRecordType, EventType } from "../stores/events/event.slice";
import { useAppSelector } from "../stores/store";
import { Gift } from "../types/gift";

type EventSelectionProps = {
	data: EventRecordType;
};

const EventSelection: React.FC<EventSelectionProps> = ({ data }) => {
	const events = useAppSelector(eventsSelector);

	useEffect(() => {
		initTE({ Select });
	}, []);
	
	return (
		<div className="rounded-full">
			<select
				data-te-select-init
				data-te-select-visible-options="8"
				data-te-select-option-height="52"
				data-te-select-filter="true"
				id="countries"
				className="rounded-full"
				defaultValue={data.event ? data.event : "Please select"}
			>
				{events?.map((item: EventType & Gift) => {
					let text = undefined;
					const coin = item.diamond_count;
					if (coin === 1) {
						text = `x ${coin} Coin`;
					} else if (coin === undefined) {
						text = "";
					} else {
						text = `x ${coin} Coins`;
					}
					return (
						<option
							data-te-select-icon={item.imageUrl}
							data-te-select-secondary-text={text}
							key={item.id}
							value={item.name}
						>
							{item.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default EventSelection;
