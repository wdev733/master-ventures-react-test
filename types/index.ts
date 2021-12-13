export interface ISelected {
  [key: string]: {
    category: string,
    nominee: INominee;
  } | null
}

export interface INominee {
  id: string,
  title: string,
  photoUrL: string,
}

export interface IAward {
  id: string,
  items: INominee[],
  title: string
}

export type Awards = IAward[]
