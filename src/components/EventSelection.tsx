import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import useOutsideClick from "../hooks/useOutsideClick";
import { eventsSelector } from "../stores/events/event.selector";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useAppDispatch, useAppSelector } from "../stores/store";

import tw from "tailwind-styled-components";

type EventSelectionProps = {
	data: EventRecordType;
};

type UlContainerProps = {
	$isOpen: boolean;
};

type LiContainerProps = {
	$highlightCSS: boolean;
};

const UlContainer = tw.ul<UlContainerProps>`
	w-60 mt-2 bg-white rounded-xl overflow-y-auto 
	no-scrollbar
	${(p) => (p.$isOpen ? "max-h-80 border absolute z-50" : "max-h-0")}
`;
const LiContianer = tw.li<LiContainerProps>`h-10 py-7 text-sm hover:bg-gray-700 hover:text-white hover:font-semibold cursor-pointer
	${(p) => p.$highlightCSS && "bg-gray-700 text-white font-semibold"} 
`;
const InputSearchContianer = tw.div`flex items-center px-2 focus:outline-none w-full sticky top-0 bg-white ring-1 ring-gray-300`;
const InputSearch = tw.input`placeholder:text-gray-600 border-none focus:ring-0 block outline-none p-2 w-full`;
const SelectionContainer = tw.div`h-10 w-60`;
const SelectionMenu = tw.div`
	w-full h-full border rounded-xl bg-slate-50 flex items-center justify-between 
	hover:cursor-pointer hover:bg-slate-100
`;

const EventSelection: React.FC<EventSelectionProps> = ({ data }) => {
	const dispatch = useAppDispatch();
	const events = useAppSelector(eventsSelector);
	const [value, setValue] = useState<string>(data.event);
	const [search, setSearch] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const eventsFiltered = events.filter((item) => {
		if (search !== "") {
			return item.name.toLowerCase().includes(search.toLowerCase());
		} else {
			return true;
		}
	});

	const onClickOutsideHandler = () => {
		setIsOpen(false);
	};
	const selectionRef = useOutsideClick(onClickOutsideHandler);

	const onClickHandler = (event: any) => {
		event.stopPropagation();
		setIsOpen((current) => !current);
	};

	const onSearchHandler = (event: React.FormEvent<HTMLInputElement>): void => {
		setSearch((event.target as HTMLTextAreaElement).value);
	};

	const onSelectHandler = (event: string): void => {
		console.log("On select handler");
		setValue(event);
		setIsOpen(false);

		dispatch(eventActions.setEventRecordEvent({ id: data.id, event }));
	};

	return (
		<SelectionContainer ref={selectionRef}>
			<SelectionMenu onClick={onClickHandler}>
				<div className="font-semifold ml-5">{value}</div>
				<RiArrowDropDownLine
					className={`mr-5 ${
						isOpen ? "rotate-180 duration-300" : "rotate-0 duration-100"
					}`}
				/>
			</SelectionMenu>
			<UlContainer $isOpen={isOpen}>
				<InputSearchContianer>
					<AiOutlineSearch />
					<InputSearch
						id="searchEvent"
						type="text"
						placeholder="Search"
						value={search}
						onChange={onSearchHandler}
					/>
				</InputSearchContianer>

				{eventsFiltered?.map((item) => {
					const highlightCSS = item.name.toLowerCase() === value.toLowerCase();

					let text;
					const coin = item.diamond_count;
					if (coin === 1) {
						text = `x ${coin} Coin`;
					} else if (coin === undefined) {
						text = "";
					} else {
						text = `x ${coin} Coins`;
					}
					return (
						<LiContianer
							key={item.id}
							$highlightCSS={highlightCSS}
							onClick={() => onSelectHandler(item.name)}
						>
							<div className="flex h-full w-full pl-5 self-center items-center">
								<div className="flex">
									<img
										src={item.imageUrl}
										className="w-10 h-fit object-fit pr-2 self-center"
									/>
									<div className="flex flex-col self-center">
										<p className="text-sm font-semibold">{item.name}</p>
										{coin && <p className="text-sm text-gray-400">{text}</p>}
									</div>
								</div>
							</div>
						</LiContianer>
					);
				})}
			</UlContainer>
		</SelectionContainer>
	);
};

export default EventSelection;
