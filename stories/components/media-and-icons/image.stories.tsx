import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Image } from '@yamada-ui/react'

export default {
  title: 'Components / Media And Icons / Image',
  component: Image,
} as ComponentMeta<typeof Image>

export const basic: ComponentStory<typeof Image> = () => {
  return <Image src='https://dragon-ball-official.com/assets/img/intro/intro_1.png' size='xl' />
}

export const withFallback: ComponentStory<typeof Image> = () => {
  return (
    <Image
      src='https://not-found.com/not-found.png'
      fallback='https://via.placeholder.com/512'
      size='xl'
    />
  )
}
