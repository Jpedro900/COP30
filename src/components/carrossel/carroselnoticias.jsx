import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Carousel() {
  const settings = {
    centerPadding: '0',
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className=' mb-6 mx-auto bg-transparent'>
      <div className=' px-10'>
        <h1 className=' font-Header text-3xl text-justify'>
            Novo PAC chega ao Pará e intensifica investimentos para a COP-30
        </h1>
        <p className=' text-justify mt-3 font-Body'>
            O Governo Federal está realizando investimentos significativos no estado do Pará para prepará-lo para sediar a COP-30 em 2025. Através do Novo PAC, está sendo priorizada a melhoria da infraestrutura em áreas cruciais como saúde, educação, habitação e infraestrutura. Essas iniciativas têm como objetivo não apenas garantir o êxito do evento de escala global, mas também deixar um legado duradouro, promovendo o desenvolvimento sustentável e elevando a qualidade de vida dos paraenses, ao mesmo tempo em que impulsionam a economia regional. Esse compromisso reflete o empenho do governo em fortalecer o diálogo com os estados e municípios, buscando parcerias e planejamento consistente para impulsionar o progresso nacional. O pacote de obras também visa a retomada de projetos essenciais, como unidades básicas de saúde e habitações populares, demonstrando uma abordagem abrangente para atender às necessidades da população local e preparar o estado para os desafios e oportunidades futuras.
        </p>
        <a target='_blank' href="https://www.gov.br/casacivil/pt-br/assuntos/noticias/2023/novembro/novo-pac-chega-ao-para-e-intensifica-investimentos-para-a-cop-30" className='  text-xl text-blue-800 font-bold underline '>saiba mais</a>
      </div>
      <div>
            <img src={img1} alt="Image 1" className=' h-[439px]'/>
      </div>
      <div className=' px-10'>
        <h1 className=' font-Header text-3xl text-justify'>
            Comitê Técnico de preparação para COP-30 realiza primeira reunião na Casa Civil
        </h1>
        <p className=' text-justify mt-3 font-Body'>
            O planejamento para a realização da COP-30 em Belém/PA, em 2025, teve início com a primeira reunião do Comitê Técnico, coordenado pela Casa Civil e composto por ministérios e representantes do estado e município. O objetivo principal é definir a estrutura de governança e encaminhar as principais ações necessárias para a organização do evento. Será elaborado um Plano de Trabalho para supervisionar projetos de infraestrutura, logística e obras. Paralelamente, o Brasil aguarda a confirmação de sua candidatura à ONU na próxima COP, enquanto o secretariado da convenção de clima realizará visitas técnicas para avaliar a preparação em Belém.
        </p>
        <a target='_blank' href="https://www.gov.br/casacivil/pt-br/assuntos/noticias/2023/agosto/comite-tecnico-de-preparacao-para-cop-30-realiza-primeira-reuniao-na-casa-civil" className='  text-xl text-blue-800 font-bold underline '>saiba mais</a>
      </div>
      <div>
        <img src={img2} alt="Image 1" className=' h-[439px]'/>
      </div>
      <div className=' px-10'>
        <h1 className=' font-Header text-3xl text-justify'>
            ONU confirma Belém (PA) como sede da COP-30, a conferência para o clima
        </h1>
        <p className=' text-justify mt-3 font-Body'>
            O presidente Luiz Inácio Lula da Silva anunciou que o Brasil sediará a 30ª Conferência da ONU sobre Mudanças Climáticas (COP-30) em novembro de 2025, em Belém (PA). A decisão, fruto do pleito do próprio presidente durante a COP-27 no Egito, visa destacar a importância da Amazônia como tema central. Confirmada pela ONU, essa será a primeira vez que o Brasil sediará um evento dessa magnitude sobre mudanças climáticas, o que representa um marco histórico. A COP é uma reunião anual de líderes mundiais para debater soluções contra o aquecimento global e criar alternativas sustentáveis para o planeta. O governador do Pará destacou o privilégio e a responsabilidade de sediar uma conferência tão relevante, expressando o compromisso do estado com o desenvolvimento sustentável. O presidente Lula reforçou o apoio federal ao evento, destacando a hospitalidade e competência do povo paraense para garantir o sucesso da COP-30 em Belém.
        </p>
        <a target='_blank' href="https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2023/05/onu-confirma-belem-pa-como-sede-da-cop-30-conferencia-para-o-clima" className='  text-xl text-blue-800 font-bold underline '>saiba mais</a>
      </div>
      <div>
      <img src={img3} alt="Image 1" className=' h-[439px]'/>
      </div>
    </Slider>
  );
}

export default Carousel;

