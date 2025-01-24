import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: 'data',
      source: 'header/**.yml',
      schema: z.object({
        title: z.string(),
        menu: z.object({
          label: z.string(),
          link: z.string()
        })        
      })
    })
  }
})

