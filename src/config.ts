const unicornCat = '/Wingstar.png';
const orangeCat = '/Sunblossom.png';
const blackDog = '/Jayfeather.png';
const blackCat = '/Starblast.png';
const whiteCat = '/Sagewhisker.png';
const brownCat = '/Bushfire.png';
const magicalBg = '/Forest.png';
const groupScene = '/Forest.png';

export const partyConfig = {
  childName: "Stella Yaron",
  eventTitle: "Stella's 10th Birthday",
  date: "Saturday 30 May, 2026",
  time: "4PM - 9AM (Sunday)",
  address: "34 Tania Drive, Aberfoyle Park",
  whatToBring: "Toothbrush, PJs, Sleeping bag & pillow, something to show n'tell",
  characters: [
    {
      id: "sunblossom",
      name: "Sunblossom",
      desc: "Is a loyal member of the clan who loves plants.",
      image: orangeCat,
      color: "from-orange-400 to-red-500",
    },
    {
      id: "starblast",
      name: "Starblast",
      desc: "Loves how cats look at her in awe",
      image: blackCat,
      color: "from-indigo-600 to-purple-800",
    },
    {
      id: "jayfeather",
      name: "Jayfeather",
      desc: "Loves the walk she had last night.",
      image: blackDog,
      color: "from-gray-700 to-gray-900",
    },
    {
      id: "sagewhisker",
      name: "Sagewhisker",
      desc: "Is feeling like she needs to go get some fresh air.",
      image: whiteCat,
      color: "from-blue-200 to-white",
    },
    {
      id: "bushfire",
      name: "Bushfire",
      desc: "Is not liking how her day is going.",
      image: brownCat,
      color: "from-yellow-700 to-orange-900",
    },
    {
      id: "wingstar",
      name: "Wingstar",
      desc: "Likes flying above the trees to catch prey.",
      image: unicornCat,
      color: "from-pink-400 to-purple-500",
    }
  ],
  images: {
    background: magicalBg,
    group: groupScene
  }
};
