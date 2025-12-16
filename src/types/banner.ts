export interface MainBannerItem {
    imgurl: string;
    title: string;
    subtitle: string;
}

export interface MainBannerJson {
    mainBanner: MainBannerItem[];
}

export interface MainProduct {
  title: string
  products: ProductItem[]
}

export interface ProductItem {
  brand?: string
  name: string
  price_sell: number
  price_original: number
  delivery: string
  image; string
}

export interface MainProductResponse {
  mainProduct: MainProduct
}