export const getPostList = async () => {
      const resp = await fetch("https://dummyjson.com/products");
      return await resp.json();
}

export const getSkinList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/skincare");
      return await resp.json();
}

export const getSmartphoneList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/smartphones");
      return await resp.json();
}

export const getFragrancesList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/fragrances");
      return await resp.json();
}

export const getWomenList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/womens-dresses");
      return await resp.json();
}
export const getLaptopList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/laptops");
      return await resp.json();
}
export const getWomenshoesList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/womens-shoes");
      return await resp.json();
}
export const getMenList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/mens-shirts");
      return await resp.json();
}
export const getMenshoesList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/mens-shoes");
      return await resp.json();
}
export const getHomedecorationList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/home-decoration");
      return await resp.json();
}
export const getSunglassesList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/sunglasses");
      return await resp.json();
}
export const getTopsellList = async () => {
      const resp = await fetch("https://dummyjson.com/products/category/womens-watches");
      return await resp.json();
}
