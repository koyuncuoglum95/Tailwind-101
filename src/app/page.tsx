import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-yellow bg-blue text-purple text-8xl rounded-4xl border-spacing-128 md:text-9xl md:rounded-none">
        Hello world!
      </h1>

      <article className="prose lg:prose-xl">
        <h1 className='text-white'>Garlic bread with cheese: What the science tells us</h1>
        <p className='text-white'>For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>

        <p className='text-white'>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>


      <div className="aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div>
        <h1 className='text-3xl'>Title 1</h1>
        <h2 className='text-2xl'>Title 2</h2>
        <h3 className='text-xl'>Title 3</h3>
        <p className='text-base capitalize'>a regular paragraph</p>
        <p className='text-sm'>A Description paragraph</p>
        <p className='text-xs'>A little note</p>
      </div>

      <div>
        <p className="italic underline decoration-green decoration-dotted underline-offset-1 leading-6">The quick brown fox ...</p>
        <p className="not-italic hover:not-italic underline  hover:no-underline decoration-wavy underline-offset-4 leading-8">The quick brown fox ...</p>
      </div>

      <div className="pt-6">pt-6</div>

      <div className="pr-4">pr-4</div>

      <div className="pb-8">pb-8</div>

      <div className="pl-2 ...">pl-2</div>

      <div className="px-8 ...">px-8</div>

      <div className="py-8 ...">py-8</div>

      <div className="p-8 ...">p-8</div>


      <div className="mt-6 ...">mt-6</div>
      <div className="mr-4 ...">mr-4</div>
      <div className="mb-8 ...">mb-8</div>
      <div className="ml-2 ...">ml-2</div>

      <div className="mx-8 ...">mx-8</div>

      <div className="my-8 ...">my-8</div>

      <div className="m-8 ...">m-8</div>

      <div className="w-36 h-16 bg-sky-400 opacity-20 ..."></div>
      <div className="-mt-8 bg-sky-300 ...">-mt-8</div>


      <div className="flex space-x-4 ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-col space-y-4 ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-row ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>


      <div className="flex flex-row-reverse ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-col ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>


      <div className="flex flex-col-reverse ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>


      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
      
      <div className="flex flex-nowrap">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-wrap">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex flex-wrap-reverse">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>


      <div className="flex">
        <div className="flex-none w-14 h-14">
          01
        </div>
        
        <div className="flex-initial w-64 ...">
          02
        </div>
        <div className="flex-initial w-32 ...">
          03
        </div>
      </div>
   
      <div className="flex">
        <div className="flex-none ...">
          01
        </div>
        <div className="flex-1 w-64 ...">
          02
        </div>
        <div className="flex-1 w-32 ...">
          03
        </div>
      </div>


      <div className="flex ...">
        <div className="flex-none w-14 h-14 ...">
          01
        </div>
        <div className="flex-none ...">
          02
        </div>
        <div className="flex-1 ...">
          03
        </div>
      </div>

    </div>
    
  )
}
