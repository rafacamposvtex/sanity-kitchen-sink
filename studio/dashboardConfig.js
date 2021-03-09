export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60477c45e0f205c310b525d5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ej582bs3',
                  apiId: '9d28b268-5329-4159-b7b5-c9d4909ad3a4'
                },
                {
                  buildHookId: '60477c45ea4c74ea072dde81',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yn16j2qe',
                  apiId: '0c98e26e-ae9a-48c6-b66f-65cfcf999cae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rafacamposvtex/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yn16j2qe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
