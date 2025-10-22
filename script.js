const inventory = [];

function findProductIndex(productName) {
  // A busca deve ser case-insensitive (usando a versão em minúsculas para encontrar o índice).
  const searchName = productName.toLowerCase();
  // Retorna o índice do produto. O produto.name no array já está em minúsculas.
  return inventory.findIndex((product) => product.name === searchName);
}

function addProduct(product) {
  // Nome em minúsculas para armazenamento e logs
  const productNameLower = product.name.toLowerCase();

  const existingProductIndex = findProductIndex(product.name);

  if (existingProductIndex !== -1) {
    // Produto já existe: atualiza a quantidade.
    inventory[existingProductIndex].quantity += product.quantity;
    // CORREÇÃO: Usa o nome em minúsculas (productNameLower) no log.
    console.log(`${productNameLower} quantity updated`);
  } else {
    // Produto novo: adiciona ao inventário (com o nome em minúsculas).
    inventory.push({
      name: productNameLower,
      quantity: product.quantity,
    });
    // CORREÇÃO: Usa o nome em minúsculas (productNameLower) no log.
    console.log(`${productNameLower} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  // Nome em minúsculas para os logs
  const productNameLower = productName.toLowerCase();

  // A busca usa o nome original/argumento (internamente é convertido para minúsculas)
  const existingProductIndex = findProductIndex(productName);

  // 1. Produto não encontrado
  if (existingProductIndex === -1) {
    // Log exigido: <product-name> not found
    // CORREÇÃO: Usa o nome em minúsculas (productNameLower) no log.
    console.log(`${productNameLower} not found`);
    return;
  }

  const product = inventory[existingProductIndex];
  const currentQuantity = product.quantity;

  // 2. Quantidade insuficiente
  if (currentQuantity < quantity) {
    // Log exigido: Not enough <product-name> available, remaining pieces: <product-quantity>
    // CORREÇÃO: Usa o nome em minúsculas (productNameLower) no log.
    console.log(
      `Not enough ${productNameLower} available, remaining pieces: ${currentQuantity}`
    );
    return;
  }

  // 3. Remoção bem-sucedida
  product.quantity -= quantity;

  // Log exigido: Remaining <product-name> pieces: <product-quantity>
  // CORREÇÃO: Usa o nome em minúsculas (productNameLower) no log.
  console.log(`Remaining ${productNameLower} pieces: ${product.quantity}`);

  // 4. Remove o produto se a quantidade for zero ou menos (após a subtração)
  if (product.quantity <= 0) {
    inventory.splice(existingProductIndex, 1);
  }
}
