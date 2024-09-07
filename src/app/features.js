"use client";
import Tryit from "./tryit.js";

const collections = [
  {
    name: "El after de noche buena",
    //href: "#",
    imageSrc: "BrancaCola1.webp",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "Coca cola en familia",
    //href: "#",
    imageSrc: "449799949_1195597228382067_335099759708403138_n.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "Regalo perfecto",
    //href: "#",
    imageSrc: "P0.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Envases a lo largo de su historia",
    //href: "#",
    imageSrc: "coca-cola-contour-bottles-timeline.webp",
    imageAlt: "Botellas",
  },
  {
    id: 2,
    name: "Coca-Cola como jarabe medicinal",
    //href: "#",
    imageSrc: "Fm_RiiyWQAI7hvM.jpg",
    imageAlt: "Coca milkshake",
  },
  {
    id: 3,
    name: "Coca-Cola con fernet, un clásico argentino",
    //href: "#",
    imageSrc: "Fernet-es-cultura-773x458.jpeg",
    imageAlt: "Coca jarabe",
  },
  {
    id: 4,
    name: "Coca-Cola con helado de vainilla",
    //href: "#",
    imageSrc: "NOF_Coke-float-01-1024x1024-copia.png",
    imageAlt: "Coca jarabe",
  },

  // More products...
];
const perks = [
  {
    name: "La chispa de la vida",
    imageUrl: "fernetjpg.webp",
    description:
      "Hablando del año 1969 vale la pena recordar el slogan de Coca Cola que marcó un antes y un después en las estrategias de comunicación de la marca.",
  },
  {
    name: "El lado Coca Cola de la vida",
    imageUrl: "historia-coca-cola.jpg",
    description:
      "Este es otro slogan de Coca Cola que seguro recuerdes si pasas los 20 años. Y es que fue en 2006 que la empresa usó el reconocimiento de marca obtenido tras décadas de esfuerzos y capitalizó su relación con la felicidad.",
  },
  {
    name: "Desde 1896 repartiendo felicidad",
    imageUrl: "Homepage_HeroBanner_1440x810_02.webp",
    description:
      "Este lema sacado al mercado en 2008 no solo continuaba el legado de otros grandes eslóganes asociados a la felicidad, sino que reforzaban la autoridad de marca con el año de fundación y lo más 110 años de presencia.",
  },
  {
    name: "Toma Coca Cola",
    imageUrl: "width1960.webp",
    description:
      "Año 1886, un lema muy directo y que cumple a cabalidad lo que representa la identidad de la compañía: simplicidad y facilidad.",
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white">
      {/* Hero section */}
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800 ">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="cocacola-christmas-2.avif"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800 revealing-image">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="cocacola-christmas-2.avif"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              ¡Despertá la magia navideña!
            </h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#favorites-heading"
                className="inline-block bg-red-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-red-700"
              >
                Colección de productos
              </a>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Colección
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5 revealing-image"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        Magia navideña
                      </p>
                      <h3 className="mt-1 font-semibold text-white">
                        {/*<a href={collection.href}>*/}
                        <span className="absolute inset-0" />
                        {collection.name}
                        {/*</a>*/}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section aria-labelledby="trending-heading">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              Un poco de historia<span aria-hidden="true"> &rarr;</span>
            </h2>
            <a
              href="#perks-heading"
              className="hidden text-sm font-medium text-red-600 hover:text-red-500 md:block"
            >
              Colección Coca-Cola
            </a>
          </div>
          <div
            id="paper"
            className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-20 p-10 sombrafuerte rounded-lg"
          >
            {trendingProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-4 sm:aspect-h-3 revealing-image shadow-xl">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center hover:scale-110 transform transition duration-300 ease-in-out hover:shadow-2xl"
                  />
                </div>
                <h3 className="mt-4 text-center text-xl font-extrabold tracking-tight text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a href="#perks-heading" className="font-medium text-red-600 hover:text-red-500">
              Colección Coca-Cola<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <Tryit />

      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="-my-1 h-24 w-auto mx-auto revealing-image"
                      src={perk.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
