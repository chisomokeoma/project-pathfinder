import {makeSource, defineDocumentType} from "contentlayer2/source-files"

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/*.mdx',
    fields: {
      title: {
        type: 'string',
      },
      publishedAt: {
        type: 'date',
        required: true
      },
      description: {
        type: 'string',
        required: true
      },
      image: {
        type: 'image',
      },
    //   isPublished: {
    //     type: 'boolean',
    //     default: true,
    //     required:false
    //   },
      author: {
        type: 'string',
        required: true
      },
      tags: {
        type: 'string',
        required: true
      }
    },
    computedFields: {
        url: {
          type: 'string',
          resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
        },
      },
    }));

  export default makeSource({
    contentDirPath: "content",
    documentTypes:[Blog]
  })