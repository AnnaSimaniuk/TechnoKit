const structureDataToStore = (action) => {
  const itemsCart = action.map((item) => {
    return {
      id: item.product._id,
      image: item.product.imageUrls[0],
      alt: item.product.name,
      description: item.product.name,
      currentPrice: item.product.currentPrice,
      cartQuantity: item.cartQuantity,
      itemNo: item.itemNo,
    };
  });
  return [...itemsCart];
};

const structureDataFromLS = () => {
  const cartLS = JSON.parse(localStorage.getItem("shoppingCart"));
  const products = cartLS.map((item) => {
    return {
      product: item.id,
      cartQuantity: item.cartQuantity,
    };
  });
  return {
    products: [...products],
  };
};

const concatDataCarts = (dataDB, dataLS) => {
  const dataAllItems = [...dataDB, ...dataLS];

  const products = dataAllItems.map((item) => {
    return {
      product: item.id,
      cartQuantity: item.cartQuantity,
    };
  });
  return {
    products: [...products],
  };
};

export { structureDataToStore, structureDataFromLS, concatDataCarts };