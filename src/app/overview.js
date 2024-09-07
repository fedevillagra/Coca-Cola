const products1 = [
  {
    id: 1,
    name: 'Magia de verdad',
    imageSrc: '20230313-coca-cola-masterpiece-landscape-010-white-logo-white-hug-3x2-1.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Juegos olímpicos',
    imageSrc: 'DD8GPbrm__720x0__1.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Copa america con la celeste y blanca',
    price: '$32',
    description: 'Heather Gray',
    imageSrc: '451474251_18446963848033524_3589690209356992363_n.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
]
const products2 = [
  {
    id: 5,
    imageSrc: '335752062_165534252976335_6983081947476721573_n.jpg',
    imageAlt: 'Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.',
  },
  {
    id: 6,
    imageSrc: '18.jpg',
    imageAlt:
      'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
  },
  {
    id: 7,
    imageSrc: '867949c1fc89ba9bd6ea86b481380d8c361e13af.png',
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
  // More products...
]



export default function Overview() {

  return (

        <div className='bg-white'>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="pt-24 text-center">
              <h1 id="overview" className="text-4xl font-bold tracking-tight text-gray-900">Destapá la felicidad</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Muy posiblemente este sea el slogan más recordado y es que fue en 2009 que 
              la marca reforzó el branding que llevaba desde 1969, fusionando su identidad corporativa con 
              la felicidad y el disfrute.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Por ello decidieron lanzar el slogan de Coca Cola que aún se mantiene y transmitir que lo único que necesitas para ser feliz es destapar una botella.
              </p>
            </div>

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="mt-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products1.map((product) => (
                  <div key={product.id} className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3 revealing-image">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="featured-heading" className="relative mt-16 overflow-hidden rounded-lg lg:h-96 revealing-image">
              <div className="absolute inset-0">
                <img
                  src="cocacola-christmas-2.avif"
                  alt="cocacola-christmas-2.avif"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
              <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                <div>
                  <h2 id="featured-heading" className="text-xl font-bold text-white">
                  Esta navidad haz feliz a alguien
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                  ¿Sabías que el Santa Claus con uniforme rojo y blanco y con una larga barba 
                  blanca es una creación de Coca Cola?
                  </p>
                </div>
                <a
                  href="#features"
                  className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                >
                  View the collection
                </a>
              </div>
            </section>

            <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
              <h2 id="more-products-heading" className="sr-only">
                  More products
                  </h2>
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products2.map((product) => (
                      <div key={product.id} className="group">
                      <div className="aspect-w-1 aspect-h-1 w-full rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                          <article>
                              <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center"
                              />
                              <img src="rosalia-courtesy-of-Coca-Cola-no-background2.png" />
                          </article>
                      </div>
                      </div>
                  ))}
                  </div>
            </section>
          </div>
        </div>

  )
}
