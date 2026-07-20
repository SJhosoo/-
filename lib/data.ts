export type RingKey =
  | "node"
  | "segment"
  | "haze"
  | "pier"
  | "glen"
  | "loveknot"
  | "lumier"
  | "orbit"
  | "engage"
  | "flat"
  | "gembridge"
  | "jubilee"
  | "saturn"
  | "fascinate"
  | "promise"
  | "focus"
  | "keystone"
  | "summit"
  | "gemstone"
  | "wave"
  | "stellar"
  | "romeojuliet"
  | "silverline";

export interface RingProduct {
  key: RingKey;
  name: string;
  nameEn: string;
  description: string;
  imageSrc: string;
  productUrl: string;
}

export const RINGS: Record<RingKey, RingProduct> = {
  node: {
    key: "node",
    name: "노드",
    nameEn: "Node",
    description:
      "서로 다른 시간과 기억이 쌓여 만들어진 관계를 상징하며, 빛을 받을 때마다 구조적인 리듬감과 단단한 인상을 전함.",
    imageSrc: "/images/node.svg",
    productUrl: "https://www.athosoo.com/33/?idx=43",
  },
  segment: {
    key: "segment",
    name: "세그먼트",
    nameEn: "Segment",
    description:
      "분리된 선과 면은 각자의 형태를 지니면서도 자연스럽게 맞물려 조화를 이루고, 그 안에서 단단하지만 부드러운 균형을 만들어냄.",
    imageSrc: "/images/segment.svg",
    productUrl: "https://www.athosoo.com/33/?idx=42",
  },
  haze: {
    key: "haze",
    name: "헤이즈",
    nameEn: "Haze",
    description:
      "아지랑이처럼 미세한 결들이 주는 질감과 잡힐 듯 말 듯한 섬세한 감정을 담아내며, 은은하고 깊은 인상을 전함.",
    imageSrc: "/images/haze.svg",
    productUrl: "https://www.athosoo.com/33/?idx=41",
  },
  pier: {
    key: "pier",
    name: "피어",
    nameEn: "Pier",
    description:
      "매끈하게 둥글린 곡면과 하나의 스톤이 조용히 자리한 미니멀한 균형감, 잔잔한 반짝임을 전함.",
    imageSrc: "/images/pier.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=40",
  },
  glen: {
    key: "glen",
    name: "글렌",
    nameEn: "Glen",
    description:
      "겹겹이 쌓인 얇은 선의 레이어와, 리본처럼 매듭짓는 디테일이 어우러진 우아한 구조.",
    imageSrc: "/images/glen.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=39",
  },
  loveknot: {
    key: "loveknot",
    name: "러브넛",
    nameEn: "Love knot",
    description:
      "살짝 비틀린 매듭 모티프에 작은 스톤이 더해져, 서로를 향한 자연스러운 연결을 표현.",
    imageSrc: "/images/loveknot.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=17",
  },
  lumier: {
    key: "lumier",
    name: "루미에",
    nameEn: "Lumier",
    description:
      "각진 사선 컷이 빛을 머금어 순간적으로 반짝이는, 예리하면서도 화사한 인상.",
    imageSrc: "/images/lumier.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=25",
  },
  orbit: {
    key: "orbit",
    name: "오르빗",
    nameEn: "Orbit",
    description:
      "얇은 밴드를 따라 스톤이 궤도처럼 부드럽게 도는 형태, 순환하는 리듬감을 담음.",
    imageSrc: "/images/orbit.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=34",
  },
  engage: {
    key: "engage",
    name: "엥게이지",
    nameEn: "Engage",
    description:
      "군더더기 없는 얇은 라인에 스톤 하나로 시선을 모으는 담백한 디자인.",
    imageSrc: "/images/engage.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=12",
  },
  flat: {
    key: "flat",
    name: "플랫",
    nameEn: "Flat",
    description:
      "납작한 평면 위에서 두 선이 교차하듯 겹쳐지는, 단단하고 정직한 인상.",
    imageSrc: "/images/flat.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=13",
  },
  gembridge: {
    key: "gembridge",
    name: "젬브릿지",
    nameEn: "Gem bridge",
    description: "스톤들이 다리처럼 일렬로 이어지며 서로를 연결하는 구조.",
    imageSrc: "/images/gembridge.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=16",
  },
  jubilee: {
    key: "jubilee",
    name: "쥬빌레",
    nameEn: "Jubilee",
    description: "파베 스톤이 줄지어 반짝이는, 축제 같은 화사함과 생동감.",
    imageSrc: "/images/jubilee.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=14",
  },
  saturn: {
    key: "saturn",
    name: "새턴",
    nameEn: "Saturn",
    description:
      "밴드를 감싸는 얇은 고리 디테일이 행성의 띠처럼 은은하게 둘러싼 형태.",
    imageSrc: "/images/saturn.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=21",
  },
  fascinate: {
    key: "fascinate",
    name: "파시넷",
    nameEn: "Fascinate",
    description: "사선으로 떨어지는 스톤 컷이 시선을 사로잡는, 매혹적인 포인트 하나.",
    imageSrc: "/images/fascinate.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=10",
  },
  promise: {
    key: "promise",
    name: "프로미스",
    nameEn: "Promise",
    description: "둥글고 단정한 밴드에 작은 스톤 하나, 담백한 약속의 상징.",
    imageSrc: "/images/promise.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=37",
  },
  focus: {
    key: "focus",
    name: "포커스",
    nameEn: "Focus",
    description: "매끈한 면 위 스톤 하나에 시선이 집중되는, 명확하고 단단한 초점.",
    imageSrc: "/images/focus.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=36",
  },
  keystone: {
    key: "keystone",
    name: "키스톤",
    nameEn: "Keystone",
    description: "건축의 쐐기돌처럼 각진 컷이 구조를 단단히 잡아주는 인상.",
    imageSrc: "/images/keystone.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=35",
  },
  summit: {
    key: "summit",
    name: "써밋",
    nameEn: "Summit",
    description: "밴드 위로 솟은 능선 같은 디테일, 정상을 향해 뻗은 텍스처.",
    imageSrc: "/images/summit.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=33",
  },
  gemstone: {
    key: "gemstone",
    name: "젬스톤",
    nameEn: "Gem Stone",
    description: "스톤들이 일렬로 촘촘히 박혀 반짝이는 화려한 라인.",
    imageSrc: "/images/gemstone.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=38",
  },
  wave: {
    key: "wave",
    name: "웨이브",
    nameEn: "Wave",
    description: "표면을 부드럽게 물결치는 곡선 텍스처, 잔잔한 파동의 흐름.",
    imageSrc: "/images/wave.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=19",
  },
  stellar: {
    key: "stellar",
    name: "스텔라",
    nameEn: "Stellar",
    description: "사선으로 교차하는 별자리 같은 선과 스톤이 어우러진 반짝임.",
    imageSrc: "/images/stellar.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=26",
  },
  romeojuliet: {
    key: "romeojuliet",
    name: "로미오와 줄리엣",
    nameEn: "Romeo & Juliet",
    description: "비대칭으로 꺾인 컷과 스톤이 만나는, 애틋하고 극적인 인상.",
    imageSrc: "/images/romeojuliet.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=18",
  },
  silverline: {
    key: "silverline",
    name: "실버라인",
    nameEn: "Silver line",
    description: "밴드를 따라 촘촘히 이어진 파베 라인, 은은하고 섬세한 광채.",
    imageSrc: "/images/silverline.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=23",
  },
};

