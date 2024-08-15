import React, { useState } from "react";
import { Container, SimpleGrid, Text } from "@mantine/core";
import classes from "./productsCards.module.css";
import ProductCard from "./productCards";
import products12 from "./productDummy12";

function ProductList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Container size="lg">
        <div>
          <h3 className={classes.productListProtein}>PROTEİN</h3>
        </div>
        <SimpleGrid cols={4}>
          {products12.map((product) => (
            <ProductCard key={product.id} product={product} height={277} />
          ))}
        </SimpleGrid>
        <Text mt="xl" mb="xl" className={classes.productListBelowText}>
          Toplam 12 ürün gösteriliyor.
        </Text>
        <div>
          <p>
            <strong>Proteinler,</strong> vücudun temel yapı taşlarıdır ve kasların,
            dokuların, enzimlerin ve hormonların üretiminde önemli rol oynar.
            Vücudun
            {!isExpanded && <span id="dots">...</span>}
            {isExpanded && (
              <span id="more">
                &nbsp;enerji kaynağı olarak kullanılabilen proteinler,
                hücrelerin onarımında ve yeni hücrelerin üretiminde gereklidir.
                Beslenme düzeninde yeterli miktarda protein almak, bağışıklık
                sistemini güçlendirir ve metabolizmayı destekler. Et, balık,
                yumurta, süt ürünleri, baklagiller ve bazı tahıllar, zengin
                protein kaynakları arasında yer alır. Yeterli protein tüketimi,
                sporcular ve aktif bireyler için kas kütlesinin korunması ve
                geliştirilmesi açısından özellikle önemlidir.
              </span>
            )}
          </p>
          <Text
            onClick={toggleReadMore}
            id="myBtn"
            mb="xl"
            style={{ cursor: "pointer", color: "blue" }}
          >
            {isExpanded ? <u>Daha Az Göster</u> : <u>Daha Fazla Göster</u>}
          </Text>
        </div>
      </Container>
    </>
  );
}

export default ProductList;
