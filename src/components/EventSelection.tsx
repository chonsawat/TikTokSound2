import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import useOutsideClick from "../hooks/useOutsideClick";
import { eventsSelector } from "../stores/events/event.selector";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useAppDispatch, useAppSelector } from "../stores/store";
import { motion, AnimatePresence } from "framer-motion";

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
	${(p) => (p.$isOpen ? "max-h-80 border absolute z-40" : "max-h-0")}
`;

const LiCardContainer = tw.div`flex h-full w-full ml-3.5 self-center items-center`;
const LiCard = tw.div`flex`;
const LiTextContainer = tw.div`flex flex-col self-center`;
const LiImage = tw.img`w-10 h-fit object-fit mr-2.5 self-center`;
const LiContianer = tw.li<LiContainerProps>`
	h-10 py-7 
	text-sm 
	hover:bg-gray-100 
	hover:font-bold
	cursor-pointer
	${(p) => p.$highlightCSS && "bg-gray-100 font-bold"} 
`;

const InputSearchContianer = tw.div`flex items-center px-2 focus:outline-none w-full sticky top-0 bg-white ring-1 ring-gray-300 z-50`;
const InputSearch = tw.input`placeholder:text-gray-600 border-none focus:ring-0 block outline-none p-2 w-full`;
const SelectionContainer = tw.div`h-10 w-60`;
const SelectionMenu = tw.div`
	w-full h-full border rounded-xl bg-slate-50 flex items-center justify-between 
	hover:cursor-pointer hover:bg-slate-100
`;
const SelectionImage = tw.img`h-fit object-fit mr-0 self-center w-6`;

const EventSelection: React.FC<EventSelectionProps> = ({ data }) => {
	const dispatch = useAppDispatch();
	const events = useAppSelector(eventsSelector);
	const [value, setValue] = useState<{ name: string; imageUrl: string }>(
		data.event
	);
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

	const onSelectHandler = (event: { name: string; imageUrl: string }): void => {
		// console.log("On select handler");
		setValue(event);
		setIsOpen(false);

		dispatch(eventActions.setEventRecordEvent({ id: data.id, event }));
	};

	return (
		<SelectionContainer ref={selectionRef}>
			<SelectionMenu onClick={onClickHandler}>
				<div className="flex w-full ml-3 items-center justify-center">
					<SelectionImage src={value.imageUrl} />
					<div className="font-semifold mx-2">{value.name}</div>
				</div>
				<RiArrowDropDownLine
					className={`mr-5 ${
						isOpen ? "rotate-180 duration-300" : "rotate-0 duration-100"
					}`}
				/>
			</SelectionMenu>

			<AnimatePresence>
				{isOpen && (
					<UlContainer
						$as={motion.ul}
						variants={{
							hidden: { x: 0, opacity: 0.2, y: -80 },
							visible: {
								x: 0,
								y: 0,
								opacity: 1,
								transition: { staggerChildren: 0.02 },
							},
							exit: { x: 0, opacity: 0, y: -10 },
						}}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{
							duration: 0.05,
							easings: ["easeIn"],
							type: "tween",
						}}
						$isOpen={isOpen}
					>
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
							const highlightCSS =
								item.name.toLowerCase() === value.name?.toLowerCase();

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
									$as={motion.li}
									variants={{
										hidden: { x: -500, opacity: 0 },
										visible: { x: 0, opacity: 1 },
										exit: {
											x: -10,
											opacity: 1,
											transition: {
												duration: 0.001,
											},
										},
									}}
									layout
									transition={{ type: "spring", mass: 0.25, stiffness: 150 }}
									key={item.id}
									$highlightCSS={highlightCSS}
									onClick={() =>
										onSelectHandler({
											name: item.name,
											imageUrl: item.imageUrl,
										})
									}
								>
									<LiCardContainer>
										<LiCard>
											<LiImage
												className={
													item.name === "Please select" ? "animate-spin" : ""
												}
												src={item.imageUrl}
											/>
											<LiTextContainer>
												<p className="title">{item.name}</p>
												{coin && (
													<p
														id="price"
														className="price text-gray-400 font-medium"
													>
														{text}
													</p>
												)}
											</LiTextContainer>
										</LiCard>
									</LiCardContainer>
								</LiContianer>
							);
						})}
					</UlContainer>
				)}
			</AnimatePresence>
		</SelectionContainer>
	);
};

export default EventSelection;
