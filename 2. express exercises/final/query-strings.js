const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products/">Products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
//to get the products according to the id we put in the url]
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});
//to serach for items starting with a particular letter and limit means how many products I want
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("sever is listening on port 5000");
});
