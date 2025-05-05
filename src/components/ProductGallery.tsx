import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const productCategories = ["All", "Storage Tanks", "Leisure & Home"];

const allProducts = [
  {
    id: 1,
    name: "Infra Black Water Tank",
    category: "Storage Tanks",
    price: "₹2,200",
    image: "/img/infra2.png",
    new: true,
    description:
      "Heavy-duty black plastic water tank with ribbed design for added durability. Ideal for household and industrial use.",
    tags: ["water tank", "storage", "plastic tank", "infra", "durable"],
  },
  {
    id: 2,
    name: "Colored Water Tank",
    category: "Storage Tanks",
    price: "₹2,500",
    image: "/img/slide-1.png",
    new: false,
    description:
      "Vibrant water tanks available in orange, white, red, and blue. Made from high-quality UV-resistant plastic.",
    tags: ["water tank", "colored", "multi-size", "outdoor", "infra"],
  },
  {
    id: 3,
    name: "Heavy-Duty Black Tanks",
    category: "Storage Tanks",
    price: "₹1,800",
    image: "/img/tanks.png",
    new: false,
    description:
      "Robust cylindrical plastic drums for water or chemical storage. Designed for long-term outdoor use.",
    tags: ["drums", "plastic drums", "chemical storage", "water storage"],
  },
  {
    id: 4,
    name: "Cane-Finish Chair & Table Set",
    category: "Leisure & Home",
    price: "₹3,499",
    image: "/img/whitechair.png",
    new: true,
    description:
      "Stylish white cane-finish plastic chair and table set with a pop of orange cushion. Perfect for patios and balconies.",
    tags: [
      "outdoor furniture",
      "white chair",
      "table set",
      "plastic cane",
      "infra",
    ],
  },
  {
    id: 5,
    name: "Beige Table & chair Set - Cane Finish",
    category: "Leisure & Home",
    price: "₹2,799",
    image: "/img/slide-2.png",
    new: false,
    description:
      "Comfortable and weather-resistant beige plastic armchair with a natural cane texture.",
    tags: ["plastic chair", "armchair", "cane finish", "beige", "patio"],
  },
  {
    id: 6,
    name: "Colored Chairs",
    category: "Leisure & Home",
    price: "₹1,499",
    image: "/img/colorchair.png",
    new: true,
    description:
      "Elegant 3-piece white outdoor set with two cushioned chairs and a round table. Perfect for garden seating.",
    tags: [
      "garden furniture",
      "white plastic",
      "cushion chair",
      "cane finish",
      "infra",
    ],
  },
  {
    id: 7,
    name: "White water tank",
    category: "Storage Tanks",
    price: "₹2,300",
    image: "/img/tank1.png",
    new: true,
    description:
      "Bright orange vertical tank suitable for rooftop water storage. UV-stabilized and leak-proof design.",
    tags: [
      "vertical tank",
      "orange tank",
      "rooftop",
      "water storage",
      "UV proof",
    ],
  },
  ,
  {
    id: 8,
    name: "5-Piece Chair & Table Set",
    category: "Leisure & Home",
    price: "₹4,999",
    image: "/img/chairset.png",
    new: true,
    description: "Elegant 3-piece white outdoor set...",
    tags: ["garden furniture", "white plastic"],
  },
];

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-offwhite">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
            Explore Infra’s Product Range
          </h2>
          <p className="mt-3 text-mediumgray max-w-xl mx-auto">
            From heavy-duty water tanks to elegant cane-finish furniture, Infra
            Industries offers durable, high-quality plastic solutions for both
            storage and lifestyle needs.
          </p>
        </div>

        <Tabs
          defaultValue="All"
          className="w-full"
          onValueChange={(value) => setActiveCategory(value)}
        >
          <TabsList className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-transparent mb-24">
            {productCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-navy data-[state=active]:text-white border border-navy text-navy text-sm px-4 py-2 whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-none shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    {product.new && (
                      <span className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-mediumgray">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-medium text-navy mt-1">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-navy">
                        {product.price}
                      </span>
                      <Button
                        variant="ghost"
                        className="text-navy p-0 hover:text-gold hover:bg-transparent"
                      >
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button className="btn-primary">View All Products</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductGallery;
