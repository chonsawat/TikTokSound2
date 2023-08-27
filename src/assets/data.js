import { v4 as uuid } from "uuid";

export const eventRecords = [
	{
		id: "1",
		enable: true,
		event: "following",
		volume: 0.2,
		sound: {
			path: "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\assets\\sound\\fart.wav",
		},
	},
	{
		id: "2",
		enable: false,
		event: "anygift",
		volume: 0.5,
		sound: {
			path: "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\assets\\sound\\fart-sm.wav",
		},
	},
	{
		id: "3",
		enable: true,
		event: "rose",
		volume: 0.1,
		sound: {
			path: "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\assets\\sound\\monkey-laugh-102.wav",
		},
	},
];

// export const events = [
//   { label: "Please select", value: undefined },
//   { label: "Following", value: "following" },
//   { label: "Subcribe", value: "subcribe" },
//   { label: "Any Gift", value: "anygift" },
//   { label: "TikTok", value: "tiktok" },
//   { label: "Rose", value: "rose" },
//   { label: "Heart", value: "heart" },
//   { label: "Heart 2", value: "heart" },
// ];

export const events = [
	{
		name: "Please select",
		id: uuid(),
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734",
	},
	{
		name: "Following",
		id: uuid(),
		imageUrl:
			"https://freesvg.org/img/abstract-user-flat-3.png",
	},
	{
		name: "Subcribe",
		id: uuid(),
		imageUrl:
			"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63136/golden-crown-clipart-md.png",
	},
	{
		name: "Any Gift",
		id: uuid(),
		imageUrl:
			"https://cdn.pixabay.com/photo/2019/12/16/15/47/vector-4699584_1280.png",
	},
	{
		id: 6093,
		name: "Football",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/c043cd9e418f13017793ddf6e0c6ee99~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6064,
		name: "GG",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3f02fa9594bd1495ff4e8aa5ae265eef~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5827,
		name: "Ice Cream Cone",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/968820bc85e274713c795a6aef3f7c67~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5760,
		name: "Weights",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a99fc8541c7b91305de1cdcf47714d03~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5655,
		name: "Rose",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5269,
		name: "TikTok",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/802a21ae29f9fae5abe3693de9f874bd~tplv-obj.webp",
		combo: true,
	},
	{
		id: 8352,
		name: "Cotton's Shell",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/f034a397a7c555b4885e4892b925c1e4~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5650,
		name: "Mic",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8d4381b7d2272ffc14227c3705832e24~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5487,
		name: "Finger Heart",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a4c4dc437fd3a6632aba149769491f49.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5657,
		name: "Lollipop",
		diamond_count: 10,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/7d055532898d2060101306de62b89882~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5658,
		name: "Perfume",
		diamond_count: 20,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/20b8f61246c7b6032777bb81bf4ee055~tplv-obj.webp",
		combo: true,
	},
	{
		id: 9072,
		name: "New TikTok Universe",
		diamond_count: 44999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8f471afbcebfda3841a6cc515e381f58~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8582,
		name: "TikTok Stars",
		diamond_count: 39999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/b1667c891ed39fd68ba7252fff7a1e7c~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6041,
		name: "TikTok Universe",
		diamond_count: 34999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/41718e155c6540dbf9f822a3598dc74e~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8381,
		name: "Seal and Whale",
		diamond_count: 34500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3781e9159ff09272826d3f2216ba36ef.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7823,
		name: "Leon and Lion",
		diamond_count: 34000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a291aedacf27d22c3fd2d83575d2bee9~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8391,
		name: "Sam the Whale",
		diamond_count: 30000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/f48a1887eb88238738996bb997b31c0f.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6369,
		name: "Lion",
		diamond_count: 29999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4fb89af2082a290b37d704e20f4fe729~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7610,
		name: "Dragon Flame",
		diamond_count: 26999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/89b4d1d93c1cc614e3a0903ac7a94e0c~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7319,
		name: "Phoenix",
		diamond_count: 25999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/ef248375c4167d70c1642731c732c982~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7400,
		name: "Adam’s Dream",
		diamond_count: 25999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9a586391fbb1e21621c4203e5563a9e0~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5571,
		name: "Castle Fantasy",
		diamond_count: 20000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8173e9b07875cca37caa5219e4903a40.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6751,
		name: "TikTok Shuttle",
		diamond_count: 20000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8ef48feba8dd293a75ae9d4376fb17c9~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8419,
		name: "Red Lightning",
		diamond_count: 12000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/5f48599c8d2a7bbc6e6fcf11ba2c809f~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7314,
		name: "Couple",
		diamond_count: 10999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/591a8902a6d94c7cc7048aa3ecf227fd~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6149,
		name: "Interstellar",
		diamond_count: 10000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8520d47b59c202a4534c1560a355ae06~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6203,
		name: "Sunset Speedway",
		diamond_count: 10000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/df63eee488dc0994f6f5cb2e65f2ae49~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6103,
		name: "Yacht",
		diamond_count: 9888,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/070c086c6fc1e40ae3ca9e683c974e4e~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8420,
		name: "Star Throne",
		diamond_count: 7999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/30063f6bc45aecc575c49ff3dbc33831~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6089,
		name: "Sports Car",
		diamond_count: 7000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/e7ce188da898772f18aaffe49a7bd7db~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6790,
		name: "Celebration Time",
		diamond_count: 6999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/e73e786041d8218d8e9dbbc150855f1b~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6864,
		name: "Cooper's Home",
		diamond_count: 5999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/816e8f9f6ba06bdc1adc0c20c8b753a4~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7468,
		name: "Dancing Adam",
		diamond_count: 5000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/31375ed9a150fc227584141637e3c475~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5938,
		name: "Pool Party",
		diamond_count: 4999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4147c5bcfad9623c693f83d5d6cba1f7~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5767,
		name: "Private Jet",
		diamond_count: 4888,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/921c6084acaa2339792052058cbd3fd3~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6646,
		name: "Leon the Kitten",
		diamond_count: 4888,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a7748baba012c9e2d98a30dce7cc5a27~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6148,
		name: "Flower Overflow",
		diamond_count: 4000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/743c4bb44e7e0bf251a7f2f5ada231ee~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6506,
		name: "Island of Love",
		diamond_count: 4000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a7e32624335770299372a7d05f855df7~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6863,
		name: "Cooper Swims Home",
		diamond_count: 3999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/0868b51b798341978b904e8095a4ca47~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5652,
		name: "Ferris Wheel",
		diamond_count: 3000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3c7291ad4c2a6d4f70505c3e296ecebe~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6563,
		name: "Meteor Shower",
		diamond_count: 3000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/71883933511237f7eaa1bf8cd12ed575~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5765,
		name: "Motorcycle",
		diamond_count: 2988,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/6517b8f2f76dc75ff0f4f73107f8780e~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6820,
		name: "Whale diving",
		diamond_count: 2150,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/46fa70966d8e931497f5289060f9a794~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6033,
		name: "Make-up Box",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a29aa87203ec09c699e3dafa1944b23e~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6348,
		name: "Rabbit",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/61b42d630091b661e82fc8ed400b1de2~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6789,
		name: "Red Carpet",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/5b9bf90278f87b9ca0c286d3c8a12936~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6834,
		name: "Gift Box",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9cc22f7c8ac233e129dec7b981b91b76~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6862,
		name: "Cooper Flies Home",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3f1945b0d96e665a759f747e5e0cf7a9~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7529,
		name: "Mystery Firework",
		diamond_count: 1999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/c110230c5db903db5f060a432f5a86cd~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8277,
		name: "Love Drop",
		diamond_count: 1800,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1ea684b3104abb725491a509022f7c02~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5651,
		name: "Garland ",
		diamond_count: 1500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/69d7dadcd93942bad49d0b9874f69c1b~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5955,
		name: "Champion",
		diamond_count: 1500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/58ce827091411e667dd6ba8a93215f86~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7467,
		name: "Chasing the Dream",
		diamond_count: 1500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1ea8dbb805466c4ced19f29e9590040f~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5561,
		name: "Diamond Crown",
		diamond_count: 1499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/96286bb3883c5340879c5d8ecbbdc948.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6090,
		name: "Fireworks",
		diamond_count: 1088,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9494c8a0bc5c03521ef65368e59cc2b8~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5587,
		name: "Gold Mine",
		diamond_count: 1000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/58cbff1bd592ae4365a450c4bf767f3a.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6199,
		name: "Email Message",
		diamond_count: 1000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/c959df6dbffd6f07849d22d2c3c07861~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6200,
		name: "Mirror Bloom",
		diamond_count: 1000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a9d0e9406230fa9a901d992a90574e39~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6781,
		name: "Watermelon Love",
		diamond_count: 1000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1d1650cd9bb0e39d72a6e759525ffe59~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6233,
		name: "Travel with You",
		diamond_count: 999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/753098e5a8f45afa965b73616c04cf89~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5978,
		name: "Train",
		diamond_count: 899,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4227ed71f2c494b554f9cbe2147d4899~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5664,
		name: "Pearl",
		diamond_count: 800,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/70fd490f208c37c89ebdecf4c3c1c31b~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5897,
		name: "Swan",
		diamond_count: 699,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/97a26919dbf6afe262c97e22a83f4bf1~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5499,
		name: "Tuk Tuk",
		diamond_count: 600,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/225f511f13112dc92e1d398f4b1dc73b.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6865,
		name: "Cooper Skates Home",
		diamond_count: 599,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/163865bebecff06a838c71def4a40cc6~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5605,
		name: "Make it Rain",
		diamond_count: 500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/efe654311fba5725fa1ec21d6c17b539.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7168,
		name: "Money Gun",
		diamond_count: 500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/e0589e95a2b41970f0f30f6202f5fce6~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5562,
		name: "Gold Microphone",
		diamond_count: 499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/620fb86857b3d96511255cc0ac9515b0.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5563,
		name: "Crystal Heart",
		diamond_count: 499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/ae46ac6582a606009643440fe4138eb4.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5731,
		name: "Coral",
		diamond_count: 499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d4faa402c32bf4f92bee654b2663d9f1~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8411,
		name: "Music",
		diamond_count: 499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d7b1a9425ae9e7ded5693f6f078c97b2~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5899,
		name: "Swing",
		diamond_count: 399,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4d547840317d296c4c743d310a27d575~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8349,
		name: "Cotton the Seal",
		diamond_count: 399,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/90671376888d6f834c97b0d34bc8231a~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5569,
		name: "Diamond ring of love",
		diamond_count: 300,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d623197cd4a72db871b3755b4ed6894c.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6071,
		name: "Birthday Cake",
		diamond_count: 300,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/2cadff123e24e328c040380c44c7ea6b~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5882,
		name: "Rock 'n' Roll",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/57154f268c641793bca116a4b87d2bfa~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5902,
		name: "Bridal Veil",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/96843a61858a95131aaa17522516b7f6~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6007,
		name: "Boxing Gloves",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9f8bd92363c400c284179f6719b6ba9c~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6265,
		name: "Duck",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/e172f660a1d4f95813a3ace0fde42323~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6267,
		name: "Corgi",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/148eef0884fdb12058d1c6897d1e02b9~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6532,
		name: "Dancing Cactus",
		diamond_count: 299,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1cc030f69570f04ee7955781b997dc44~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5598,
		name: "Diamond Heart necklace",
		diamond_count: 200,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9651f80586431e85dbf4d96c067b22f9.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5599,
		name: "Gold necklace",
		diamond_count: 200,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/21549ba24f76a01d00373cb8e35660ae.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5509,
		name: "Sunglasses",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/08af67ab13a8053269bf539fd27f3873.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5586,
		name: "Hearts",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/934b5a10dee8376df5870a61d2ea5cb6.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5880,
		name: "Lock and Key",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/2c9cec686b98281f7319b1a02ba2864a~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6436,
		name: "Love Focus",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/996895614694e9d8f14976ae2a570936~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6437,
		name: "Garland Headpiece",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/bdbdd8aeb2b69c173a3ef666e63310f3~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6671,
		name: "Love You",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/134e51c00f46e01976399883ca4e4798~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6713,
		name: "Cheer For You",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1059dfa76c78dc17d7cf0a1fc2ece185~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8066,
		name: "Goggles",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/488be317f77358386438d04e38801b5e~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5729,
		name: "Butterfly",
		diamond_count: 169,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/282973159d9ab5e7fa2c8a3dc8b578dc~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8408,
		name: "Music Note",
		diamond_count: 169,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/b0b97078e33e46c8f7b7b3c321f684c3~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5566,
		name: "Mishka Bear",
		diamond_count: 100,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d78ed6496fd57286b42ac033acbee299.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5585,
		name: "Confetti",
		diamond_count: 100,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/cb4e11b3834e149f08e1cdcc93870b26~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5637,
		name: "Thai Style BBQ",
		diamond_count: 100,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/de2e046126fa564527a4aa104a4fbbab~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5660,
		name: "Hand Hearts",
		diamond_count: 100,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/6cd022271dc4669d182cad856384870f~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5659,
		name: "Paper Crane",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/0f158a08f7886189cdabf496e8a07c21~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6097,
		name: "Little Crown",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/cf3db11b94a975417043b53401d0afe1~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6104,
		name: "Cap",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/6c2ab2da19249ea570a2ece5e3377f04~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6427,
		name: "Hat and Mustache",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/2f1e4f3f5c728ffbfa35705b480fdc92~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8130,
		name: "Like-Pop",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/75eb7b4aca24eaa6e566b566c7d21e2f~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6948,
		name: "Pride Flag",
		diamond_count: 29,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3d369da1798184aebb5a44c1b5c23408~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5491,
		name: "Ya Dom",
		diamond_count: 20,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a9979d16e8832c64646b04a75e58c749.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5597,
		name: "Sushi Set",
		diamond_count: 20,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/693ed273f16deff9e947a29a423c5816.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5576,
		name: "Heart",
		diamond_count: 10,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/98bea1b189fba75bf0ca766b4dc1976e.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 5779,
		name: "I love you",
		diamond_count: 10,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/beaaa3a78a00b5b20661b00924ab0e7f~tplv-obj.webp",
		combo: true,
	},
	{
		id: 37,
		name: "Panda",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/77259f70262b6632b9926a4a7ed12391~tplv-obj.webp",
		combo: true,
	},
	{
		id: 7764,
		name: "Star Throne",
		diamond_count: 7999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/30063f6bc45aecc575c49ff3dbc33831~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5991,
		name: "Banana leaf vessel",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8e635863e20cfa3651bd8a5b762ae72d~tplv-obj.webp",
		combo: true,
	},
	{
		id: 8409,
		name: "TV Mic",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/301f86e1614ca8e1ee3fa20476e5668f~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6835,
		name: "Gift Box",
		diamond_count: 3999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3646c259f8ce6f79c762ad00ce51dda0~tplv-obj.webp",
		combo: false,
	},
	{
		id: 5992,
		name: "Frangipani",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/7464fad59650123fe0989e426618847d~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6246,
		name: "Thumbs Up",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/570a663e27bdc460e05556fd1596771a~tplv-obj.webp",
		combo: true,
	},
	{
		id: 8829,
		name: "Durian Baby",
		diamond_count: 199,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/43d2ba9dfe10bb589ff592805c01f90a.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8833,
		name: "Coconut Icecream",
		diamond_count: 10,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/f8d6599715e2ec4845accdd5a12fb53b.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 8832,
		name: "Mango Rice",
		diamond_count: 10,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/5d1bf737a7df7fe8aa2ea13a42598a5b.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 8831,
		name: "Lod Chong",
		diamond_count: 5,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/174bacb474ef3c545497228ea9b97077.png~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6247,
		name: "Heart",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/dd300fd35a757d751301fba862a258f1~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6784,
		name: "Cake Slice",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/f681afb4be36d8a321eac741d387f1e2~tplv-obj.webp",
		combo: true,
	},
	{
		id: 9081,
		name: "New Universe",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a35c18954ad73042ad1073fe5f1a272e~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6788,
		name: "Glow Stick",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8e1a5d66370c5586545e358e37c10d25~tplv-obj.webp",
		combo: true,
	},
	{
		id: 6890,
		name: "Love you",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/ab0a7b44bfc140923bb74164f6f880ab~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8407,
		name: "Enjoy Music",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/60b05dddf972bd3290823411510ba6f9~tplv-obj.webp",
		combo: true,
	},
	{
		id: 9092,
		name: "Fire Phoenix",
		diamond_count: 41999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/bfb8425a7e8fa03f9fec05a973a4a506.png~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8651,
		name: "Thunder Falcon",
		diamond_count: 39999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/26f3fbcda383e6093a19b8e7351a164c~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7312,
		name: "TikTok Universe+",
		diamond_count: 34999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/b13105782e8bf8fbefaa83b7af413cee~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7125,
		name: "Premium Shuttle",
		diamond_count: 20000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/c2b287adee5151b7889d6e3d45b72e44~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8248,
		name: "Fly Love",
		diamond_count: 19999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a598ba4c7024f4d46c1268be4d82f901~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8247,
		name: "Happy Party",
		diamond_count: 6999,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/41774a8ba83c59055e5f2946d51215b4~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7124,
		name: "Signature Jet",
		diamond_count: 4888,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/fe27eba54a50c0a687e3dc0f2c02067d~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8245,
		name: "Here We Go",
		diamond_count: 1799,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/61b76a51a3757f0ff1cdc33b16c4d8ae~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7123,
		name: "Shiny air balloon",
		diamond_count: 1000,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/9e7ebdca64b8f90fcc284bb04ab92d24~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7122,
		name: "Gem Gun",
		diamond_count: 500,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/dd06007ade737f1001977590b11d3f61~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8244,
		name: "Hands Up",
		diamond_count: 499,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/f4d906542408e6c87cf0a42f7426f0c6~tplv-obj.webp",
		combo: false,
	},
	{
		id: 7121,
		name: "Marvelous Confetti",
		diamond_count: 100,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/fccc851d351716bc8b34ec65786c727d~tplv-obj.webp",
		combo: false,
	},
	{
		id: 6432,
		name: "Star",
		diamond_count: 99,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/485175fda92f4d2f862e915cbcf8f5c4~tplv-obj.webp",
		combo: false,
	},
	{
		id: 8243,
		name: "Cheer You Up",
		diamond_count: 9,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/97e0529ab9e5cbb60d95fc9ff1133ea6~tplv-obj.webp",
		combo: true,
	},
	{
		id: 7934,
		name: "Heart Me",
		diamond_count: 1,
		imageUrl:
			"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d56945782445b0b8c8658ed44f894c7b~tplv-obj.webp",
		combo: false,
	},
];
