import React, { FC } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import LEADS from './graphql/leads.gql'

const AdminLeads: FC = () => {
  const { loading, error, data } = useQuery(LEADS)

  console.log({ loading, error, data })

  const defaultSchema = {
    properties: {
      name: {
        title: 'Name',
        minWidth: 250,
      },
      email: {
        title: 'Email',
        minWidth: 200,
      },
      phone: {
        title: 'Phone',
        minWidth: 110,
      },
      country: {
        title: 'Country',
        minWidth: 100,
      },
      company: {
        title: 'Company',
        minWidth: 200,
      },
      company_position: {
        title: 'Company Position',
        minWidth: 200,
      },
      company_size: {
        title: 'Company Size',
        minWidth: 100,
      },
      url: {
        title: 'URL',
        minWidth: 200,
      },
      message: {
        title: 'Message',
        minWidth: 200,
      },
      client_type: {
        title: 'Client Type',
        minWidth: 100,
      },
      created_at: {
        title: 'Created At',
        minWidth: 230,
      },
      updated_at: {
        title: 'Updated_At',
        minWidth: 230,
      },
    },
  }

  return (
    <Layout>
      <PageBlock title="Cadastros" variation="full">
        <Table
          fullWidth
          schema={defaultSchema}
          items={data?.leads}
          density="high"
        />
      </PageBlock>
    </Layout>
  )
}

export default AdminLeads
