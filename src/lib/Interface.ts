export interface IUsePaginParams {
  totalCount: number;
  nodes: any | IPost[];
}

export interface PagingResult {
  currentPage: number;
  currentPageNum: number;
  result: {
    nodes: IPost[];
    pageBtn: IPost[][];
    pageClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
    leftArrowHandler: () => void;
    rightArrowHandler: () => void;
  };
}

export interface IPost {
  readonly id: string;
  readonly excerpt: string | null;
  readonly frontmatter: {
    readonly category: string | null;
    readonly categoryData: string | null;
    readonly title: string | null;
    readonly upload: string | null;
    readonly update: string | null;
  } | null;
}

export interface IPagingParams {
  result: PagingResult;
  totalCount: number;
}
