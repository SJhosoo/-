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
      "서로 다른 시간과 기억이 쌓여 단단해진 관계의 궤적. 빛을 머금을 때마다 구조적인 리듬감으로 묵직하고 깊은 서사를 전합니다.",
    imageSrc: "/images/node.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=43",
  },
  segment: {
    key: "segment",
    name: "세그먼트",
    nameEn: "Segment",
    description:
      "독립된 선과 면이 섬세하게 맞물려 이루는 부드러운 균형. 각자의 형태를 지키면서도 서로를 유연하게 품어내는 온화한 조화입니다.",
    imageSrc: "/images/segment.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=42",
  },
  haze: {
    key: "haze",
    name: "헤이즈",
    nameEn: "Haze",
    description:
      "아지랑이처럼 잔잔하게 일어나는 미세한 텍스처. 잡힐 듯 말 듯 아련하고 은은한 미학으로 깊은 마음의 결을 담아냅니다.",
    imageSrc: "/images/haze.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=41",
  },
  pier: {
    key: "pier",
    name: "피어",
    nameEn: "Pier",
    description:
      "매끈하게 다듬어진 잔잔한 곡면 위, 조용히 숨 쉬는 단 하나의 스톤. 소란스럽지 않게 피어나는 무결점의 미니멀한 반짝임입니다.",
    imageSrc: "/images/pier.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=40",
  },
  glen: {
    key: "glen",
    name: "글렌",
    nameEn: "Glen",
    description:
      "겹겹이 흘러가는 얇은 선의 레이어와 매듭 디테일. 서로를 다정하게 동여매며 깊어지는 우아하고 입체적인 구조입니다.",
    imageSrc: "/images/glen.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=39",
  },
  loveknot: {
    key: "loveknot",
    name: "러브넛",
    nameEn: "Love knot",
    description:
      "부드럽게 비틀린 매듭 모티프 끝에 더해진 작은 스톤의 실루엣. 흩어지지 않고 하나의 궤적으로 이어지는 운명적인 연결을 상징합니다.",
    imageSrc: "/images/loveknot.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=17",
  },
  lumier: {
    key: "lumier",
    name: "루미에",
    nameEn: "Lumier",
    description:
      "각진 사선 컷이 시선에 따라 순간적으로 빛을 머금어 터뜨리는 신비로움. 예리함 속에 화사한 반짝임을 품고 있는 인상적인 디자인입니다.",
    imageSrc: "/images/lumier.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=25",
  },
  orbit: {
    key: "orbit",
    name: "오르빗",
    nameEn: "Orbit",
    description:
      "섬세한 밴드를 따라 스톤이 궤도처럼 부드럽게 공전하는 형태. 정체되지 않고 영원히 흐르는 유연한 리듬감을 전합니다.",
    imageSrc: "/images/orbit.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=34",
  },
  engage: {
    key: "engage",
    name: "엥게이지",
    nameEn: "Engage",
    description:
      "군더더기 없이 단정한 얇은 라인 끝, 하나의 초점에 시선을 집중시키는 미학. 담백함 속에 깃든 가장 맑고 정직한 여운입니다.",
    imageSrc: "/images/engage.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=12",
  },
  flat: {
    key: "flat",
    name: "플랫",
    nameEn: "Flat",
    description:
      "납작하고 곧은 평면 위에서 두 개의 선이 조용히 교차하는 형태. 가식 없이 단단하고 곧은 안정감을 안겨줍니다.",
    imageSrc: "/images/flat.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=13",
  },
  gembridge: {
    key: "gembridge",
    name: "젬브릿지",
    nameEn: "Gem bridge",
    description: "빛을 머금은 스톤들이 정갈한 다리처럼 일렬로 놓인 구조. 서로 다른 둘의 세계를 견고하고 아름답게 이어줍니다.",
    imageSrc: "/images/gembridge.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=16",
  },
  jubilee: {
    key: "jubilee",
    name: "쥬빌레",
    nameEn: "Jubilee",
    description: "촘촘히 얹어진 파베 스톤이 줄지어 빛을 더하는 형태. 함께하는 모든 순간을 축제처럼 환하게 밝히는 생동감을 선사합니다.",
    imageSrc: "/images/jubilee.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=14",
  },
  saturn: {
    key: "saturn",
    name: "새턴",
    nameEn: "Saturn",
    description:
      "밴드를 감싸 안는 얇은 고리 디테일이 은은한 행성의 띠를 떠올리게 하는 형태. 깊은 온도로 서정을 감싸 안아줍니다.",
    imageSrc: "/images/saturn.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=21",
  },
  fascinate: {
    key: "fascinate",
    name: "파시넷",
    nameEn: "Fascinate",
    description: "과감하게 떨어지는 사선 스톤 컷이 단번에 시선을 사로잡는 모티프. 매혹적인 포인트 하나로 단조로움을 깨우는 디자인입니다.",
    imageSrc: "/images/fascinate.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=10",
  },
  promise: {
    key: "promise",
    name: "프로미스",
    nameEn: "Promise",
    description: "동그랗고 다정한 밴드 중심에 정갈하게 자리한 단 하나의 스톤. 오랜 시간이 지나도 흐려지지 않을 담백한 약속을 닮았습니다.",
    imageSrc: "/images/promise.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=37",
  },
  focus: {
    key: "focus",
    name: "포커스",
    nameEn: "Focus",
    description: "매끈한 면 위 정중앙 스톤 하나로 흩어진 시선이 집중되는 또렷한 초점. 오직 한 사람에게만 곧게 향하는 곧은 미학입니다.",
    imageSrc: "/images/focus.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=36",
  },
  keystone: {
    key: "keystone",
    name: "키스톤",
    nameEn: "Keystone",
    description: "건축의 쐐기돌을 닮은 각진 컷 디테일. 전체적인 구조를 단단하게 잡아주어 흔들림 없는 당당한 인상을 완성합니다.",
    imageSrc: "/images/keystone.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=35",
  },
  summit: {
    key: "summit",
    name: "써밋",
    nameEn: "Summit",
    description: "밴드 위로 부드럽게 솟아오른 능선 같은 실루엣. 정상을 향해 뻗어나가는 텍스처가 깊고 진한 여운을 남깁니다.",
    imageSrc: "/images/summit.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=33",
  },
  gemstone: {
    key: "gemstone",
    name: "젬스톤",
    nameEn: "Gem Stone",
    description: "스톤들이 일렬로 흐르듯 촘촘히 박혀 화려하게 반짝이는 라인. 밤하늘을 수놓은 은하수처럼 영롱하고 풍성한 빛을 선사합니다.",
    imageSrc: "/images/gemstone.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=38",
  },
  wave: {
    key: "wave",
    name: "웨이브",
    nameEn: "Wave",
    description: "표면을 따라 잔잔하게 파동을 치는 곡선 텍스처. 억지로 꾸미지 않고 물결처럼 자연스럽게 흘러가는 평온함을 전합니다.",
    imageSrc: "/images/wave.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=19",
  },
  stellar: {
    key: "stellar",
    name: "스텔라",
    nameEn: "Stellar",
    description: "사선으로 교차하는 결이 마치 어두운 밤을 비추는 별자리처럼 스톤과 어우러져 섬세하고 기품 있는 반짝임을 피워냅니다.",
    imageSrc: "/images/stellar.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=26",
  },
  romeojuliet: {
    key: "romeojuliet",
    name: "로미오와 줄리엣",
    nameEn: "Romeo & Juliet",
    description: "비대칭으로 입체감 있게 꺾인 컷과 스톤이 극적으로 마주하는 형태. 애틋하면서도 관능적인 감정을 대담하게 연출합니다.",
    imageSrc: "/images/romeojuliet.jpg",
    productUrl: "https://www.athosoo.com/33/?idx=18",
  },
  silverline: {
    key: "silverline",
    name: "실버라인",
    nameEn: "Silver line",
    description: "밴드를 따라 은은하게 이어진 파베 라인의 디테일. 과하지 않게 달빛처럼 스며드는 섬세하고 고요한 광채를 품었습니다.",
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
