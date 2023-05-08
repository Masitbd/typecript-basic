interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  function filterProducts<T extends Product, K extends keyof T>(
    products: T[],
    criterion: K,
    value: T[K]
  ): T[] {
    return products.filter(product => product[criterion] === value);
  }
  

  const products: Product[] = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 }
  ];
  
  const filteredProducts = filterProducts(products, 'price', 20);
  console.log(filteredProducts);
  // Output: [{ id: 2, name: 'Product B', price: 20 }]



  // exercise 4

  type ProductTuple = [string, number, number];
  type ProductArray = Array<ProductTuple>;

function calculateTotalCost(products: ProductArray): number {
  let totalCost = 0;
  for (let i = 0; i < products.length; i++) {
    const [name, price, quantity] = products[i];
    totalCost += price * quantity;
  }
  return totalCost;
}
  