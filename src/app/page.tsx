import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-30 text-white Parent bg-slate-900'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
          <div className='p-6 rounded-lg bg-sky-500'>1</div>
          <div className='p-6 rounded-lg bg-sky-500'>2</div>
          <div className='p-6 rounded-lg bg-sky-500'>3</div>
          <div className='p-6 rounded-lg bg-red-500 col-span-2'>4</div>
          <div className='p-6 rounded-lg bg-sky-500'>5</div>
        </div>


        <div className='grid grid-cols-6 gap-4 pt-4'>
        <div className="col-start-2 col-span-4 bg-sky-500 rounded-lg p-6">01</div>
        <div className="col-start-1 col-end-3 bg-sky-500 rounded-lg p-6">02</div>
        <div className="col-end-7 col-span-2 bg-sky-500 rounded-lg p-6">03</div>
        <div className="col-start-1 col-end-7 bg-sky-500 rounded-lg p-6">04</div>
      </div>


      <div className="grid grid-flow-col auto-cols-max pt-4 gap-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
      </div>


      <div className="grid grid-rows-4 grid-flow-col gap-4 pt-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
        <div className='p-6 rounded-lg bg-sky-500'>04</div>
        <div className='p-6 rounded-lg bg-sky-500'>05</div>
        <div className='p-6 rounded-lg bg-sky-500'>06</div>
        <div className='p-6 rounded-lg bg-sky-500'>07</div>
        <div className='p-6 rounded-lg bg-sky-500'>08</div>
        <div className='p-6 rounded-lg bg-sky-500'>09</div>
      </div>

      <div className="flex flex-row pt-4 gap-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
      </div>

      <div className="flex flex-row-reverse pt-4 gap-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
      </div>

      <div className="flex flex-col pt-4 gap-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
      </div>

      <div className="flex flex-col-reverse pt-4 gap-4">
        <div className='p-6 rounded-lg bg-sky-500'>01</div>
        <div className='p-6 rounded-lg bg-sky-500'>02</div>
        <div className='p-6 rounded-lg bg-sky-500'>03</div>
      </div>

      <div className="flex pt-4">
        <div className='basis-1/12'>01</div>
        <div className='basis-6/12'>02</div>
        <div className='basis-2/12'>03</div>
      </div>

    </div>
  </div>

    
  )
}
