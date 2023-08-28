const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];
//constante
const cardCasa = document.querySelector("#card-casa");
const cantidadDormitorios = document.querySelector("#dormitorios");
const metrosDesde = document.querySelector("#desde");
const metrosHasta = document.querySelector("#hasta");
//funcion
function buscar(filtrar) {
  let i = 0;
  for (const propiedad of propiedadesJSON) {
    if (
      propiedad.rooms <= Number(cantidadDormitorios.value) &&
      propiedad.m >= Number(metrosDesde.value) &&
      propiedad.m <= Number(metrosHasta.value)
    ) {
      insertar(propiedad);
      i += 1;
    } else if (filtrar == false) {
      insertar(propiedad);
      i += 1;
    }
  }
  document.querySelector("#total").innerHTML = i;
}

function insertar(propiedad) {
  const template = document.querySelector("#propiedades");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".img").style.backgroundImage =
    "url('" + propiedad.src + "')";
  clone.querySelector(".name").innerText = propiedad.name;
  clone.querySelector(".rooms").innerText = "Dormitorios: " + propiedad.rooms;
  clone.querySelector(".m").innerText = "Metros: " + propiedad.m;
  clone.querySelector(".description").innerText = propiedad.description;
  cardCasa.appendChild(clone);
}

buscar(false);

const buscarElement = document.querySelector("#buscar");
buscarElement.addEventListener("click", function (event) {
  if (
    cantidadDormitorios.value == "" ||
    metrosDesde.value == "" ||
    metrosHasta.value == ""
  ) {
    alert("Debe ingresar todos los datos solicitados");
  } else {
    cardCasa.innerHTML = "";
    buscar(true);
  }
});
