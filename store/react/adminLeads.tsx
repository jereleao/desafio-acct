import React, { FC } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import LEADS from './graphql/leads.gql'

const AdminLeads: FC = () => {
  const { loading, error, data } = useQuery(LEADS)

  console.log({ loading, error, data })

  const defaultSchema = {
    properties: {
      id: {
        title: 'Id',
        width: 200,
      },
      name: {
        title: 'Name',
        minWidth: 350,
      },
      phone: {
        title: 'Phone',
        minWidth: 100,
      },
      company: {
        title: 'Company',
        minWidth: 100,
      },
      email: {
        title: 'Email',
        minWidth: 100,
      },
      country: {
        title: 'Country',
        minWidth: 100,
      },
      company_position: {
        title: 'Company Position',
        minWidth: 100,
      },
      company_size: {
        title: 'Company Size',
        minWidth: 100,
      },
      url: {
        title: 'URL',
        minWidth: 100,
      },
      message: {
        title: 'Message',
        minWidth: 100,
      },
      client_type: {
        title: 'Client Type',
        minWidth: 100,
      },
      created_at: {
        title: 'Created At',
        minWidth: 100,
      },
      updated_at: {
        title: 'Updated_At',
        minWidth: 100,
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
