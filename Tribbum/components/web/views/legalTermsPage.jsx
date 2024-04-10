/* eslint-disable @next/next/no-img-element */
import CloudsHero from "../elements/cloudsHero/cloudsHero";

const data = [
  { title: "Razón social", content: "LAIA PAPIOL SOLER" },
  { title: "NIF", content: "47633306F" },
  {
    title: "Dirección postal",
    content: "C/Mallorca,342 5º3ª 08013, Barcelona",
  },
  { title: "Correo electrónico", content: "info@tribbum.com" },
  { title: "Nombre commercial", content: "N0415075(9) - TRIBBUM" },
];

const LegalTermsPage = () => {
  return (
    <div className="flex flex-col w-full h-auto pb-36 items-center font-system relative">
      <CloudsHero />
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] h-auto px-4 pt-12 md:pt-0 md:mt-[120px] justify-between items-center z-40">
          <div className="flex flex-col w-full lg:w-2/5 h-auto lg:pl-4 xl:pl-0 justify-center items-center lg:items-start">
            <h1 className="flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
              Aviso legal
            </h1>
          </div>
          <div className="flex flex-col w-auto lg:w-3/5 h-auto pt-12 lg:pt-0 pl-12 justify-center">
            <img
              src="/assets/images/legal-terms.png"
              alt="Iphone tribbum app legal terms illustration"
              className="flex w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto items-center mt-36 bg-white z-40 ">
        <div className="flex flex-col w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pt-12 items-center">
          <div className="flex flex-col w-full h-auto items-center mt-16">
            <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
              Introducción
            </h2>
            <p className="text-lg text-primary-500 font-normal mt-6 text-left">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
              la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
              LAIA PAPIOL SOLER informa que es titular del sitio web. De acuerdo
              con la exigencia del artículo 10 de la citada Ley, LAIA PAPIOL
              SOLER informa de los siguientes datos:
            </p>
          </div>
          <div className="flex flex-col w-3/5 h-auto mt-6 gap-1">
            {data.map((item) => {
              return (
                <div key={item.title} className="flex flex-row w-full h-auto ">
                  <div className="flex w-1/3 h-auto py-2 px-4 justify-start items-center bg-primary-500 border border-primary-500">
                    <p className="text-base text-white font-semibold text-left">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex w-2/3 h-auto py-2 px-4 justify-start items-center border border-primary-500">
                    <p className="text-base text-primary-500 font-semibold text-left">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-full h-auto items-center mt-16">
            <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
              Usuario y régimen de responsabilidades
            </h2>
            <p className="text-lg text-primary-500 font-normal mt-4 text-left">
              La navegación, acceso y uso por el sitio web de LAIA PAPIOL SOLER
              confiere la condición de usuario, por la que se aceptan, desde la
              navegación por el sitio web de LAIA PAPIOL SOLER, todas las
              condiciones de uso aquí establecidas sin perjuicio de la
              aplicación de la correspondiente normativa de obligado
              cumplimiento legal según el caso.
            </p>
            <p className="text-lg text-primary-500 font-normal mt-6 text-left">
              El sitio web de LAIA PAPIOL SOLER proporciona gran diversidad de
              información, servicios y datos. El usuario asume su
              responsabilidad en el uso correcto del sitio web. Esta
              responsabilidad se extenderá a:
            </p>
            <div className="flex flex-col w-full h-auto items-left pl-8">
              <ul className="list-disc list-inside text-lg text-primary-500 font-normal mt-4 text-left gap-4">
                <li>
                  La veracidad y licitud de las informaciones aportadas por el
                  usuario en los formularios extendidos por LAIA PAPIOL SOLER
                  para el acceso a ciertos contenidos o servicios ofrecidos por
                  el web.
                </li>
                <li className="mt-4">
                  El uso de la información, servicios y datos ofrecidos por LAIA
                  PAPIOL SOLER contrariamente a lo dispuesto por las presentes
                  condiciones, la Ley, la moral, las buenas costumbres o el
                  orden público, o que de cualquier otro modo puedan suponer
                  lesión de los derechos de terceros o del mismo funcionamiento
                  del sitio web.
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full h-auto items-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Políticas de enlaces y extenciones de responsabilidad
              </h2>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                LAIA PAPIOL SOLER no se hace responsable del contenido de los
                sitios web a los que el usuario pueda acceder a través de los
                enlaces establecidos en su sitio web y declara que en ningún
                caso procederá a examinar o ejercitar ningún tipo de control
                sobre el contenido de otros sitios de la red. Asimismo, tampoco
                garantizará la disponibilidad técnica, exactitud, veracidad,
                validez o legalidad de sitios ajenos a su propiedad a los que se
                pueda acceder por medio de los enlaces.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                LAIA PAPIOL SOLER declara haber adoptado todas las medidas
                necesarias para evitar cualquier daño a los usuarios de su sitio
                web, que pudieran derivarse de la navegación por su sitio web.
                En consecuencia, LAIA PAPIOL SOLER no se hace responsable, en
                ningún caso, de los eventuales daños que por la navegación por
                Internet pudiera sufrir el usuario.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto items-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Modificaciones
              </h2>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                LAIA PAPIOL SOLER se reserva el derecho a realizar las
                modificaciones que considere oportunas, sin aviso previo, en el
                contenido de su sitio web. Tanto en lo referente a los
                contenidos del sitio web, como en las condiciones de uso del
                mismo, o en las condiciones generales de contratación. Dichas
                modificaciones podrán realizarse a través de su sitio web por
                cualquier forma admisible en derecho y serán de obligado
                cumplimiento durante el tiempo en que se encuentren publicadas
                en el web y hasta que no sean modificadas válidamente por otras
                posteriores.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto items-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Propiedad intellectual e industrial
              </h2>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                LAIA PAPIOL SOLER por sí misma o como cesionaria, es titular de
                todos los derechos de propiedad intelectual e industrial de su
                página web, así como de los elementos contenidos en la misma (a
                título enunciativo, imágenes, sonido, audio, vídeo, software o
                textos; marcas o logotipos, combinaciones de colores, estructura
                y diseño, selección de materiales usados, programas de ordenador
                necesarios para su funcionamiento, acceso y uso, etc.),
                titularidad de LAIA PAPIOL SOLER. Serán, por consiguiente, obras
                protegidas como propiedad intelectual por el ordenamiento
                jurídico español, siéndoles aplicables tanto la normativa
                española y comunitaria en este campo, como los tratados
                internacionales relativos a la materia y suscritos por España.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                Todos los derechos reservados. En virtud de lo dispuesto en la
                Ley de Propiedad Intelectual, quedan expresamente prohibidas la
                reproducción, la distribución y la comunicación pública,
                incluida su modalidad de puesta a disposición, de la totalidad o
                parte de los contenidos de esta página web, con fines
                comerciales, en cualquier soporte y por cualquier medio técnico,
                sin la autorización de LAIA PAPIOL SOLER.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                El usuario se compromete a respetar los derechos de Propiedad
                Intelectual e Industrial titularidad de LAIA PAPIOL SOLER. Podrá
                visualizar los elementos del portal e incluso imprimirlos,
                copiarlos y almacenarlos en el disco duro de su ordenador o en
                cualquier otro soporte físico siempre y cuando sea, única y
                exclusivamente, para su uso personal y privado. El usuario
                deberá abstenerse de suprimir, alterar, eludir o manipular
                cualquier dispositivo de protección o sistema de seguridad que
                estuviera instalado en las páginas de LAIA PAPIOL SOLER.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto items-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Certificado SSL (SecureSockets layer)
              </h2>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                El CERTIFICADO SSL proporciona autenticación, privacidad y
                seguridad de la información entre LAIA PAPIOL SOLER y el
                usuario. LAIA PAPIOL SOLER dispone de un certificado de
                seguridad que se utiliza por CERTIFICADO SSL para realizar
                conexiones seguras.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                En este proceso se establecen varios parámetros para realizar la
                conexión de forma segura y se establece usando llaves
                preestablecidas, codificando y descodificando todos los datos
                enviados hasta que la conexión sea cerrada.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto items-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Acciones legales, legislación apliaca y jurisdicción
              </h2>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                LAIA PAPIOL SOLER se reserva, asimismo, la facultad de presentar
                las acciones civiles o penales que considere oportunas por la
                utilización indebida de su sitio web y contenidos, o por el
                incumplimiento de las presentes condiciones.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                La relación entre el usuario y el prestador se regirá por la
                normativa vigente y de aplicación en el territorio español. De
                surgir cualquier controversia las partes podrán someter sus
                conflictos a arbitraje o acudir a la jurisdicción ordinaria
                cumpliendo con las normas sobre jurisdicción y competencia al
                respecto. LAIA PAPIOL SOLER tiene su domicilio en BARCELONA,
                España.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                Los contratos celebrados por vía electrónica en los que
                intervenga como parte un consumidor se presumirán celebrados en
                el lugar en que éste tenga su residencia habitual.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                Los contratos electrónicos entre empresarios o profesionales, en
                defecto de pacto entre las partes, se presumirán celebrados en
                el lugar en que esté establecido el prestador de servicios.
              </p>
            </div>

            <div className="flex flex-row w-full h-auto items-end mt-6 gap-4">
              <p className="flex text-lg text-primary-500 font-semibold text-center uppercase underline">
                Última actualización:
              </p>
              <p className="text-lg text-primary-500 font-normal mt-6 text-left">
                4 de noviembre de 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LegalTermsPage;
