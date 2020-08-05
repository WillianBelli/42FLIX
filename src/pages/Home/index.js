import React, { useEffect, useState } from 'react';
// import Menu from '../../Components/Menu'
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
// import Footer from '../../Components/Footer';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../Components/PageDefault';

function Home() {

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        console.log(categoriesWithVideos[0].videos[0]);
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

{initialData.map((categoria, indice) => {
  if (indice === 0) {
    return (
      <div key={categoria.id}>
        <BannerMain
          videoTitle={initialData[0].videos[0].titulo}
          url={initialData[0].videos[0].url}
          videoDescription={initialData[0].videos[0].description}
        />
        <Carousel
          ignoreFirstVideo
          category={initialData[0]}
        />
      </div>
    );
  }

  return (
    <Carousel
      key={categoria.id}
      category={categoria}
    />
  );
})}

    

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}
    </PageDefault>
  );
}

export default Home;
