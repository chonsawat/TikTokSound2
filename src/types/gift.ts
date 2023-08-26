export type Gift = {
	can_put_in_gift_box?: boolean;
	color_infos?: any[];
	combo?: boolean;
	describe?: string;
	diamond_count?: number;
	duration?: number;
	for_linkmic?: boolean;
	gift_rank_recommend_info?: string;
	gift_sub_type?: number;
	gift_vertical_scenarios?: number[];
	gold_effect?: string;
	icon?: {
		avg_color: string;
		height: number;
		image_type: number;
		is_animated: boolean;
		open_web_url: string;
		uri: string;
		url_list: string[];
		width: number;
	};
	id: number | string;
	image?: {
		avg_color: string;
		height: number;
		image_type: number;
		is_animated: boolean;
		open_web_url: string;
		uri: string;
		url_list: string[];
		width: number;
	};
	is_box_gift?: boolean;
	is_broadcast_gift?: boolean;
	is_displayed_on_panel?: boolean;
	is_effect_befview?: boolean;
	is_random_gift?: boolean;
	lock_info?: { gift_level: number; lock: boolean; lock_type: number };
	name: string;
	primary_effect_id?: number;
	tracker_params?: object;
	type?: number;
} & {
	imageUrl?: string;
};
