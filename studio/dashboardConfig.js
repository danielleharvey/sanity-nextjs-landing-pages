export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fd229ca57ada61f0c3f4e14',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4yb39gqn',
                  apiId: 'cac88293-897c-499d-bfa0-0397f5ebbf1c'
                },
                {
                  buildHookId: '5fd229cb25cb880db06af2d1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oc3mx1ht',
                  apiId: '001a7a98-438a-4ba3-b87a-32b1c235ffb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielleharvey/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oc3mx1ht.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
