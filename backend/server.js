const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

let products = [
  {
    id: "1",
    name: "Artisanal Habanero Hot Sauce",
    ingredients: "Habanero peppers, vinegar, garlic, sea salt",
    weight: "5 oz",
    features: "Extra spicy, locally sourced, vegan, gluten-free",
    platform: "amazon",
    generatedTitle: "Artisanal Habanero Hot Sauce - Small Batch Spicy Sauce",
    generatedBullets: "HAND-PICKED HABANEROS: Crafted with the finest locally-sourced peppers for an authentic, fiery kick.\nTANGY GARLIC AROMA: Balanced with hints of organic garlic and vinegar.\nVERSATILE CONDIMENT: Perfect for tacos, eggs, grilled meats, and marinades.\nALL-NATURAL INGREDIENTS: Gluten-free, vegan, and free from preservatives.",
    generatedDescription: "Experience the perfect balance of heat and flavor with our Artisanal Habanero Hot Sauce. Small-batch crafted with hand-picked habanero peppers and savory garlic, this hot sauce adds a mouthwatering zest to any dish.",
    createdAt: new Date("2026-06-28T10:00:00.000Z")
  },
  {
    id: "2",
    name: "Cold-Pressed Rosemary Honey",
    ingredients: "Raw organic honey, fresh rosemary sprigs",
    weight: "12 oz",
    features: "Raw, unfiltered, organic, infused with fresh rosemary",
    platform: "d2c",
    generatedTitle: "Organic Cold-Pressed Rosemary Infused Honey",
    generatedBullets: "100% RAW & UNFILTERED: Harvested from organic wildflower fields for natural goodness.\nINFUSED WITH ROSEMARY: Slowly steeped with fresh rosemary sprigs for a herbal, aromatic finish.\nHEALTH & WELLNESS: Packed with natural antioxidants, enzymes, and soothing properties.\nD2C COMPLIANT: Complete nutrition labeling and ingredient transparency.",
    generatedDescription: "Indulge in the aromatic sweetness of our Cold-Pressed Rosemary Honey. We infuse 100% raw honey with fresh rosemary sprigs to create a rich, herbal syrup that pairs beautifully with cheeses, teas, and baked goods.",
    createdAt: new Date("2026-06-29T09:00:00.000Z")
  },
  {
    id: "3",
    name: "Chai Spice Vegan Cookies",
    ingredients: "Gluten-free oat flour, coconut oil, maple syrup, chai spices",
    weight: "8 oz",
    features: "Vegan, gluten-free, low sugar, organic spices",
    platform: "instagram",
    generatedTitle: "Chai Spice Vegan Cookies - Dairy-Free & Delicious",
    generatedBullets: "AUTHENTIC CHAI SPICES: A warm, aromatic blend of cardamom, cinnamon, cloves, and ginger.\nVEGAN & GLUTEN-FREE: Plant-based ingredients that offer pure indulgence without the guilt.\nNATURALLY SWEETENED: Made with organic maple syrup and low-glycemic coconut sugar.\nINSTAGRAM READY: Vibrant packaging and artisanal look perfect for sharing.",
    generatedDescription: "Treat yourself to our Chai Spice Vegan Cookies! Soft, chewy, and infused with the warm spices of traditional chai, these organic treats are dairy-free, egg-free, and wheat-free. Perfect with a warm cup of oat milk chai latte.",
    createdAt: new Date("2026-06-29T11:30:00.000Z")
  }
];

// Search endpoint (MUST be defined before /api/products/:id)
app.get('/api/products/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(200).json(products);
  }
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.ingredients.toLowerCase().includes(query.toLowerCase())
  );
  res.status(200).json(filtered);
});

// GET /api/products
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// POST /api/products
app.post('/api/products', (req, res) => {
  const { name, ingredients, weight, features, platform, generatedTitle, generatedBullets, generatedDescription } = req.body;
  
  if (!name || !ingredients) {
    return res.status(400).json({ error: "Name and ingredients are required" });
  }
  
  const newProduct = {
    id: (products.length + 1).toString(),
    name,
    ingredients,
    weight: weight || "",
    features: features || "",
    platform: platform || "amazon",
    generatedTitle: generatedTitle || "",
    generatedBullets: generatedBullets || "",
    generatedDescription: generatedDescription || "",
    createdAt: new Date()
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  
  const updatedProduct = {
    ...products[productIndex],
    ...req.body,
    id: req.params.id // ensure ID remains unchanged
  };
  
  products[productIndex] = updatedProduct;
  res.status(200).json(updatedProduct);
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  
  products.splice(productIndex, 1);
  res.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
