import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import Filter from './Components/Filter'
import './styles.global.css'

const DevolutionReports: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader title="Reportes de Devoluciones:"/>
      }
    >
      <PageBlock variation="full">
        <Filter></Filter>
      </PageBlock>
    </Layout>
  )
}

export default DevolutionReports