export interface Branch {
  key: string;
  name: string;
  reservationUrl: string;
}

export const BRANCHES: Branch[] = [
  { key: "jamsil", name: "아뜰리에호수 잠실점", reservationUrl: "https://naver.me/Fmf6pwmz" },
  { key: "hongdae", name: "아뜰리에호수 홍대점", reservationUrl: "https://naver.me/FdCxo0jb" },
  { key: "hyehwa", name: "아뜰리에호수 혜화점", reservationUrl: "https://naver.me/FHlgAjpk" },
  { key: "seongsu", name: "아뜰리에호수 성수점", reservationUrl: "https://naver.me/xGIP5g0e" },
  { key: "seongsuyeonmujang", name: "아뜰리에호수 성수 연무장점", reservationUrl: "https://naver.me/xGIP5g0e" },
  { key: "suwonhaenggung", name: "아뜰리에호수 수원행궁점", reservationUrl: "https://naver.me/xGIP5g0e" },
  { key: "suwoningye", name: "아뜰리에호수 수원인계점", reservationUrl: "https://naver.me/FXwGsEft" },
  { key: "bucheon", name: "아뜰리에호수 부천점", reservationUrl: "https://naver.me/FXwGsEft" },
  { key: "ansan", name: "아뜰리에호수 안산점", reservationUrl: "https://naver.me/FXwGsEft" },
  { key: "anyang", name: "아뜰리에호수 안양점", reservationUrl: "https://naver.me/xs3VEP5w" },
  { key: "bundang", name: "아뜰리에호수 분당점", reservationUrl: "https://naver.me/FzSZ3AyC" },
  { key: "uijeongbu", name: "아뜰리에호수 의정부점", reservationUrl: "https://naver.me/5D8IqDtL" },
  { key: "bupyeong", name: "아뜰리에호수 부평점", reservationUrl: "https://naver.me/xcAwthc4" },
  { key: "songdotriple", name: "아뜰리에호수 송도 트리플점", reservationUrl: "https://naver.me/Fm3NF07L" },
  { key: "gwangalli", name: "아뜰리에호수 광안리점", reservationUrl: "https://naver.me/5bVYzfOq" },
  { key: "jeonpo", name: "아뜰리에호수 전포점", reservationUrl: "https://naver.me/xWTnwAqm" },
  { key: "daegu", name: "아뜰리에호수 대구점", reservationUrl: "https://naver.me/GA8BTiwo" },
  { key: "ulsan", name: "아뜰리에호수 울산점", reservationUrl: "https://naver.me/5mhv3JPY" },
  { key: "daejeon", name: "아뜰리에호수 대전점", reservationUrl: "https://naver.me/GlJrry0P" },
  { key: "gwangju", name: "아뜰리에호수 광주점", reservationUrl: "https://naver.me/5jJQ084M" },
  { key: "jeonjuhanok", name: "아뜰리에호수 전주한옥마을점", reservationUrl: "https://naver.me/FHVeOL8z" },
  { key: "gangneung", name: "아뜰리에호수 강릉점", reservationUrl: "https://naver.me/5zU75VOp" },
  { key: "jeju", name: "아뜰리에호수 제주점", reservationUrl: "https://naver.me/G4Gd2E41" },
  { key: "cheonan", name: "아뜰리에호수 천안점", reservationUrl: "https://naver.me/Fm3DOqR3" },
];

export const STYLE_OPTIONS = ["실버", "골드", "로즈골드", "블랙", "매트", "유광"] as const;
