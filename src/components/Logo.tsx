import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Image src={'/logo/layman_ai_logo_wt.png'}
        alt='app logo'
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
        style={{ width: '40%', height: 'auto' }}
      />
    </>
  )
}
