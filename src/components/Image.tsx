import Image from 'next/image';

export default function Imagem() {
  return (
    <div>
      <Image src={'/./Banner-Informática2.jpg'} alt={''} width={12000} height={80} />
      <div className='sm:flex gap-2 py-2 sm:container'>
      <div className='  justify-center py-4 sm:py-0 '>
        <Image src={'/./Banner.info.webp'} alt={''} width={650} height={60} />
      </div>
      <div className='  justify-center  sm:py-0'>
        <Image src={'/./Banner.info.webp'} alt={''} width={650} height={60} />
      </div>
      </div>
     
        
    </div>
  );
}
