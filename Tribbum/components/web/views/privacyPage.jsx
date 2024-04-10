/* eslint-disable @next/next/no-img-element */
import CloudsHero from "@/components/web/elements/cloudsHero/cloudsHero";
import { dataProtect, data, treatedDatas } from "@/utils/privacyDatas";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col w-full h-auto pb-36 items-center font-system relative">
      <CloudsHero />
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col lg:flex-row w-full max-w-[1140px] h-auto px-4 pt-12 md:pt-0 md:mt-[120px] justify-between items-center z-40">
          <div className="flex flex-col w-full lg:w-2/5 h-auto lg:pl-4 xl:pl-0 justify-center items-center lg:items-start">
            <h1 className="flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
              Privacidad y
              <br />
              protección de datos
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
          <div className="flex flex-col w-full h-auto mt-16">
            <div className="flex flex-col w-full h-auto items-center ">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Protección de datos
              </h2>
              <div className="flex w-full h-auto justify-center mt-6">
                <div className="flex flex-col w-3/5 h-auto gap-2">
                  <div className="flex w-full h-auto py-2 px-4 justify-center items-center border border-primary-500 bg-primary-200">
                    <span className="flex text-base text-white font-light text-center">
                      Información básica sobre protección de datos
                    </span>
                  </div>
                  {dataProtect.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className="flex flex-row w-full h-auto "
                      >
                        <div className="flex w-1/3 h-auto py-2 px-4 justify-start items-center border border-primary-500">
                          <p className="text-base text-primary-500 font-normal text-left">
                            {item.title}
                          </p>
                        </div>
                        <div className="flex w-2/3 h-auto py-2 px-4 justify-start items-center border border-primary-500">
                          <p className="text-base text-primary-500 font-normal text-left">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex w-auto h-auto justify-center mt-16">
              <h2 className="flex text-xl text-primary-500 font-semibold text-center uppercase">
                Política de privacidad
              </h2>
            </div>
            <h3 className="text-lg text-primary-500 font-normal mt-6 text-left">
              Datos del propietario de la web:
            </h3>
          </div>
          <div className="flex flex-col w-3/5 h-auto mt-6 gap-1">
            {data.map((item) => {
              return (
                <div key={item.title} className="flex flex-row w-full h-auto ">
                  <div className="flex w-1/3 h-auto py-2 px-4 justify-start items-center bg-primary-500 border border-primary-500">
                    <p className="text-base text-white font-normal text-left">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex w-2/3 h-auto py-2 px-4 justify-start items-center border border-primary-500">
                    <p className="text-base text-primary-500 font-normal text-left">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-full h-auto  mt-16">
            <h3 className="text-lg text-primary-500 font-normal mt-6 text-left">
              Protección de datos:
            </h3>
            <p className="text-lg text-primary-500 font-normal mt-4 text-left">
              De conformidad con la normativa vigente y aplicable en protección
              de datos de carácter personal, le informamos que sus datos serán
              incorporados al sistema de tratamiento titularidad de LAIA PAPIOL
              SOLER con NIF 47633306F y domicilio social sito en C/MALLORCA,342
              5º3ª 08013, BARCELONA, y que a continuación se relacionan sus
              respectivas finalidades, plazos de conservación y bases
              legitimadoras. Para aquellos tratamientos que lo requieran, se
              informa también de la posible elaboración de perfiles y decisiones
              automatizadas, así como las posibles cesiones y las transferencias
              internacionales que LAIA PAPIOL SOLER tiene previsto realizar:
            </p>
            <div className="flex w-full h-auto justify-center mt-6">
              <div className="flex flex-col w-full md:w-4/5 h-auto gap-2">
                <div className="flex w-full h-auto py-2 px-4 justify-center items-center border border-primary-500">
                  <span className="flex text-base text-primary-500 font-medium text-center">
                    Tratamientos realizados
                  </span>
                </div>
                {treatedDatas.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="flex flex-row w-full h-auto "
                    >
                      <div className="flex w-1/3 h-auto py-2 px-4 justify-start items-center border border-primary-500">
                        <p className="text-base text-primary-500 font-normal text-left">
                          {item.title}
                        </p>
                      </div>
                      <div className="flex flex-col w-2/3 h-auto py-2 px-4 justify-start items-start border border-primary-500">
                        {item.content?.map((subItem) => {
                          return (
                            <div
                              key={subItem.title}
                              className="flex flex-row gap-2 mt-1"
                            >
                              <p className="text-primary-500 font-normal text-left ">
                                {subItem.subtitle}:
                                <span className="font-thin text-left ml-2">
                                  {subItem.text}
                                </span>
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col w-full h-auto  mt-16">
              <h3 className="text-lg text-primary-500 font-normal mt-6 text-left">
                Derechos de los interesados:
              </h3>
              <p className="text-lg text-primary-500 font-normal mt-4 text-left">
                LAIA PAPIOL SOLER informa a los Usuarios que, podrá ejercer los
                derechos de acceso, rectificación, limitación, supresión,
                portabilidad y oposición al tratamiento de sus datos de carácter
                personal ante el Responsable del Tratamiento, así como a la
                retirada del consentimiento prestado.
              </p>
              <div className="flex flex-col w-full h-auto items-left pl-8">
                <ul className="list-disc list-inside text-lg text-primary-500 font-normal mt-4 text-left gap-4">
                  <li className="text-primary-500 font-normal text-left ">
                    Derecho de Acceso:
                    <span className="font-thin text-left ml-2">
                      Es el derecho del usuario a obtener información sobre sus
                      datos concretos de carácter personal y del tratamiento que
                      se haya realizado o realice, así como de la información
                      disponible sobre el origen de dichos datos y las
                      comunicaciones realizadas o previstas de los mismos.
                    </span>
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Derecho de Rectificación:
                    <span className="font-thin text-left ml-2">
                      Es el derecho del afectado a que se modifiquen los datos
                      que resulten ser inexactos o incompletos. Sólo podrá
                      satisfacerse en relación a aquella información que se
                      encuentre bajo el control de la APP, por ejemplo, eliminar
                      comentarios publicados en la propia página, imágenes o
                      contenidos web donde consten datos de carácter personal
                      del usuario.
                    </span>
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Derecho a la Limitación de tratamiento:
                    <span className="font-thin text-left ml-2">
                      Es el derecho a que se limiten los fines del tratamiento
                      previstos de forma original por el responsable del
                      tratamiento.
                    </span>
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Derecho de Supresión:
                    <span className="font-thin text-left ml-2">
                      Es el derecho a suprimir los datos de carácter personal
                      del usuario, a excepción de lo previsto en el propio RGPD
                      o en otras normativas aplicables que determinen la
                      obligatoriedad de la conservación de los mismos, en tiempo
                      y forma.
                    </span>
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Derecho de portabilidad:
                    <span className="font-thin text-left ml-2">
                      El derecho a recibir los datos personales que el usuario,
                      haya facilitado, en un formato estructurado, de uso común
                      y lectura mecánica, y a transmitirlos a otro responsable.
                    </span>
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Derecho de Oposición:
                    <span className="font-thin text-left ml-2">
                      Es el derecho del usuario a que no se lleve a cabo el
                      tratamiento de sus datos de carácter personal o se cese el
                      tratamiento de los mismos por parte de la APP.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto  mt-16">
              <h3 className="text-lg text-primary-500 font-normal mt-6 text-left">
                Para poder ejercer cualquiera de los derechos descritos
                anteriormente deberá cumplir con los siguientes requisitos:
              </h3>
              <p className="text-lg text-primary-500 font-normal mt-4 text-left">
                Presentación de un escrito a la dirección C/MALLORCA,342 5º3ª
                08013, BARCELONA (a la atención de LAIA PAPIOL SOLER) o bien a
                través de correo electrónico a por correo electrónico a
                info@tribbum.com.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-4 text-left">
                El escrito remitido por el titular de los datos que solicite el
                ejercicio deberá de cumplir los siguientes requisitos legales:
              </p>
              <div className="flex flex-col w-full h-auto items-left pl-8">
                <ul className="list-disc list-inside text-lg text-primary-500 font-normal mt-4 text-left gap-4">
                  <li className="text-primary-500 font-normal text-left ">
                    Nombre, apellidos del interesado y copia del DNI/NIE o
                    cualquier documento identificativo. En los excepcionales
                    casos en que se admita la representación, será también
                    necesaria la identificación por el mismo medio de la persona
                    que le representa, así como el documento acreditativo de la
                    representación. La fotocopia del DNI podrá ser sustituida
                    siempre que se acredite la identidad por cualquier otro
                    medio válido en derecho.
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Petición en que se concreta la solicitud. (Ejercicio en el
                    que se solicita la información a la que se quiere acceder).
                    Si no hace referencia a un fichero concreto se le facilitará
                    toda la información que se tenga con sus datos de carácter
                    personal. Si solicita información de un fichero en concreto,
                    sólo la información de este fichero. Si solicita información
                    relativa a un tercero nunca se podrá facilitar. Si lo
                    solicita por teléfono se le indicará que lo haga por escrito
                    y se le informará de cómo lo puede hacer y la dirección a la
                    que tiene que enviarlo. Nunca se le dará información por
                    teléfono.
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Domicilio a efectos de notificaciones.
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Fecha y firma del solicitante.
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    Documentos acreditativos de la petición que formula.
                  </li>
                  <li className="text-primary-500 font-normal text-left mt-4">
                    El interesado debe utilizar cualquier medio que permita
                    acreditar el envío y la recepción de la solicitud.
                  </li>
                </ul>
              </div>
              <p className="text-lg text-primary-500 font-normal mt-4 text-left">
                Por último, le informamos que Usted tiene derecho a presentar
                una reclamación ante la Agencia Española de Protección de Datos
                en caso de que tenga conocimiento o considere que un hecho pueda
                suponer un incumplimiento de la normativa aplicable en materia
                de protección de datos.
              </p>
              <p className="text-lg text-primary-500 font-normal mt-10 text-left">
                LAIA PAPIOL SOLER se compromete a adoptar las medidas técnicas y
                organizativas necesarias, acorde al nivel de riesgos que
                acompañan los tratamientos realizados por éstas e indicados en
                el apartado de los términos y condiciones de uso, de forma que
                garanticen su integridad, confidencialidad y disponibilidad.
              </p>
            </div>
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
  );
};
export default PrivacyPage;
