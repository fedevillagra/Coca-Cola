const products2 = [
    {
      id: 7,
      name: 'Coca-cola en el bar',
      //href: '#',
      imageSrc: 'Essen.jpeg',
      imageAlt: 'Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.',
    },
    {
      id: 8,
      name: 'Coca-cola en verano',
      //href: '#',
      imageSrc: '89d61db85cfa8cc3b1f8b34f0ec21565.jpg',
      imageAlt:
        'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
    },
    {
      id: 9,
      name: 'Coca-cola en envase de plástico',
      //href: '#',
      imageSrc: '9b57c4d1305c7e3cfd497fc2e189b3f0.jpg',
      imageAlt:
        'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
    },
    // More products...
  ]

const tryit = () => {
  return (
    <div className='bg-white'>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <section aria-labelledby="more-products-heading" className="pb-24">
            <h2 className="sr-only">
                More products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products2.map((product) => (
                  //key={product.id}
                  <div href={product.href} className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3 fade-image">
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
        </div>
    </div>
  )
}
export default tryit