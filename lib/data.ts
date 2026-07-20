export type RingKey = "node" | "segment" | "haze";

export interface RingProduct {
  key: RingKey;
  name: string;
  nameEn: string;
  description: string;
  /** 웹앱 안에 직접 표시되는 이미지 경로. public/images/ 폴더 기준 (예: "/images/node.jpg") */
  imageSrc: string;
  /** 아뜰리에호수 실제 상품 상세페이지 링크 (자세히 보기 버튼용) */
  productUrl: string;
}

export const RINGS: Record<RingKey, RingProduct> = {
  node: {
    key: "node",
    name: "노드",
    nameEn: "Node",
    description:
      "서로 다른 시간과 기억이 쌓여 만들어진 관계를 상징하며, 빛을 받을 때마다 구조적인 리듬감과 단단한 인상을 전함.",
    // TODO: 실제 상품 사진으로 교체 → public/images/node.jpg 에 파일을 넣고 아래 경로를 바꿔주세요.
    imageSrc: "/images/node.svg",
    productUrl: "https://www.athosoo.com/564760259/?idx=43",
  },
  segment: {
    key: "segment",
    name: "세그먼트",
    nameEn: "Segment",
    description:
      "분리된 선과 면은 각자의 형태를 지니면서도 자연스럽게 맞물려 조화를 이루고, 그 안에서 단단하지만 부드러운 균형을 만들어냄.",
    // TODO: 실제 상품 사진으로 교체 → public/images/segment.jpg
    imageSrc: "/images/segment.svg",
    productUrl: "https://www.athosoo.com/564760259/?idx=42",
  },
  haze: {
    key: "haze",
    name: "헤이즈",
    nameEn: "Haze",
    description:
      "아지랑이처럼 미세한 결들이 주는 질감과 잡힐 듯 말 듯한 섬세한 감정을 담아내며, 은은하고 깊은 인상을 전함.",
    // TODO: 실제 상품 사진으로 교체 → public/images/haze.jpg
    imageSrc: "/images/haze.svg",
    productUrl: "https://www.athosoo.com/564760259/?idx=41",
  },
};

export interface Branch {
  key: string;
  name: string;
  reservationUrl: string;
}

// 지점은 이 배열만 수정하면 언제든 추가/변경 가능합니다.
export const BRANCHES: Branch[] = [
  {
    key: "jamsil",
    name: "아뜰리에호수 잠실",
    reservationUrl: "https://naver.me/5ZJxvKB4",
  },
  {
    key: "hongdae",
    name: "아뜰리에호수 홍대",
    reservationUrl: "https://naver.me/FdCxo0jb",
  },
  {
    key: "hyehwa",
    name: "아뜰리에호수 혜화",
    reservationUrl: "https://naver.me/FHlgAjpk",
  },
];

export const STYLE_OPTIONS = ["실버", "골드", "로즈골드", "매트", "유광"] as const;
