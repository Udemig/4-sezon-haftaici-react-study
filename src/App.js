import React from "react";
/* 
    REACT İÇİN COMPONENT
    -> Bir js fonksiyonundan ibarettir.
    -> JSX denilen yapıyı return eder.
    -> Her component return satırı içerisinde 1 tane
    PARENT ELEMENT döndürebilir.
    -> prop'lar vasıtasıyla componentlar istenilen
    şekilde özelleştirilebilir
*/

/* 
  JSX NEDİR?
  -> HTML syntax'ına çok benzeyen bir yazım tarzıdır.
  -> HTML'e benzeyen yazdıklarımızı arka planda
  js koduna dönüştürür.
  -> JSX içerisine js kodu enjekte (inject) edebiliriz.
  bunun içi süslü parantez açılır ve kapatılır. Bu süslü
  parantezler içerisinde js kodu yazılabilir.
*/
/* 
  PROPS
  1. JS fonksiyonlarına gönderilen parametreden hiç bir
  farkı yoktur.
  2. React içinde Component'lar arasında veri alış-verişi
  yapmayı sağlayan yapıdır.
*/

/* 
  React Temel Kavramları
  1. DOM vs VDOM
  2. JSX
  3. React için Component
  4. Props
*/

import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        <input />
        <Button
          title="Search"
          type="secondary"
          iconClass="fa-solid fa-magnifying-glass"
        />
      </div>
      <Card
        title="Card 1"
        description="gdfg dsfsd asdas"
        imgSrc="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
      />
      <Card title="Card 2" description="fgdf fsdf asdas" />
    </div>
  );
}

export default App;
