import {Header, Divider, Table} from 'semantic-ui-react'

export default ({
  description,
  S3
}) => (
  <React.Fragment>
    <Header as='h3'>About this personality</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>Personality Sample</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>S3</Table.Cell>
          <Table.Cell>{S3}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)