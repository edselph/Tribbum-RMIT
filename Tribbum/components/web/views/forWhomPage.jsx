import CloudsHero from "@/components/web/elements/cloudsHero/cloudsHero";

/* eslint-disable @next/next/no-img-element */
const ForWhomPage = () => {
  return (
    <>
      <div
        id="hero scene"
        className="flex flex-col w-full h-auto items-center font-system relative "
      >
        <CloudsHero />
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] h-auto px-4 md:mt-[80px] justify-between items-center z-40">
          <div className="flex flex-col w-auto lg:w-[515px] xl:-full h-auto lg:pl-4 xl:pl-0 mt-8 lg:mt-0 justify-center items-center lg:items-start">
            <h1 className="hidden md:flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
              ¿A quién va dirigido
              <br />
              TRIBBUM?
            </h1>
            <h1 className="flex md:hidden w-auto h-auto my-4 text-[44px] text-primary-500 font-bold text-center leading-snug">
              ¿A quién va dirigido TRIBBUM?
            </h1>
            <div className="flex flex-col w-full max-w-[555px] mt-5">
              <p className="text-primary-500 font-normal text-[26px] leading-relaxed text-center lg:text-left">
                A familias monoparentales, separados, personas mayores, familias
                tradicionales, homoparentales, solteros o familias sin hijos.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-center">
            <img
              src="/assets/images/for-whom.png"
              alt="Iphone tribbum app for whom screen"
              className="flex w-auto h-auto"
            />
          </div>
        </div>
      </div>

      <div
        id="monoparental family"
        className="flex flex-col w-full h-auto mt-24 items-center font-system bg-secondary-100 z-50 relative"
      >
        <div className="flex flex-row lg:hidden w-full h-auto mt-12 justify-end">
          <img
            src="/assets/images/section1-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-[90vw] h-auto"
          />
        </div>
        <div className="hidden lg:flex absolute lg:bottom-[380px] xl:bottom-[200px] lg:-right-[136px] xl:right-0 w-auto h-auto z-20">
          <img
            src="/assets/images/section1-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex lg:w-[80%] xl:w-auto h-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pb-16 items-center lg:items-center relative z-40">
          <div className="flex flex-col w-full sm:max-w-[510px] md:max-w-[690px] lg:max-w-[465px] xl:max-w-[555px] h-auto mt-16 lg:mt-24 items-start gap-4 z-50">
            <h2 className="text-primary-500 font-medium text-[30px] leading-snug text-left">
              Familias monoparentales o custodias compartidas
            </h2>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Es una tendencia creciente como modelo de familia y se enfrentan a
              mayores dificultades para poder hacer compatible los cuidados
              familiares con el trabajo remunerado fuera del hogar, un trabajo
              que muchas veces cuenta con horarios imposibles y sin la
              posibilidad de reducir las jornadas. Dado los gastos que incurren
              versus los salarios, y teniendo en cuenta que en muchas ocasiones
              se deben mantener los gastos de la hipoteca de la antigua vivienda
              familiar, el acceso a la vivienda es uno de sus mayores retos.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Los acuerdos establecidos en cuanto a la regulación de la custodia
              compartida pueden ser muy variados (que los hijos vivan por
              períodos equivalentes de tiempo con cada uno de los progenitores,
              fines de semana alternos, que los hijos permanezcan en la vivienda
              familiar y sean los progenitores quienes se turnen, etc). Por todo
              ello, en Tribbum podrán encontrar a personas con las mismas
              necesidades de modo que aparte de reducir gastos también se pueden
              lograr sinergias coordinando los horarios laborables para hacer
              frente a los cuidados del total de menores que residen en el
              hogar.
            </p>
          </div>
        </div>
      </div>
      <div
        id="older people experience"
        className="flex flex-col w-full h-auto mt-36 items-center font-system bg-white z-50 relative"
      >
        <div className="flex flex-row lg:hidden w-full h-auto mt-12 justify-start">
          <img
            src="/assets/images/section2-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-[80vw] h-auto"
          />
        </div>
        <div className="hidden lg:flex absolute lg:top-[60px] xl:bottom-[300px] lg:left-0 xl:right-0 w-auto h-auto z-20">
          <img
            src="/assets/images/section2-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-full lg:w-[66%] xl:w-[32%] h-auto"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pb-16 items-center lg:justify-end relative z-40">
          <div className="flex flex-col w-full sm:max-w-[510px] md:max-w-[690px] lg:max-w-[465px] xl:max-w-[555px] h-auto mt-16 lg:mt-24 items-end gap-4 z-50">
            <h2 className="text-primary-500 font-medium text-[30px] leading-snug text-left">
              Aprende de la experiencia (personas mayores)
            </h2>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Cada vez más personas mayores se encuentran en situación de
              soledad en España, personas que viven solas y que se sienten
              solas. Además muchas de ellas presentan situaciones económicas
              precarias. Numerosos estudios respaldan los beneficios que aporta
              la convivencia entre mayores y pequeños, donde los más pequeños
              reciben sabiduría, mejoran sus habilidades sociales, especialmente
              la empatía, el respeto y la tolerancia hacia lo diferente,
              mientras que los mayores ganan en longevidad, autoestima, en
              relaciones y la sensación de ser todavía útiles para la sociedad.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Es una necesidad realizar cambios importantes en nuestra sociedad,
              en el modelo de convivencia que implique una mayor solidaridad así
              como el fortalecimiento y adaptación de las políticas de bienestar
              y de cohesión social.
            </p>
          </div>
        </div>
      </div>
      <div
        id="homo-parental family"
        className="flex flex-col w-full h-auto mt-36 items-center font-system bg-secondary-100 z-50 relative"
      >
        <div className="flex flex-row lg:hidden w-full h-auto mt-12 justify-end">
          <img
            src="/assets/images/section4-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-[90vw] h-auto"
          />
        </div>
        <div className="hidden lg:flex absolute lg:bottom-20 xl:bottom-200 lg:-right-[200px] w-auto h-auto z-20">
          <img
            src="/assets/images/section4-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex lg:w-[70%] xl:w-[70%] h-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pb-16 items-center lg:items-center relative z-40">
          <div className="flex flex-col w-full sm:max-w-[510px] md:max-w-[690px] lg:max-w-[465px] xl:max-w-[555px] h-auto mt-16 lg:mt-24 items-start gap-4 z-50">
            <h2 className="text-primary-500 font-medium text-[30px] leading-snug text-left">
              Familia homoparental o tradicional (padres, madres e hijo/s)
            </h2>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Familias que se encontraban en una situación normalizada pero
              debido a la prolongación de la crisis, y principalmente, a causa
              de la pérdida del empleo de uno o de todos los miembros de la
              unidad familiar, las ha convertido en un colectivo de especial
              vulnerabilidad. En muchos casos la ausencia de ingresos les impide
              hacer frente al pago de las hipotecas o de los alquileres.
            </p>
          </div>
        </div>
      </div>
      <div
        id="other family or people"
        className="flex flex-col w-full h-auto xl:h-[500px] mt-16 lg:mt-0 items-center font-system bg-white z-50 relative"
      >
        <div className="flex flex-row lg:hidden w-full h-auto mt-12 justify-start">
          <img
            src="/assets/images/section5-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-[80vw] h-auto"
          />
        </div>
        <div className="hidden lg:flex absolute lg:top-[20px] xl:top-[100px] lg:left-0 xl:right-0 w-auto h-auto z-20">
          <img
            src="/assets/images/section5-forwhom.png"
            alt="Iphone tribbum app for whom screen"
            className="flex w-full lg:w-[56%] xl:w-auto h-auto xl:h-[300px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pb-16 items-center lg:justify-end relative z-40">
          <div className="flex flex-col w-full sm:max-w-[510px] md:max-w-[690px] lg:max-w-[465px] xl:max-w-[555px] h-auto mt-16 lg:mt-24 items-end z-50">
            <div className="flex flex-col w-auto h-auto gap-4 items-center lg:items-start">
              <h2 className="text-primary-500 font-medium text-[30px] leading-snug text-left">
                Familias sin hijos u otros
              </h2>
              <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
                Y por supuesto damos cabida a parejas sin hijos, solteros u
                otras personas que deseen compartir un hogar con los perfiles
                por los que Tribbum se caracteriza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForWhomPage;
