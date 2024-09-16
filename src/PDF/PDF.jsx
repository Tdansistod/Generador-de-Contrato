import {
  Document,
  Text,
  Page,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";
import logo from "../W Diseño Web Logo.png";
function PDF({ client }) {
  const myName = "LAUTARO NURIEL WALTERSDORF";
  const city = "CIUDAD AUTÓNOMA DE BUENOS AIRES";
  const myNationality = "ARGENTINO";
  const myAddress = "DICKMAN 1082, CIUDAD AUTÓNOMA DE BUENOS AIRES, ARGENTINA";
  const myDNI = "42.340.816";
  const brand = "W Diseño Web";
  var today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const styles = StyleSheet.create({
    page: {
      padding: "40px",
      fontFamily: "Times-Roman",
    },
    view: {
      display: "flex",
      flexDirection: "column",
      margin: "10px",
    },
    logo: {
      width: "80px",
      height: "80px",
      margin: "auto",
      marginBottom: "50px",
    },
    title: {
      margin: "10px",
      fontSize: "16px",
      textAlign: "center",
    },
    subtitle: {
      fontSize: "12px",
      margin: "10px",
    },
    paragraph: {
      fontSize: "12px",
      lineHeight: "1.5px",
      margin: "10px",
    },
    list: {
      fontSize: "12px",
      lineHeight: "2px",
      margin: "0 10px",
    },
    firm: {
      fontSize: "12px",
      margin: "40px",
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.view}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.paragraph}>
            CONTRATO PRIVADO DE SERVICIOS QUE EN TÉRMINOS DE LO QUE DISPONE LA
            LEGISLACIÓN CIVIL VIGENTE PARA LA {city}, CELEBRAN, POR UNA PARTE,
            C.
            {client.name}, QUIEN EN LO SUCESIVO SE LE LLAMARÁ "EL CONTRATANTE",
            POR LA OTRA PARTE C. {myName}, A QUIEN SE LE DENOMINARÁ COMO "EL
            CONTRATISTA"; TODOS LOS ANTERIORES CUENTAN CON CAPACIDAD LEGAL PARA
            CONTRATAR Y OBLIGARSE AL TENOR DE LAS SIGUIENTES DECLARACIONES Y
            CLÁUSULAS QUE A CONTINUACIÓN SE REDACTAN:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>DECLARACIONES</Text>
          <Text style={styles.subtitle}>
            1.- DEL CONTRATISTA, BAJO PROTESTA DE DECIR VERDAD:
          </Text>
          <Text style={styles.paragraph}>
            A.- Llamarse como ha quedado establecido en el proemio del presente
            instrumento, ser una persona de nacionalidad {myNationality}, mayor
            de edad y que cuenta con las facultades y derechos suficientes,
            respecto del inmueble ubicado en: {myAddress}; y celebra el presente
            contrato privado de servicios; y que no tiene impedimento legal ni
            humano, para obligarse al clausulado del mismo que más adelante se
            detalla.
          </Text>
          <Text style={styles.paragraph}>
            B.- Que a la firma del presente contrato se identifica con: DNI{" "}
            {myDNI}.
          </Text>
          <Text style={styles.subtitle}>
            2.- DEL CONTRATANTE, BAJO PROTESTA DE DECIR VERDAD:
          </Text>
          <Text style={styles.paragraph}>
            A.- Llamarse como ha quedado establecido en el proemio del presente
            instrumento, de nacionalidad: {client.nationality}, en pleno
            ejercicio de su capacidad legal y humana, por lo que no tiene
            impedimento alguno para celebrar el presente contrato privado de
            servicios y se obliga al cumplimiento de las cláusulas que contiene
            el presente acuerdo de voluntades.
          </Text>
          <Text style={styles.paragraph}>
            E.- Que a la firma del presente contrato se identifica con:
            {" " + client.idType + " " + client.clientID}.
          </Text>
          <Text style={styles.paragraph}>
            Realizadas las anteriores declaraciones las partes proceden a
            obligarse al tenor de las siguientes:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>CLÁUSULAS</Text>
          <Text style={styles.subtitle}>PRIMERA. OBJETO DEL CONTRATO</Text>
          <Text style={styles.paragraph}>
            EL CONTRATANTE contrata al CONTRATISTA para que realice la labor de
            DISEÑO DE PAGINA WEB del sitio web cuyas especificaciones se
            encuentran relacionadas en los módulos descritos en el ANEXO I.
          </Text>
          <Text style={styles.paragraph}>
            Para todos los efectos legales se entenderá que las obligaciones
            derivadas del presente contrato son de resultado, por tanto, habrá
            incumplimiento en caso tal que la página web no se entregue con las
            características estipuladas en el ANEXO 1 en el SITIO WEB.
          </Text>
          <Text style={styles.paragraph}>
            El CONTRATISTA ejecutará los trabajos y demás condiciones
            especificadas en el siguiente contrato. Si una actividad o modulo
            del SITIO WEB no se encuentra específicamente descrita en el ANEXO 1
            del presente contrato no será parte integral de los productos o
            servicios contratados, por tanto, se entenderá como un desarrollo o
            modulo adicional. En este caso EL CONTRATANTE solicitara una
            cotización por escrito a El CONTRATISTA de tales desarrollos
            adicionales y no serán parte del presente contrato.
          </Text>
          <Text style={styles.subtitle}>
            SEGUNDA. OBLIGACIONES DE LAS PARTES
          </Text>
          <Text style={styles.paragraph}>EL CONTRATANTE se compromete a:</Text>
          <Text style={styles.list}>
            • Proporcionar a tiempo a EL CONTRATISTA toda la información básica
            para la ejecución del trabajo, que será disponible, fiable,
            correcta, actualizada y completa.
          </Text>
          <Text style={styles.list}>
            • Pagar cumplidamente el valor del contrato como contraprestación al
            desarrollo del sitio web.
          </Text>
          <Text style={styles.paragraph}>EL CONTRATISTA se compromete a:</Text>
          <Text style={styles.list}>
            • Realizar su mejor esfuerzo en el desarrollo del sitio web
            contratado de modo diligente y competente, dentro de los plazos
            acordados.
          </Text>
          <Text style={styles.list}>
            • Corregir e incluir aquellos cambios señalados por EL CONTRATANTE,
            luego de cada una de las revisiones programadas, siempre y cuando EL
            CONTRATANTE, solicite a EL CONTRATISTA por escrito dichas
            correcciones, e inclusiones. Si transcurridos siete (7) días hábiles
            contados desde la fecha de en qué tuvo lugar la respectiva revisión
            programada, sin que hubiera habido comunicación de EL CONTRATANTE,
            se entenderá dicho silencio como aceptación del sitio web con los
            arreglos, correcciones y/o inclusiones efectuadas.
          </Text>
          <Text style={styles.list}>
            • Ceder de forma exclusiva los derechos patrimoniales sobre el
            diseño del sitio web desarrollado a favor de EL CONTRATANTE.
          </Text>
          <Text style={styles.list}>
            • Guardar absoluta confidencialidad de toda la información empleada
            para el idóneo desarrollo del sitio web.
          </Text>
          <Text style={styles.list}>
            • Garantizar el idóneo funcionamiento de los vínculos del sitio web
            al momento de la entrega final.
          </Text>
          <Text style={styles.subtitle}>
            TERCERA. CESIÓN DE LOS DERECHOS PATRIMONIALES DERIVADOS DEL SITIO
            WEB, OBJETO DE ESTE CONTRATO.
          </Text>
          <Text style={styles.paragraph}>
            EL CONTRATISTA cede en exclusiva EL CONTRATANTE, la totalidad de los
            derechos patrimoniales de autor derivados del desarrollo del sitio
            Web alojado en el dominio {client.domain} que mediante este contrato
            se le encargó y por ello, EL CONTRATISTA no podrá ceder a terceros
            ninguno de los derechos ni obligaciones establecidas en el presente
            contrato, salvo autorización expresa y por escrito de EL
            CONTRATANTE.
          </Text>
          <Text style={styles.paragraph}>
            La cesión de estos derechos se extiende a nivel mundial y durará
            hasta que la citada obra pase al dominio público.
          </Text>
          <Text style={styles.paragraph}>
            En caso de que EL CONTRATISTA aporte materiales que, siendo objeto
            de protección en propiedad intelectual, hayan sido utilizados para
            el desarrollo del sitio Web encargado, EL CONTRATANTE, quedará
            exento de toda responsabilidad en que pudiera incurrir por cualquier
            violación de tales derechos con respecto a terceros (entendiendo por
            terceros cualquier persona natural o jurídica diferente AL
            CONTRATANTE).
          </Text>
          <Text style={styles.subtitle}>CUARTA. DURACIÓN Y ENTREGA</Text>
          <Text style={styles.paragraph}>
            La entrega del sitio web desarrollado en virtud del presente
            contrato, se llevará a cabo dentro de un plazo de{" "}
            {client.deliveryTerm} contados a partir de la firma del mismo. Este
            plazo es prorrogable de mutuo acuerdo entre las partes.
          </Text>
          <Text style={styles.paragraph}>
            Una vez finalizado el desarrollo del objeto del contrato y aceptado
            por EL CONTRATANTE el producto final, EL CONTRATISTA deberá hacer
            entrega formal del sitio web desarrollado, junto con cualquier otra
            documentación que se haya generado con motivo de este contrato, de
            tal forma que sólo existirá una copia de la totalidad del material
            relativo al objeto del contrato en poder exclusivo de EL
            CONTRATANTE.
          </Text>
          <Text style={styles.subtitle}>QUINTA. PRECIO Y FORMA DE PAGO</Text>
          <Text style={styles.paragraph}>
            Como remuneración económica por concepto del desarrollo del sitio
            web contratado, y contraprestación por la cesión de los derechos
            patrimoniales de autor derivados del diseño de dicho sitio web, EL
            CONTRATISTA, percibirá la suma de {client.amount} asumida en su
            totalidad por EL CONTRATANTE.
          </Text>
          <Text style={styles.paragraph}>
            Los pagos por concepto del anterior valor se realizarán de la
            siguiente manera:
          </Text>
          <Text style={styles.paragraph}>{client.payments}</Text>
          <Text style={styles.paragraph}>
            El retraso o incumplimiento del pago generará a cargo del
            CONTRATANTE un interés del 20% (VEINTE por ciento) mensual hasta la
            total liquidación del adeudo correspondiente.
          </Text>
          <Text style={styles.subtitle}>SEXTA. PROPIEDAD INTELECTUAL</Text>
          <Text style={styles.paragraph}>
            EL CONTRATISTA reconoce expresamente que pertenece a EL CONTRATANTE
            la plena y exclusiva titularidad y propiedad de todos y cada uno de
            los elementos de la páginas de Internet del portal objeto del
            presente contrato, por este acto EL CONTRATISTA cede y transfiere,
            en forma irrevocable y sin limitación alguna a EL CONTRATANTE, todos
            los derechos patrimoniales de autor derivados del diseño del sitio
            web contratado y acciones que le corresponden, y que le sean
            reconocidos en el futuro en cualquier país.
          </Text>
          <Text style={styles.paragraph}>
            El precio pactado en el presente contrato cubre a satisfacción de EL
            CONTRATISTA la totalidad de los trabajos por la creación del sitio
            web. Así mismo será responsabilidad de EL CONTRATANTE obtener todo
            tipo de licencias permisos o cesiones de derechos relativos al
            material que entrega y se incluye en los sitios, así como del
            software requerido para el correcto funcionamiento de dicho sitio.
          </Text>
          <Text style={styles.paragraph}>
            Sin perjuicio de lo anterior, EL CONTRATISTA tendrá derecho a que
            incluya, en la parte inferior del sitio web objeto del presente
            contrato, una leyenda que indique lo siguiente: “Sitio Web Creado
            Por {brand}”.
          </Text>
          <Text style={styles.subtitle}>SÉPTIMA. UBICACIÓN</Text>
          <Text style={styles.paragraph}>
            Las actividades descritas podrán desarrollarse en el local que EL
            CONTRATISTA utilizara para su actividad profesional. En ningún caso,
            EL CONTRATISTA se desplazará al domicilio EL CONTRATANTE, para
            realizar dicha tarea.
          </Text>
          <Text style={styles.subtitle}>OCTAVA. RELACIÓN </Text>
          <Text style={styles.paragraph}>
            La relación entre las partes tiene exclusivamente carácter
            mercantil, no existiendo vínculo laboral alguno entre EL CONTRATANTE
            y EL CONTRATISTA.
          </Text>
          <Text style={styles.subtitle}>NOVENA. ENTREGA </Text>
          <Text style={styles.paragraph}>
            Una vez finalizado el trabajo objeto de este contrato, EL
            CONTRATISTA entregará al cliente el SITIO WEB instalado en un
            servidor, según se especifica en las condiciones en el ANEXO 1 y el
            precio acordado en la cláusula quinta se encuentre cubierto.
          </Text>
          <Text style={styles.subtitle}>DÉCIMA. REVISIONES </Text>
          <Text style={styles.paragraph}>
            Entiéndase por revisiones cada una de las estipulaciones por escrito
            de los ajustes sobre el diseño del sitio web durante el proceso de
            diseño. Este servicio incluye {client.reviews} revisiones las cuales
            deberán cumplirse de la siguiente manera:
          </Text>
          <Text style={styles.paragraph}>{client.reviewsDetail}</Text>
          <Text style={styles.subtitle}>DÉCIMA PRIMERA. CONFIDENCIALIDAD </Text>
          <Text style={styles.paragraph}>
            Las partes se comprometen, con carácter mutuo y recíproco, a tratar
            como “confidencial” toda la información técnica, comercial o de
            cualquier otra naturaleza comprendida y/o que se derive directa o
            indirectamente de las indicaciones que la contraparte le haya
            facilitado para el desarrollo del objeto del presente contrato (en
            adelante “la información confidencial”). En consecuencia, ninguna
            parte podrá revelar total o parcialmente, de palabra, por escrito o
            de cualquier otra forma, a ninguna persona física o jurídica, ya sea
            de carácter público o privado, la Información Confidencial, sin el
            consentimiento expreso y por escrito de la contraparte.
          </Text>
          <Text style={styles.paragraph}>
            La misma confidencialidad que se imponen a las partes o a terceros
            que intervengan en la ejecución, deberá ser impuesta por cada una de
            las partes a sus trabajadores (por cuenta propia o ajena, con
            relación laboral o mercantil) que de modo directo o indirecto estén
            relacionados con el objeto del contrato. Será obligación de las
            mismas partes hacer firmar a sus trabajadores un documento
            vinculante por el que adquieren tal obligación.
          </Text>
          <Text style={styles.paragraph}>
            Este compromiso de confidencialidad, tanto entre las partes como de
            éstas con sus trabajadores y contratistas, permanecerá durante la
            vigencia del presente contrato, así como un año después de la
            finalización del mismo.
          </Text>
          <Text style={styles.subtitle}>DÉCIMA SEGUNDA. LEY APLICABLE </Text>
          <Text style={styles.paragraph}>
            Este contrato se celebra y las obligaciones derivadas de su
            suscripción serán ejecutadas en territorio {myNationality}. Por lo
            anterior, son las leyes de la república ARGENTINA las que rigen en
            todas sus partes el presente contrato y conforme a ellas deberá
            interpretarse, así como solucionarse cualquier diferencia que
            eventualmente tenga lugar entre las partes.
          </Text>
          <Text style={styles.paragraph}>
            Leído el presente contrato y para que así conste, y en prueba de
            conformidad y aceptación al contenido de este contrato, EL
            CONTRATANTE Y EL CONTRATISTA firman por duplicado el presente
            contrato a los {day} días del mes de {months[month - 1]} del {year}{" "}
            ({client.yearText}).
          </Text>
        </View>
        <Text style={styles.firm}>EL CONTRATANTE</Text>
        <Text style={styles.firm}>EL CONTRATISTA</Text>
      </Page>
      <Page style={styles.page}>
        <View style={styles.view}>
          <Text style={styles.title}>ANEXO I</Text>
          <Text style={styles.subtitle}>
            DESCRIPCIÓN DE ACTIVIDADES Y MÓDULOS DEL SITIO WEB
          </Text>
          <Text style={styles.paragraph}>
            Este Anexo 1 forma parte integral del contrato de servicios de
            diseño web celebrado entre {client.name} (en adelante,
            "Contratante") y {myName} (en adelante, "Contratista"). A
            continuación se detallan las actividades, módulos y características
            específicas del sitio web que serán entregadas como parte del
            presente contrato. Cualquier característica, página, función o
            servicio no descrito específicamente en este Anexo 1 no se
            considerará parte integral del contrato.
          </Text>
          <Text style={styles.subtitle}>1. PÁGINAS DEL SITIO WEB</Text>
          {client.pages?.map((item, index) => (
            <Text style={styles.paragraph} key={index}>
              1.{index + 1} {item}
            </Text>
          ))}
          <Text style={styles.subtitle}>2. SECCIONES Y FUNCIONALIDADES</Text>
          {client.sectionsAndFunctions?.map((item, index) => (
            <Text style={styles.paragraph} key={index}>
              2.{index + 1} {item}
            </Text>
          ))}
          <Text style={styles.subtitle}>3. BACKEND y ADMINISTRACIÓN</Text>
          {client.backendAndAdministration?.map((item, index) => (
            <Text style={styles.paragraph} key={index}>
              3.{index + 1} {item}
            </Text>
          ))}
          <Text style={styles.subtitle}>4. CONSIDERACIONES ADICIONALES</Text>
          {client.additional?.map((item, index) => (
            <Text style={styles.paragraph} key={index}>
              4.{index + 1} {item}
            </Text>
          ))}
          <Text style={styles.paragraph}>
            5. Excepciones y Exclusiones Cualquier característica, página,
            módulo o funcionalidad no específicamente descrito en este Anexo 1
            no formará parte de los productos o servicios contratados. Cualquier
            solicitud de modificación o adición de estos elementos será
            considerada como un trabajo adicional y podrá estar sujeta a un
            acuerdo separado.
          </Text>
          <Text style={styles.firm}>EL CONTRATANTE</Text>
          <Text style={styles.firm}>EL CONTRATISTA</Text>
        </View>
      </Page>
    </Document>
  );
}
export default PDF;
