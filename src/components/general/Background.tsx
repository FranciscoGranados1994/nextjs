/* React */
import React, { useState, useEffect } from 'react';

/* style and animation */
import style from '../../../styles/Background.module.css';
import Map from '../../../public/Map.svg';
import Hire from '../../../public/Hire.svg';
import Navigation from '../../../public/Navigation.svg';
import Traveling from '../../../public/Traveling.svg';

/* 
Main component
  Background

ChildComponents
  Carousel
  MobileBackground

*/

const Carousel: React.FC = () => {
  const [stop, setStop] = useState<boolean>(true);
  const [sections, setSection] = useState<Record<string, boolean>>({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });
  const [numberOption, setNumberOption] = useState<number>(1);

  useEffect(() => {
    let counter: number = numberOption;
    let sectionProperty: string;

    const updatedSections = async (currentSection: string) => {
      let updateSections: Record<string, boolean> = {};

      await Object.keys(sections).map((section) => {
        let status = false;
        if (section === currentSection) status = true;

        updateSections = { ...updateSections, [section]: status };
      });

      await setSection(updateSections);
    };

    const intervalProcess = setInterval(() => {
      if (counter >= 4) {
        counter = 1;
      } else {
        counter += 1;
      }

      /* Assign the css class name  */
      switch (counter) {
        case 1:
          sectionProperty = 'first';
          break;
        case 2:
          sectionProperty = 'second';
          break;
        case 3:
          sectionProperty = 'third';
          break;
        case 4:
          sectionProperty = 'fourth';
          break;
        default:
          break;
      }

      updatedSections(sectionProperty);
    }, 4000);

    return () => clearInterval(intervalProcess);
  }, [stop]);



  async function setOption(option: number) {
    await setNumberOption(option);

    let sectionProperty: string;
    let updateSections: Record<string, boolean> = {};

    /* Assign the css class name  */
    switch (option) {
      case 1:
        sectionProperty = 'first';
        break;
      case 2:
        sectionProperty = 'second';
        break;
      case 3:
        sectionProperty = 'third';
        break;
      default:
        sectionProperty = 'fourth';
        break;
    }

    await Object.keys(sections).map((section) => {
      let status = false;
      if (section === sectionProperty) status = true;

      updateSections = { ...updateSections, [section]: status };
    });

    await setSection(updateSections);

    setStop(!stop);
  }

  return (
    <div className={style.main}>
      {/* background that will change */}
      <div className={sections.first ? style.color_1_active : style.color_1}> </div>
      <div className={sections.second ? style.color_2_active : style.color_2}></div>
      <div className={sections.third ? style.color_3_active : style.color_3}></div>
      <div className={sections.fourth ? style.color_4_active : style.color_4}></div>

      {/* changes carousel's option */}
      <div className={style.div_container}>
        <div className={style.div_options}>
          <div
            className={sections.first ? style.div_option_active : style.div_option}
            onClick={() => { setOption(1); }}
          ></div>
          <div
            className={sections.second ? style.div_option_active : style.div_option}
            onClick={() => { setOption(2); }}
          ></div>
          <div
            className={sections.third ? style.div_option_active : style.div_option}
            onClick={() => {
              setOption(3);
            }}
          ></div>
          <div
            className={sections.fourth ? style.div_option_active : style.div_option}
            onClick={() => {
              setOption(4);
            }}
          ></div>
        </div>
      </div>
      {/* section according to carousel's section active */}
      <div className={style.div_carousel}>
        <div
          className={sections.first ? style.section_one_active : style.section_one}
        >
          Primera opcion de texto
          <Map className={style.logo} />
        </div>
        <div
          className={sections.second ? style.section_two_active : style.section_two}
        >
          second opcion de texto
          <Hire className={style.logo} />
        </div>
        <div
          className={sections.third ? style.section_two_active : style.section_two}
        >
          Tercera opcion de texto
          <Traveling className={style.logo} />
        </div>

        <div
          className={sections.fourth ? style.section_two_active : style.section_two}
        >
          Cuarta opcion de texto
          <Navigation className={style.logo} />
        </div>
      </div>
    </div>
  );
};

const BackgroundMobile: React.FC = () => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  function displayLoginSection(): void {
    window.scroll({
      top: height,
      behavior: 'smooth',
    });
  }

  return (
    <div className={style.div_mobile}>
      <Traveling className={style.logotipo} />
      <h1 className={style.h1_title}>C-RIDE</h1>
      <p className={style.p_slang}>Crea y comparte rides atraves de la ciudad</p>
      <button
        className={style.button_display}
        onClick={() => {
          displayLoginSection();
        }}
      >
        Inicia aqui
      </button>
    </div>
  );
};


const BackGround: React.FC = () => {
  const [widthScreen, setWith] = useState<number>();
  const [activeCarousel, setActiveCarousel] = useState<boolean>(true);

  useEffect(() => {

    /* display a different background according to screen resolution*/
    setWith(window.innerWidth);

    const handleSize = async () => {
      await setWith(window.innerWidth);
      if (window.innerWidth < 800) {
        setActiveCarousel(false);
      } else {
        setActiveCarousel(true);
      }
    };

    handleSize();

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };

  }, []);

  return (
    <div className={style.main}>
      {activeCarousel ? <Carousel /> : <BackgroundMobile />}
    </div>
  );
};

export default BackGround;
