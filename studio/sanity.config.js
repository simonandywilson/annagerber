import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema, singletonActions, singletonDocs } from './schema'
import { structure } from './structure'
import { visionTool } from '@sanity/vision'
import "./styles/studio.css"

export default defineConfig({
    title: 'Anna Gerber',
    projectId: '7na0qgn7',
    dataset: 'production',
    plugins: [deskTool({ structure }), ...(isDev ? [visionTool()] : [])],
    schema: {
        types: schema,
        templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonDocs.has(schemaType)),
    },
    document: {
        actions: (input, context) =>
            singletonDocs.has(context.schemaType)
                ? input.filter(({ action }) => action && singletonActions.has(action))
                : input,
    },
})